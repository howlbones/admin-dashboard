const menuButton = document.querySelector(".dashboard-container img[alt='Open menu icon']");
const menuItems = document.querySelectorAll(".dashboard-container .item:nth-child(n+2)");
let menuActive = false;

var width;
window.onresize = window.onload = function () {
  width = this.innerWidth;
  if (width > 800) {
    menuItems.forEach(item => item.style.display = "grid");
    menuActive = false;
  }
  else {
    if (menuActive == false) {
      menuItems.forEach(item => item.style.display = "none");
    }

    menuButton.onclick = function () {
      if (menuActive) {
        menuItems.forEach(item => item.style.display = "none");
        menuActive = false;
      } else {
        menuItems.forEach(item => item.style.display = "flex");
        menuActive = true;
      }
    }

  }
}
