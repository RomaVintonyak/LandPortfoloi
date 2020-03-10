jQuery(document).ready(function(){
  "use script";
  $(".nav__item").on("click", function(event){
    event.preventDefault();
    var navBtn = $(this).find(".nav__link").attr('href');
    var ofsetTop = $(navBtn).offset().top;
    $("html, body").animate({
      scrollTop: ofsetTop - 120
    }, 1000)
  });
});