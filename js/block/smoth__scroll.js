jQuery(document).ready(function(){
  "use script";
  $(".nav__item").on("click", function(event){
    event.preventDefault();
    /*$(".burger__icon").removeClass("burger__icon--open");
    $(".mobile__content").removeClass("mobile__content--open"); */
    var navBtn = $(this).find(".nav__link").attr('href');
    var ofsetTop = $(navBtn).offset().top;
    $("html, body").animate({
      scrollTop: ofsetTop - 5
    }, 1500)
  });
});