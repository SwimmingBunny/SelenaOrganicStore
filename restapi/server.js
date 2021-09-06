const express = require('express');

const bodyParser = require('body-parser');
const pool = require('./db_connection');
const app = express();
const cors = require('cors')

// middleware
app.use(cors())
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// create user
// app.post("/user", async (req,res) => {
//     try {
        
//     } catch (err) {
//         console.error(err.message);
//     }
// });
require("./customers/customer.routes.js")(app);
require("./products/product.routes.js")(app);

app.listen(5000, () => {
    console.log('RESTful API server started on:  5000');
});
  





// const port = process.env.PORT || 3300;



// app.get("/", (req, res) => {
//     res.send("Api resquest get");
// });
