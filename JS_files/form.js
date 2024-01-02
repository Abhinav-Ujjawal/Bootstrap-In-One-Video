document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // // Display a notification
    // var notification = document.getElementById('notification');
    // notification.textContent = 'Form submitted!'; // You can customize this message

    // // You can also add more styling to the notification element
    // notification.style.display = 'block';

    // // Clear the notification after a few seconds (e.g., 3 seconds)
    // setTimeout(function() {
    //     notification.textContent = '';
    //     notification.style.display = 'none';
    // }, 3000);

    //OR
    // alert('Form submitted!');
    //OR
    
    // Swal.fire({
        //     title: 'Form submitted!',
        //     icon: 'success',
    //     showConfirmButton: false,
    //     timer: 2000,
    //     didClose: () => {
    //         // Resetting form fields
    //         document.getElementById('myForm').reset();
    //     }
    // });
    
    //OR    
    Swal.showLoading();
    console.log("Loading...");
    console.log("Loaded successfully!");
    setTimeout(function() {
        // Close the loading spinner and show the success message
        Swal.close();
        Swal.fire({
            title: 'Form submitted!',
            text: 'Thank you for submitting the form.',
            icon: 'success'
        }).then((result) => {
            if (result.isConfirmed) {
                // Resetting form fields after the alert is closed
                document.getElementById('myForm').reset();

                // window.scrollTo({
                    //     top: 0,
                    //     behavior: 'smooth'
                    // });
                // setTimeout(() => {
                //     // Action to be performed after the wait time
                //     console.log("Waiting for 2 seconds.");
                // }, 2000);
                // Smoothly scrolling to the top of the page
                
                ScrollToTopbutnotsuddenly();
            }
        });
    }, 500); 
});

const ScrollToTopbutnotsuddenly = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};
