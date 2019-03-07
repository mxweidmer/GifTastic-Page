




// form for creating buttons
// dynamic buttons with unique values depending on user input
// button on click listener
//      * contains ajax call based on unique value from button, rating limited
//          * for loop creating image elements and placing them on the page, with three data attributes (animated url, still url, and state of image)
// image on click listener
//      * if statement based on state data attribute
//          * switches src attribute depending on state and then switches state



$(document).ready(function () {

    var topics = ["video games", "dogs", "cats", "reading", "rally racing"];

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

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            $("#gifs-div").empty();

            for (var i = 0; i < results.length; i++) {
                var url_still = results[i].images.fixed_height_still.url;
                var url_animated = results[i].images.fixed_height.url;
                var rating = results[i].rating;

                var gifDiv = $("<div>");
                gifDiv.css("float", "left");
                gifDiv.addClass("gif-box")

                var ratingP = $("<p>").text("Rating: " + rating);

                var gif = $("<img>").addClass("topic-gif");
                gif.attr("data-still", url_still);
                gif.attr("data-animated", url_animated);
                gif.attr("data-state", "still");
                gif.attr("src", url_still);

                gifDiv.append(ratingP, gif);
                $("#gifs-div").append(gifDiv);
            }
        });
    });

    $(document).on("click", ".topic-gif", function () {

        if ($(this).attr("data-state") === "still") {
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("data-state", "animated");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    createButtons();

});