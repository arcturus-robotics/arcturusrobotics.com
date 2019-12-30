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
            $(this.container).css("display", "block");
            // Activate the button.
            $(this.button).removeClass("navigation-fullscreen-button-inactive").addClass("navigation-fullscreen-button-active");
        } else {
            // Hide the container.
            $(this.container).css("display", "none");
            // Deactivate the button.
            $(this.button).removeClass("navigation-fullscreen-button-active").addClass("navigation-fullscreen-button-inactive");
        }
    }
}

let fullscreenNavigation = new FullscreenNavigation;