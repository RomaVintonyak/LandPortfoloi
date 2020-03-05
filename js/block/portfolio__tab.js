jQuery(document).ready(function() {
  "use script";
  var filter = $("[data-filter]");
  filter.on("click", function(event) {
    event.preventDefault();
    var cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        var workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
    var pbH = $(".portfolio__box");
    pbH.each(function() {
      var wWidth = $(window).width();
      var marginH;
      if (wWidth < 768) {
        marginH = -200;
      } else if (wWidth < 1024) {
        marginH = -150;
      } else {
        marginH = -100;
      }
      if ($(this).hasClass("hide")) {
        $(this).css({
          "margin-top": marginH + "%"
        });
      } else {
        $(this).css({
          "margin-top": "0%"
        });
      }
    });
  });
});
