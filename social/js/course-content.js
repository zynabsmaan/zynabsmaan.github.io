

$(document).ready(function () {
    $("[id^=shrank-card-]").click(function (e) {
        var idNumber = e.currentTarget.id.split("-")[2];
        $("#"+e.currentTarget.id).hide();
        $("#extended-card-"+idNumber).show();
    });



    $("[id^=shrink-btn-]").click(function (e) {
        var idNumber = e.currentTarget.id.split("-")[2];
        $("#extended-card-"+idNumber).hide();
        $("#shrank-card-"+idNumber).show();

    });

});
