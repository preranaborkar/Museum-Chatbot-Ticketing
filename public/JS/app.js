// Define the backend API URL
const API_URL = 'https://your-backend-url.com/api/auth/profile'; // Replace with your actual backend URL

// Function to fetch profile data from the backend
function fetchProfileData() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the response data

      // Example: Update the UI with user data
      document.getElementById('profile-name').innerText = data.name;
      document.getElementById('profile-email').innerText = data.email;
      // Add any other UI updates you need here
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call fetchProfileData on page load (or based on other events like button clicks)
document.addEventListener('DOMContentLoaded', fetchProfileData);
