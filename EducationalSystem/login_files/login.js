function validateFormLogin() {
    //Email pattern
    var emailPattern = RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");


    //Get email values and password
    var email = $("#email-login").val().trim();
    $("#email-login").val(email);
    var password = $("#password-login").val();

    var validateEmail = 0;
    var validatePassword = 0;

    /*
    *Check if the input email match special pattern*/
    if (emailPattern.test(email) & email.length<100) {

        /*
        *The email matches
        */

        $("#email-help").hide();
        validateEmail = 1;
    } else {

        /*
       *The email doesn't match
       */

        $("#email-help").show().text("Please enter a valid email");
        validateEmail = 0;

    }


    /*
    * Check if input password is more than 5 in length
    * */
    if (password.length > 5) {
        /*
        * The password is good
        * */

        $("#password-help").hide();
        validatePassword = 1;

    } else {

        /*
        * the password is less than 5
        * */

        $("#password-help").show().text("The password length can't be less than 5");
        validatePassword = 0;
    }


    if (validateEmail == 1 & validatePassword == 1) {
        $("#submit-login").removeAttr("disabled");
    } else {
        $("#submit-login").attr("disabled", "disabled");
    }

}

$(document).ready(function () {




    /**
  * Validate the login email and password on loading the pge
  if the field of email and password are empty no warning
  messages. when the user statrs to input his username and
  password. the validation starts
  * */

    /**
    Check the filed of email and password isn't empty

    */

    var email = $("#email-login").val();
    var password = $("#password-login").val();

    if (email.length !== 0 || password.length !== 0)
    {
        console.log(email.length)
        validateFormLogin();
    }

    $("#loginForm").on("change click keyup", function () {
        validateFormLogin();
    });


});