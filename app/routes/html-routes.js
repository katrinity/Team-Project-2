// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  

  //To Homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //To loginpage
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loginPage.html"));
  });

  //To registration page
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registerPage.html"));
  });
  
  //To user interface to add movies
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userAccount.html"));
    console.log(req.body.first_name);
    });

  
    


};

