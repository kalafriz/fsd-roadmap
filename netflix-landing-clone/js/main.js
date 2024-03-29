const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

// tab selector
function selectItem(e) {
  deselectItem();
  hideItem();
  // add selected marker border
  this.classList.add("tab-border");
  // show selected content
  let tabContent = document.querySelector(`#${this.id}-content`);
  tabContent.classList.add("show");
}

function deselectItem() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function hideItem() {
  tabContents.forEach((item) => item.classList.remove("show"));
}

// tab click listener
tabItems.forEach((item) => item.addEventListener("click", selectItem));
