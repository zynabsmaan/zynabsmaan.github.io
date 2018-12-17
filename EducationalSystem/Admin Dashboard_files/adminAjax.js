function getMainPageAjax() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {

            url: "/dashboard",
            type: "GET"
        });
}


function editTopicAjaxAdmin(passedData) {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
   var x = $.ajax(
        {

            url: "/editTopicAdmin",
            type: "POST",
            data: passedData
        });

    x.done(processDataEditTopicAjax);

}


function processDataEditTopicAjax(response) {

console.log(response);

if(response['topic'])
{
    let topic = response['topic'];
    let id = topic['id'];
    let titleId_p = "#topic-" + id + "-title-p-a";
    let contentId_p = "#topic-" + id + "-content-p-a";

    let titleId_i = "#topic-" + id + "-title-i-a";
    let contentId_i = "#topic-" + id + "-content-i-a";

    $(titleId_i).addClass('d-none');
    $(contentId_i).addClass('d-none');

    $(titleId_p).text(topic['topic_title']).removeClass('d-none');
    $(contentId_p).text(topic['topic_content']).removeClass('d-none');


}


}

/**
 * Delete Topic - Admin.
 */

function deleteTopicAjaxAdmin(passedData)
{
    console.log(passedData);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {

            url: "/deleteTopicAdmin",
            type: "GET",
            data: passedData
        });

    x.done(processDataDeleteTopicAjax)
}

function processDataDeleteTopicAjax(response) {

    if(response['deleted'])
    {
        console.log(response);
        getMainPageAjax();
    }
}


/**
 * Edit comment admin Ajax
 */
function editCommentAjaxAdmin(passedData) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {
            url: "/editCommentAdmin",
            type: "POST",
            data: passedData
        });
    x.done(processDataEditCommentAjax);
}

function processDataEditCommentAjax(response) {

    if(response['comment'])
    {
        /**
         * Get the comment data from response
         *
         */
        let comment = response['comment'];
        let id = comment['id'];

        /**
         * Prepare the the input of content and
         * the paragraph of content
         * @type {string}
         */
        let contentId_p = "#comment-" + id + "-content-p-a";
        let contentId_i = "#comment-" + id + "-content-i-a";

        /**
         * Remove input content and make the paragraph
         * content visible
         */
        $(contentId_i).addClass('d-none');
        $(contentId_p).text(comment['comment_content']).removeClass('d-none');

        /**
         * prepare the ids of buttons
         * edit - cancel - delete
         * @type {string}
         */
        let editBtnId = '#edit-btn-comment-' +id ;
        let cancelBtn = '#cancel-btn-comment-' + id;
        let deleteBtn = '#delete-btn-comment-' + id;

        /**
         * make edit, cancel  invisible
         */
        $(editBtnId).addClass('d-none').attr('disabled', 'disabled');
        $(cancelBtn).addClass('d-none');
        $(deleteBtn).removeClass('d-none');

    }
}


/**
 * Delete comment admin Ajax
 */
function deleteCommentAjaxAdmin(passedData) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {
            url: "/deleteCommentAdmin",
            type: "POST",
            data: passedData
        });
  //  x.done(processDataDeleteCommentAjax);
}

function processDataDeleteCommentAjax(response) {

}



/**
 * Edit reply admin Ajax
 */
function editReplyAjaxAdmin(passedData) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {
            url: "/editReplyAdmin",
            type: "POST",
            data: passedData
        });
    x.done(processDataEditReplyAjax);
}

function processDataEditReplyAjax(response) {

    if(response['reply'])
    {
        /**
         * Get the comment data from response
         *
         */
        let reply = response['reply'];
        let id = reply['id'];

        /**
         * Prepare the the input of content and
         * the paragraph of content
         * @type {string}
         */
        let contentId_p = "#reply-" + id + "-content-p-a";
        let contentId_i = "#reply-" + id + "-content-i-a";

        /**
         * Remove input content and make the paragraph
         * content visible
         */
        $(contentId_i).addClass('d-none');
        $(contentId_p).text(reply['content']).removeClass('d-none');

        /**
         * prepare the ids of buttons
         * edit - cancel - delete
         * @type {string}
         */
        let editBtnId = '#edit-btn-reply-' +id ;
        let cancelBtn = '#cancel-btn-reply-' + id;
        let deleteBtn = '#delete-btn-reply-' + id;

        /**
         * make edit, cancel  invisible
         */
        $(editBtnId).addClass('d-none').attr('disabled', 'disabled');
        $(cancelBtn).addClass('d-none');
        $(deleteBtn).removeClass('d-none');

    }
}


/**
 * Delete reply admin Ajax
 */
function deleteReplyAjaxAdmin(passedData) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    var x = $.ajax(
        {
            url: "/deleteReplyAdmin",
            type: "POST",
            data: passedData
        });
    //  x.done(processDataDeleteCommentAjax);
}

function processDataDeleteReplytAjax(response) {

}