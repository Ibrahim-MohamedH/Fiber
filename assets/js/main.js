$(document).ready(() => {
  // Navbar background color togglers
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 80);
  });
  $(".navbar-toggler").click(() => {
    $(".fixed-top").toggleClass("opened");
  });
  
  // FitText
  jQuery("#responsive_headline").fitText(1.2, { minFontSize: '40px', maxFontSize: '50px' });
  
  // NiceScroll
  $("body").niceScroll({
    cursorcolor: "#424242",
    cursoropacitymin: 0.3,
    cursoropacitymax: 1, 
    cursorborder: "none",
    zindex: "99999999999999999999"
  });
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})