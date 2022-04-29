function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}


$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

    mainSlider()


    $(".header__burger").click(function() {
        $(this).addClass("header__burger--active")
        $(".header__mob-menu").addClass("header__mob-menu--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.header__mob-menu');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header__mob-menu").addClass("header__mob-menu--active")) {
                $(".header__mob-menu").removeClass("header__mob-menu--active")
                $(".header__burger").removeClass("header__burger--active")
            }
        }
    });

});