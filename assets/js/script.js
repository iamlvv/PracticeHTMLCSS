// Add effects when hover on the navbar item using vanilla javascript
const navbarItemPage = document.querySelectorAll(".navbar-item-page");
navbarItemPage.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#d64d00";
    item.style.cursor = "pointer";
    item.style.transitionDuration = "0.25s";
    item.style.transitionTimingFunction = "ease-in-out";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "#000";
  });
});

// Add effects when hover on the search button using vanilla javascript
const searchButton = document.querySelectorAll(".button");
searchButton.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.cursor = "pointer";
  });
  button.addEventListener("mouseout", () => {});
});

//Add effects when hover on the shop-now button using vanilla javascript
const shopNowButton = document.querySelectorAll(".shop-now-button");
shopNowButton.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.cursor = "pointer";
    if (button === shopNowButton[0]) {
      button.style.backgroundColor = "#f5f5f5";
    } else if (button === shopNowButton[1]) {
      button.style.backgroundColor = "#ededff";
    } else if (button === shopNowButton[2]) {
      button.style.backgroundColor = "#fff5f5";
    }
    button.style.transitionDuration = "0.25s";
    button.style.transitionTimingFunction = "ease-in-out";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#fff";
  });
});

// Add effects when hover on the product card thumbnail using vanilla javascript
const productCardThumbnail = document.querySelectorAll(".product-card");
productCardThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseover", () => {
    thumbnail.style.cursor = "pointer";
    thumbnail.style.boxShadow = "0 0 10px #505050";
    thumbnail.style.transitionDuration = "0.25s";
    thumbnail.style.transitionTimingFunction = "ease-in-out";
  });
  thumbnail.addEventListener("mouseout", () => {
    thumbnail.style.boxShadow = "0 0 0 #000";
  });
});

// Add effects when hover on the collection navbar item using vanilla javascript
const collectionNavbarItem = document.querySelectorAll(
  ".collection-navbar-item"
);
collectionNavbarItem.forEach((item) => {
  item.addEventListener("click", () => {
    const collectionNavbarItemActive = document.querySelector(
      ".collection-navbar-item-current"
    );
    collectionNavbarItemActive.classList.remove(
      "collection-navbar-item-current"
    );
    item.classList.add("collection-navbar-item-current");
  });
});
