$(document).ready(function() {
    var wdt = $('body').width();
    if (wdt < 1200) {
        $('#teamMain').removeClass('container');
    }
    console.log(wdt);
});