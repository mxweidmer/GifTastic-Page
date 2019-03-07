




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

    createButtons();

});