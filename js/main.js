(function($){

    //preloder
    setTimeout(function(){
        $('#loading').fadeOut(600);
        $('.wrapper-grid').css('display', 'grid');
    }, 1500);

    //animate scroll
    $('body').on('click', 'a[href^="#"]', function() {
        var clicked = $(this).attr("href"),
        destination = $(clicked).offset().top;            

        $("html,body").animate({
            scrollTop: destination
        }, 1200);

        return false;
    });

    //hamburger menu
    $('#nav-hamburger').on('click', function(){
        $(this).toggleClass('hamburger-menu-fixed');
        $(this).children().toggleClass('hamburger-menu-active');
        $('#nav ul').toggleClass('open-menu');
    });

    $('#nav ul').on('click', function(){
        $('#nav-hamburger').toggleClass('hamburger-menu-fixed');
        $('#nav-hamburger').children().toggleClass('hamburger-menu-active');
        $('#nav ul').toggleClass('open-menu');
    });

    // form submit
    $('#contact form').submit(function () {
        var name = $.trim($('input[name="Data[name]"]', this).val()),
        email = $.trim($('input[name="Data[email]"]', this).val()),
        phone = $.trim($('input[name="Data[phone]"]', this).val()),
        error = false;
        
        if (!name  || name.length < 3) {
            $('input[name="Data[name]"]').addClass('blink-input');
            error = true;
        }
        
        if (!email || email.length < 3) {
            $('input[name="Data[email]"]').addClass('blink-input');
            error = true;
        }
        
        if (!phone || phone.length < 7) {
            $('input[name="Data[phone]"]').addClass('blink-input');
            error = true;
        }

        setTimeout(function(){
            $('#contact input').removeClass('blink-input');
          }, 500);
        
        if(!error){
            return true;
        }
        return false;
    });

    //animate
    $(document).scroll(function () {
        var screenHeight = $(window).height(),
        screen = $(window).scrollTop(),
        aboutUs = $("#about-us-wrapper").offset().top-screenHeight,
        contact = $("#contact form").offset().top-screenHeight;

        if(screen >= aboutUs){
            $(".about-us-container").addClass('animated slideInUp');
        }
        
        if(screen >= contact){
            $("#contact input").addClass('animated pulse');
        }
    });

})(jQuery);
