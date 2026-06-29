// Smooth scroll enhancement (future-proof UX behavior)
document.addEventListener("DOMContentLoaded", function () {

  // Fade-in animation on scroll
  const elements = document.querySelectorAll(".card, .hero, .contact");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });

});
