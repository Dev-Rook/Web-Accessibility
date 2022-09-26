const MobileMenu = document.querySelector(".Mobile-Menu");
const MenuIcon = document.querySelector("Menu-Icon");

let show = true;

const toggle = () => {
    if(show) {
        MobileMenu.style.display = "block";
        show = false;
    } else {
        MobileMenu.style.display = "none"
        show = true;
    }
}



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    breakpoints: {
      360: {
        width: 360,
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      380: {
        width: 380,
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      480: {
        width: 480,
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        width: 768,
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1920: {
        width: 1920,
        slidesPerView: 6,
        spaceBetween: 0,
      },
    }
  });