// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('joinNowForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile'); // New: Get mobile number field value
        const password = formData.get('password');

        // Perform form validation (you can add more validation logic here)
        if (!name || !email || !mobile || !password) { // New: Check if mobile field is empty
            alert('Please fill in all fields');
            return;
        }

        // Send form data to the server (you can make an AJAX request here)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mobile:', mobile); // New: Log mobile number field value
        console.log('Password:', password);

        // Optionally, reset the form after submission
        form.reset();
    });
});
