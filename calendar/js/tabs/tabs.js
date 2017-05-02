$(document).ready(function (event) {
    $('.panel-title a').click(function () {
        $(this).parent().parent().parent().siblings().find('i').removeClass('fa-minus');
        $(this).find('i').toggleClass('fa-minus');
    })
})