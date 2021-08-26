const Customer = require("./customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    };
    const customer = new Customer({
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        mail: req.body.mail,
        gender: req.body.gender,
        password: req.body.password,
    
      });
      Customer.create(customer, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.customerId
            });
          }
        } else res.send(data);
      });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Customer with id ${req.params.customerId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Customer with id " + req.params.customerId
              });
            }
          } else res.send(data);
        }
      );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer with id " + req.params.customerId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
};

