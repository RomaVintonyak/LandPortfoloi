jQuery(document).ready(function(){
  "use script";
  $(".item__mobile").on("click", function(event){
    event.preventDefault();
    /*close burger btn & mobile menu */
    $("#burgerToggle").find("span").removeClass("burger__open");
    $(".mobile__menu").removeClass("mobile__menu--open"); 
    /*scroll script*/
    var navBtn = $(this).find(".nav__link").attr('href');
    var ofsetTop = $(navBtn).offset().top;
    $("html, body").animate({
      scrollTop: ofsetTop - 120
    }, 1000)
  });
});