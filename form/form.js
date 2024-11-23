document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

   
    let isValid = true;

    
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = 'Name must be at least 5 characters';
        isValid = false;
    }

   
    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber) || phoneNumber === '123456789') {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }

    
    if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be strong (not "password" or your name, and at least 8 characters).';
        isValid = false;
    }

   
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form submitted successfully!');
       
    }
});


document.getElementById('userForm').addEventListener('input', function(event) {
    if (event.target.name === 'fullName' && event.target.value.trim().length >= 5) {
        document.getElementById('nameError').textContent = '';
    }
    if (event.target.name === 'email' && event.target.value.trim().includes('@')) {
        document.getElementById('emailError').textContent = '';
    }
    if (event.target.name === 'phoneNumber' && /^\d{10}$/.test(event.target.value.trim())) {
        document.getElementById('phoneError').textContent = '';
    }
    if (event.target.name === 'password' && event.target.value.trim().length >= 8) {
        document.getElementById('passwordError').textContent = '';
    }
    if (event.target.name === 'confirmPassword' && event.target.value.trim() === document.getElementById('password').value.trim()) {
        document.getElementById('confirmPasswordError').textContent = '';
    }
});
