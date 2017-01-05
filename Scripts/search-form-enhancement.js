(function ($) {
    $(function () {
        var hintMessage = "Search...";
        var textbox = $(".search-form #q");

        textbox.val(hintMessage);

        textbox.focus(function () {
            if (textbox.val() === hintMessage) textbox.val("");
        });

        textbox.blur(function () {
            if (textbox.val() === "") textbox.val(hintMessage);
        });
    });
})(jQuery);