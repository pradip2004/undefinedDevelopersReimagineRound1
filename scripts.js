var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 3,  // Adjust slides per view for devices with a width of 768px and above
      spaceBetween: 20,  
    },
    1024: {
      slidesPerView: 4,  // Adjust slides per view for devices with a width of 1024px and above
      spaceBetween: 25,  
    }
}});