// ============ AOS INIT (sabse pehle) ============
AOS.init({
  duration: 800,
  offset: 80,
  once: true,
  easing: "ease-in-out",
});
// ============ LENIS SMOOTH SCROLL ============
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
});

// Lenis + GSAP ScrollTrigger sync
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Lenis + AOS sync
lenis.on("scroll", () => {
  AOS.refresh();
});

// ============ MOBILE MENU ============
let menuBtn = document.querySelector(".menu-btn");
let navMenu = document.querySelector(".nav-menu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (isOpen === false) {
    navMenu.style.left = "0%";
    document.body.classList.add("no-scroll");
    lenis.stop();
    isOpen = true;
  } else {
    navMenu.style.left = "-100%";
    document.body.classList.remove("no-scroll");
    lenis.start();
    isOpen = false;
  }
});

// ============  SWIPER Js ============
let bnrSwiper = new Swiper(".bnrSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

let swiper = new Swiper(".strySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
