document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically validate the credentials
    // For this example, let's assume any non-empty values are valid
    if (email && password) {
        // Store the username in local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);


        // Redirect to the home page
        window.location.href = 'home.html'; // Change this to your actual home page URL
    } else {
        document.getElementById('errorMessage').innerText = 'Please enter valid credentials.';
    }
});

// Function to check if the user is already logged in
function checkLogin() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = location.getItem("password")
    if (savedEmail && password) {
        // Redirect to the home page if user is already logged in
        window.location.href = 'home.html'; // Change this to your actual home page URL
    }
}

// Call the checkLogin function on page load
checkLogin();