$(window).scroll(function () {
    let scroll_posit = $(window).scrollTop() * .2;
    $('.maincontainer').css({
        'background-position-x': -scroll_posit + 'px',
    })
})