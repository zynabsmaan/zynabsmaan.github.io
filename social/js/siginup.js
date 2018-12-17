/*Validators*/
validateFirstName = 0;
validateLastName = 0;
validateUsername = 0;
validateGender = 0;
validateEmail = 0;
validateType = 0;
validatePassword = 0;
validateRePassword = 0;


$(document).ready(function () {

    /***
     * clear username , email and password
     */

    $("#username-signup").val("");
    $("#email-signup").val("");
    $("#password-signup").val("");
    $("#submit-signup").attr("disabled", "disabled");
    $("#email-load").hide();
    $("#username-load").hide();

    /**
     * Validate sign up form
     * */

    $("#signupForm").on("change keyup click", function () {

        var firstName = $("#first-name-signup").val().trim();
        var lastName = $("#last-name-signup").val().trim();
        var gender = $("#gender-signup").val();
        var type = $("#type-signup").val();
        var password = $("#password-signup").val();
        var rePassword = $("#re-password-signup").val();


        /*
        * Patterns
        * */
        var namePattern = RegExp("[a-zA-Z]");


        /***
         * Apply trim and remove space
         */

        $("#first-name-signup").val(firstName);
        $("#last-name-signup").val(lastName);

        /**
         * Check if the first name matches the string pattern
         * */
        if (namePattern.test(firstName) && firstName.length < 100 && firstName.length > 6) {
            /**
             * the first name is okay
             * */

            validateFirstName = 1;
            $("#first-name-help-signup").hide();

        } else {

            /**
             * the first name isn't okay
             * */
            $("#first-name-help-signup").show().text("last name should be all string and the length shouldn't be more than 100.");
            validateFirstName = 0;
        }


        /**
         * Check if the last name matches the string pattern
         * */
        if (namePattern.test(lastName) && lastName.length < 100 && lastName.length > 6) {
            /*
            * the first name is okay
            * */

            validateLastName = 1;
            $("#last-name-help-signup").hide();

        } else {

            /*
            * the first name isn't okay
            * */
            $("#last-name-help-signup").show().text("last name should be all string and the length shouldn't be more than 100.");
            validateLastName = 0;
        }


        /**
         * Check if gender is chosen
         * */

        if (gender != 0) {
            /**
             * The gender is okay
             * */
            validateGender = 1;
            $("#gender-help-signup").hide();

        } else {

            /**
             * The gender is not okay
             * */
            validateGender = 0;
            $("#gender-help-signup").show().text("Please choose the gender.");
        }


        /**
         * Check if type is  chosen
         *
         */

        if (type != 0) {
            /**
             * type is chosen
             */

            $("#type-help-signup").hide();
            validateType = 1;
        } else {

            /**
             * the type isn't chosen
             */
            $("#type-help-signup").show().text("Please choose the type.");
            validateType = 0;
        }


        /**
         * check the password
         */
        if (password.length > 5 && password.length < 100) {
            /**
             * the password is okay
             */
            $("#password-help-signup").hide();
            validatePassword = 1;
        } else {

            /**
             * the password isn't okay
             */
            $("#password-help-signup").show().text("The password should be more than 5 and less than 100 characters.");
            validatePassword = 0;
        }


        /***
         * Check if the re-password is the same password
         */

        if (password != rePassword  &&  validatePassword == 1) {
            /***
             * the password doen't match
             */

            $("#re-password-help-signup").show().text("password doesn't match");
            validateRePassword = 0;

        } else {
            /**
             * Password is matching
             */

            $("#re-password-help-signup").hide();
            validateRePassword = 1;
        }


        console.log(validateFirstName, validateLastName,
            validateUsername, validateGender,
            validateEmail, validateType,
            validatePassword);

        if (validateFirstName == 1 && validateLastName == 1 &&
            validateUsername == 1 && validateGender == 1 &&
            validateEmail == 1 && validateType == 1 &&
            validatePassword == 1 && validateRePassword==1) {
            $("#submit-signup").removeAttr("disabled");
        }
        else {

            $("#submit-signup").attr("disabled", "disabled");
        }


    });


    /**
     * Validate the email
     */

    $("#email-signup").on("keyup click change", function () {

        var email = $("#email-signup").val().trim();
        $("#email-signup").val(email);

        //Email pattern
        var emailPattern = RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");

        /**
         * Validate email matches email pattern
         * */

        if (emailPattern.test(email)) {
            /**
             * the email matches the email pattern
             /**
             * Vcheck if the email ia already taken
             *
             */

            var passedData = {email: email};
            checkEmailAjax(passedData);


        } else {
            /**
             * The email doesn't match the pattern
             * **/
            $("#email-load").hide();
            $("#email-help-signup").show().text("Please enter a valid email.");
            validateEmail = 0;
        }


    });


    /**
     * Validate username
     */
    $("#username-signup").on("keyup click change", function () {


        var username = $("#username-signup").val().trim();


        //replace the value for the trimmed one
        $("#username-signup").val(username);


        // username pattern
        var usernamePattern = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*$");


        /**
         * Check if the username matches username pattern
         * */
        if (usernamePattern.test(username) && username.length > 5 && username.length < 100) {
            /**
             * The username is okay
             *
             * check if the username is taken from database
             */

            var passesData = {username: username};
            checkUsernameAjax(passesData);

        } else {

            /**
             * The username doesn't match all constraints
             * */
            $("#username-load").hide();
            $("#username-help-signup").show().text("The username should start with letters and the length shouldn't be more than 100.")

            validateUsername = 0;
        }


    })


});