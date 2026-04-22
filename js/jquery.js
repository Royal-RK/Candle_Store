$(function () {
  let stickyNavTp = $(".header-btm").offset().top;

  // Lenis ke scroll event use karo
  lenis.on('scroll', ({ scroll }) => {
    if (scroll > stickyNavTp) {
      $(".header-btm").addClass("nav-sticky");
    } else {
      $(".header-btm").removeClass("nav-sticky");
    }
  });
});