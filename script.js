// Typed.js Animation
new Typed("#typed", {
  strings: [
    "Flutter Expert",
    "Mobile Architect",
    "Senior Developer",
    "Team Lead",
    "Technical Innovator"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});

// ScrollReveal Animations
const revealConfig = {
  distance: "50px",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "bottom",
  opacity: 0
};

ScrollReveal().reveal(".section-header", revealConfig);
ScrollReveal().reveal(".skill-card", { ...revealConfig, interval: 100 });
ScrollReveal().reveal(".project-card", { ...revealConfig, interval: 100 });
ScrollReveal().reveal(".timeline-item", { ...revealConfig, interval: 100 });
ScrollReveal().reveal(".stat", { ...revealConfig, interval: 100 });
ScrollReveal().reveal(".contact-item", { ...revealConfig, interval: 100 });

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      const navLinks = document.querySelector(".nav-links");
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    }
  });
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar Background on Scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});

// GSAP Animations for Hero Section
gsap.from(".hero-badge", {
  duration: 1,
  opacity: 0,
  y: -20,
  delay: 0.2
});

gsap.from(".hero-title", {
  duration: 1.2,
  opacity: 0,
  y: 30,
  delay: 0.3
});

gsap.from(".hero-description", {
  duration: 1,
  opacity: 0,
  y: 20,
  delay: 0.5
});

gsap.from(".hero-buttons", {
  duration: 1,
  opacity: 0,
  y: 20,
  delay: 0.6
});

gsap.from(".hero-social", {
  duration: 1,
  opacity: 0,
  y: 20,
  delay: 0.7
});

// Parallax effect for hero floating cards
const cards = document.querySelectorAll(".floating-card");
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  cards.forEach((card, index) => {
    const xMove = (mouseX - 0.5) * (20 + index * 10);
    const yMove = (mouseY - 0.5) * (20 + index * 10);

    gsap.to(card, {
      x: xMove,
      y: yMove,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

// Animate numbers on scroll
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const range = target - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
};

// Intersection Observer for stats
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
      entry.target.classList.add("counted");
      const h3 = entry.target.querySelector("h3");
      if (h3) {
        const targetNumber = parseInt(h3.textContent);
        animateCounter(h3, targetNumber);
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".stat").forEach(stat => {
  observer.observe(stat);
});

// Button hover effects
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", function() {
    gsap.to(this, {
      y: -5,
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", function() {
    gsap.to(this, {
      y: 0,
      duration: 0.3
    });
  });
});

// Prevent animations on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Loading animation
window.addEventListener("load", () => {
  gsap.to("body", {
    opacity: 1,
    duration: 0.5
  });
});
