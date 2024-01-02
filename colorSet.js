let colorSet = ["red", "blue", "green", "yellow", "black", "pink"];
let currentColor = "red";

function changeColor(newColor) {
    if (colorSet.includes(newColor.toLowerCase())) {
        currentColor = newColor.toLowerCase();
    } else {
        console.log("We don't have that color:", newColor);
    }
}

function iterateColor() {
    let currentIndex = colorSet.indexOf(currentColor);
    if (currentIndex !== -1) {
        if (currentIndex === colorSet.length - 1) {
            currentColor = colorSet[0];
        } else {
            currentColor = colorSet [currentIndex +1];
        }
        console.log("Current Color:", currentColor);
    }
}

function resetColor() {
    currentColor = colorSet[0];
    console.log("Color Reset to:", currentColor);
}

// Testing changColor
changeColor("blue"); //tests that value in the array will change the color stored in newColor
changeColor("purple"); //tests that values not in the array will return the message "We don't have that color"

// Testing iterateColor
iterateColor(); // changes currentColor
iterateColor(); // continues iterating through colors in the array until reaching value -1
iterateColor(); // else statement resets the currentColor to the currentIndex value +1

// Testing resetColor
resetColor(); // Resets currentColor to red