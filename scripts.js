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



let menu = document.querySelector(".nav_menu img");
let extented_nav = document.querySelector(".extented_nav");
let close = document.querySelector(".close");
console.log(menu);
menu.addEventListener("click", ()=>{
  // console.log("hello");
    let etl = gsap.timeline()
    etl.to(extented_nav,{
        top: 0,
        duration: 1,
        ease: "expo.out"
    })
    etl.from(".extented_nav_part1", {
      x: -40,
      duration: 1,
      stagger: 0.1,
      opacity: 0
  }, 'a');
  
  etl.from(".extented_nav_part2", {
      x: 40,
      duration: 1,
      stagger: 0.1,
      opacity: 0
  }, 'a');
})
close.addEventListener('click', ()=>{
    gsap.to(extented_nav, {
        top: -500,
        duration: 1,
        ease: "expo.out"
    })
})


gsap.from(".navbar", {
  y: -100,
  duration: 1.5,
  opacity: 0
})

gsap.from(".hero_heading", {
  x: -100,
  duration: 1.5,
  opacity: 0
})

gsap.from(".right_container .hero_img", {
  x: 100,
  duration: 1.5,
  opacity: 0
})

gsap.to(".bee_img img", {
  duration: 3,
  opacity: 1,
  motionPath: {
    path: "#beePath",
    align: "#beePath",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
    start: 0,
    end: 0.85
  }
})

