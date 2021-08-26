module.exports = app => {
    const Products = require("./product.controller.js");
  
    // Create a new products
    app.post("/products", Products.create);
  
    // Retrieve all products
    // app.get("/products", Products.getAllProduct);
  
    // Retrieve a single products with productName
    app.get("/products/search", Products.getProducts);
  
  

  };

