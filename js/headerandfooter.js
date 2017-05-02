function open(name) {
    $("#" + name).mouseenter(function () {
        $('.openmenu').css('display', 'none');
        $("." + name).css('display', 'block');
    });
    $("." + name).mouseenter(function () {
        $('.openmenu').css('display', 'none');
        $("." + name).css('display', 'block');
    });
    $('body').mouseenter(function (event) {
        if (event.target !== $('.' + name) || event.target !== $('#' + name)) {
            $("." + name).css('display', 'none');
        }
    })
    $('body').click(function (event) {
        if (event.target !== $('.' + name) || event.target !== $('#' + name)) {
            $("." + name).css('display', 'none');
        }
    })
}
open("gallery");
open("blog");
open("pages");

var searchbool = true;
$('#search').click(function () {
    if (searchbool) {
        $('.menu input').css('z-index', '2');
        $('.fa-search').addClass('fa-close');
        $('.fa-close').removeClass('fa-search');
        searchbool = false;
    }
    else {
        $('.menu input').css('z-index', '-1');
        $('.fa-close').addClass('fa-search');
        $('.fa-search').removeClass('fa-close');
        searchbool = true;
    }
})






//leftmenu starts
var menubool = true;
$('.miniheader .openmenu').click(function () {
    if (menubool) {
        $('.miniheader .leftmenu').css('margin-left', '0px');
        $('.miniheader .openmenu').removeClass('fa-bars');
        $('.miniheader .openmenu').addClass('fa-arrow-left');
        $('.miniheader .openmenu').css('padding-top', '18px');
        menubool = false;
    }
    else {
        $('.miniheader .leftmenu').css('margin-left', '-360px');
        $('.miniheader .openmenu').removeClass('fa-arrow-left');
        $('.miniheader .openmenu').addClass('fa-bars');
        menubool = true;
    }
})

var pagesbool = true;
function openit(name) {
    $('#' + name + '1 i').click(function () {
        if (pagesbool) {
            $('#open' + name).css('display', 'block');
            pagesbool = false;
        }
        else {
            $('#open' + name).css('display', 'none');
            pagesbool = true;
        }
    })
}
openit('pages');
openit('gallery');
openit('blog');

function biggermenu() {
    $('.menu .container').css('padding', '0px').css('width', '100%');
    $('.menu').css('position', 'fixed').css('text-align', 'center').css('top', '0px');
    $('.mymenu').css('border-radius', '0px');
    $('.mymenu input').css('margin', '0 auto').css('width', '71%').css('margin-left','10%');
    $('.menulist').css('margin-left', '-30px');
    $('.pages').css('margin-left', '12%').css('text-align', 'left');
    $('.gallery').css('left', '56.2%').css('text-align', 'left');
    $('.blog').css('left', '70%').css('text-align', 'left');
}
function smallermenu() {
    $('.menu .container').css('padding', '0px 15px 0px 5px').css('width', '1170px');
    $('.menu').css('position', 'absolute').css('text-align', 'left').css('top', '140px');
    $('.mymenu').css('border-radius', '5px');
    $('.mymenu input').css('margin', '0 auto').css('width', '92%').css('margin-left','0%');
    $('.menulist').css('margin-left', '00px');
    $('.pages').css('margin-left', '0%').css('text-align', 'left');
    $('.gallery').css('left', '59.0%').css('text-align', 'left');
    $('.blog').css('left', '77.3%').css('text-align', 'left');
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 138) {
        biggermenu();
    }
    else {
        smallermenu();
    }
})

//leftmenu ends



//rightbox opens
var closebool = true;
$('.miniheader .fa-ellipsis-v').click(function () {
    if (closebool) {
        $('.rightbox').css('display','block');
        $('.miniheader .fa-ellipsis-v').addClass('fa-times');
        $('.miniheader .fa-ellipsis-v').removeClass('fa-ellipsis-v');
        closebool = false;
    }
    else {
        $('.rightbox').css('display','none');
        $('.miniheader .fa-times').addClass('fa-ellipsis-v');
        $('.miniheader .fa-ellipsis-v').removeClass('fa-times');
        closebool = true;
    }
})
    //rightbox ends



//subscribe box 

$('.footer .rightpart button').click(function(){
   event.preventDefault();
   $('.footer .error p').text('');
   if($('.footer .rightpart input').val().indexOf('@') !== -1 && $('.footer .rightpart input').val().indexOf('.') !== -1){
       $('.successbox').css('left','50px');
       $('.successbox h5').css('padding-left','0px'); 
       $('.successbox img').css('display','block');                   
       $('.successbox h5').text('Sending');            
       setTimeout(function(){ 
       $('.successbox h5').text('Successfully sent!');            
       $('.successbox h5').css('padding-left','20px'); 
       $('.successbox img').css('display','none');            
        }, 1500)
       setTimeout(function(){  
       $('.footer .rightpart input').val('');          
       $('.successbox').css('left','-250px');            
        }, 3000)
   }
   else {
       $('.footer .error p').text('This email is not a valid email');
   }   
})
