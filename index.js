//* bookmark *//
document
  .querySelector('[data-js="bookmark-button"]')
  .addEventListener("click", function () {
    const img = this.querySelector("img");
    const isFilled = img.src.includes("bookmark-filled.svg");

    if (isFilled) {
      img.src = "assets/bookmark.svg";
      img.alt = "Bookmark";
      this.setAttribute("data-js", "bookmark-button");
    } else {
      img.src = "assets/bookmark-filled.svg";
      img.alt = "Bookmark-filled";
      this.setAttribute("data-js", "bookmark-button--filled");
    }
  });
//* bookmark end*//
