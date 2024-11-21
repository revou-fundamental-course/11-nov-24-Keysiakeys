function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestInput = document.getElementById('interest');

    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (interestInput.value === '') {
        showError(interestInput, 'Please select an interest.');
        isValid = false;
    }

    if (isValid) {
        alert('Form is successfully submitted!');
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

function showError(inputElement, message) {
    const error = document.createElement('span');
    error.classList.add('error-message');
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.textContent = message;
    inputElement.parentNode.appendChild(error);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



let indexSlide = 1;
const listImages = document.getElementsByClassName ('banner-autoslide');

showSlide();

function nextSlide() {
    showSlide(indexSlide += 1);
}

function showSlide(index) {
    // Resetter
   if (index > listImages.length) indexSlide = 1;
   console.log(indexSlide);
   hideAllSlide();
   listImages[indexSlide - 1].style.display = 'block';
}
// Logic untuk menyembunyikan semua slide
function hideAllSlide() {
    for (let i = 0; i < listImages.length; i++) {
    listImages[i].style.display = 'none';
    }
}

// Otomatisasi
setInterval(()=> nextSlide(), 2000);