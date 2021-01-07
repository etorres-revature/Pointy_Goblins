const db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const airbnb = require("../webscrapers/airbnb");
const vrbo = require("../webscrapers/vrbo");
const sonder = require("../webscrapers/sonder")

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

  app.post("/api/addToFavorites", (req, res) => {
    db.FavoriteListing.create(req.body).then(result => {
      res.json(result);
    }).catch(err => {
      console.log(err);
    });
  });

  app.get("/api/favorites", (req, res) => {
    db.FavoriteListing.find().then(result => {
      res.json(result);
    }).catch(err => {
      console.log(err);
    })
  })  

  //GET ALL DATA 
const getAllListings =  async (location)=>{
  let allData = []
  const city = location.toLowerCase()
  const vrboData = await vrbo.getData(city)
  // console.log('---------VRBO---------')
  // console.log(vrboData)
  const sonderData = await sonder.getData(city)
  // console.log('---------SONDERS---------')
  // console.log(sonderData)

  const airbnbData = await airbnb.getData(city)
  // console.log('---------AIRBNB---------')
  // console.log(airbnbData)
  allData.push(...airbnbData)
  allData.push(...vrboData)
  allData.push(...sonderData)
  return allData

}


  app.get("/api/:city", (req, res) => {
    // console.log("$$$$$$$$$$$$$$$", req.params);
    getAllListings(req.params.city).then((data)=>{
      console.log('-------COMBINED-DATA-------')
      console.log(data)
      return res.json(data)
    })
    
    // vrbo
    //   .getData(req.params.city)
    //   .then((data) => {
    //     return res.json(data);
    //   })
    //   .catch((err) => console.log(err));

    // vrbo.getData("austin");
    // sonder.getData("austin");
  });
};
