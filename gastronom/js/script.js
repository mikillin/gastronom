$( document ).ready(function() {
var acc = $("#accordion");
acc.bind("click", function() {
acc.toggleClass("active");

var panel = $(".subitem");
if (panel.css("display") === "inline-block") {
panel.css("display", "none");
} else {
panel.css("display", "inline-block");
}
});


var link = $(".link");
link.bind("click", function() {
window.location.href = $(this).attr("data-category") + ".html";

});
});