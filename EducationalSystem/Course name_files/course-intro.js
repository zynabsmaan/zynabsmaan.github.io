/**
 * Handle action on click fa fa-caret
 * when clicking and the content of lessons
 * is hidden, the content of lessons appears.
 */
$("[id^=course_]").click(function (e) {
    /**
     * Gey the id of the span
     */
    var fullId = e.currentTarget.id.split('_');

    /**
     * the content id EX. content_1
     */
    var contentId = "#content_" + fullId[3];

    $(contentId).toggleClass('d-none');

});