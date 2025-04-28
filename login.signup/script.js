document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    
    const welcomeText = document.querySelector('.welcome-text');
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');
    const contactSection = document.getElementById('contact-section');
    const loginForm = document.querySelector('.form-box.login');
    const signupForm = document.querySelector('.form-box.signup');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    // --- Show Home Section + Welcome Text at Start ---
    showSection(homeSection); 
    welcomeText.classList.add('visible');

    // Function to show only the active section
    function showSection(section) {
        document.querySelectorAll('.content-section').forEach((sec) => {
            sec.classList.remove('active');
        });

        section.classList.add('active');

        if (section === homeSection) {
            welcomeText.classList.add('visible');
        } else {
            welcomeText.classList.remove('visible');
        }
    }

    // Event listeners for navigation links
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(aboutSection);
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(contactSection);
    });

    // Open Login popup
    btnLoginPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    // Close Popup and reset forms
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');

    // Clear all input fields inside the forms
    document.querySelectorAll('.form-box input').forEach(input => {
        input.value = '';
    });

    // Reset back to login form when closing
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});
    // Show Signup form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // Show Login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
