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

$(function() {
  $(".summary").stick_in_parent();
});

// Summary
$(document).ready(function() {
  deliveryVar = 350;
  $('#delivery_spb').click( function() {
    deliveryVar = 350;
    cartCounter(deliveryVar);
  });
  $('#delivery_out').click( function() {
    deliveryVar = 600;
    cartCounter(deliveryVar);
  });
  $('#take_myself').click( function() {
    deliveryVar = 0;
    cartCounter(deliveryVar);
  });
  $('.basket .cart-item input[type=number]').keyup( function() {
    cartCounter(deliveryVar);
  });
  $('.basket .cart-item input[type=number]').mouseup( function() {
    cartCounter(deliveryVar);
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
    cartCounter(deliveryVar);
    return false;
  });
  $('.count-up').click(function () {
    var $input = $(this).parent().parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    cartCounter(deliveryVar);
    return false;
  });
});

function cartCounter(deliveryPrice) {
  var itemsPrice = new Array();                   // Массив стоимости товаров
  var i = 0;                                      // Делаем массив из стоимости товаров
  $('.basket .cart-item').each(function() {
    itemsPrice[i] = $(this).data('price') * $(this).find('input[type="number"]').val();
    i++;
  });

  var allPrice = 0;                               // Складываем стоимость товаров
  for(var n=0;n<itemsPrice.length;n++){
    allPrice = allPrice + parseInt(itemsPrice[n]);
  }

  var itemsCards = new Array();                   // Массив стоимости открыток
  var ic = 0;                                     // Делаем массив из стоимости открыток
  $('.basket .cart-item .add-card:checked').each(function() {
    itemsCards[ic] = 150;
    ic++;
  });

  var allCards = 0;                               // Складываем стоимость товаров
  for(var nc=0;nc<itemsCards.length;nc++){
    allCards = allCards + parseInt(itemsCards[nc]);
  }

  $('.final.price').text( allPrice + allCards + deliveryPrice + ' р.' );
}
$(document).ready(function() {
  cartCounter(deliveryVar);
});

// Скрывание полей в корзине
$(function() {
  $('#delivery_spb').click(function() {
    $('#take').addClass('hide');
    $('#address').removeClass('hide');
    $('#delivery_comment').removeClass('hide');
  });
  $('#delivery_out').click(function() {
    $('#take').addClass('hide');
    $('#address').removeClass('hide');
    $('#delivery_comment').removeClass('hide');
  });
  $('#take_myself').click(function() {
    $('#delivery_comment').addClass('hide');
    $('#address').addClass('hide');
    $('#take').removeClass('hide');
  });

  // Если заберет цветы сам
  $('body').on('click', '.for_me:not(.on)', function() {
    $('.destination .required input').removeAttr( 'required' );
    $('.destination').slideUp('fast');
    $('.secret').slideUp('fast');
    $(this).addClass('on');
  });
  $('body').on('click', '.for_me.on', function() {
    $('.destination .required input').attr('required', '');
    $('.destination').slideDown('fast');
    $('.secret').slideDown('fast');
    $(this).removeClass('on');
  });

  // Открытка
  $('.add-card:checked').parent().parent().parent().find('.card-text').addClass('showed');
  setTimeout(function () {
    $(document).foundation('equalizer', 'reflow');
  }, 1);
  $('.add-card:checked').parent().parent().parent().find('.card-text textarea').attr( 'required', '' );
  $('.add-card:checked').addClass('on');

  $('body').on('click', '.add-card:not(.on)', function() {
    $(this).parent().parent().parent().find('.card-text').addClass('showed');
    setTimeout(function () {
      $(document).foundation('equalizer', 'reflow');
    }, 1);
    $(this).parent().parent().parent().find('.card-text textarea').attr( 'required', '' );
    $(this).addClass('on');
    cartCounter(deliveryVar);
  });

  $('body').on('click', '.add-card.on', function() {
    $(this).parent().parent().parent().find('.card-text').removeClass('showed');
    setTimeout(function () {
      $(document).foundation('equalizer', 'reflow');
    }, 1);
    $(this).parent().parent().parent().find('.card-text textarea').removeAttr( 'required' );
    $(this).removeClass('on');
    cartCounter(deliveryVar);
  });
});
