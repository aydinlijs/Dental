$(document).ready(function(event) {
    $('.panel-title a').click(function () {
        $(this).parent().find('.panel-title .fa-plus').addClass('fa-minus');
        $('.panel-title .fa-minus').removeClass('fa-minus');        
    })
})
