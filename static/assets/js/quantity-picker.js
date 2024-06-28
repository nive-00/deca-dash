document.addEventListener('DOMContentLoaded', () => {
  // Get all the quantity-picker elements
  const quantityPickers = document.querySelectorAll('.quantity-picker');

  quantityPickers.forEach((quantityPicker) => {
    const minusBtn = quantityPicker.querySelector('.quantity-btn.minus');
    const plusBtn = quantityPicker.querySelector('.quantity-btn.plus');
    const quantityInput = quantityPicker.querySelector('.quantity');
    const addToCartBtn = quantityPicker.querySelector('.add-to-cart-btn');

    let quantity = parseInt(quantityInput.value);

    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });

    plusBtn.addEventListener('click', () => {
      quantity++;
      quantityInput.value = quantity;
    });

    addToCartBtn.addEventListener('click', () => {
      addToCart(quantity);
    });
  });

  function addToCart(quantity) {
    console.log(`${quantity} items added to cart.`);
  }
});

// Category slider
document.addEventListener('DOMContentLoaded', () => {
  const categoryLinks = document.querySelectorAll('.category-link');

  categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      const h2Position = targetElement.querySelector('h2').getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = h2Position - (window.innerHeight / 2);
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        const r = (progress / 500) * distance;
        window.scrollTo(0, startPosition + r);
        if (progress < 500) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);

      categoryLinks.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');

      const categoryProducts = document.querySelectorAll('.category-product');
      categoryProducts.forEach((product) => {
        product.classList.remove('visible');
      });
      targetElement.classList.add('visible');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cartActions = document.querySelector('.cart-actions');
  const stickyClass = 'sticky';
  const offsetTop = cartActions.offsetTop;

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= offsetTop) { 
      cartActions.classList.add(stickyClass);
      cartActions.style.marginBottom = '50px'; // Adjust as needed
    } else {
      cartActions.classList.remove(stickyClass);
      cartActions.style.marginBottom = '0';
    }
  }

  window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function() {
  const showNoteBtn = document.getElementById("showNote");
  const noteContent = document.getElementById("noteContent");

  showNoteBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      if (noteContent.style.display === "none") {
          noteContent.style.display = "block";
      } else {
          noteContent.style.display = "none";
      }
  });
});
