function  increaseHeight()
{

}

$(document).ready(function () {

    $("#content_1").hide();


$("#comment-area").keypress(function(event) {


    // var keycode = (event.keyCode ? event.keyCode : event.which);

    if(event.keyCode == 13)
    {
        $("#comment-area").height($("#comment-area").height() + 30);
    }
});


$("#shrink-btn").click(function () {

    $("#extended-card-1").hide();
    $("#shrank-card-1").toggleClass("hide");
});

$("#shrank-card-1").click(function () {
    $("#shrank-card-1").toggleClass("hide");
    $("#extended-card-1").show();
})



$("#course_1_week_1").click(function () {
    $("#content_1").removeClass('d-none');
    $("#content_1").fadeToggle();
});




});