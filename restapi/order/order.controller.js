const Order = require("./order.model.js");

// Create and Save a new Comment
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    };

    const order = new Order  ({
        discount: req.body.discount,
        total: req.body.total,
        customer_id: req.body.customer_id,
        cart: req.body.cart
    });

    Order.create(order, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the order."
          });
        else res.send(data);
      });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving order."
          });
        else res.send(data);
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Order.findById(req.params.order_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found comment with order_id ${req.params.order_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving comment with order_id " + req.params.order_id
            });
          }
        } else res.send(data);
      });
};

// // Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//           message: "Content can not be empty!"
//         });
//       }
    
//       Comment.updateById(
//         req.params.commentId,
//         new Comment(req.body),
//         (err, data) => {
//           if (err) {
//             if (err.kind === "not_found") {
//               res.status(404).send({
//                 message: `Not found Customer with id ${req.params.commentId}.`
//               });
//             } else {
//               res.status(500).send({
//                 message: "Error updating Customer with id " + req.params.commentId
//               });
//             }
//           } else res.send(data);
//         }
//       );
// };

// // Delete a Customer with the specified customerId in the request
// exports.delete = (req, res) => {
//   Comment.remove(req.params.commentId, (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") {
//             res.status(404).send({
//               message: `Not found Customer with id ${req.params.commentId}.`
//             });
//           } else {
//             res.status(500).send({
//               message: "Could not delete Customer with id " + req.params.commentId
//             });
//           }
//         } else res.send({ message: `Customer was deleted successfully!` });
//       });
// };

