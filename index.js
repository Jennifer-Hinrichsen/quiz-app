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
