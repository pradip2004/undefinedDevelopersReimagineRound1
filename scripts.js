

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
    475: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
});


function navbarAnimation() {
  let menu = document.querySelector(".nav_menu img");
  let extented_nav = document.querySelector(".extented_nav");
  let close = document.querySelector(".close");
  console.log(menu);
  menu.addEventListener("click", () => {
    // console.log("hello");
    let etl = gsap.timeline()
    etl.to(extented_nav, {
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
  const screenWidth = window.outerWidth;
  console.log(screenWidth)
  if(screenWidth < 475){
    close.addEventListener('click', () => {
      gsap.to(extented_nav, {
        top: -2200,
        duration: 1.5,
        ease: "expo.out"
      })
    })
  }else{
    close.addEventListener('click', () => {
      gsap.to(extented_nav, {
        top: -500,
        duration: 1.5,
        ease: "expo.out"
      })
    })
  }
  

}

function homePageAnimation() {
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

}

function productPageAnimation() {
  const trace_honey_btn = document.querySelector(".trace_honey_btn");
  const product_popup = document.querySelector(".product_popup_section");
  const popup_close_btn = document.querySelector(".product_popup_section_close");
  let product_popup_section_map = document.querySelector(".product_popup_section_map")
  const honey_trace_search_btn = document.querySelector(".honey_trace_search_btn")
  const honey_trace_inputBox = document.querySelector(".product_popup_section_input input");
  let svgElement = document.querySelectorAll(".target");
  const svgFilePath = './svg/map.svg';

  fetch(svgFilePath)
    .then(response => response.text())
    .then(svgContent => {
      product_popup_section_map.innerHTML = svgContent;
      svgElement = document.querySelectorAll(".target");
      // console.log(svgContent)
    })
    .catch(error => console.error('Error fetching SVG:', error));


  trace_honey_btn.addEventListener("click", () => {
    gsap.to(product_popup, {
      duration: 0.5,
      opacity: 1,
      scale: 1,
      visibility: "visible"
    });
  });

  popup_close_btn.addEventListener("click", () => {
    gsap.to(product_popup, {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      visibility: "hidden"
    });
    svgElement.forEach((element) => {
      element.style.fill = "#FADC76";
    })
    honey_trace_inputBox.value = "";
  });

  
  honey_trace_search_btn.addEventListener("click", () => {
    const searchValue = honey_trace_inputBox.value.replace(/\s+/g, '');
    let value = "12345678"
    if (searchValue === value) {
      svgElement.forEach((element) => {
        element.style.fill = "#F6BE00";
      })
    }
  })

}






//product section
let productData = [{
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
},
{
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
},
{
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
},
{
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
},
{
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
}, {
  img: "./img/product-1.png",
  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptates!",
  price: 100
}];

let swiper_slide = document.querySelector(".swiper-wrapper")

productData.forEach((product) => {
  let slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="product_card">
        <div class="product_img_container">
              <img src=${product.img} alt="">
              <div class="product_add_cart_icon notifyBtn">
                    <i class="ri-add-line"></i>
              </div>
        </div>


        <div class="product_title_container">
              <h1 class="product_title">${product.title}</h1>
              <h3 class="product_desc">
                    ${product.desc}
              </h3>
              <h4 class="product_price">
                    <div class="product_price_title">price</div>
                    <div class="product_price_money">$${product.price}</div>
              </h4>

        </div>
  </div>
  `
  swiper_slide.appendChild(slide);
})
// about us section
let historyBox_data = [{
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}, {
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}, {
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}, {
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}, {
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}, {
  img: "./img/honeyHistory-1.jpg",
  desc: "Dutch biologist and microscopist Jan Swammerdam’s study of honeybee anatomy and behavior began, providing a strong foundation for future bee studies."
}]

let about_honey_right_content = document.querySelector(".about_honey_section_right_content");
historyBox_data.forEach((historyBox) => {
  let historyBoxElement = document.createElement('div');
  historyBoxElement.classList.add('about_honey_historyBox');
  historyBoxElement.innerHTML = `
      <div class="about_honey_historyBox_img">
          <img src="${historyBox.img}" alt="">
      </div>
      <div class="about_honey_historyBox_desc">
          <p class="about_honey_historyBox_desc_text">
              ${historyBox.desc}
          </p>
      </div>
  `;
  about_honey_right_content.appendChild(historyBoxElement);
})



let historyBox = document.querySelectorAll(".about_honey_historyBox");
console.log(historyBox)
const years = ["1990", "1995", "2000", "2005", "2010", "2015"];
const screenWidth = window.outerWidth;
// console.log(screenWidth)
if(screenWidth < 475){
  historyBox.forEach((box, index) => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        scroller: ".main",
        markers: false,
        start: "top 70%",
        end: "top 55%",
        scrub: 3,
        onEnter: () => {
          // Update the year when the historyBox is triggered
          updateYear(years[index]);
        },
  
        onLeaveBack: () => {
          // Update the year when scrolling back
          updateYear(years[index - 1]);
        }
      }
    })
  
    t1.to(box, {
      backgroundColor: "#F6BE00"
    })
  
    
  })
}
historyBox.forEach((box, index) => {
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      scroller: ".main",
      markers: false,
      start: "top 45%",
      end: "top 20%",
      scrub: 3,
      onEnter: () => {
        // Update the year when the historyBox is triggered
        updateYear(years[index]);
      },

      onLeaveBack: () => {
        // Update the year when scrolling back
        updateYear(years[index - 1]);
      }
    }
  })

  t1.to(box, {
    backgroundColor: "#F6BE00"
  })

  
})

function updateYear(year) {
  const aboutHoneyYearTitle = document.querySelector(".about_honey_year_title");
  aboutHoneyYearTitle.textContent = year;
}



// bee section

  const clipPaths = [
    "inset(0)",
    "circle(10% at 57.5% 27%)",
    "circle(7% at 30% 75%)",
    "circle(10% at 35% 55%)",
    "circle(10% at 40% 80%)",
    "circle(100%)",
    // "circle(100% at 50% 50%)"
    "inset(0)"
  ];
  const titles = [
    "",
    "A DAY IN THE LIFE OF A WORKER BEE",
    "A DAY IN THE LIFE OF A WORKER BEE",
    "A DAY IN THE LIFE OF A WORKER BEE",
    "A DAY IN THE LIFE OF A WORKER BEE",
    " "
  ];
  const descriptions = [
    {
      text: "",
      position: ""
    },
    {
      text: "Foraging worker bees fly from their hive (sometimes miles away) to gather nectar from flowers and other blooming vegetation",
      left: "5%",
      top: "70%"
  
    },
    {
      text: "Once enough nectar is collected, the bees bring it back to the hive.",
      left: "50%",
      top: "30%"
    },
    {
      text: "The nectar is chewed up and deposited into honeycomb wax cells. (npr.org)     The honey is still wet and not the familiar consistency.",
      left: "50%",
      top: "80%"
    },
    {
      text: "Once the honey is ready, the bees cap and seal the cell to keep it clean.",
      left: "5%",
      top: "20%"
    },
  
  
    {
      text: "",
      position: ""
    }
  ];
  
  // GSAP timeline for clip-path animations
  const clipPathTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".bee_section",
      scroller: ".main",
      pin: true,
      start: "top top",
      markers: false,
      end: "+=380%",
      scrub: 1
    },
    onUpdate: function () {
      const progress = clipPathTimeline.progress();
      const index = Math.floor(progress * (clipPaths.length - 1));
      const description = descriptions[index];
      document.querySelector('.bee_section_title').textContent = titles[index];
      document.querySelector('.bee_section_desc').textContent = description.text;
      document.querySelector('.bee_section_desc').style.left = description.left;
      document.querySelector('.bee_section_desc').style.top = description.top;
    }
  });
  
  // Apply clip-path animations
  clipPaths.forEach((path, index) => {
    clipPathTimeline.to(".bee_section_img_cover img", { clipPath: path, duration: 1 }, index * 3);
  
  });
  

//about us section
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".about_section_container",
      start: "top top",
      end: "bottom bottom",
      markers: false,
      scrub: 2
    },
    xPercent: -300,
    ease: Power4
  })



//footer section
function gotoTopBtn() {
  const scrollToTopBtn = document.querySelector(".footer_goto_btn_fixed");
  // console.log(scrollToTopBtn)
  scrollToTopBtn.addEventListener("click", function () {
    // alert("hi");
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll
    });
  });

}
//add to cart notification
function notificationPopup() {
  document.addEventListener("DOMContentLoaded", function () {
    const notifyBtn = document.querySelectorAll(".notifyBtn");
    const notification = document.getElementById("notification");

    notifyBtn.forEach((btn)=>{
      btn.addEventListener("click", function () {
        notification.classList.add("show");
        setTimeout(function () {
          notification.classList.remove("show");
        }, 1000);
    })

    });
  });

}


homePageAnimation()
navbarAnimation()
productPageAnimation()
notificationPopup()
gotoTopBtn()


// load svg in slide2
// const slide2 = document.querySelector(".slide2");
// const svgFilePath = './svg/missonArrow2.svg';
// fetch(svgFilePath)
//   .then(response => response.text())
//   .then(svgContent => {
//     slide2.innerHTML += svgContent;
//   })
//   .catch(error => console.error('Error fetching SVG:', error));

  

  
  

