jQuery(document).ready(function() {
  "use script";
  var burgerBtn = $("#burgerToggle");
  var navMenu = $(".mobile__menu");
  burgerBtn.on("click", function(event) {
    event.preventDefault();
    $(this)
      .find("span")
      .toggleClass("burger__open");
    navMenu.toggleClass("mobile__menu--open");
  });
});
