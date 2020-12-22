const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const airbnb = require("../webscrapers/airbnb");
const vrbo = require("../webscrapers/vrbo");

module.exports = (app) => {
  app.post("/api/createUser", (request, response) => {
    request.body.password = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10), null);

    db.User.create(request.body)
      .then((result) => {
        response.json(result);
      })
      .catch((err) => {
        response.status(422).json(err);
      });
  });

  app.post("/api/signin", passport.authenticate("local"), (request, response) => {
    response.json(request.user);
  });

  //airbnb route
  app.get("/api/:city", (req, res) => {
    // console.log("$$$$$$$$$$$$$$$", req.params);
    vrbo
      .getData(req.params.city)
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => console.log(err));

    // vrbo.getData("austin");
    // sonder.getData("austin");
  });
};
