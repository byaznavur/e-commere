// const bxMenu = document.querySelector(".burger");
// const catalogList = document.querySelector(".catalog-list");
// const categoryBtn = document.querySelector(".categoryBtn");
const discountCards = document.querySelector(".discount-cards");
const newCards = document.querySelector(".new-cards");
const allCards = document.querySelector(".all-cards");
const advertCard = document.querySelector(".advert-cards");

const articlesCards = document.querySelector(".articles-cards");
// categoryBtn.addEventListener("click", () => {
//   if (catalogList.style.display == "none") {
//     catalogList.style.display = "grid";
//   } else {
//     catalogList.style.display = "none";
//   }
// });
// bxMenu.addEventListener("click", () => {
//   if (catalogList.style.display == "none") {
//     catalogList.style.display = "grid";
//   } else {
//     catalogList.style.display = "none";
//   }
// });

// function getCategories(el) {
//   return `<li>${el}</li>`;
// }

// categories.map((el) => {
//   catalogList.innerHTML += getCategories(el);
// });

// Product mapping

function getDiscountProduct(el) {
  return `<div class="card">
              <img src=${el.images[1]} alt="" />

              <div class="card-price">
                <div class="cridit-card">
                  <h2>${el.price} ₽</h2>
                  <span>С картой</span>
                </div>
                <div class="cash-card">
                  <h2>50,50 ₽</h2>
                  <span>Обычная</span>
                </div>
              </div>

              <h2>${el.name}</h2>

              <p>${el.description.slice(0, 35)}...</p>
              <div class="cards-star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>

              <button class="add-button">В корзину</button>
            </div>`;
}

products.slice(0, 5).map((el) => {
  if (el.discount > 0) {
    discountCards.innerHTML += getDiscountProduct(el);
  }
});

function getNewProduct(el) {
  return `<div class="card">
              <img src=${el.images[0]} alt="" />

              <div class="card-price">
                <div class="cridit-card">
                  <h2>${el.price} ₽</h2>
                  <span>С картой</span>
                </div>
                <div class="cash-card">
                  <h2>50,50 ₽</h2>
                  <span>Обычная</span>
                </div>
              </div>

              <h2>${el.name}</h2>

              <p>${el.description.slice(0, 35)}...</p>
              <div class="cards-star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>

              <button class="add-button">В корзину</button>
            </div>`;
}

products.slice(0, 6).map((el) => {
  if (el.isNew) {
    newCards.innerHTML += getNewProduct(el);
  }
});
function getAllProduct(el) {
  return `<div class="card">
              <img src=${el.images[0]} alt="" />

              <div class="card-price">
                <div class="cridit-card">
                  <h2>${el.price} ₽</h2>
                  <span>С картой</span>
                </div>
                <div class="cash-card">
                  <h2>50,50 ₽</h2>
                  <span>Обычная</span>
                </div>
              </div>

              <h2>${el.name}</h2>

              <p>${el.description.slice(0, 35)}...</p>
              <div class="cards-star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>

              <button class="add-button">В корзину</button>
            </div>`;
}

products.slice(0, 4).map((el) => {
  allCards.innerHTML += getAllProduct(el);
});

function getAdvert(el) {
  return `<div class= "advert-card">
  <div>
  <h3>${el.title}</h3>
  <p>${el.desc}</p>
  </div>

  <img src = ${el.img} alt= ${el.title}/>
  </div>`;
}

advert.map((el) => {
  advertCard.innerHTML += getAdvert(el);
});

function getArticles(el) {
  return `
  <div class = "article-card">
    <img src=${el.image} alt = ${el.title}/>
    <span>${el.date}</span>
    <h3>${el.title}</h3>
    <p>${el.description.slice(0, 120)}</p>

    <a href = "#">Подробнее</a>
  </div>
  `;
}

articles.map((el) => {
  articlesCards.innerHTML += getArticles(el);
});
