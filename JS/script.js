
function validateForm() {
    const nameInput = document.getElementById('name').value;
    console.log(nameInput) 
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