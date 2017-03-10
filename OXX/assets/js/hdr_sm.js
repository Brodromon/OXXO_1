$(document).ready(function() {
    
       $('.logo').on('click', function(){
            $('.header').animate({
                 height: '240px'
             }, "fast")
        });
        $(this).scroll(function(){
        $('.header').animate({
                 height: '120px'
             }, "fast")
        
    });
        
})