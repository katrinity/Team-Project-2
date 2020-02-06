

$(document).on("click", ".add", function(){
 
  event.preventDefault();

  var string = $(this).parent().text();

  var trim = string.split('Add to collection!').join('');

  console.log(trim);
  // $.post("/api/media")

  $.ajax({
    url: "https://www.omdbapi.com/?t=" + trim + "&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response){
    console.log(response);

    var media = {
      imageurl: response.Poster,
      media_name: response.Title,
      description: response.Plot,
      release_yr: response.Released,
      creator_ID: 1
    }
    console.log(media);
    
    postMedia(media);

  })

})

function postMedia(media){
  $.post("/api/media", media, function(){
      
  });
}



$(".srcBut").on("click", function(event) {
   $("#srcRes").empty();
   
    event.preventDefault();

    var movie = $("#movie").val();
  

    $.ajax({
      url: "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    //   <div class="card  col-lg-3 col-md-3 col-sm-12" id = "movies-view">
    //   <img class="card-img-top"
    //     src="https://lumiere-a.akamaihd.net/v1/images/tros-hero-in-theaters-mobile-a_e8a421c0.jpeg?region=0,0,1024,626&width=960"
    //     alt="Card image cap">
    //   <div class="card-body">
    //     <p class="cardText title">Name</p>
    //     <p class="cardText rating">Rating</p>
    //     <p class="cardText description">Description</p>
    //     <p class="cardText cast&Crew">Cast & Crew</p>
    //     <a href="#" class="card-link">More Movie Detail</a>
    //   </div>
    // </div>
    for (var i = 0; i < 10; i++){  
      
      
      
      $("#srcRes").append("<div class='rmv card movieCards col-lg-3 col-md-3 col-sm-12'>")
      
      $(".movieCards").append("<img class = 'card-img-top' src = " + response.Search[i].Poster + " alt = 'card img'>")
                      .append("<div class = 'card-body'>")
                      .append("<p class = 'cardText title'> " + response.Search[i].Title)
                      .append("<button type = 'submit' class = 'add' >Add to collection!</button>");
      
      $(".rmv").removeClass("movieCards");

      
                     
    }
      // .append(JSON.stringify(response));

      // $("#movie-view").text(response.Title);
    });

    // -----------------------------------------------------------------------
});


$(document).on("click", "#v-pills-saved-tab", function(){
  $("#srcRes1").empty();
  savedMedia();
});

$(document).on("click", ".far", function(event){
  event.preventDefault();
  var movieName = $(this).parent()[0].classList[1];
  var movieRating = $(this)[0].id;

  console.log("You gave "+ movieName + " " + movieRating + " Stars!");
})

function savedMedia(){
  
 

  $.get("api/media", function(){

}).then(function(response){
  console.log(response);

  for (var i = 0; i < response.length; i++){  
      
    //Formatting createdAt timestamps
    var str = response[i].createdAt;
    var date = str.split("T").join(' ');
    var format = date.split("000Z").join('');
    //Don't judge I know it's crude
    
    var temp = response[i].media_name;
    var iden = temp.split(" ").join("");

    
    
    $("#srcRes1").append("<div class='rmv card movieCards1 col-lg-3 col-md-3 col-sm-12'>")
    
    
    $(".movieCards1").append("<img class = 'card-img-top' src = " + response[i].imageurl + " alt = 'card img'>")
                    .append("<div class = 'rmv1 card-body'>")
                    
    $(".card-body").append("<p class = 'cardText title'> " + response[i].media_name)
                    .append("<i id = '1' class='far fa-star'></i><i id = '2' class='far fa-star'></i><i id = '3' class='far fa-star'></i><i id = '4' class='far fa-star'></i><i id = '5' class='far fa-star'></i>")

                    .append("<p class = 'cardText'> Added: " + format)
                    .append("<p class = 'cardText'> " + response[i].release_yr)
                    .append("<p class = 'cardText'> " + response[i].description)
                   .addClass(iden);

    
    $(".rmv").removeClass("movieCards1");
    $(".rmv1").removeClass("card-body");

    
                   
  }

})
}