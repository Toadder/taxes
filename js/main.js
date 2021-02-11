$(document).ready(function () {
  // headerBurger event "onclick"
  $(".header__burger").click(function (e) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  // Slick Slider Settings
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
    cssEase: "ease",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    swipe: false,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          dots: false,
        },
      },
    ],
  });

  // Slow Scroll from btn to form
  $("a.btn").click(function () {
    let formHeight = $(".header").height() * 1.2;
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - formHeight + "px",
      },
      {
        duration: 1000,
        easing: "swing",
      }
    );
    return false;
  });

  //Check checkbox status
  $("#form__checkbox").on("change", function () {
    if ($("#form__checkbox").prop("checked")) {
      $(".form__btn").removeClass("disabled");
    } else {
      $(".form__btn").addClass("disabled");
    }
  });
});
