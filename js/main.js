const bxMenu = document.querySelector(".burger");
const catalogList = document.querySelector(".catalog-list");
const categoryBtn = document.querySelector(".categoryBtn");
const loading = document.querySelector(".loading");
const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const darkBtn = document.querySelector(".dark-btn");
// const navbar = document.querySelector(".navbar");

const backtop = document.querySelector(".backtop");
categoryBtn.addEventListener("click", () => {
  if (catalogList.style.display == "none") {
    catalogList.style.display = "grid";
  } else {
    catalogList.style.display = "none";
  }
});

window.addEventListener("load", () => {
  loading.classList.add("loading-hidden");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
});

darkBtn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    this.innerHTML = "Dark";
  } else {
    this.innerHTML = "Light";
  }
  document.body.classList.toggle("dark");
});

bxMenu.addEventListener("click", () => {
  console.log("Hello World");
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

// modal

function openModal() {
  modal.classList.add("modal-show");
  modalBody.classList.add("modal-body-show");
}

function modalClose() {
  modal.classList.remove("modal-show");
  modalBody.classList.remove("modal-body-show");
}

window.addEventListener("click", (e) => {
  if (e.target === modal || modalCloseBtn.contains(e.target)) {
    modalClose();
  }
});

modalOpenBtn.addEventListener("click", openModal);
