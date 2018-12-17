/**
 * the number of comments
 * @type {number}
 */
counter = 1;

/**
 * the id of the comment or reply to be deleted.
 * @type {string}
 */
idToDelete = "";

/**
 * the id of the comment or reply to be edited.
 * @type {string}
 */
idToEdit = "";

function Comment(id) {
    this.prefix = "comment-" + counter;
    this.body = this.prefix + "-body";
    this.dropdown = this.prefix + "-dropdown";
    this.delete = this.prefix + "-delete";
    this.edit = this.prefix + "-edit";
    this.img = this.prefix + "-imgUser"
    this.nameId = this.prefix + "-name";
    this.name = "user";
    this.like = this.prefix + "-like";
    this.numOfLike = this.prefix + "-numOfLike";
    this.dislike = this.prefix + "-dislike";
    this.numOfDisLike = this.prefix + "-numOfDislike";
    this.reply = this.prefix + "-reply";
    this.numOfReplies = this.prefix + "-numOfReplies";
    this.replyInput = this.prefix + "-reply-input";
    this.replyBtn = this.prefix + "-reply-btn";
    this.replis = this.prefix + "-repliesArea";
    this.textId = this.prefix + "-text";
    this.text = "";
    this.dateId = this.prefix + "-date";
    this.date = "";
    this.form = this.prefix + "-form-reply";
};


Comment.prototype.createHtml = function () {


    var html = " <div class=\"card border border-primary p-4 mb-3\" id='" + this.prefix + "'" +
        "                    <div class=\"card-body\" id='" + this.body + "'>" +
        "                        <div class=\"media \">" +
        "                            <img class=\"mr-3\" src=\"images/profile.png\" alt=\"profile user image\" height=\"50px\"\n" +
        "                                 width=\"50px\" id='" + this.img + "'>\n" +
        "                            <div class=\"media-body\">" +
        "                                <div class=\" clearfix\">" +
        "                                    <div class=\"dropdown\">" +
        "                                         <span class=\"fa fa-align-justify float-right text-primary pointer-cursor\"\n" +
        "                                                  id='" + this.dropdown + "'" +
        "                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" " +
        "                                                  aria-expanded=\"false\"></span>" +
        "                                                           <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">" +
        "                                                                      <div class=\"dropdown-item text-primary bg-white pointer-cursor\" id='" + this.edit + "'" +
        "                                                                       data-toggle=\"modal\" data-target=\"#modalEdit\">" +
        "                                                                       <i class=\"fa fa-edit mr-3\" ></i>Edit</div>" +
        "                                                                      <div class=\"dropdown-item text-primary bg-white pointer-cursor\" id='" + this.delete + "'" +
        "                                                                      data-toggle=\"modal\" data-target=\"#modalDelete\" >" +
        "                                                                      <i class=\"fa fa-trash mr-3\"></i>Delete</div>" +
        "                                                           </div>" +
        "                                       </div>" +
        "                                </div>" +

        "                                <h5 class=\"mt-0\" id='" + this.nameId + "'>" + this.name + "</h5>\n" +
        "                                <date class='text-gray' id='" + this.dateId + "'>" + this.date + "</date>\n" +
        "                                <p id='" + this.textId + "' class='mt-3'>" + this.text + "</p>" +
        "                                <div class=\"text-right\">" +
        "                                 <span class=\"animated fadeInUpBig text-gray display-9\" id='" + this.numOfLike + "'>0</span>" +
        "                                    <span class=\"fa fa-thumbs-up pointer-cursor text-gray \" id='" + this.like + "'></span>" +
        "                                     <span class=\"animated fadeInUpBig text-gray display-9\" id='" + this.numOfDisLike + "'>0</span>" +
        "                                    <span class=\"fa fa-thumbs-down pointer-cursor text-gray\" id='" + this.dislike + "'></span>" +
        "                                     <span class=\"animated fadeInUpBig text-gray display-9\" id='" + this.numOfReplies + "'>0</span>" +
        "                                    <span class=\"fa fa-reply pointer-cursor text-gray\" id='" + this.reply + "'></span>" +
        "                                </div> " +
        "                                <div>Replies</div>" +
        "                                <hr>" +


        "                                <div id='" + this.replis + "'>" +
        "                                    <form  class=\"mt-3 d-none\" id='" + this.form + "'>" +
        "                                        <div class=\"form-group \">" +
        "                                            <label for='" + this.replyInput + "' class=\"sr-only\">Reply</label>" +
        "                                                <textarea name='" + this.replyInput + "' id='" + this.replyInput + "' onkeyup='onKeyUpInputReply(event)' class=\"form-control mb-3\" rows=\"1\"></textarea>" +
        "                                            <div class='clearfix'>" +
        "                                                <button  onclick='onclickBtnReply(event)'  class=\"btn btn-primary text-white replyClass float-right\" id='" + this.replyBtn + "' disabled>Reply</button>" +
        "                                            </div>" +
        "                                            </div>" +
        "                                    </form>" +
        "                                </div>" +
        "                                </div>" +

        "                            </div>" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";
    counter++;
    return html;
};


