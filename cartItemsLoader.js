import { cards } from "./ProductITems.js";
var resultCon = document.querySelector(".cartResults");
let cartItemsLoader = () => {
  let basket = JSON.parse(localStorage.getItem("data")) || [];
  let total = document.querySelector("#total");

  let calculation = () => {
    let cartIcon = document.querySelector("#cartItems");

    cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  calculation();
  let generateItems = () => {
    if (basket.length != 0) {
      return (resultCon.innerHTML = basket
        .map((x) => {
          let { id, item } = x;
          let search = cards.find((y) => y.id == id) || [];
          console.log(search);
          return `
        <div class="cards mt-2 max-w-[45rem] min-w-[200px] m-auto bg-white p-5 h-fit flex justify-evenly items-center rounded-lg flex-col gap-3 sm:flex-row">
        <div class="flex  gap-5 justify-center items-center  min-w-[200px]">
        <img class="w-[5rem]" src="${search.img}" alt="Product-Image">
        <p class="font-bold text-lg">${search.name}</p>
        <p class="font-semibold text-md">$${search.price * item}</p>
        </div>
        <div class="flex gap-5 justify-center items-center border-b-2 sm:border-b-0">
        <div class="quantity flex items-center justify-center w-[8rem] h-fit mt-5">
            <div
                class="min-w-28 max-w-[15rem] rounded-lg quantity-selector grid grid-cols-3 border-2  font-bold text-[1rem] mb-5">
                <button class="cardDecrement border-r-2" onclick="decrement(${id})">-</button>
                <p id="${id}" class="product-Quan text-center border-r-2 font-light">1</p>
                <button class="cartIncrement" onclick="Increment(${id})" >+</button>
            </div>
        </div>
        <button
            class="removeBtn bg-zinc-900 px-5 py-1 rounded-md text-white font-semibold hover:bg-white hover:border-2 border-black hover:text-black transition duration-500 border-2" onclick="removeItems(${id})">Remove</button>
    </div>
    </div>
          `;
        })
        .join(""));
    } else {
      document.querySelector(".resultCon").innerHTML = `
        <h1>OOPS! Cart is Emphty!</h1>
        <a href="index.html" class="cartAnchor ">Back to Home</a>
        `;
      document.querySelector(".main").setAttribute("id", "CartIsEmphty");
    }
  };
  window.Increment = function (id) {
    let selectedItem = id;

    let search = basket.find((x) => x.id == selectedItem);
    if (search === undefined) {
      basket.push({
        id: selectedItem,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    generateItems();
    TotalAmount();
    updateValue(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
  };

  window.decrement = function (id) {
    let selectedItem = id;

    let search = basket.find((x) => x.id == selectedItem);

    if (search === undefined) return;
    else if (!search || search.item === 0) return;
    else {
      search.item -= 1;
    }
    updateValue(selectedItem);
    basket = basket.filter((x) => x.item != 0);
    generateItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let updateValue = (curElem) => {
    let search = basket.find((x) => x.id == curElem);
    document.getElementById(curElem).textContent = search.item;
    calculation();
  };
  window.removeItems = function (id) {
    basket = basket.filter((x) => x.id !== id);
    localStorage.setItem("data", JSON.stringify(basket));

    generateItems();
  };
  let TotalAmount = () => {
    if (basket.length != 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = cards.find((y) => y.id == id) || [];
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
      // console.log(amount);
      total.textContent = "$" + amount;
    } else return;
  };
  window.removeAll = function () {
    basket = [];
    generateItems();
    localStorage.setItem("data", basket);
  };
  TotalAmount();
  generateItems();
};
cartItemsLoader();
