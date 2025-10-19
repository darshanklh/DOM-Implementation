// --- Greet User Functionality ---

// Get the necessary HTML elements
const greetingElement = document.getElementById('greeting');
const nameInputElement = document.getElementById('nameInput');
const greetButtonElement = document.getElementById('greetButton');

// Add a click event listener to the button
greetButtonElement.addEventListener('click', () => {
    // Get the name from the input field
    const name = nameInputElement.value;

    // Check if the name is not empty
    if (name.trim() !== '') {
        // Update the greeting text
        greetingElement.textContent = `Hello, ${name}`;
    } else {
        // If the input is empty, revert to the original greeting
        greetingElement.textContent = 'Hello';
    }

    // Optional: Clear the input field after greeting
    nameInputElement.value = '';
});


// --- Color Boxes Functionality ---

// Get all elements with the class 'box'
const colorBoxes = document.querySelectorAll('.box');

// Loop through each box and add a click event listener
colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the color from the box's ID (which is also its text content)
        const color = box.id;
        
        // Change the background color of the clicked box
        box.style.backgroundColor = color;
        
        // Change the text color to white for better contrast on dark backgrounds
        box.style.color = 'white';
    });
});

