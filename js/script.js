$('.nav-burger-link').on('click', function() {
    $('.nav-burger-link').toggleClass('closed');
    $('.nav-menu').toggleClass('open');
})

$('.nav-menu-link').on('click', function() {
    $('.nav-menu').toggleClass('open');
    $('.nav-burger-link').toggleClass('closed');
});

