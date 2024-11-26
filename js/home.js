const bxMenu = document.querySelector(".burger");
const catalogList = document.querySelector(".catalog-list");
const categoryBtn = document.querySelector(".categoryBtn");
bxMenu.addEventListener("click", () => {
  console.log("Hello ");
});

categoryBtn.addEventListener("click", () => {
  if (catalogList.style.display == "grid") {
    catalogList.style.display = "none";
  } else {
    catalogList.style.display = "grid";
  }
});
bxMenu.addEventListener("click", () => {
  if (catalogList.style.display == "grid") {
    catalogList.style.display = "none";
  } else {
    catalogList.style.display = "grid";
  }
});

function getCategories(el) {
  return `<li>${el}</li>`;
}

categories.map((el) => {
  catalogList.innerHTML += getCategories(el);
});
