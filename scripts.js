document.getElementById("about").addEventListener("mouseover", function() {
    document.querySelector(".dropdown").style.display = "block";
});

document.getElementById("about").addEventListener("mouseout", function() {
    document.querySelector(".dropdown").style.display = "none";
});


    document.getElementById("services").addEventListener("click", function() {
        var dropdown = document.getElementById("services-dropdown");
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    });

document.getElementById("classes-link").addEventListener("mouseenter", function() {
    var dropdown = document.getElementById("classes-dropdown");
    dropdown.style.display = "block";
});

document.getElementById("classes-dropdown").addEventListener("mouseleave", function() {
    var dropdown = document.getElementById("classes-dropdown");
    dropdown.style.display = "none";
});


    document.getElementById("join-btn").addEventListener("click", function() {
        var form = document.getElementById("join-form");
        form.style.display = "block"; // Ensure form is visible
    });

    document.getElementById("join-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        
        // Display submitted data
        document.getElementById("submitted-name").textContent = name;
        document.getElementById("submitted-email").textContent = email;
        document.getElementById("submitted-data").style.display = "block";
        
        // Hide the form after submission
        var form = document.getElementById("join-form");
        form.style.display = "none";
        
        // Optional: Show a confirmation message or redirect to another page
        alert("Form submitted successfully!");
    });


