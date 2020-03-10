jQuery(document).ready(function() {
  "use script";
  var topBtn = $("#backTop");
  var introH = $("#intro").innerHeight();
  topBtn.hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= introH) {
      topBtn.fadeIn(1000);
    } else {
      topBtn.fadeOut(1000);
    }
  });
  topBtn.on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });
});
