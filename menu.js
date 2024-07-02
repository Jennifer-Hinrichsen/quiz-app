// Active Menu Item Highlight //
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll(".navbar-ul a");

menuItems.forEach((item) => {
  if (item.href === currentLocation) {
    item.classList.add("active");
  }
});
// Active Menu Item Highlight end //
