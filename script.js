// Function to convert input value to uppercase when field loses focus
function convertToUppercase() {
    var inputField = document.getElementById("fname");
    inputField.value = inputField.value.toUpperCase();
}

// Adding event listener to trigger conversion when input field loses focus
document.getElementById("fname").addEventListener("blur", convertToUppercase);
