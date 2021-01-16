const db = require("../models");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {

    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../client/public/index.html"))
    });



}

