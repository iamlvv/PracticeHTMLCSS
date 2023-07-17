// Add effects when hover on the navbar item using vanilla javascript
const navbarItemPage = document.querySelectorAll(".navbar-item-page");
navbarItemPage.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#d64d00";
    item.style.cursor = "pointer";
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

// Build draggable slider using vanilla javascript and responsive for mobile
const userReviewsContainer = document.querySelector(".user-reviews-container");
const userReviews = document.querySelector(".user-reviews");
const firstItemUserReview = document.querySelectorAll(
  ".user-review-general"
)[0];
const userReviewsChildren = [...userReviews.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(
  userReviewsContainer.clientWidth / firstItemUserReview.clientWidth
);

const dragStart = (e) => {
  isDragging = true;
  userReviews.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = userReviews.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  userReviews.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  userReviews.classList.remove("dragging");
};

// const autoPlay = () => {
//   if (window.innerWidth < 768 || !isAutoPlay) return;
//   timeoutId = setTimeout(() => {
//     userReviews.scrollLeft += firstItemUserReview.clientWidth;
//   }, 3000);
// }
// autoPlay();

userReviews.addEventListener("mousedown", dragStart);
userReviews.addEventListener("mousemove", dragging);
userReviews.addEventListener("mouseup", dragStop);
userReviews.addEventListener("mouseenter", () => (isAutoPlay = false));
userReviews.addEventListener("mouseleave", () => (isAutoPlay = true));

// Click arrow to move to the next item in the userReviews array
const userFurnitureReviews = document.querySelectorAll(".user-review-item");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
leftArrow.classList.add("arrow-disabled");
let currentItem = 0;

leftArrow.addEventListener("click", () => {
  // move to the previous item in the userFurnitureReviews array
  if (currentItem <= 0) {
    leftArrow.classList.add("arrow-disabled");
  } else {
    leftArrow.classList.remove("arrow-disabled");
    rightArrow.classList.remove("arrow-disabled");
  }
  userFurnitureReviews.forEach((review, index) => {
    if (review.classList.contains("user-review-current")) {
      currentItem = index;
      review.classList.remove("user-review-current");
      review.classList.add("user-review");
    }
  });
  currentItem -= 1;
  userFurnitureReviews[currentItem].classList.remove("user-review");
  userFurnitureReviews[currentItem].classList.add("user-review-current");
  if (currentItem <= 0) {
    leftArrow.classList.add("arrow-disabled");
  } else {
    leftArrow.classList.remove("arrow-disabled");
    rightArrow.classList.remove("arrow-disabled");
  }
});

rightArrow.addEventListener("click", () => {
  // move to the next item in the userFurnitureReviews array
  if (currentItem >= userFurnitureReviews.length - 1) {
    currentItem = userFurnitureReviews.length - 1;
    rightArrow.classList.add("arrow-disabled");
  } else {
    rightArrow.classList.remove("arrow-disabled");
    leftArrow.classList.remove("arrow-disabled");
  }
  userFurnitureReviews.forEach((review, index) => {
    if (review.classList.contains("user-review-current")) {
      currentItem = index;
      review.classList.remove("user-review-current");
      review.classList.add("user-review");
    }
  });
  currentItem += 1;
  userFurnitureReviews[currentItem].classList.remove("user-review");
  userFurnitureReviews[currentItem].classList.add("user-review-current");
  if (currentItem >= userFurnitureReviews.length - 1) {
    rightArrow.classList.add("arrow-disabled");
  } else {
    rightArrow.classList.remove("arrow-disabled");
    leftArrow.classList.remove("arrow-disabled");
  }
});

// Click arrows to move to the next item in the userReviews array in mobile
const userFurnitureReviewsMobile = document.querySelectorAll(
  ".user-review-items-mobile"
);
const leftArrowMobile = document.querySelector(".left-arrow-mobile");
const rightArrowMobile = document.querySelector(".right-arrow-mobile");
leftArrowMobile.classList.add("arrow-disabled");
let currentItemMobile = 0;

leftArrowMobile.addEventListener("click", () => {
  // move to the previous item in the userFurnitureReviews array
  if (currentItemMobile <= 0) {
    leftArrowMobile.classList.add("arrow-disabled");
  } else {
    leftArrowMobile.classList.remove("arrow-disabled");
    rightArrowMobile.classList.remove("arrow-disabled");
  }
  userFurnitureReviewsMobile.forEach((review, index) => {
    if (review.classList.contains("user-review-current-mobile")) {
      currentItemMobile = index;
      review.classList.remove("user-review-current-mobile");
      review.classList.add("user-review");
    }
  });
  currentItemMobile -= 1;
  userFurnitureReviewsMobile[currentItemMobile].classList.remove("user-review");
  userFurnitureReviewsMobile[currentItemMobile].classList.add(
    "user-review-current-mobile"
  );
  if (currentItemMobile <= 0) {
    leftArrowMobile.classList.add("arrow-disabled");
  } else {
    leftArrowMobile.classList.remove("arrow-disabled");
    rightArrowMobile.classList.remove("arrow-disabled");
  }
});

rightArrowMobile.addEventListener("click", () => {
  // move to the next item in the userFurnitureReviews array
  if (currentItemMobile >= userFurnitureReviewsMobile.length - 1) {
    currentItemMobile = userFurnitureReviewsMobile.length - 1;
    rightArrowMobile.classList.add("arrow-disabled");
  } else {
    rightArrowMobile.classList.remove("arrow-disabled");
    leftArrowMobile.classList.remove("arrow-disabled");
  }
  userFurnitureReviewsMobile.forEach((review, index) => {
    if (review.classList.contains("user-review-current-mobile")) {
      currentItemMobile = index;
      review.classList.remove("user-review-current-mobile");
      review.classList.add("user-review");
    }
  });
  currentItemMobile += 1;
  userFurnitureReviewsMobile[currentItemMobile].classList.remove("user-review");
  userFurnitureReviewsMobile[currentItemMobile].classList.add(
    "user-review-current-mobile"
  );
  if (currentItemMobile >= userFurnitureReviewsMobile.length - 1) {
    rightArrowMobile.classList.add("arrow-disabled");
  } else {
    rightArrowMobile.classList.remove("arrow-disabled");
    leftArrowMobile.classList.remove("arrow-disabled");
  }
});

// Click to show the navigation bar in mobile
const collapseIcon = document.querySelector(".collapse-icon");
const navbarMobile = document.querySelector(".navbar-mobile");
const navbarMobileItem = document.querySelectorAll(".navbar-mobile-item");

collapseIcon.addEventListener("click", () => {
  navbarMobile.classList.toggle("navbar-mobile-show");
  navbarMobileItem.forEach((item) => {
    item.classList.toggle("navbar-mobile-item-show");
  });
});
