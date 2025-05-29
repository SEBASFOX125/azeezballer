const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});

// Close menu when clicking on a nav link (optional for better UX)
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  });
});
