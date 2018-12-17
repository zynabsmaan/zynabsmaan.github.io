/**
 * The ajax for checking for username
 * @param passedData
 */

function checkUsernameAjax(passedData) {
    $("#username-load").show();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    x = $.ajax(
        {
            url: "/checkUsername",
            type: "POST",
            data: passedData
        });

    x.done(processCheckUsernameAjax);
}

function processCheckUsernameAjax(response) {

    $("#username-load").hide();

    /**
     * Accept the response from the ajax
     */
    if (response['success'] == 0) {
        /**
         * the usernma is accepted
         */
        $("#username-help-signup").hide();

        validateUsername = 1;
    } else {

        /**
         * the username is already taken
         */

        $("#username-help-signup").show().text("The username is already taken, please change it.");
        validateUsername = 0;
    }


}

/**
 * The ajax for checking for email
 *
 * @param passedData
 */
function checkEmailAjax(passedData) {

    $("#email-load").show();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    x = $.ajax(
        {
            url: "/checkEmail",
            type: "POST",
            data: passedData
        });

    x.done(processCheckEmailAjax);
}

function processCheckEmailAjax(response) {

    $("#email-load").hide();
    /**
     * Accept the response from the ajax
     */
    if (response['success'] == 0) {
        /**
         * the usernma is accepted
         */

        $("#email-help-signup").hide();
        validateEmail = 1;
    } else {

        /**
         * the username is already taken
         */

        $("#email-help-signup").show().text("The email is already taken, please change it.");
        validateEmail = 0;
    }


}