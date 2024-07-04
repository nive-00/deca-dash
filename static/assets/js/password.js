function togglePasswordVisibility(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleId);
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.src = "./assets/images/icons/hide.png";
      toggleIcon.alt = "Hide password";
    } else {
      passwordInput.type = "password";
      toggleIcon.src = "./assets/images/icons/view.png";
      toggleIcon.alt = "View password";
    }
}

function validatePassword() {
    const password = document.getElementById('createPassword').value;
    const message = document.getElementById('passwordStrengthMessage');

    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const numberOrSpecialCharCheck = /\d|[!@#$%^&*]/.test(password);

    if (lengthCheck && uppercaseCheck && numberOrSpecialCharCheck) {
        message.innerHTML = '<i class="fas fa-check"></i> &#10004; Valid Password.';
        message.className = "matched";
        return true;
    } else {
        message.innerHTML = '<i class="fas fa-times"></i> &#10006; Password must be at least 8 characters long, contain at least one uppercase letter, and at least one number or special character.';
        message.className = "invalid-password";
        return false;
    }
}

function checkPasswordMatch() {
    const createPassword = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('passwordMatchMessage');
    
    if (validatePassword()) {
        if (createPassword === confirmPassword && createPassword.length > 0) {
            message.innerHTML = '<i class="fas fa-check"></i> &#10004; Passwords match.';
            message.className = "matched";
        } else {
            message.innerHTML = '<i class="fas fa-times"></i> &#10006; Passwords do not match.';
            message.className = "not-matched";
        }
    } else {
        message.innerHTML = ''; // Clear the message if the create password is not strong
        message.className = '';
    }
}