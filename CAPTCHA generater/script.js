// Function to generate a random alphanumeric string for CAPTCHA
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate and display a new CAPTCHA
function generateCaptcha() {
    const captchaText = generateRandomString(6); // Change the length as needed
    document.getElementById('captcha-text').innerText = captchaText;
}

// Function to validate the entered CAPTCHA
function validateCaptcha() {
    const enteredCaptcha = document.getElementById('captcha-input').value;
    const generatedCaptcha = document.getElementById('captcha-text').innerText;

    if (enteredCaptcha === generatedCaptcha) {
        alert('CAPTCHA verified successfully');
        // Add any further actions on successful validation
    } else {
        alert('CAPTCHA validation failed. Try again.');
        // Add any further actions on validation failure
    }

    // Generate a new CAPTCHA after validation attempt
    generateCaptcha();
}
