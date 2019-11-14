$(function() {
  var header = $("#header");
  var intro = $("#intro");
  var introH;
  var scrolPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    var introH = intro.innerHeight();
    scrolPos = $(this).scrollTop();
    if (scrolPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});
