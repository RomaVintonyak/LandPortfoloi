jQuery(document).ready(function() {
  "use script";
  var hTop = $(".portfolio__content").offset().top;
  $(window).on("scroll", function() {
    var wScroll = $(this).scrollTop();
    var counterItem = $(".counter__number");
    var setTime = 20000;
    if(wScroll >= hTop) {
      counterItem.each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text()
            },
            {
              duration: setTime,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    }else{
      counterItem.each(function() {
        $(this).prop("Counter", 0);
      });
    }
  });
});
