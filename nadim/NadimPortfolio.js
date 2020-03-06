$(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
        $('.navbar').css('background', '#378C3F');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});