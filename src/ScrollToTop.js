import React from "react";

function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // Change the divisor (500) to adjust the scroll speed.
    function animateScroll() {
      window.scrollBy(0, scrollStep);
      if (window.scrollY > 0) {
        window.requestAnimationFrame(animateScroll);
      }
    }
    animateScroll();
  }

  export default scrollToTop;