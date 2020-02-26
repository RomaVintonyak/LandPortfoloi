jQuery(document).ready(function(){
  "use script";
  /*once progres in hover block*/
  $(".skillbar").hover( function(){
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000);
  });
  /*all progress in load page */
  /*$(".skillbar").each(function(){
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 6000);
  });*/
});