function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const navIcon = document.querySelector(".nav-icon");
    const menuLinks = document.querySelector(".menu-links");
  
    navIcon.addEventListener("click", () => {
      navIcon.classList.toggle("open");
      menuLinks.classList.toggle("open");
    });
  });
  