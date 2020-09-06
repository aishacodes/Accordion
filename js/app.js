$(document).ready(function() {
    $("button").click(function() {
        // console.log(e.originalEvent.target)
        $(this).toggleClass("active");
        $(".panel").css("display", "none");
        $(this).next().css('display', 'block');
    });
});