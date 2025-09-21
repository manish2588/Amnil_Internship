let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const sliderTrack = document.querySelector(".slider-track");
const totalSlides = slides.length;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId;

function updateSlider() {
  const translateX = -currentIndex * 100;
  sliderTrack.style.transform = `translateX(${translateX}%)`;

  // Update active states
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// mouse drag functionality
function getPositionX(event) {
  return event.type.includes("mouse")
    ? event.clientX
    : event.touches[0].clientX;
}

function dragStart(event) {
  event.preventDefault();
  isDragging = true;
  startPos = getPositionX(event);
  sliderTrack.classList.add("dragging");

  if (event.type === "mousedown") {
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
  }
}

function dragMove(event) {
  if (!isDragging) return;

  const currentPosition = getPositionX(event);
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;

  let resistance = 1;
  if (currentIndex === 0 && diff > 0) {
    resistance = Math.max(0.3, 1 - Math.abs(diff) / 200);
  } else if (currentIndex === totalSlides - 1 && diff < 0) {
    resistance = Math.max(0.3, 1 - Math.abs(diff) / 200);
  }

  const translateX =
    -currentIndex * 100 + (diff * resistance * 100) / sliderTrack.offsetWidth;
  sliderTrack.style.transform = `translateX(${translateX}%)`;
}

function dragEnd() {
  isDragging = false;
  sliderTrack.classList.remove("dragging");

  const movedBy = currentTranslate - prevTranslate;
  const threshold = 50; // Minimum drag distance to trigger slide change

  if (movedBy < -threshold && currentIndex < totalSlides - 1) {
    nextSlide();
  } else if (movedBy > threshold && currentIndex > 0) {
    prevSlide();
  } else {
    updateSlider();
  }

  currentTranslate = 0;
  prevTranslate = 0;

  // Remove mouse event listeners
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup", dragEnd);
}

// Event listeners for drag functionality
sliderTrack.addEventListener("mousedown", dragStart);
sliderTrack.addEventListener("touchstart", dragStart, { passive: false });
sliderTrack.addEventListener("touchmove", dragMove, { passive: false });
sliderTrack.addEventListener("touchend", dragEnd);

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      nextSlide();
    } else {
      stopAutoPlay();
    }
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

updateSlider();
