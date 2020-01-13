// Load the header and footer.
$(() => {
    $("#header").load("html/header.html")
    $("#footer").load("html/footer.html");
});

let FullscreenNavigation = class {
    constructor() {
        this.state = false;
        this.container = "#navigation-fullscreen";
        this.button = "#navigation-fullscreen-button";
    }

    toggle() {
        // Toggle the state.
        this.state = !this.state;

        if (this.state) {
            // Show the container.
            $(this.container).toggleClass("navigation-fullscreen-container-active");
            $(this.container).css("display", "block");
            // Activate the button.
            $(this.button).toggleClass("navigation-fullscreen-button-active")
        } else {
            // Hide the container.
            $(this.container).toggleClass("navigation-fullscreen-container-active");
            $(this.container).css("display", "none");
            // Deactivate the button.
            $(this.button).toggleClass("navigation-fullscreen-button-active")
        }
    }
}

let fullscreenNavigation = new FullscreenNavigation;