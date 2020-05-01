$(document).ready(function() {
    purchaseOneClick.init();
});

var purchaseOneClick = new function() {
    this.init = function() {
        var $elementId = $('input[data-purchase-one-click=element_id]');

        $('a[data-purchase-one-click=link]').on('click', function(e){
            $elementId.val($(this).data('element-id'));
        });
    };
}();