$(document).ready(function() {
    
    $(window).scroll(function() {
        
         var st = $(this).scrollTop();
        $('#disc').css({
            
            "transform" : "translate(0%, -" + st/15 + "%)"
        });
        console.log(st);
        
        if ($(this).scrollTop() >= 860) {
            $('.hdr_about').addClass('anim');
            $('.aboutUs').addClass('animate');
        }
        else if ($(this).scrollTop() <= 859){
            $('.hdr_about').removeClass('anim');
            $('.aboutUs').removeClass('animate');
        }
        
        
        if (st >= 860 ) {
            
            $('.abt_top_menu').addClass('choosed');
            $('.abt_top_menu p').addClass('choosed');
        }
        else {
            $('.abt_top_menu').removeClass('choosed');
            $('.abt_top_menu p').removeClass('choosed');
        }
        if (st >=1729 ){
            $('.abt_top_menu').removeClass('choosed');
            $('.abt_top_menu p').removeClass('choosed');
            $('.who_top_menu').addClass('choosed');
            $('.who_top_menu p').addClass('choosed');
        }
        else {
            $('.who_top_menu').removeClass('choosed');
            $('.who_top_menu p').removeClass('choosed');
        }
        if (st >= 2380) {
            $('.who_top_menu').removeClass('choosed');
            $('.who_top_menu p').removeClass('choosed');
            $('.tm_top_menu').addClass('choosed');
            $('.tm_top_menu p').addClass('choosed');
        }
        else {
            $('.tm_top_menu').removeClass('choosed');
            $('.tm_top_menu p').removeClass('choosed');
        }
        if (st >= 3164) {
            $('.tm_top_menu').removeClass('choosed');
            $('.tm_top_menu p').removeClass('choosed');
            $('.prt_top_menu').addClass('choosed');
            $('.prt_top_menu p').addClass('choosed');
        }
        else {
            $('.prt_top_menu').removeClass('choosed');
            $('.prt_top_menu p').removeClass('choosed');
        }
        if (st >= 4359) {
            $('.prt_top_menu').removeClass('choosed');
            $('.prt_top_menu p').removeClass('choosed');
            $('.cl_top_menu').addClass('choosed');
            $('.cl_top_menu p').addClass('choosed');
        }
        else {
            $('.cl_top_menu').removeClass('choosed');
            $('.cl_top_menu p').removeClass('choosed');
        }
        
        
    });
    
});