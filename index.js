var glitterOffset = 8; // The width and height of the image divided by 2

$(document).ready(function() {
    $(document).mousemove(function(e) {
        // offset the images
        $(".glitter").css({left:e.pageX - glitterOffset, top:e.pageY - glitterOffset});
    });
});
