$(document).ready(function () {
    
    $('.abt_top_menu').click(function () {
        $("body").animate({"scrollTop": 860},"slow");
    });
     $('.who_top_menu').click(function () {
        $("body").animate({"scrollTop": 1650},"slow");
    });
     $('.tm_top_menu').click(function () {
        $("body").animate({"scrollTop": 2444},"slow");
    });
     $('.prt_top_menu').click(function () {
        $("body").animate({"scrollTop": 3154},"slow");
    });
     $('.cl_top_menu').click(function () {
        $("body").animate({"scrollTop": 4289},"slow");
    });
     $('.srvs_top_menu').click(function () {
        $("body").animate({"scrollTop": 4704},"slow");
    });
     $('.how_top_menu').click(function () {
        $("body").animate({"scrollTop": 5079},"slow");
    });
     $('.cont_top_menu').click(function () {
        $("body").animate({"scrollTop": 5949},"slow");
    });
    
    var st = $(this).scrollTop();
    var wdt = $('body').width();
    
  
    
        $('.logo').on('click', function(){
                    $('.header').animate({
                         height: '240px'
                     }, "fast");
                });
                $(this).scroll(function(){
                $('.header').animate({
                         height: '120px'
                     }, "fast");

            });

    
         
    
    
    
    
});
