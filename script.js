//your JS code here. If required.
window.onload = function () {
    // Get the target element by ID
    let element = document.getElementById("level");

    // Initialize level counter
    let level = 0;

    // Traverse up through parent nodes until reaching the root
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Output the result using alert
    alert("The level of the element is: " + level);
};
