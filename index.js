// Get a reference to the HTML element with the id!
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Add a click event listener to the 'Register' button
registerBtn.addEventListener('click', () => {
    // When the 'Register' button is clicked, add the class 'active' to the 'container' element
    container.classList.add("active");
});

// Add a click event listener to the 'Login' button
loginBtn.addEventListener('click', () => {
    // When the 'Login' button is clicked, remove the class 'active' from the 'container' element
    container.classList.remove("active");
});
