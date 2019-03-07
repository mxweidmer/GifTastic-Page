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

    // function for creating buttons. loops through topics array, setting data-topic to the input
    // for retrieval later in the ajax call
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

    // click listener for topic buttons.  sets topic (q) in url to data-topic from button
    $(document).on("click", ".gif-button", function () {

        var topic = $(this).attr("data-topic");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&rating=pg&api_key=el1LWbh5MYri61KekZrPPTDZzDlVqfGw";

        // ajax call. empties previous gif-div, then loops through returned results creating
        // img and p elements to hold gif and rating respectively
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            console.log(results[0]);
            $("#gifs-div").empty();

            for (var i = 0; i < results.length; i++) {
                // using fixed height gif for better layout
                var url_still = results[i].images.fixed_height_still.url;
                var url_animated = results[i].images.fixed_height.url;
                var rating = results[i].rating;
                var title = results[i].title;

                // new gifDiv created for every image to hold image and p tag together
                // floated left for better layout on page (aligned side by side when possible)
                var gifDiv = $("<div>");
                gifDiv.css("float", "left");
                gifDiv.addClass("gif-box")

                var titleP = $("<p>").text("Title: " + title);
                var ratingP = $("<p>").text("Rating: " + rating);

                // using data-attributes to hold both still and animated url links, as well as state
                var gif = $("<img>").addClass("topic-gif");
                gif.attr("data-still", url_still);
                gif.attr("data-animated", url_animated);
                gif.attr("data-state", "still");
                gif.attr("src", url_still);

                gifDiv.append(titleP, ratingP, gif);
                $("#gifs-div").append(gifDiv);
            }
        });
    });

    // click listener on images for switching between animated and still using data-attributes
    // and if statement
    $(document).on("click", ".topic-gif", function () {

        if ($(this).attr("data-state") === "still") {
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("data-state", "animated");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    // click listener for submit button. pushes new topic to array, clears text input field
    // then recreates button with new topic included
    $(document).on("click", "#submit", function () {

        topics.push($("#user-input").val().trim());
        $("#user-input").val("");
        createButtons();
    });

    // displays initial topics as buttons on page
    createButtons();
});