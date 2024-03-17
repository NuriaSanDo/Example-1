(function () {
    //Funcionalidad del swipper.
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            964: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });
    //funcionalidad accordion
    const accordions = document.querySelectorAll(".accordion");
    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("accordion__active");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("accordion__active");
        content.style.maxHeight = null;
    };
    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__intro");
        const content = accordion.querySelector(".accordion__content");

        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });
    //Funcionalidad de modal
    const openModalButtons = document.querySelectorAll('.open-modal');
    var modal = document.querySelector('.modal');
    var closeModalButtons = document.querySelectorAll('.close-modal');

    openModalButtons.forEach(openBtn => {
        openBtn.addEventListener('click', openModal)
    });



    function openModal() {
        modal = document.querySelector('.modal')
        modal.classList.add('visible');
        closeModalButtons = document.querySelectorAll('.close-modal')
        closeModalButtons.forEach(closeBtn => {
            closeBtn.addEventListener('click', closeModal)
        });
    }

    function closeModal() {
        modal = document.querySelector('.modal')
        modal.classList.remove('visible');
    }
})();