$(document).ready(function(){

    var saveMovieContainer = $(".saveMovieContainer");

  //movies user saved;
    var saved;
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
 
    var userId;
  
  
    // This function grabs posts from the database and updates the view
    function getMedia(user) {
        userId = user || "";
      if (userId) {
        userId = "/?userId=" + userId;
      }
      $.get("/api/posts" + authorId, function(data) {
        console.log("Posts", data);
        saved = data;
        if (!posts || !posts.length) {
          displayEmpty(user);
        }
        else {
          initializeRows();
        }
      });
    }
  

    
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        saveMovieContainer.empty();
      var moviesToAdd = [];
      for (var i = 0; i < saved.length; i++) {
        moviesToAdd.push(createNewRow(saved[i]));
      }
      saveMovieContainer.append(moviesToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(Media) {
      
      var newMovieCard = $("<div>");
      newMovieCard.addClass("card");
      var newMovieTitle = $("<h2>");
    //   var newMovieRating = $("<small>");
      var newMovieDescription = $("<small>");
      var newMovieRelYear = $("<small>")


      var newMovieCardBody = $("<div>");
      newMovieCardBody.addClass("card-body");
      var newMovieBody = $("<p>");
      newMovieTitle.text(Media.media_name + " ");
    //   newMovieRating.text(Media.description);
        newMovieRelYear.text(Media.release_yr);
      newMovieDescription.text(Media.description);
      newPostTitle.append(newPostDate);

      newMovieCardBody.append(newMovieTitle);
      newMovieCardBody.append(newMovieDescription);
      newMovieCardBody.append(newMovieLength);
    //   newPostCard.append(newPostCardHeading);
    //   newPostCard.append(newPostCardBody);
      newMoiveCard.data("Media", post);
      return newMovieCard;
    }
  
})
