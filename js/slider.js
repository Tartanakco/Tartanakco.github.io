let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
  }

  // Auto slide every 5 seconds
  setInterval(() => changeSlide(1), 5000);

  // Show the first slide initially
  showSlide(currentSlide);