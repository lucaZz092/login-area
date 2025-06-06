//login page//
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const buttonInput = document.getElementById('login-msg')
//register page//
const registeremailInput = document.getElementById('email-register')
const registerpasswordInput = document.getElementById('register-password')
const confirmpasswordInput = document.getElementById('confirm-password-register')

function isValidEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function isValidPassword(password){
    return password.length >= 6
}
const form = document.getElementById('loginForm')
    form.addEventListener('submit', function(event) {
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault()
            alert('Please enter a valid email address.')
            return
        }
        if (!isValidPassword(passwordInput.value)) {
            event.preventDefault()
            alert('Password must be at least 6 characters long.')
        }
    })

