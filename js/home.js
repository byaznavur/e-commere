const discountProducts = document.querySelector(".discount-products");

function discountProduct(el) {
  const productCard = document.createElement("div");
  productCard.classList.add("discount-card");

  const productImage = document.createElement("img");
  productImage.src = el.images[0];
  productImage.alt = el.name;
  productImage.classList.add("product-image");

  const productName = document.createElement("h3");
  productName.innerHTML = el.name;
  productName.classList.add("product-name");

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `$${el.price.toFixed(2)}`;
  productPrice.classList.add("product-price");

  const productRating = document.createElement("p");
  productRating.innerHTML = el.rating;
  productRating.classList.add("product-rating");

  const productDiscount = document.createElement("p");
  productDiscount.innerHTML = `${el.discount}% `;
  productDiscount.classList.add("product-discount");

  const productDesc = document.createElement("product-desc");
  productDesc.innerHTML = el.description.slice(0, 65) + "...";
  productDesc.classList.add("product-desc");

  const productCategory = document.createElement("product-category");
  productCategory.innerHTML = el.category;
  productCategory.classList.add("product-category");

  productCard.append(
    productImage,
    productName,
    productDiscount,
    productDesc,
    productRating,
    productPrice,
    productCategory
  );

  return productCard;
}

products.slice(0, 5).map((el, i) => {
  if (el.discount > 0) {
    let card = discountProduct(el);
    discountProducts.append(card);
  }
});
