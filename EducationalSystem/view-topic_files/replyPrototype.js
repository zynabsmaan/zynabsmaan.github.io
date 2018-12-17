function Reply(commentId, replyId) {
    this.commentId = commentId;
    this.replyId = replyId;
    this.prefix = "comment-" + this.commentId +"-reply-" + this.replyId;
    this.body = this.prefix + "-body";
    this.dropdown = this.prefix + "-dropdown";
    this.delete = this.prefix + "-delete";
    this.edit = this.prefix + "-edit";
    this.img = this.prefix + "-imgUser"
    this.nameId = this.prefix + "-name";
    this.name = "Zynab Smaan";
    this.like = this.prefix + "-like";
    this.numOfLike = this.prefix + "-numOfLike";
    this.dislike = this.prefix + "-dislike";
    this.numOfDisLike = this.prefix + "-numOfDislike";
    this.text = "";
    this.textId = this.prefix + "-text";
    this.dateId = this.prefix + "-date";
    this.date = "";
};



Reply.prototype.html = function () {

    let html = " <div class=\"media \" id='" + this.prefix + "'\">" +
        "                            <img class=\"mr-3\" src=\"view-topic_files/profile.png\" alt=\"profile user image\" height=\"50px\"\n" +
        "                                 width=\"50px\" id='" + this.img + "'>\n" +
        "                            <div class=\"media-body\">" +
        "                                <div class=\" clearfix\">" +
        "                                    <div class=\"dropdown\">" +
        "                                         <span class=\"fa fa-align-justify float-right text-primary pointer-cursor\"\n" +
        "                                                  id='" + this.dropdown + "'" +
        "                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" " +
        "                                                  aria-expanded=\"false\"></span>" +
        "                                                           <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">" +
        "                                                                      <div class=\"dropdown-item text-primary bg-white pointer-cursor\" id='"+this.edit+"'" +
        "                                                                       data-toggle=\"modal\" data-target=\"#modalEdit\">" +
        "                                                                       <i class=\"fa fa-edit mr-3\" ></i>Edit</div>" +
        "                                                                      <div class=\"dropdown-item text-primary bg-white pointer-cursor\" id='"+this.delete+"'" +
        "                                                                      data-toggle=\"modal\" data-target=\"#modalDelete\" >" +
        "                                                                      <i class=\"fa fa-trash mr-3\"></i>Delete</div>" +
        "                                                           </div>" +
        "                                       </div>" +
        "                                </div>" +

        "                                <h5 class=\"mt-0\" id='"+this.nameId+"'>"+this.name+"</h5>\n" +
        "                                <date class='text-gray' id='"+this.dateId+"'>"+this.date+"</date>\n" +
        "                                <p id='"+this.textId+"' class='mt-3'>"+this.text+"</p>" +
        "                                <div class=\"text-right\">" +
        "                                 <span class=\"animated fadeInUpBig text-gray display-9\" id='" + this.numOfLike + "'>0</span>" +
        "                                    <span class=\"fa fa-thumbs-up pointer-cursor text-gray\" id='"+this.like+"'></span>" +
        "                                    <span class=\"animated fadeInUpBig text-gray display-9\" id='" + this.numOfDisLike + "'>0</span>" +
        "                                    <span class=\"fa fa-thumbs-down pointer-cursor text-gray\" id='"+this.dislike+"'></span>" +
        "                                </div><hr> " +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";
    return html;
};

Reply.prototype.addEvents = function()
{

    /**
     * Handle Actions of dropdown menus
     * Edit and Delete actions. the function extracts the
     * id and then figures out if the user clicked edit or
     * delete from id.
     * Delete: store id and the delete the reply .
     * Edit: take the reply into from. enables the
     * user to add modifications and send the new
     * reply to the view.
     */

    $(".dropdown .dropdown-item").click(function (e) {
        var dataTarget = e.currentTarget.id.split("-");
        var commentID = dataTarget[1];
        var replyId = dataTarget[3];
        var key = dataTarget[4];
        var prefix = "#comment-" + commentID + "-reply-" + replyId;

        if (key == "delete") {
            /**
             * the user click on delete
             * show modals
             * store id
             */
            $("#modalDelete").modal("show");
            idToDelete = prefix;
        } else if (key == 'edit') {

            /**
             * the user click on edit
             * take the comment
             * show modals
             * store id
             */
            console.log(prefix);
            var textId = prefix + "-text";
            var text = $(textId).text();
            $("#editComment").val(text);
            $("#modalEdit").modal("show");
            idToEdit = textId;
        }

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

        let commentNumOfId = e.currentTarget.id.split('-')[1];
        let replyNumOfId = e.currentTarget.id.split('-')[3];
        let prefix = "#comment-" + commentNumOfId + "-reply-"+ replyNumOfId;
        var dislikeIconId = prefix +"-dislike";


        if ($(dislikeIconId).hasClass('text-gray')) {
            /**
             * Get the id of like to change it's color
             *
             */
            var likeId = "#" + e.currentTarget.id;


            /**
             * change the number of likes
             * get the id of number of likes as numOfLikeId (number)
             */


            var numOfLikeId = prefix + "-numOfLike";
            var counterLikesOfReply = parseInt($(numOfLikeId).text());

            /**
             * check if the user want to add like or remove like
             */

            if ($(likeId).hasClass('text-gray')) {

                counterLikesOfReply += 1;
            } else {
                counterLikesOfReply -= 1;

            }


            /**
             * Toggle class
             * change the number of likes
             */
            $(likeId).toggleClass('text-gray text-primary');
            $(numOfLikeId).text("" + counterLikesOfReply);
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
        let commentNumOfId = e.currentTarget.id.split('-')[1];
        let replyNumOfId = e.currentTarget.id.split('-')[3];
        let prefix = "#comment-" + commentNumOfId + "-reply-"+ replyNumOfId;
        var likeIdIcon = prefix +"-like";


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

            var numOfDisLikeId = prefix + "-numOfDislike";
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




}

Reply.prototype.creation = function () {

    /**
     * Create the html and adds event to it.
     * @type {string}
     */
    var id = "comment-" + this.commentId + "-repliesArea";
    document.getElementById(id).innerHTML += this.html();
    this.addEvents();



};