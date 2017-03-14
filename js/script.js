

    $(function() {
        $("#imgBubble").hover(
            function() {
                $(this).attr("src", "pictures/animated.gif");
            },
            function() {
                $(this).attr("src", "pictures/static.gif");
            }                         
        );                  
    });
