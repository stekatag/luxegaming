"use strict";

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const logoEl = document.querySelector(".logo");
const wrapperEl = document.querySelector(".wrapper");

const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;

    if (!ent.isIntersecting) {
      wrapperEl.classList.add("sticky");
    } else {
      wrapperEl.classList.remove("sticky");
    }
  },
  {
    // Inside the viewport
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  }
);
obs.observe(sectionHeroEl);

// Making the mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Button scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav__link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const swiper = new Swiper(".trending-cards-content", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  fade: true,
  autoplay: {
    delay: 2500,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".trending-button-next",
    prevEl: ".trending-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    570: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});
