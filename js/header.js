// Whether or not the small nav is enabled.
let navState = false;

function smallNav() {
    // Toggle navState.
    navState = !navState;

    if (navState) {
        // Show fullscreen nav if it is enabled.
        document.querySelector("#small-nav-screen").style.display = "block";
        // Remove the inactive class.
        document.querySelector("#small-nav").classList.remove("small-nav-inactive");
        // Add the active class.
        document.querySelector("#small-nav").classList.add("small-nav-active");
    } else {
        // Hide the small nav if it is disabled.
        document.querySelector("#small-nav-screen").style.display = "none";
        // Remove the active class.
        document.querySelector("#small-nav").classList.remove("small-nav-active");
        // Add the inactive class.
        document.querySelector("#small-nav").classList.add("small-nav-inactive");
    }
}