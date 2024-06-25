

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
  close.addEventListener('click', () => {
    gsap.to(extented_nav, {
      top: -500,
      duration: 1,
      ease: "expo.out"
    })
  })

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
  });
}

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

historyBox.forEach((box) => {
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      scroller: ".main",
      markers: false,
      start: "top 45%",
      end: "top 20%",
      scrub: 3
    }
  })

  t1.to(box, {
    backgroundColor: "#F6BE00"
  })
})

productPageAnimation()

// bee section

const clipPaths = [
  "circle(10% at 57.5% 27%)",
  "circle(10% at 33% 65%)",
  "circle(10% at 60.5% 74%)",
  "circle(6% at 54% 48%)",
  "circle(7% at 27% 69%)",
  "circle(100% at 50% 50%)"
];
const titles = [
  "White woman",
  "Charrua Indigenous",
  "Jaguar",
  "Montevideo Hill",
  "Ship",
  " "
];
const descriptions = [
  {
        text: "In the foreground, we see a woman with Caucasian features representing the homeland—a white, pure, radiant, and civilized homeland ascending triumphantly. Created in the image and likeness of a Europe that embodies everything the nation should admire and pursue for success.",
        left: "5%",
        top: "70%"

  },
  {
        text: "She is seated on a rock, at a higher level than the rest of the symbolic elements. She has a fabric draped over her body with the stripes of the national flag printed on it, stained with the blood of the Charrúa people. A flag that represents the patrician project of a nation-state born from the Charrúa genocide.",
        left: "5%",
        top: "30%"
  },
  {
        text: "In the background or second layer, we see the stereotyped figure of an indigenous person in a fallen posture, looking up at the resplendent homeland.",
        left: "50%",
        top: "40%"
  },
  {
        text: "The woman is sitting on a jaguar skin, perhaps a rug that the indigenous person obediently placed for her to sit on. The jaguar skin represents the most dangerous and wild animal of these lands, which the indigenous person killed for and because of her.",
        left: "5%",
        top: "20%"
  },
  {
        text: "The figure of the Montevideo Hill fortress symbolizes for us the planting of the Spanish flag over the Charrúa people who fiercely resisted the establishment of this fort, symbolizing the beginning of settler colonialism, territorial dispossession.",
        left: "50%",
        top: "70%"
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