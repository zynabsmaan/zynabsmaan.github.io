$(document).ready(function () {
    $("[id^=card_]").on("mouseenter", function (e) {
        $("#"+e.currentTarget.id).children().children().addClass("color");
    });
    $("[id^=card_]").on("mouseleave", function (e) {
        $("#"+e.currentTarget.id).children().children().removeClass("color");
    });

});