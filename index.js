var mouseX = 0;
var mouseY = 0;

$(document).mousemove(function(e) {
    // offset the images
    $("#glitter1").css({left:e.pageX, top:e.pageY});
    $("#glitter2").css({left:e.pageX, top:e.pageY});
    $("#glitter3").css({left:e.pageX, top:e.pageY});

    if (e.pageY < mouseY) {
        console.log('Moving Up');
    } else {
        console.log('Moving Down');
    }
    mouseY = e.pageY;
    
    if (e.pageX < mouseX) {
        console.log('Moving Left');
    } else {
        console.log('Moving Right');
    }
    mouseX = e.pageX

});