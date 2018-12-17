$(document).ready(function () {

    /**
     * Defaults
     */

    $("#comment-btn").attr("disabled", "disabled");
    $("#comment-area").val("");
    $("#editBtnSure").attr('disabled', 'disabled');


    /**
     * Load comment and insert it to html
     * @type {Comment}
     */
    // var obj = new Comment(0);
    // obj.creation();


    /**
     * Handlers
     */


    /**
     * Handle actions for comment-btn
     */

    $("#comment-btn").click(function (e) {
        e.preventDefault();

        /**
         * Get the comment text
         */

        var comment = $("#comment-area").val();
        var date = new Date().toJSON().slice(0, 10);


        /**
         * create the new comment ;
         * @type {Comment}
         */
        var obj = new Comment();
        obj.text = comment;
        obj.date = date;
        document.getElementById("comments-area").innerHTML += obj.createHtml();
        obj.addEvents();

        /**
         * clear the comment area
         */
        $("#comment-area").val("");

        /**
         * make the comment button disabled
         */

        $("#comment-btn").attr('disabled', 'disabled');

    });


    $("#comment-area").on("keyup change click", function () {

        var comment = $("#comment-area").val().trim();

        /**
         * Check if the comment-area is empty or not
         */

        if (comment.length != 0) {
            /**
             * the comment area is not empty
             * Remove the disabled attr
             */

            $("#comment-btn").removeAttr('disabled');
        } else {

            /**
             * the comment area is empty
             * add the disabled attr
             */

            $("#comment-btn").attr("disabled", "disabled");
        }

    });



        /**
         * Delete comment
         */

        $("#deleteBtnSure").click(function () {

            /**
             * Remove the reply or comment
             */
            $(idToDelete).remove();
            $("#modalDelete").modal("hide");

            /**
             * Split the id to get the the length
             * and determine if the item deleted is
             * comment or reply
             * @type {string[]}
             */
            let splitedId = idToDelete.split('-');

            if(splitedId.length > 3)
            {
                /**
                 * The item is reply
                 * so decrease the num of replies which in stored in element
                 * with id '#comment-{number}-numOfReplies'
                 * @type {string}
                 */
                let numOfRepliesId = splitedId[0] + "-" + splitedId[1] + "-numOfReplies";
                let numOfReplies = parseInt($(numOfRepliesId).text()) - 1;
                console.log(numOfReplies);
                $(numOfRepliesId).text(""+numOfReplies);
            }


        });


        /**
         * Edit sure
         */

        $("#editBtnSure").click(function () {

            /**
             * get the new comment
             * edit it
             * @type {string}
             */

            var newComment = $("#editComment").val();
            $(idToEdit).text(newComment);
            $("#modalEdit").modal("hide");
        });



    $("#editForm").on("keyup change", function () {


        var oldComment = $(idToEdit).text();

        var newComment = $("#editComment").val();

        /**
         * if the old comment != new comment
         */

        if (oldComment != newComment && newComment.length != 0) {
            $("#editBtnSure").removeAttr('disabled');
        } else {
            $("#editBtnSure").attr('disabled', 'disabled');
        }


    })



});
