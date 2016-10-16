// Hi everybody!
// Turn Foundation on
$(document).foundation({
  equalizer : {
    // Specify if Equalizer should make elements equal height once they become stacked.
    equalize_on_stack: true,
    // Allow equalizer to resize hidden elements
    act_on_hidden_el: false
  }
});

// Fancybox on the board
$(document).ready(function() {
  $(".modal").fancybox({
    maxWidth  : 800,
    maxHeight : 800,
    height    : '90%'
  });
});

// Counter in item
$(document).ready(function() {
  $('.count-down').click(function () {
    var $input = $(this).parent().parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.count-up').click(function () {
    var $input = $(this).parent().parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// Sticked all, what we want!
$(function() {
  $('.sticked .main-menu').clone().prependTo('.sticked').addClass('hide');

  var sticked = $('.sticked');
  var top = sticked.offset().top;

  $(window).scroll(function(){
    var windowpos = $(window).scrollTop();
    if(windowpos < top) {
        sticked.find('.main-menu:last-child').removeClass('top');
        sticked.find('.main-menu:first-child').addClass('hide');
    } else {
        sticked.find('.main-menu:last-child').addClass('top');
        sticked.find('.main-menu:first-child').removeClass('hide');
    }
  });
});
