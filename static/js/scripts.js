// Hi everybody!
// Turn Foundation on
$(document).foundation();

// Show items in areas
$('.show-items').click(function() {
  $(this).parent().parent().find('.hide').slideDown('fast');
  $(this).remove();
  return false;
});

// Other
$(document).ready(function() {
  // Fancybox
  $(".fancybox").fancybox({
    minWidth  : 500,
    maxWidth  : 1000
  });

  // Catalog open for pads
  if ($('body').width() < 1000) {
    $('.catalog:not(.show-for-pad)').click(function() {
      $(this).toggleClass('show-for-pad');
    });
  }


});