// Imports
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const auth = require("./src/middleware/auth");
const expressValidator = require("express-validator");
const { application } = require('express');


// DB
require('./src/db');

// Express Middleware + allow cross-origin resource sharing (CORS)
const app     = express();
app.use(cors());

// Data parser - used to parse post data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

// Swagger URL /api/api-docs
var options = {
    explorer: true,
    swaggerOptions: {
        url: "/api/api-docs/swagger.json",
    },
};
app.use(
    "/api/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, options)
);

// Authorization
app.use(auth.initialize());
app.all("*", (req, res, next) => {
    if (req.path.includes("auth") || req.path.includes("healthcheck") || req.path.includes("api-docs")) return next();
    
    return auth.authenticate((err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            if (info.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
            } else {
                return res.status(401).json({ message: info.message });
            }
        }
        req.user = user;
        app.set("user", user);
        return next();
    })(req, res, next);
});

// Routes
app.use("/api/", routes);

// start server
// -----------------------
app.listen(8080, function(){
    console.log('Running on port 8080!')
})
