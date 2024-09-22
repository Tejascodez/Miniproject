document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
  
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      if (validateForm()) {
        alert('Form submitted successfully!');
        // Add code here to send form data to your server
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Full Name validation
      const fullName = document.getElementById('fullName');
      if (fullName.value.trim().length < 5) {
        setInvalid(fullName, 'Please enter your full name (at least 5 characters).');
        isValid = false;
      } else {
        setValid(fullName);
      }
  
      // Email validation
      const email = document.getElementById('email');
      if (!isValidEmail(email.value)) {
        setInvalid(email, 'Please enter a valid email address.');
        isValid = false;
      } else {
        setValid(email);
      }
  
      // Phone Number validation
      const phoneNumber = document.getElementById('phoneNumber');
      if (!isValidPhoneNumber(phoneNumber.value)) {
        setInvalid(phoneNumber, 'Please enter a valid 10-digit phone number.');
        isValid = false;
      } else {
        setValid(phoneNumber);
      }
  
      // Password validation
      const password = document.getElementById('password');
      const fullNameValue = fullName.value.trim();
      if (password.value.trim().length < 8 || password.value === 'password' || password.value === fullNameValue) {
        setInvalid(password, 'Password must be at least 8 characters and cannot be "password" or your name.');
        isValid = false;
      } else {
        setValid(password);
      }
  
      // Confirm Password validation
      const confirmPassword = document.getElementById('confirmPassword');
      if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
        setInvalid(confirmPassword, 'Passwords do not match.');
        isValid = false;
      } else {
        setValid(confirmPassword);
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    function isValidPhoneNumber(phoneNumber) {
      const re = /^\d{10}$/;
      return re.test(String(phoneNumber)) && phoneNumber !== '1234567890';
    }
  
    function setInvalid(element, message) {
      element.classList.add('is-invalid');
      element.nextElementSibling.textContent = message;
    }
  
    function setValid(element) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      element.nextElementSibling.textContent = '';
    }
  });
  