jQuery(document).ready(function(){
  "use script";
  $(".skillbar").each(function(){
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 6000);
  });
});