Comment.prototype.addEvents = function () {
    /**
     * Handle Actions of dropdown menus
     * Edit and Delete actions. the function extracts the
     * id and then figures out if the user clicked edit or
     * delete from id.
     * Delete: store id and the delete the comment .
     * Edit: take the comment or reply into from. enables
     * the user to add modifications and send the new
     * comment to the view.
     */

    $(".dropdown .dropdown-item").click(function (e) {
        var dataTarget = e.currentTarget.id.split("-");
        var id = dataTarget[1];
        var key = dataTarget[2];

        if (key == "delete") {
            /**
             * the user click on delete
             * show modals
             * store id
             */
            $("#modalDelete").modal("show");
            idToDelete = "#comment-" + id;
        } else if (key == 'edit') {

            /**
             * the user click on edit
             * take the comment
             * show modals
             * store id
             */
            var textId = "#comment-" + id + "-text";
            var text = $(textId).text();
            $("#editComment").val(text);
            $("#modalEdit").modal("show");
            idToEdit = id;
        }

    });


    /**
     * Handle the event on clicking on the icon font reply
     * makes the form visible and if the reply icon press
     * again makes it invisible means apply toggleClass
     * d-none
     */

    $(".fa-reply").click(function (e) {
        var id = e.currentTarget.id.split("-")[1];
        var formId = "#comment-" + id + "-form-reply";
        $(formId).toggleClass('d-none');


    });


    /**
     * Handle the event on clicking on the icon font thumbs
     * up. makes the icon font color to be blue add one the
     * number of likes. and if clicked again remove the color
     * and decrease the number of likes by 1. it means using
     * toggleClass.
     */

    $(".fa-thumbs-up").click(function (e) {

        /**
         * first after clicking on like
         * dislike should be disables
         */
        var numOfId = e.currentTarget.id.split('-')[1];
        var dislikeIconId = "#comment-" + numOfId + "-dislike";
        if ($(dislikeIconId).hasClass('text-gray')) {
            /**
             * Get the id of like to change it's color
             * @type {string}
             */
            var likeId = "#" + e.currentTarget.id;


            /**
             * change the number of likes
             * get the id of number of likes as numOfLikeId (number)
             */


            var numOfLikeId = "#comment-" + numOfId + "-numOfLike";
            var counterLikesOfComment = parseInt($(numOfLikeId).text());

            /**
             * check if the user want to add like or remove like
             */

            if ($(likeId).hasClass('text-gray')) {
                counterLikesOfComment += 1;
                $(dislikeIconId).attr('disabled', 'disabled');
            } else {
                counterLikesOfComment -= 1;
                $(dislikeIconId).removeAttr('disabled');
            }


            /**
             * Toggle class
             * change the number of likes
             */
            $(likeId).toggleClass('text-gray text-primary');
            $(numOfLikeId).text("" + counterLikesOfComment);
        }

    });


    /**
     * Handle the event on clicking on the icon font thumbs
     * down. makes the icon font color to be blue minus one
     * the number of likes. and if clicked again remove the
     * color and add 1 to the number of dislikes. it means
     * using toggleClass.
     */
    $(".fa-thumbs-down").click(function (e) {


        /**
         * first after clicking on like
         * dislike should be disabled
         */
        var numOfId = e.currentTarget.id.split('-')[1];
        var likeIdIcon = "#comment-" + numOfId + "-like";
        if ($(likeIdIcon).hasClass('text-gray')) {
            /**
             * Get the id of like to change it's color
             * @type {string}
             */
            var dislikeId = "#" + e.currentTarget.id;


            /**
             * change the number of likes
             * get the id of number of likes as numOfLikeId (number)
             */

            var numOfDisLikeId = "#comment-" + numOfId + "-numOfDislike";
            var counterDisLikesOfComment = parseInt($(numOfDisLikeId).text());

            /**
             * check if the user want to add like or remove like
             */

            if ($(dislikeId).hasClass('text-gray')) {
                counterDisLikesOfComment -= 1;

            } else {
                counterDisLikesOfComment += 1;

            }


            /**
             * Toggle class
             * change the number of likes
             */
            $(dislikeId).toggleClass('text-gray text-primary');
            $(numOfDisLikeId).text("" + counterDisLikesOfComment);

        }

    });





};

