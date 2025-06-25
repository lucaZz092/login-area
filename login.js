//load//
window.addEventListener('load', function(){
    const preloader = document.getElementById('preloader');
    const conteudo  = document.getElementById('conteudo');

    preloader.style.display = 'none';
    conteudo.style.display = 'block';
})
// login page
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// register page
const registeremailInput = document.getElementById('email-register');
const registerpasswordInput = document.getElementById('register-password');
const confirmpasswordInput = document.getElementById('confirm-password');

// forgot password
const emailInputForgot = document.getElementById('email-forgot');

// Validação
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

// Validação login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        if (!isValidPassword(passwordInput.value)) {
            event.preventDefault();
            alert('Password must be at least 6 characters long.');
        }
    });
}

// Validação registro
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        if (!isValidEmail(registeremailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        if (!isValidPassword(registerpasswordInput.value)) {
            event.preventDefault();
            alert('Password must be at least 6 characters long.');
            return;
        }
        if (registerpasswordInput.value !== confirmpasswordInput.value) {
            event.preventDefault();
            alert('Passwords do not match.');
        }
    });
}
// Button back page
const homeBtn = document.getElementById('homeButton')

homeBtn.addEventListener('click', function(){
    history.back();
})
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const conteudo = document.getElementById("conteudo");

  if (preloader) preloader.style.display = "none";
  if (conteudo) conteudo.style.display = "block";
});
