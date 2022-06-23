const dropdownListItems = document.querySelectorAll(".dropdown-list-item");
const selectedText = document.querySelector(".dropdown-selected-text");

dropdownListItems.forEach((dropdownListItem) => {
  dropdownListItem.addEventListener("click", (event) => {
    selectedText.textContent = event.target.textContent;
  });
});
