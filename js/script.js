let menu = document.querySelector("#menu");
let navList = document.querySelector("#nav-list");
let navbar = document.querySelector("#navbar");

menu.addEventListener("click", () => {
  navList.classList.toggle("hidden");

  // Add blur + background when open
  navbar.classList.toggle("backdrop-blur-md");
  navbar.classList.toggle("bg-white/30");
});
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});