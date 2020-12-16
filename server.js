const express = require("express")
const express = require ("express-session")
const passport = require("./config/passport")
const logger = require("morgan")
const mongoose = require("mongoose")
const compression = require("compression")
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 52691

const app = express();

//body-parser for url encoding and json
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//morgan logger 
app.use(logger("dev"))
//compression for photos
app.use(compression())
//session info
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  
  // routes
  app.use(require("./routes/api.js"));
  
  app.listen(PORT, () => {
    console.log(`App is active at http://localhost:${PORT}`);
  });