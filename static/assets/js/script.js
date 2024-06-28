//slider-menu
function toggleMenu() {
  var menuContent = document.querySelector('.menu-content');
  var cartActions = document.getElementById('cartActions');

  if (menuContent.style.left === '-250px') {
    menuContent.style.left = '0';
    cartActions.style.zIndex = '1';
  } else {
    menuContent.style.left = '-250px';
    cartActions.style.zIndex = '1000';
  }
}

function toggleShopMenu() {
  var menuContent = document.querySelector('.menu-content');
  var categorySlider = document.getElementById('categorySlider'); // Get the categorySlider element

  if (menuContent.style.left === '-250px') {
    menuContent.style.left = '0';
    categorySlider.style.zIndex = '1';
  } else {
    menuContent.style.left = '-250px';
    categorySlider.style.zIndex = '1000';
  }
}



//recapcha V2
document.getElementById('change-link').addEventListener('click', function(e) {
  // togglePasswordVisibility function
  var passwordField = document.getElementById("password");
  var eyeIcon = document.getElementById("eyeIcon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});


//OTP-Verification
document.getElementById('change-link').addEventListener('click', function(e) {
  e.preventDefault();
  const changeNumberContainer = document.getElementById('change-number-container');
  const confirmNewPhoneInput = document.getElementById('confirm-new-phone');
  
  if (changeNumberContainer.style.display === 'block') {
    changeNumberContainer.style.display = 'none';
    confirmNewPhoneInput.style.display = 'none';
  } else {
    changeNumberContainer.style.display = 'block';
    confirmNewPhoneInput.style.display = 'none'; // Hide confirm new phone input initially
  }
});
document.getElementById('change-btn').addEventListener('click', function() {
  document.getElementById('confirm-new-phone').style.display = 'block';
});

document.getElementById('verify-btn').addEventListener('click', function() {
  // Logic to verify OTP
  alert('OTP verified successfully!');
});

document.getElementById('change-link').addEventListener('click', function(e) {
  e.preventDefault();
  if (changeNumberContainer.style.display === 'block') {
    changeNumberContainer.style.display = 'none';
    confirmNewPhoneInput.style.display = 'none';
  } else {
    changeNumberContainer.style.display = 'block';
    confirmNewPhoneInput.style.display = 'none'; 
  }
});

//quantity-picker
 
//Category-Slider
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.category-slider a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = document.querySelector('header').offsetHeight;
        const targetOffset = targetElement.offsetTop - headerOffset;

        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  });
});