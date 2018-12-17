idToEdit_a = null;
idToDelete_a = null;
$(document).ready(function () {

    $('#edit-topic-btn-sure-a').attr('disabled', 'disabled');


    /**
     * Handle the event when the admin click on edit topic icon
     * a modal is shown with input form to edit the topic
     * title
     * content
     * date
     */

    $('.fa-edit').click(function (e) {


        let dataTarget = e.currentTarget.id.split('-');
        let id = dataTarget[1];

        idToEdit_a = id;

        let titleId = '#topic-' + id + '-title-a';
        let contentId = '#topic-' + id + '-content-a';
        let dataId = '#topic-' + id + '-date-a';

        let title = $(titleId).text();
        let content = $(contentId).text();
        let date = $(dataId).text();
        console.log(date.slice(0, 10));

        $("#edit-title-a").val(title);
        $("#edit-content-a").val(content);
        $("#edit-date-a").val(date);

        $("#modal-edit-topic-a").modal('show');
    });


    $('#edit-topic-btn-sure-a').click(function (e) {

        /**
         * Get the edit data and send it to ajax
         */

        let title = $("#edit-title-a").val();
        let content = $("#edit-content-a").val();
        let date = $("#edit-date-a").val();

        /**
         * prepare
         * @type {{topicId: number, title: (val|jQuery), content: (string), date: (date)}}
         */
        let passedData = {topicId: parseInt(idToEdit_a), title: title, content: content, date: date};
        console.log(passedData);
        editTopicAjaxAdmin(passedData);


    });

    /**
     * Focus the cursor of writing on title
     */
    $('#modal-edit-topic-a').on('shown.bs.modal', function () {
        $('#edit-Title').trigger('focus')
    });

    /**
     * handle the disable and enable button of the edit form topic
     *
     */

    $("[id^=form-edit-topic-]").on("keyup change", function (e) {

        var dataTarget = e.currentTarget.id.split("-");

        let topicId = dataTarget[3];

        let titleId = "#topic-" + topicId + "-title-i-a";
        let contentId = "#topic-" + topicId + "-content-i-a";


        let oldTitle = $(titleId).val();
        let oldContent = $(contentId).val();


        // let newTitle = $("#edit-title-a").val();
        // let newContent = $("#edit-content-a").val();
        // let newDate = $("#edit-date-a").val();

        /**
         * if the old topic data != new topic
         */

        $("#edit-btn-topic-" + topicId).removeAttr('disabled');

        // if (oldTitle != newTitle || oldContent != newContent || oldDate != newDate) {
        //     $("#edit-topic-btn-sure-a").removeAttr('disabled');
        // } else {
        //     $("#edit-topic-btn-sure-a").attr('disabled', 'disabled');
        // }


    });


    /**
     * Handle clicking on delete button
     * show modals of message ensure deleteing
     */

    $("[id^=edit-topic-]").click(function (e) {

        let topicId = e.currentTarget.id.split("-")[2];
        idToDelete_a = parseInt(topicId);
        $("#modal-delete-topic-admin").modal('show');

    });


    $("#delete-btn-sure-admin").click(function () {

        let passedData = {topicId: idToDelete_a};
        deleteTopicAjaxAdmin(passedData);
        $("#modal-delete-comment-admin").modal('hide');

    });


    /**
     * Handling edit on title and content of topic
     */

    $("[id^=topic-]").click(function (e) {

        /**
         * Hide the clicked Item
         * @type {*|string[]}
         */

        let dataTarget = e.currentTarget.id.split("-");
        let type = dataTarget[3];

        if (type == 'p') {
            let paragraphHeight = $("#" + e.currentTarget.id).height();
            $("#" + e.currentTarget.id).toggleClass('d-none');
            dataTarget[3] = 'i';
            let fullId = "#" + dataTarget.join("-");

            $(fullId).toggleClass('d-none').height(paragraphHeight);
            idToEdit_a = parseInt(dataTarget[1]);

            let editBtnId = '#edit-btn-topic-' + idToEdit_a;
            let cancelBtn = '#cancel-btn-topic-' + idToEdit_a;
            let deleteBtn = '#delete-btn-topic-' + idToEdit_a;

            $(editBtnId).removeClass('d-none').attr('disabled', 'disabled');
            $(cancelBtn).removeClass('d-none');
            $(deleteBtn).addClass('d-none');

        }

    });


    /**
     * Handling on clicking on edit button
     * send Ajax to
     */
    $("[id^=edit-btn-topic-]").click(function (e) {

        var dataTarget = e.currentTarget.id.split("-");

        console.log(dataTarget);

        let topicId = dataTarget[3];
        console.log(topicId);

        let titleId = "#topic-" + topicId + "-title-i-a";
        let contentId = "#topic-" + topicId + "-content-i-a";

        let title = $(titleId).val();
        let content = $(contentId).val();

        let passedData = {topicId: parseInt(topicId), title: title, content: content};
        editTopicAjaxAdmin(passedData);

    });

    /**
     * Handling clicking on cancel
     */
    $("[id^=cancel-btn-topic-]").click(function (e) {

        var dataTarget = e.currentTarget.id.split("-");

        let topicId = dataTarget[3];

        let titleId_i = "#topic-" + topicId + "-title-i-a";
        let contentId_i = "#topic-" + topicId + "-content-i-a";

        $(titleId_i).addClass('d-none');
        $(contentId_i).addClass('d-none');

        let titleId_p = "#topic-" + topicId + "-title-p-a";
        let contentId_p = "#topic-" + topicId + "-content-p-a";

        $(titleId_p).removeClass('d-none');
        $(contentId_p).removeClass('d-none');


        /**
         * Remove cancel button
         */
        $("#" + e.currentTarget.id).addClass('d-none');

        /**
         * Get the id of edit button
         * add class d-none
         */
        let editId = '#edit-btn-topic-' + topicId;

        $(editId).addClass('d-none');

    });

    /**
     * Handling clicking on delete button
     */
    $("[id^=delete-btn-topic-]").click(function (e) {

        let dataTarget = e.currentTarget.id.split("-")

        let topicId = dataTarget[3];

        idToDelete_a = topicId;
    });

});


