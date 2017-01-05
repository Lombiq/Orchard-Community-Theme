$(document).ready(function () {
    var item = $(".menu .dropdown .current");

    item.removeClass("current");
    item.parent().parent().addClass("current");
});