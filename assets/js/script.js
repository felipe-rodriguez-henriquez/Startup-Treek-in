

function myFunction() {
  var x = document.getElementById("nav__links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 



$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");
  
  for (var i = 0; i < tags.length; i++) {
  var tag = tags[i];
  
  if ($(tag).position().top < pageBottom) {
  $(tag).addClass("visible");
  } else {
  $(tag).removeClass("visible");
  }
  }
  });