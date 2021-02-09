$(document).ready(function () {
   // headerBurger event "onclick"
   $('.header__burger').click(function (e) { 
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.slider').slick({
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
            }
         }
      ]
   });
});