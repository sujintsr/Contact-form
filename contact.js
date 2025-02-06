document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default
    let isValid = true;

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    // Validation
    if (!firstName) {
        document.getElementById("fname-error").innerText = "Enter the First Name.";
        isValid = false;
    }

    if (!lastName) {
        alert('Last Name is required.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (!queryType) {
        alert('Please select a query type.');
        isValid = false;
    }

    if (!message) {
        alert('Message is required.');
        isValid = false;
    }

    if (!consent) {
        alert('You must consent to being contacted.');
        isValid = false;
    }

    // Submit if valid
    if (isValid) {
        alert('Form submitted successfully!');
        // Uncomment the line below to actually submit the form
        // e.target.submit();
    }
});
