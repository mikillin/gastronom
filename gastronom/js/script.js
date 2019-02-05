$(document).ready(function () {

    var acc = $("#accordion");
    acc.bind("click", function () {
        acc.toggleClass("active");

        var panel = $(".subitem");
        if (panel.css("display") === "inline-block") {
            panel.css("display", "none");
        } else {
            panel.css("display", "inline-block");
        }

    });


    var link = $(".link");
    link.bind("click", function (e) {
        e.stopPropagation()
        console.log($(this).attr("data-category"));
        if (e.target.id != "accordion")
            window.location.href = $(this).attr("data-category") + ".html";

    });
});