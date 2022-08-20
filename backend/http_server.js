// Imports
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// DB
require('./src/db');

// Express Middleware + allow cross-origin resource sharing (CORS)
const app     = express();
app.use(cors());

// Data parser - used to parse post data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

// Swagger URL /api-docs
var options = {
    explorer: true,
    swaggerOptions: {
        url: "/api-docs/swagger.json",
    },
};
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, options)
);

// start server
// -----------------------
app.listen(8080, function(){
    console.log('Running on port 8080!')
})
