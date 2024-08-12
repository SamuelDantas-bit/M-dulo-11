// Add event listener to buttons
document.querySelectorAll('.products button').forEach(button => {
    button.addEventListener('click', () => {
        // Add to cart functionality
        console.log('Add to cart');
    });
});