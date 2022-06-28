import {count1, count2, createCard, q } from "./utils.js";

const url_prodotti = "https://fakestoreapi.com/products";

const productF = q(".product-filtered");
const newCollectionEl = q(".new-collection");

fetch(url_prodotti)
  .then((res) => res.json())
  .then((data) => {
	const countList1 =
    data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(productF, product.image, product.title, product.price)
      );
const countList2 =
   data
      .filter((product) => product.price >= 100)
      .map((product) =>
        createCard(newCollectionEl, product.image, product.title, product.price)
      );
	  count1.textContent =  (countList1).length;
	  count2.textContent =  (countList2).length;
  });
