# GifTastic-Page

[Deployed Link](https://mxweidmer.github.io/GifTastic-Page/)

## Description
### This is a page that displays gifs using the GIPHY API. The page starts with some premade labeled buttons. When clicked, ten pg and under gifs related to the button label are displayed, along with their rating and title. The gifs are still until they are clicked on, after which they start playing. Clicking on a gif again will make it go back to being a still image. The gifs are floated so that they create an uneven grid based on their width. All gifs are the same height. The user can type in any topic into the input form, creating a button that behaves identically to the preloaded ones.

## Screenshots/GIFS

The starting screen |
:------------------:
![Starting Screen](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/starting-screen.JPG) |

A page displaying gifs after a button click |
:------------------:
![Page after button click](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/in-progress.JPG) |

Gif animating on click |
:------------------:
![Animating gif](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/animated.gif) |

Adding a button |
:------------------:
![Adding a button](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/button.gif) |

## Code Details

Topics array |
:------------------:
![Topics array](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/topics.JPG) |

Function to create buttons |
:------------------:
![Function to create buttons](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/button-function.JPG) |

Button listener with ajax call for displaying gifs |
:------------------:
![Button listener/Ajax call](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/button-listener.JPG) |

Image click listener for switching between animated and still |
:------------------:
![HTML Text](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/image-listener.JPG) |

Adding a button |
:------------------:
![HTML Images](https://github.com/mxweidmer/GifTastic-Page/blob/master/assets/images/button-add.JPG) |

### The createButtons function was run once just after the page loaded to display the initial buttons.

### The styling for the page was made using bootstrap.  Two jumbotrons, one for the input form and the other for the buttons, as well as a container div to hold the gifs.

## Technologies Used
* HTML
* Javascript
* CSS
* JQuery
* Bootstrap
* GIPHY API