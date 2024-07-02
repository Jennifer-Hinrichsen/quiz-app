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
//  Bookmark end  //

// Toggle button //

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const answerParagraph = document.querySelector(".answer");

  toggleButton.addEventListener("click", () => {
    answerParagraph.classList.toggle("show-answer");
    if (answerParagraph.classList.contains("show-answer")) {
      toggleButton.textContent = "Hide answer";
    } else {
      toggleButton.textContent = "Show answer";
    }
  });
});
// Toggle Button end //

// Active Menu Item Highlight //
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".navbar-ul a");

menuItems.forEach((item) => {
  if (item.href === currentLocation) {
    item.classList.add("active");
  }
});
// Active Menu Item Highlight end //

//  New Card Forms //
// New Card Forms end //
