$(document).ready(function() {
    
    var divToMove = $(".box");
    var body = $("body");
    
    var clickHandler = function(event) {  
        var top = event.clientY - divToMove.height()/2;
        var left = event.clientX - divToMove.width()/2;
        
        divToMove.animate({
           left: left,
           top: top
       }, 500)
    }

    body.click(clickHandler)

    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false
      });
})
