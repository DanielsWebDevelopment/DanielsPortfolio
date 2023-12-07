document.addEventListener("DOMContentLoaded", function () {
  var initialAnimation = gsap.timeline();
  initialAnimation.from(fadeIn, { opacity: 0, duration: 2 });
});

const swup = new Swup();

window.onload = function () {
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#info",
      start: "center center",
      end: "+=200",
      scrub: 1,
    },
  });

  timeline.from(".about_me-info", { opacity: 0, x: 200 });
};

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scroll =
    window.pageYOffset || document.documentElement.scrollTop;
  const arrowIcon = document.querySelector(".fa-arrow-down");

  if (arrowIcon) {
    if (scroll > lastScrollTop) {
      // Scrolling down
      arrowIcon.classList.remove("fade-in");
      arrowIcon.classList.add("fade-out");
      document.querySelector(".scroll-to-learn-more").classList.remove("fade-in");
      document.querySelector(".scroll-to-learn-more").classList.add("fade-out");
    } else {
      // Scrolling up
      arrowIcon.classList.remove("fade-out");
      arrowIcon.classList.add("fade-in");
      document.querySelector(".scroll-to-learn-more").classList.remove("fade-out");
      document.querySelector(".scroll-to-learn-more").classList.add("fade-in");
    }
  }

  lastScrollTop = scroll;
});

// ================= Hamburger Menu ===================
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay');
  const navList = document.querySelector('.hamburger-nav-list');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
    navList.style.right = navList.style.right === "0%" ? "-100%" : "0%";

    overlay.addEventListener("click", function() {
      hamburger.classList.remove("open");
      this.style.display = "none";
      navList.style.right = "-100%";
    });
  });
});