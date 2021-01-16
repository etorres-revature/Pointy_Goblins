const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const airbnb = require("../webscrapers/airbnb");
const vrbo = require("../webscrapers/vrbo");
const sonder = require("../webscrapers/sonder");
const { filter } = require("compression");

module.exports = (app) => {
  app.post("/api/createUser", (request, response) => {
    request.body.password = bcrypt.hashSync(
      request.body.password,
      bcrypt.genSaltSync(10),
      null
    );

    db.User.create(request.body)
      .then((result) => {
        response.json(result);
      })
      .catch((err) => {
        response.status(422).json(err);
      });
  });

  app.post(
    "/api/signin",
    passport.authenticate("local"),
    (request, response) => {
      response.json(request.user);
    }
  );

  app.post("/api/addToFavorites", (req, res) => {
    db.FavoriteListing.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/api/addBudgetItem", (req, res) => {
    db.User.findByIdAndUpdate(req.user._id, {
      $push: { budgetItems: req.body },
    })
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/getBudgetItems", (req, res) => {
    db.User.findById(req.user._id)
      .then((result) => {
        res.json(result.budgetItems);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/favorites", (req, res) => {
    db.FavoriteListing.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.delete("/api/delete/:id", (req, res) => {
    db.FavoriteListing.findOneAndDelete({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.json({ message: "logged out" });
  });

  app.delete("/api/budgetItem/:id", (req, res) => {
    const removeId = req.params.id;

    db.User.findById(req.user._id).then((result) => {
      result.budgetItems.id(removeId).remove();
      result.save();
      res.json({ message: "Object was removed" });
    });
  });

  //GET ALL DATA
  const getAllListings = async (location) => {
    switch (location) {
      case "BOSTON":
        const bostonData = await db.Boston.findOne(
          {},
          {},
          { sort: { createdAt: -1 } },
          function (err, post) {
            try {
              return post;
            } catch {
              (error) => {
                console.log(error);
              };
            }
          }
        );
        return bostonData.results;

      case "AUSTIN":
        const austinData = await db.Austin.findOne(
          {},
          {},
          { sort: { createdAt: -1 } },
          function (err, post) {
            try {
              return post;
            } catch {
              (error) => {
                console.log(error);
              };
            }
          }
        );
        return austinData.results;

      case "HOUSTON":
        const houstonData = await db.Houston.findOne(
          {},
          {},
          { sort: { createdAt: -1 } },
          function (err, post) {
            try {
              return post;
            } catch {
              (error) => {
                console.log(error);
              };
            }
          }
        );
        return houstonData.results;

      case "DENVER":
        const denverData = await db.Denver.findOne(
          {},
          {},
          { sort: { createdAt: -1 } },
          function (err, post) {
            try {
              return post;
            } catch {
              (error) => {
                console.log(error);
              };
            }
          }
        );
        return denverData.results;

      default:
        return;
    }
  };

  app.get("/api/:city", (req, res) => {
    getAllListings(req.params.city).then((data) => {
      return res.json(data);
    });
  });
};
