$(document).ready(function() {
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $('.scroll').hide();
    /** $('.video').hide();
     $('.video1').hide(); **/
    $(document).scroll(function() {
        let y = $(this).scrollTop();
        /** let x=$(this).scrollTop();
         let n=$(this).scrollTop(); */
        if (y > 700) { $('.scroll').fadeIn('slow'); } else { $('.scroll').fadeOut('slow'); }
        /** if (x > 500){$('.video').fadeIn('slow');}
         if(n>600){$('.video1').fadeIn('slow')} */
    })
});