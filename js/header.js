// false is inactive, true is active
var navState = false;

function smallNav() {
    // Toggle navState
    navState = !navState

    if (navState) {
        // Show full-screen nav if enabled
        document.getElementById("small-nav-screen").style.display = "block"
        // Remove the inactive class
        document.getElementById("small-nav").classList.remove("small-nav-inactive")
        // Add the active class
        document.getElementById("small-nav").classList.add("small-nav-active")
    } else {
        // And hide it if un-toggling
        document.getElementById("small-nav-screen").style.display = "none"
        // Remove the active class
        document.getElementById("small-nav").classList.remove("small-nav-active")
        // Add the inactive class
        document.getElementById("small-nav").classList.add("small-nav-inactive")
    }
}