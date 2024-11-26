const bxMenu = document.querySelector(".burger");
const catalogList = document.querySelector(".catalog-list");
const categoryBtn = document.querySelector(".categoryBtn");

categoryBtn.addEventListener("click", () => {
  if (catalogList.style.display == "none") {
    catalogList.style.display = "grid";
  } else {
    catalogList.style.display = "none";
  }
});
bxMenu.addEventListener("click", () => {
  if (catalogList.style.display == "none") {
    catalogList.style.display = "grid";
  } else {
    catalogList.style.display = "none";
  }
});

function getCategories(el) {
  return `<li>${el}</li>`;
}

categories.map((el) => {
  catalogList.innerHTML += getCategories(el);
});
