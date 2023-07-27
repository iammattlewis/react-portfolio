import React from "react";

function scrollToSection(sectionId, scrollSpeed = 40) {
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    const offset = targetElement.getBoundingClientRect().top;
    const scrollStep = Math.abs(offset / scrollSpeed); // Adjust the divisor to control the scroll speed.
    let scrollCount = 0;
    const animateScroll = () => {
      const scrollY = window.scrollY;
      if (scrollCount < scrollSpeed) {
        window.scrollBy(0, offset > 0 ? scrollStep : -scrollStep);
        scrollCount++;
        if (window.scrollY === scrollY) {
          // If scrolling is stuck, stop the animation.
          return;
        }
        window.requestAnimationFrame(animateScroll);
      }
    };
    animateScroll();
  }
};

export default scrollToSection;