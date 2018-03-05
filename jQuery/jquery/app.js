$(function() {
    $("li:first").addClass("border");
    $("li").addClass("upperCS");
    $("li.active").addClass("fontColor");
    var liIndex = Math.floor($("li").length / 2);
    $("li").eq(liIndex).addClass("bckgColor");
})