document.getElementById("returnButton").onclick = function () {
  document.body.classList.add("slide-out");
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 500); // Match the timeout duration with the animation duration
};

// Move to next process
document.getElementById("nextProcess").addEventListener("click", function() {
  let checkboxes = document.querySelectorAll(".checklist input[type='checkbox']");
  let allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

  if (!allChecked) {
    alert("Por favor llene todos los cuadros en la Checklist");
  } else {
    // Get the text from the input field
    let comments = document.getElementById("comments").value;

    // Log the text to the console 
    console.log("Observaciones del operador:", comments);

    // Proceed to next process (replace with actual navigation logic)
    console.log("Proceso completado");

    alert("Su proceso fue completado y su comentario ha sido enviado");

    document.body.classList.add("slide-out");
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 500); // Match the timeout duration with the animation duration
  }
});

// Retrieve the part number from local storage
const partNumber = localStorage.getItem('partNumber');
if (partNumber) {
  document.querySelector('.flap-text').innerText = partNumber;
  document.querySelector('.title').innerText = partNumber;
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize slideshows separately
  initializeSlideshow("CAD");
  initializeSlideshow("Referencias");
});

function initializeSlideshow(containerClass) {
  let container = document.querySelector(`.${containerClass}`);
  let slides = container.querySelectorAll(".slide");
  let slideIndex = 0;

  function showSlides(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides(slideIndex);
  }

  // Assign event listeners to previous and next buttons
  container.querySelector(".prevSlide").addEventListener("click", () => plusSlides(-1));
  container.querySelector(".nextSlide").addEventListener("click", () => plusSlides(1));

  // Initialize first slide
  showSlides(slideIndex);
}


let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

// Open Lightbox on Click
function openLightbox(imgElement) {
  lightbox.style.display = "flex"; // Ensure it shows up
  lightboxImg.src = imgElement.src;
}

// Close Lightbox on Click (X or Background)
function closeLightbox() {
  lightbox.style.display = "none";
}

// Ensure clicking outside the image closes the lightbox
lightbox.addEventListener("click", function(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});