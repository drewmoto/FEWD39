//1. DONE - Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
// 2. DONE - Give each paragraph a yellow background only when the mouse is over it.
// 3. DONE - Make a click of the title (<h2>) and simultaneously fade it to 25 percent opacity
// 4. DONE - and grow its left-hand margin to 20px.
// 5. DONE - Then, when this animation is complete, fade the speech text to 50 percent opacity.

$(document).ready(function() {
    $('body').fadeIn();
});

$("p").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "");
});

$("h2").on("click", function() {
    $("h2").fadeTo(1000, 0.25);
    $("h2").css("margin-left", 20 +"px");
    $("p").fadeTo(1000, 0.50);
});
