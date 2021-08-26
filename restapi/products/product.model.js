const sql = require('../db_connection');

const Products = (products)  => {
    this.id = products.id;
    this.name = products.name;
    this.price = products.price;
    this.description = products.description;
    this.img = products.img;
    this.type = products.type;
    
  };


  Products.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created products: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
  };
  
  Products.getProducts = ( req, result) => {
    //   const { productsName, productsType } = req.query;
      const keySearch = req.query?.keySearch || '';
    sql.query(`SELECT * FROM products WHERE name like '%${keySearch}%' or type like '%${keySearch}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found products: ", res );
        result(null, res);
        return;
      }
  
      // not found products with the name
      result({ kind: "not_found" }, null);
    });
  };

  // Products.getAllProduct = result => {
  //   sql.query("SELECT * FROM products", (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(null, err);
  //       return;
  //     }
  
  //     console.log("products: ", res);
  //     result(null, res);
  //   });
  // };

  module.exports = Products;