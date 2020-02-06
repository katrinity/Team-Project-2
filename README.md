# Team-Project-2

## SilverScreen

### Join us: https://tranquil-forest-89219.herokuapp.com/

![](app/public/img/homepage3.gif)

#### We are creating a personal media library that keeps track of movies that users would like to watch. When a user logs in,he/she will search for a movie by the movie name. If our own database doesn’t have the requested movie, we will send a request to OMDB and add movie info to our database with the following description: movie image, year of release,  genre, cast, director and ratings. The user can save the movie to the watchlist 

#### We are using Bootstrap for the frontend layout: 

##### structures: 
- NavBar:
``` javascript
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <a class="navbar-brand" href="home.html"><img src="./img/logo.jpg" width="100" height="50" alt="logo"
         id="logo"></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
       aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarText">
       <a href="loginPage.html"><button class="button logBut clickBut button4">Sign In</button></a>
       <a href="registerPage.html"><button class="button logBut clickBut button4">Register</button></a>
     </div>
</nav>
```
- Card
- Footer

#### For the homepage, we want to display some dynamic short videos instead of static pictures, so we added some short movies gif display in carousel, 

#### Mobile friendly is very important, and we used Media Query to make sure it will display in a nice format in Mobile screen. 
```javascript
@media only screen and (max-width: 750px) {
    .introCardImg {
        margin-left: 30%;;
  
    }

    .introCardText{
        padding-bottom: 20px;
        text-align: center;
    }

    .introCardTitle{
        text-align: center;
        margin-top: 0px;
    }
  }
  ```

#### Technologies we used:
- Bootstrap
- HTML
- CSS
- Node.js
- Express.js
- Sequelize.js
- MySQL
- Javascript
- jQuery
- Heroku


