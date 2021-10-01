module.exports = app => {
const order = require("./order.controller.js");
  
// Create a new order
app.post("/order", order.create);

//Retrieve all Customers
app.get("/order", order.findAll);

// Retrieve a single order with orderID
app.get("/order/:order_id", order.findOne);
app.get("/order/customer/:customer_id", order.findByCustomer);
// // Update a Customer with customerId
// app.put("/comments/:commentId", comments.update);

// // Delete a Customer with customerId
// app.delete("/comments/:commentId", comments.delete);

};
