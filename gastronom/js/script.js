$( document ).ready(function() { 
var acc = $(".accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = $(".subitems");
    
     if (panel.css("display") === "inline-block") {
      panel.css("display","none");
    } else {
      panel.css("display" , "inline-block");
    }



  });
}});