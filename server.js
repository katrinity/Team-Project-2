var express = require("express");
var passport = require("passport");

var PORT = process.env.PORT || 8080;

var app = express();



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
// Add the line below, which you're missing:
require('./app/config/passport.js')(passport);

var db = require("./app/models");

// Import routes and give the server access to them.

require("./app/routes/api-routes.js")(app);

require("./app/routes/html-routes.js")(app);

// Static directory to be served
app.use(express.static("app/public"));

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
