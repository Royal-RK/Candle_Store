let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (isOpen === false) {
    navMenu.style.left = "-0%";
    document.body.classList.add("no-scroll");
    isOpen = true;
  } else {
    navMenu.style.left = "-100%";
    document.body.classList.remove("no-scroll");
    isOpen = false;
  }
});
// window.addEventListener("scroll", () => {
//   let btmHeader = document.querySelector(".header-btm");
//   if (window.scrollY > 100) {
//     btmHeader.classList.add("custom-sticky");
//   } else {
//     btmHeader.classList.remove("custom-sticky");
//   }
// });
// Bnner slider
let bnrSwiper = new Swiper(".bnrSwiper", {
  loop: true,
  // speed: 1000, 
  autoplay: {
    delay: 3000, 
    // disableOnInteraction: false,
  },
});
// Story slider
let swiper = new Swiper(".strySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
