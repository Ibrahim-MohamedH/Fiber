$(document).ready(() => {
  let crsl = $(".sign-crsl")
  if($(window).width() > 992){
    if(crsl.hasClass("none")){
      crsl.removeClass("none");
    }
  } else {
    crsl.addClass("none");
  }
  $(window).resize(() => {
    if($(window).width() > 992){
      if(crsl.hasClass("none")){
        crsl.removeClass("none");
      }
    } else {
      crsl.addClass("none");
    }
  })

  // NiceScroll
  $("body").niceScroll({
    cursorcolor: "#424242",
    cursoropacitymin: 0.3,
    cursoropacitymax: 1, 
    cursorborder: "none",
    zindex: "99999999999999999999"
  });
});