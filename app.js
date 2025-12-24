document.addEventListener("DOMContentLoaded", function () {
    // ===== Nav Toggle =====
    const navMenu = document.getElementById("navMenu");
    const navToggle = document.getElementById("navToggle");
    const navBackdrop = document.getElementById("navBackdrop");
  
    const openMenu = () => {
      navMenu.classList.add("is-open");
      navBackdrop.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
    };
  
    const closeMenu = () => {
      navMenu.classList.remove("is-open");
      navBackdrop.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
  
    navToggle.addEventListener("click", () => {
      navMenu.classList.contains("is-open") ? closeMenu() : openMenu();
    });
  
    navBackdrop.addEventListener("click", closeMenu);
  
    // סגירה בלחיצה על קישור (נוח במובייל)
    navMenu.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        closeMenu();
      });
    });
  
    // סגירה ב-ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  
    // ===== Scroll Animations (IntersectionObserver) =====
    const sections = document.querySelectorAll("section");
  
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);
  
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });
  
    // ===== Smooth Scroll (with offset) =====
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          const offset = 86;
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });
  