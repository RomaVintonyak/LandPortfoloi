jQuery(document).ready(function(){
  "use script";
  $(window).on("scroll", function(){
    if($(this).scrollTop() >= 5){
      $("header").addClass("fixed__header");
    }else{
      $("header").removeClass("fixed__header");
    }
  });
});