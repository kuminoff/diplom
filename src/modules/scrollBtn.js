"use strict";

const scrollBtn = () => {
  const scrollButton = document.querySelector(".smooth-scroll");
  const firstSection = document.getElementById("offer");
  const firstSectionHeight = firstSection.offsetTop + firstSection.offsetHeight;

  if (firstSectionHeight > document.documentElement.scrollTop)
    scrollButton.style.display = "none";

  window.addEventListener("scroll", () => {
    firstSectionHeight < document.documentElement.scrollTop
      ? (scrollButton.style.display = "block")
      : (scrollButton.style.display = "none");
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scrollBtn;
