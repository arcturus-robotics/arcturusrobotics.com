// Declare variables
let navState = false,
    navContainer = "#navigation-fullscreen",
    navButton = "#navigation-fullscreen-button";

let toggleNav = () => {
    // Toggle state variable, see why in a few lines
    navState = !navState;
    // Toggle CSS classes
    // me when depend on jquery just to do nav toggling 😎
    $(navContainer).toggleClass("navigation-fullscreen-container-active");
    $(navButton).toggleClass("navigation-fullscreen-button-active")
    // Hide/show the main button-pushing stuff
    if (navState) {
        $(navContainer).css("display", "block");
    } else {
        $(navContainer).css("display", "none");
    }
}