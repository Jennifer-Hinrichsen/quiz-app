//* bookmark *//
document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );
  const filledBookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button--filled"]'
  );

  bookmarkButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.style.display = "none";
      filledBookmarkButtons[index].style.display = "inline";
    });
  });

  filledBookmarkButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.style.display = "none";
      bookmarkButtons[index].style.display = "inline";
    });
  });
});
//* bookmark end*//
//* toggle button

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const answerParagraph = document.querySelector(".answer");

  toggleButton.addEventListener("click", () => {
    answerParagraph.classList.toggle("show-answer");
  });
});

//* end toggle button *//
