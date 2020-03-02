jQuery(document).ready(function() {
  "use script";
  $(function() {
    $(window).on("scroll resize", function() {
      var dHeight = $(document).height();
      var scrolTop = $(window).scrollTop();
      var wHeight = $(window).height();
      var prog = scrolTop / (dHeight - wHeight);
      $("#progressBar").css({
        width: ((100 * prog) | 0) + "%"
      });
    });
  });
});
