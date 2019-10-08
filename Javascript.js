// javascript/jquery for Giftastic 
// $(document).ready(function () {

// staring array of Ninja. 

var topics = ['Gaara', 'Rock Lee', 'Obito Uchiha', 'Hinata Hyuga', 'Kurama', 'Asuma Sarutobi', 'Madara Uchiha', 'Shikamaru Nara', 'Kakashi Hatake', 'Hashirama Senju', 'Orochimaru','Neji Hyuga','Akatsuki']

// display info. / functin for dumping json
function displayInfo() {
    $("buttonBox").empty();
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=sNLMCK7SYEvr2eEkR8ZcRav7ZPALkeER&limit=10";

    // api key - sNLMCK7SYEvr2eEkR8ZcRav7ZPALkeER

    // AJAX call to pull requested info. 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            // handle gif rating 
            // Creating a div to hold the movie/ gif
            var movieDiv = $("<div class='movie'>");

            // Storing the rating/gif data
            var person = response.data[i].images.fixed_height.url;
            console.log(response.data[i].images.fixed_height.url);

            var personImage = $("<img>");

            personImage.attr("src", person);

            $("#images").prepend(personImage);


            // handle rating 
            var rating = response.data[0].rating;
            console.log(rating + " testR");
            //  $("#movie")prepend("Rating: " + rating);
            $("#images").prepend("Rating " + rating);


            // *   $("#movies-view").text(JSON.stringify(response));
        }

    });
}

// }
// );

// function for displaying character data 
function renderButtons() {
    // Deleting the buttons prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamically generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("movie");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var topic = $("#movie-input").val().trim();

    // Adding the movie from the textbox to our array
    topics.push(topic);
    console.log(topics);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
$(document).on("click", ".movie", displayInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();

// pause Gifs
//function pause (){
    // var state = $(this).attr('data-animate');
    
//}
 
// $("#images").on("click",.pause();


 // }); -- didnt go over pause/play in class, cant figure out documention 



// closing bracket.    
// }
// )
; 