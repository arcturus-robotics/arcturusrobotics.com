// Declare variables
let navContainerActive = "navigation-fullscreen-container-active",
    navButtonActive = "navigation-fullscreen-button-active";
let navActive = false,
    navContainer = document.querySelector("#navigation-fullscreen-container"),
    navButton = document.querySelector("#navigation-fullscreen-button");

let toggleNav = () => {
    // Toggle state variable, see why in like 2 lines
    navActive = !navActive;
    // Hide/show the main button-pushing stuff
    if (navActive) {
        navContainer.classList.add(navContainerActive);
        navButton.classList.add(navButtonActive);
    } else {
        navContainer.classList.remove(navContainerActive);
        navButton.classList.remove(navButtonActive);
    }
}