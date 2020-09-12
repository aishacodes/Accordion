$(document).ready(function() {
    $('.head').click(function(e) {
        var link = $(this).attr('href');
        console.log(link);
        console.log(e);
        if ($(e.target).is('.active')) {
            $('.head').removeClass('active');
            console.log($('.panel'))
            $('.panel').removeClass('open').slideUp(350);
        } else {
            $('.head').removeClass('active');
            $('.panel').removeClass('open').slideUp(350);
            $(this).addClass('active');
            $(link).slideDown(350).addClass('open');

        }
    });
});