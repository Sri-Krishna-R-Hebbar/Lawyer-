
  let currentSlideIndex = 1;

  function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index > slides.length) { currentSlideIndex = 1; }
    if (index < 1) { currentSlideIndex = slides.length; }

    // Update active slide
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlideIndex - 1].classList.add('active');

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex - 1].classList.add('active');

    carousel.style.transform = translateX(${-100 * (currentSlideIndex - 1)}%);
  }

  function prevSlide() {
    showSlide(currentSlideIndex -= 1);
  }

  function nextSlide() {
    showSlide(currentSlideIndex += 1);
  }

  function currentSlide(index) {
    showSlide(currentSlideIndex = index);
  }

  // Automatically move to the next slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Show the first slide initially
  showSlide(currentSlideIndex);


