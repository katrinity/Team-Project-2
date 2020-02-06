// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app, passport) {

  // GET route for getting all of the posts
  app.get("/api/media", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Media.findAll({}).then(function(results){
      res.json(results);
    })
  });

  // Get route for returning posts of a specific category
  app.get("/api/media/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Media.findAll({
      where:{
        category:req.params.category
      }
    }).then(function(results){
      res.json(results);
    })
  });
  
  app.get("/api/users/", function(req, res){
    db.Users.findAll({}).then(function(results){
      res.json(results);
  });
  });

  app.get("/api/users/:email", function(req,res){
    db.Users.findOne({
      where:{
        email: req.params.email
      }
    }).
    then(function(results){
      res.json(results);
    })
  })

  app.get("/api/users/:id", function(req,res){
    db.Users.findOne({
      where:{
        email: req.params.id
      }
    }).
    then(function(results){
      res.json(results);
    })
  })

  app.get("/api/ratings/", function(req, res){
    db.Ratings.findAll({}).then(function(results){
      res.json(results);
  });
  });
 

  //POST ROUTE FOR USERS
  app.post("/api/users", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
      
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
    .catch(function(err) {
      // print the error details
      console.log(err.message);
    });
  });

  app.post("/api/media", function(req, res) {

    db.Media.create({
      imageurl:req.body.imageurl,
      media_name: req.body.media_name,
      description: req.body.description,
      release_yr: req.body.release_yr,
      creator_ID: req.body.creator_ID
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });

  app.post("/api/usermedia", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Usermedia.create({
      mediaId: req.body.mediaId,
      userId: req.body.userId
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });

  // POST route for ratings
  app.post("/api/ratings", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Ratings.create({
      stars: req.body.stars,
      mediaId: req.body.mediaId,
      userId: req.body.userId
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });

  // var rating = {
  //   stars: $("#stars"),//jquery of stars
  //   mediaId: //the id of the movie
  //   userId: //the id of the user
  // }

  // DELETE route for deleting posts
  app.delete("/api/ratings/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Ratings.destroy({
      where:
      {
        id: req.params.id
      }
    }).then(function(results){
      res.json(results);
    })
  });

  app.put("/api/users/:id", function(req,res){
    db.Users.update({
      isLoggedIn: req.body.isLoggedIn
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });


  // PUT route for updating posts
  app.put("/api/media", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Media.update({
      media_name: req.body.media_name,
      description: req.body.description,
      release_yr: req.body.release_year,
      creator_id: req.body.creator_id
    },{
      where: {
        id: req.body.id
      }
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });
  


  app.put("/api/ratings", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Ratings.update({
      stars: req.body.stars,
    },{
      where: {
        id: req.body.id
      }
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
  });

 



};
