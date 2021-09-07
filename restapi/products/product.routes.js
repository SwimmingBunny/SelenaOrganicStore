module.exports = app => {
    const Products = require("./product.controller.js");
  
    // Create a new products
    app.post("/products", Products.create);
  
    app.get("/products/search", Products.getProducts);

  };

