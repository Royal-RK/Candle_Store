// $(function () {
//   let stickyNavTp = $(".header-btm").offset().top;
//   function styckyView() {
//     let scrollTp = $(window).scrollTop();
//     if (scrollTp > stickyNavTp) {
//       $(".header-btm").addClass("nav-sticky");
//     } else {
//       $(".header-btm").removeClass("nav-sticky");
//     }
//   }
//   styckyView();

//   $(window).scroll(function () {
//     styckyView();
//   });
// });


$(function () {
  let stickyNavTp = $(".header-btm").offset().top;

  // Lenis ke scroll event use karo (jQuery ki jagah)
  lenis.on('scroll', ({ scroll }) => {
    if (scroll > stickyNavTp) {
      $(".header-btm").addClass("nav-sticky");
    } else {
      $(".header-btm").removeClass("nav-sticky");
    }
  });
});