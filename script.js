// ========== Swiper for Electronics ==========
var swiper = new Swiper(".electronics-mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
    },
  });
  
  // ========== Swiper for Banner ==========
  var swiper = new Swiper(".banner-mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-banner",
    },
  });
  
  // ========== Sidebar Toggle ==========
  const sidebarLogo = document.querySelector(".sidebar-logo");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const closeSidebar = document.getElementById("closeSidebar");
  
  sidebarLogo.addEventListener("click", () => {
    sidebarMenu.classList.add("active");
  });
  
  closeSidebar.addEventListener("click", () => {
    sidebarMenu.classList.remove("active");
  });
  
  // ========== Cart Sidebar Toggle ==========
  const cartBox = document.querySelector(".cart-box");
  const cartSidebar = document.getElementById("cartSidebar");
  const closeCart = document.getElementById("closeCart");
  
  cartBox.addEventListener("click", () => {
    cartSidebar.classList.add("active");
  });
  
  closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });
  