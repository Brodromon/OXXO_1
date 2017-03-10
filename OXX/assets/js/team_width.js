$(document).ready(function() {
    var wdt = $('body').width();
    if (wdt < 1200) {
        $('#teamMain').removeClass('container');
    }
    console.log(wdt);
    if (wdt < 992) {
        $('#f_bot_cont').removeClass('container');
         $('#f_bot_cont').css({paddingLeft: "20px"})
    }
    
});