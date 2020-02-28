jQuery(document).ready(function() {
  "use script";
  /*once progres in hover block*/
  /*$(".skillbar").hover( function(){
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000);
  });*/
  /*progres in scroll page*/
  var introH = $("#intro").innerHeight();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= introH) {
      $(".skillbar").each(function() {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: $(this).attr("data-percent")
            },
            6000
          );
      });
    }
  });
});
