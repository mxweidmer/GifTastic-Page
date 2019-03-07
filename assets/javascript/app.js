




// form for creating buttons
// dynamic buttons with unique values depending on user input
// button on click listener
//      * contains ajax call based on unique value from button, rating limited
//          * for loop creating image elements and placing them on the page, with three data attributes (animated url, still url, and state of image)
// image on click listener
//      * if statement based on state data attribute
//          * switches src attribute depending on state and then switches state



$(document).ready(function () {

    var topics = ["fallout new vegas", "dogs", "cats", "photography", "pokemon"];

    function createButtons() {
        $("#buttons-div").empty();

        for (var i = 0; i < topics.length; i++) {

            var topicButton = $("<button>");
            topicButton.addClass("gif-button");
            topicButton.attr("data-topic", topics[i]);
            topicButton.text(topics[i]);
            $("#buttons-div").append(topicButton);
        }
    }

    $(document).on("click", ".gif-button", function () {

        var topic = $(this).attr("data-topic");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&rating=pg&api_key=el1LWbh5MYri61KekZrPPTDZzDlVqfGw";
        console.log(queryURL);
        console.log(topic);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            console.log(results[0].rating);
        });


    });

    createButtons();

});