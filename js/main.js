$(function() {
  /*fixed header */
  var header = $("#header");
  var intro = $("#intro");
  var introH = intro.innerHeight();
  var scrolPos = $(window).scrollTop();
  var nav = $("#nav");
  var navToggle = $("#navToggle");

  checkScroll(scrolPos, introH);

  $(window).on("scroll resize", function() {
    var introH = intro.innerHeight();
    scrolPos = $(this).scrollTop();
    checkScroll(scrolPos, introH);
  });
  function checkScroll(scrolPos, introH) {
    if (scrolPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*smoth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockID = $(this).data("scroll");
    var blockOffset = $(blockID).offset().top;
    nav.removeClass("show");
    $("html, body").animate(
      {
        scrollTop: blockOffset - 70
      },
      800
    );
  });
  /*navToggle*/
  navToggle.on("click", function(event){
    event.preventDefault();
    nav.toggleClass("show");
  });
  /*reviews slider https://kenwheeler.github.io/slick/*/
  var slider = $("#reviewsSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows: false,
    dots: true
  });

});
