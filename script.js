var images = ["img1.jpg", "img2.jpg", "img3.jpg"];
var currentIndex = 0;

function changeImage(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length;
  } else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  var sliderImage = document.getElementById('slider-image');
  // sliderImage.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  sliderImage.src = images[currentIndex];
}
