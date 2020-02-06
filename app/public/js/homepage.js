
//   console.log("hello");


$.get("/api/users", )


$(document).ready(function(){

  

    var queryURL = "http://api.giphy.com/v1/gifs/trending?=&api_key=S3wf9dDEiFhOBIEGVqGO76VGbhngqmRt";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.data[0].images.original.url);
      var trendImg = response.data[0].images.original.url;
     $("#jumImg").addClass("gif");
     $("#jumImg").attr("src", trendImg);

    });


})

