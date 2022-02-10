$(window).scroll(function () {
    let scroll_posit = $(window).scrollTop() * .2;
    $('.maincontainer').css({
        'background-position-x': -scroll_posit + 'px',
    })
});

let line = ".underline span";

$(".site-footer")
    .mouseover(function () {
        $(line).css("display", "block");

    })
    .mouseout(function () {
        $(line).css("display", "none");
    });