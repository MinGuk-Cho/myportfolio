$(document).ready(function(){

    $('.sec3_slick').slick({
        slide: 'div',
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: true,
    });
    
    // if($('.slick-dots li').hasClass('slick-active')){
        
        // }

    $('.slick-dots li').each(function(index){
        $(this).attr('data-dots',index);
    });
        
    $('.slick-dots li').click(function(){
        var i = $(this).attr('data-dots');

        $('#sec_3_text li').animate({
            opacity: 0
        });
        $('#sec_3_text li').eq(i).animate({
            opacity: 1
        });

    });

    
    
    $('a').click(function(){
        $('html').animate({
            scrollTop: 0
        },500);
    });

    $(window).scroll(function(){
        sct = $(window).scrollTop();

        if( sct < 950 ){
            $('#logo1').css({
                display: 'none'
            });
            $('#logo2').css({
                display: 'block'
            });
            $('#menu_wrap li a').css({
                color: '#eeeeee'
            });
            $('#menu_wrap li a').hover({
                color: '#3f3f3f'
            });
        }
        else if( sct >= 950){
            $('#logo2').css({
                display: 'none'
            });
            $('#logo1').css({
                display: 'block'
            });
            $('#menu_wrap li a').css({
                color: '#3f3f3f'
            });
        }
    });


});//End