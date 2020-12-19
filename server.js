
const express = require("express")
const session = require ("express-session")
const passport = require("./config/passport")
const logger = require("morgan")
const mongoose = require("mongoose")
const compression = require("compression")

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 8080;

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vacationrental", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  } );
  
  // routes
  require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);
  // require("./routes/htmlRoutes")(app);
  
  app.listen(PORT, () => {
    console.log(`App is active at http://localhost:${PORT}`);
  });