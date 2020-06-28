$(document).ready(function(){
    $(".d1").fadeIn(1000);
    $(".d2").delay(4000).fadeIn(1000);
    $(".d3").delay(8000).fadeIn(1000);
    $(".d4").delay(11000).fadeIn(1000);
})
$(window).load(function(){
    // PAGE IS FULLY LOADED  
    // FADE OUT YOUR OVERLAYING DIV
    $('#overlay').fadeOut();
});
