AOS.init();
let preloader = document.getElementById("preLoad");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});
import { cardQuantityManag } from "./cardQuantityManag.js";
import { basket } from "./cardQuantityManag.js";
import { cards } from "./ProductITems.js";
let cardHolder = document.querySelector(".card-holder");

let generateCards = () => {
  return (cardHolder.innerHTML = cards
    .map((x) => {
      let { category, id, name, img, description, price, stock } = x;
      let search = basket.find((x) => x.id == id) || [];
      return `<div id=product-id-${id} class="card-pro w-[18rem] px-3 py-4 flex flex-col mb-10 rounded-lg   shadow-lg" id='cardValue' lg:w-[25rem]>
      <div class="category w-fit h-fit bg-red-100 rounded-2xl px-2 py-0 text-[0.8rem] font-light"><p>${category}</p></div>
      <div class="img w-100 h-fit flex justify-center"> <img class="" src="${img}" alt="Product Image">
      </div>
      <div class="prod-name">
          <h1 class="font-bold text-2xl mt-3 mb-1">${name}</h1>
      </div>
      <div class="rating flex gap-1 mt-2 mb-2">
          <img class="w-4" src="./star.webp" alt="star"> <img class="w-4" src="./star.webp" alt="star">
          <img class="w-4" src="./star.webp" alt="star"> <img class="w-4" src="./star.webp" alt="star">
      </div>
      <div class="description">
          <p class="text-[0.9rem] mb-3">${description}</p>
      </div>
      <div class="price flex gap-5 text-lg font-semibold mb-2">
          <p>$${price}</p>
          <p><strike>${price * 2}</strike></p>
      </div>
      <div class="stock text-[1rem] mb-4">
          <p>Total Stocks Available: &nbsp;${stock}
          </p>
      </div>
      <div class="quantity flex gap-3">Quantity(Pieces) <div
              class="w-28 rounded-lg quantity-selector grid grid-cols-3 border-2 font-bold text-[1rem] mb-5">
              <button class="cardDecrement border-r-2" onClick="decrement(${id})" >-</button>
              <p id=${id} class="product-Quan text-center border-r-2 font-light">${
        search.item === undefined ? 0 : search.item
      }</p>
              <button class="cartIncrement"   onClick='Increment(${id})'>+</button>
          </div>
      </div>
      
    </div>
        `;
    })
    .join(""));
};
generateCards();

cardQuantityManag();
