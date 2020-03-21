// Declare variables
let state = false,
container = "#navigation-fullscreen",
button = "#navigation-fullscreen-button";

function toggleNav() {
    // Toggle state variable, see why in a few lines
    state = !state;
    // Toggle CSS classes
    $(container).toggleClass("navigation-fullscreen-container-active");
    $(button).toggleClass("navigation-fullscreen-button-active")
    // Hide/show the main button-pushing stuff
    if (state) {
        $(container).css("display", "block");
    } else {
        $(container).css("display", "none");
    }
}