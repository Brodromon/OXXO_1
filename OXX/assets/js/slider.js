$(document).ready(function(){
  $('.slider_resp_th').slick();
    
    $('.s_client_slider').slick();
    
    if ($('body').width() > 801 ) {
        $('.tech_slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        });
    }
        else if ($('body').width() <= 800) {
          $('.tech_slider').slick({
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1
        });
            $('#tech').removeClass('container');
            $('#tech').addClass('container-fluid');
        }
    
    
});
