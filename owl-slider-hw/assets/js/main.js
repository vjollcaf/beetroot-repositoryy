
    // $('.owl-carousel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     nav:true,
    //     dots:true,
    //     // autoplay:true,
    //     // autoplaySpeed:300,
    //     // smartSpeed:15000,
    //     autoplayHoverSpeed:true
    // });


    var  owl = $('#service').owlCarousel({
        items:1,
        loop:false,
        dots:false,
        singleItem:true
    });


    $('#previous').click(function(){
        owl.trigger('prev.owl.carousel');
    });
    
    $('#next').click(function(){
        owl.trigger('next.owl.carousel');
    });