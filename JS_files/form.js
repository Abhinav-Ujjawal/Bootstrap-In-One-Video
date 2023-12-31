document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');

    // Function to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Disable the submit button
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        // Show a loading message or animation
        // You can replace this with your loading animation logic
        // For example, change the text of the button to 'Submitting...'
        submitButton.innerText = 'Submitting...';

        // Simulate a delay (you can replace this with your form submission logic)
        setTimeout(function () {
            // Reset the form after a delay (simulating successful submission)
            form.reset();

            // Show a success message
            alert('Form submitted successfully!');

            // Re-enable the submit button
            submitButton.disabled = false;
            submitButton.innerText = 'Submit'; // Reset the button text
        }, 2000); // Change this delay to suit your needs (in milliseconds)
    });
});