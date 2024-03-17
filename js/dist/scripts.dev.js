"use strict";

(function () {
  //Funcionalidad del swipper.
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      964: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      }
    }
  }); //funcionalidad accordion

  var accordions = document.querySelectorAll(".accordion");

  var openAccordion = function openAccordion(accordion) {
    var content = accordion.querySelector(".accordion__content");
    accordion.classList.add("accordion__active");
    content.style.maxHeight = content.scrollHeight + "px";
  };

  var closeAccordion = function closeAccordion(accordion) {
    var content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("accordion__active");
    content.style.maxHeight = null;
  };

  accordions.forEach(function (accordion) {
    var intro = accordion.querySelector(".accordion__intro");
    var content = accordion.querySelector(".accordion__content");

    intro.onclick = function () {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        accordions.forEach(function (accordion) {
          return closeAccordion(accordion);
        });
        openAccordion(accordion);
      }
    };
  }); //Funcionalidad de modal

  var openModalButtons = document.querySelectorAll('.open-modal');
  var modal = document.querySelector('.modal');
  var closeModalButtons = document.querySelectorAll('.close-modal');
  openModalButtons.forEach(function (openBtn) {
    openBtn.addEventListener('click', openModal);
  });

  function openModal() {
    modal = document.querySelector('.modal');
    modal.classList.add('visible');
    closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(function (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    });
  }

  function closeModal() {
    modal = document.querySelector('.modal');
    modal.classList.remove('visible');
  } //Observamos si el menú superior se ve en pantalla
  //// Create a new IntersectionObserver object


  var observer = new IntersectionObserver(function (entries, observer) {
    console.log('An intersection happened!');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        if (!entry.isIntersecting) {
          document.querySelector('.header__container').classList.add('sticky');
        } else {
          document.querySelector('.header__container').classList.remove('sticky');
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }); // The element to observe

  var app = document.querySelector('p.header__submit'); // Observe the #app element

  observer.observe(app); /// Scroll to function

  document.querySelectorAll('a.header__links--item').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var URL = event.target.href.split('#');
      var targetElement = document.querySelector('#' + URL[1]);
      event.preventDefault();
      window.scroll({
        top: targetElement.offsetTop - 80,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
})();