/**
 * This method handle the action on clicking on the Reply
 * take the reply and create reply using ReplyPrototype
 * make the reply button disabled and remove any input
 * from replyInput textarea
 * @param e
 */
function onclickBtnReply(e) {
    e.preventDefault();
    /**
     * handle action on clicking reply button
     * take the input reply and insert it in
     * replies area
     */

    /**
     * get the identifier of the comment
     * @type {*|string}
     */

    var id = e.currentTarget.id.split("-")[1];

    /**
     * Get id of the reply input area
     * @type {string}
     */
    var replyInputId = "#comment-" + id + "-reply-input";

    /**
     * get the input reply area
     * and store it in the reply
     * @type {*|void|jQuery}
     */
    var reply = $(replyInputId).val();

    /**
     * Clear the input reply area
     */
    $(replyInputId).val();


    /**
     * get the number of replies of this comment
     * to give beside prefix
     */

    var repliesAreaId = "#comment-" + id + "-repliesArea";
    /**
     * Get number of childern to determine the number of replies
     * @type {jQuery}
     */
    var count = $(repliesAreaId).children().length;

    /**
     * add 1 to the number of replies
     */

    let numOfRepliesId = "#comment-" + id + "-numOfReplies";
    let numOfReplies = parseInt($(numOfRepliesId).text()) + 1;
    $(numOfRepliesId).text("" + numOfReplies);

    /**
     *Create replies using the Reply of prototype
     * @type {Reply}
     */

    var date = new Date().toJSON().slice(0, 10);
    var obj = new Reply(id, count);
    obj.date = date;
    obj.text = reply;
    obj.creation();


    /**
     * Make the reply button disabled
     */


    $("#" + e.currentTarget.id).attr('disabled', 'disabled');


}

/**
 * the function is used to handle the event onkeyUpInput
 * when user press any kay the method check if the length
 * of the input is greater than 0 and the enable reply button
 * if the input length is equal to 0 the reply button is disabled
 * @param e
 */
function onKeyUpInputReply(e) {

    /**
     * the id of the replyButton
     *
     */

    var inputBtn = "#comment-" + e.currentTarget.id.split('-')[1] + "-reply-btn";


    /**
     * Get the reply input
     *
     */
    var reply = $("#" + e.currentTarget.id).val().trim();


    /**
     * check the reply length
     */
    if (reply.length == 0) {
        /**
         * There is no input
         */
        $(inputBtn).attr('disabled', 'disabled');
    } else {

        /**
         * there is an input
         */

        $(inputBtn).removeAttr('disabled');
    }


}


Comment.prototype.creation = function () {


    for (var i = 1; i < 1; i++) {
        var proto = new Comment(i);

        document.getElementById("comments-area").innerHTML += proto.createHtml();
    }


};