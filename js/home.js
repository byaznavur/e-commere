const discountProducts = document.querySelector(".discount-products");
const discountBtn = document.querySelector(".discountBtn");
// Mahsulotni HTML formatida qaytaruvchi funksiya
function discountProduct(el) {
  return `   
       <div class="card">
            <div class="card-img">
              <span class="heart"><i class="bx bxs-heart"></i></span>
              <img src="${el.images[0]}" alt="ad" />
              <h5 class="discount">${el.discount}%</h5>
            </div>
            <div class="card-name">
              <h3><span>${el.id}.</span>${el.name}</h3>
              <p>${el.category}</p>
            </div>

            <div class="card-price">
              <p>Price: <span>${el.price}$</span></p>
              <p>Discount: <span>${el.discount}%</span></p>
              <p>Rating: <span>${el.rating}</span></p>
            </div>
            <p class="card-desc">${el.description.slice(0, 40)}...</p>

            <button class="card-btn">В корзину</button>
          </div>
          `;
}

// Faqat chegirma bor mahsulotlarni chiqarish
products.slice(0, 5).forEach((el) => {
  if (el.discount > 0) {
    // Karta HTMLini yaratib qo'shamiz
    discountProducts.innerHTML += discountProduct(el);
  }
});
