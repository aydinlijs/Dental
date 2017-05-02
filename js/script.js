

//big slider 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            }
            , 768: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    })
});
//big slider ends

//first slider
var bg_imgs = ['img/backgrounds/background-01.jpg', 'img/backgrounds/background-02.jpg', 'img/backgrounds/background-03.jpg']
var headers = ['HIGH QUALITY MEDICAL CARE THATS FAST AND CONVENIENT', 'AFFORDABLE PEDIATRIC DENTISTRY SERVICES', 'WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES'];
var texts = ['Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.', 'We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.', 'Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care.'];
$(document).ready(function () {
    $('.header .dot').click(function (event) {
        var index = $(this).attr('index');
        $('.header .dot').removeClass('active');
        $('.header .dot').eq(index).addClass('active');
        $('.header').css('background-image', 'url(' + bg_imgs[index] + ')');
        $('.leftside h2').text(headers[index]);
        $('.leftside h5').text(texts[index]);
    })
})
//first slider ends

//text slider
var pos = 0;
$('.textbox .text').each(function () {
    $(this).css('left', pos + 'px');
    pos += 450;
})
$('.quality .dot').click(function () {
    var index = $(this).attr('index');
    $('.quality .text').eq(0).css('margin-left', index * 450 * (-1) + 'px');
    $('.quality .text').eq(1).css('margin-left', index * 450 * (-1) + 'px');
    $('.quality .text').eq(2).css('margin-left', index * 450 * (-1) + 'px');
    $('.quality .dot').removeClass('active');
    $('.quality .dot').eq(index).addClass('active');

})
//text slider ends



//leftmenu starts


var menubool = true;
    $('.plusthings .openmenu').click(function () {
        if (menubool) {
            $('.plusthings .leftmenu').css('margin-left', '0px');
            $('.plusthings .openmenu').css('margin-left', '335px');
            $('.plusthings .openmenu i').removeClass('fa fa-bars');
            $('.plusthings .openmenu i').addClass('fa fa-close');
            $('.plusthings .openmenu i').css('padding-top', '13px');
            menubool = false;
        }
 
        else {
            $('.plusthings .leftmenu').css('margin-left', '-360px');
            $('.plusthings .openmenu i').removeClass('fa fa-close');
            $('.plusthings .openmenu i').addClass('fa fa-bars');
            $('.plusthings .openmenu').css('margin-left', '35px');
            menubool = true;
        }
    })


var mybool = true;
function showlist(it) {
    $('#' + it + '2 i').click(function () {
        if (mybool) {
            $('#open' + it + '2').css('display', 'block');
            mybool = false;
        }
        else {
            $('#open' + it + '2').css('display', 'none');
            mybool = true;
        }
    })
}
showlist('pages');
showlist('gallery');
showlist('blog');

    //leftmenu ends






$(window).scroll(function () {
    if ($(window).scrollTop() >= 138) {
        $('.gettotop').css('margin-top','620px');
    }
    else {
        $('.gettotop').css('margin-top','50%');
    }
})

