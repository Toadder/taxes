// Jquery
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
    autoplaySpeed: 4000,
    draggable: true,
    swipe: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  //Check checkbox status in the page (section-three)
  $("#form__checkbox").on("change", function () {
    if ($("#form__checkbox").prop("checked")) {
      $(".form__btn").removeClass("disabled");
    } else {
      $(".form__btn").addClass("disabled");
    }
  });

  // Check checkbox status the popup
  $("#popup-form__checkbox").on("change", function () {
    if ($("#popup-form__checkbox").prop("checked")) {
      $(".popup-form__btn").removeClass("disabled");
    } else {
      $(".popup-form__btn").addClass("disabled");
    }
  });
});

// Native JS
// Popups
(function () {
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelector(".lock-padding");

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close-popup");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup"));
        e.preventDefault();
      });
    }
  }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      currentPopup.classList.add("open");
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
      body.classList.remove("lock");
      body.style.paddingRight = "0px";
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener("keydown", function (e) {
    if (e.which == 27) {
      const popupActive = document.querySelector(".popup");
      popupClose(popupActive);
    }
  });
})();

// Change footer image on display less 640px
(function () {
  const footerImage = document.querySelector("#footer__img");
  if (window.matchMedia("(max-width: 640px)").matches) {
    footerImage.src = "img/common/logo.png";
  } else {
    footerImage.src = "img/common/logo-footer.png";
  }
})();
