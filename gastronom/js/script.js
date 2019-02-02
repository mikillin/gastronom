$( document ).ready(function() {
var acc = $("#accordion");
acc.bind("click", function() {
            acc.toggleClass("active");
            var panel = $(".subitems");

            if (panel.css("display") === "inline-block") {
                panel.css("display", "none");
            } else {
                panel.css("display", "inline-block");
}
});
});