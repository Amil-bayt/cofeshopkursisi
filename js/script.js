//  MENU BTN
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

// CART BTN
let cartItemContainer = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

// SEARCH
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

menu.onclick = () => {
  showComponent(menu, navbar);
};

cartBtn.onclick = () => {
  showComponent(cartBtn, cartItemContainer);
};

searchBtn.onclick = () => {
  showComponent(searchBtn, searchForm);
};

function showComponent(btn, component) {
  let activeElements = [navbar, cartItemContainer, searchForm];
  let buttons = [menu, cartBtn, searchBtn];
  activeElements.forEach((element, index) => {
    if (element !== component && element.classList.contains("active")) {
      element.classList.remove("active");
      buttons[index].classList.remove("fa-times");
    }
  });

  btn.classList.toggle("fa-times");
  component.classList.toggle("active");
}
