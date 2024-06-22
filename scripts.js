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
    325: {
      slidesPerView: 2,  
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,  
      spaceBetween: 20,  
    },
    1024: {
      slidesPerView: 4,  
      spaceBetween: 25,  
    }
}});

