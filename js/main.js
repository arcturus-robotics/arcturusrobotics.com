// Whether or not the small nav is enabled.
let navState = false;

let smallNav = () => {
    // Toggle navState.
    navState = !navState;

    if (navState) {
        // Show fullscreen nav if it is enabled.
        $("#header-screen").css("display", "block");
        // Activate the small nav.
        $("#small-nav").removeClass("small-nav-inactive").addClass("small-nav-active");
    } else {
        // Hide the small nav if it is disabled.
        $("#header-screen").css("display", "none");
        // Deactivate the small nav.
        $("#small-nav").removeClass("small-nav-active").addClass("small-nav-inactive");
    }
}