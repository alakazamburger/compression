// Function to execute when the button is clicked
document.getElementById('activateScript').addEventListener('click', function() {
    // Get the value from the input field
    const userInput = document.getElementById('userInput').value;
    
    // Perform an action with the input value
    document.getElementById('output').textContent = `You entered: ${userInput}`;
    
    // Optional: Additional actions or script logic
    console.log(`User input: ${userInput}`);
});