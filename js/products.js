const allCards = document.querySelector(".all-cards");

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
