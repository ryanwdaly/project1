$(document).ready(function() {

    $("#search-button").on("click", function () {
        
         var input = $(this).attr("#input-bar");
        //  var pexelAPI = "563492ad6f91700001000001ef9932d9916848898cc2c5b1b0ec5725";

         var queryURL = "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1";
        //  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //      input + "&api_key=dc6zaTOxFJmzC&limit=10";
         
         $.ajax({
                 url: queryURL,
                 method: "GET"
         }).then(function (response) {
                 var data = response.data;
 
                 for (var i = 0; i < 6; i++) {
                     var charDiv = $("<div>");
                     // charDiv.attr("class", "w3")
                     var p = $("<p>").text("Rated: " + data[i].rating.toUpperCase()).attr("class", "rating");
                     //Set up img tag and its attributes
                         var charImage = $("<img>");
                         charImage.attr("class", "gif w4-col")//adds class = 'gif'
                         charImage.attr("src", data[i].images.fixed_height.url);//srcURL
                         charImage.attr("data-animate", data[i].images.fixed_height.url);//animateURL
                         charImage.attr("data-state", "animate")//set state to animate
                         charImage.attr("data-still", data[i].images.fixed_height_still.url)//stillURL
                     
                     charDiv.append(p);
                     charDiv.append(charImage);
                     $("#gif-container").prepend(charDiv);
                 }
         });  
     });


});