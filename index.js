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
  });