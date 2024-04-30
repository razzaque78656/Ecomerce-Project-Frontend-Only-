//export let basket = JSON.parse(localStorage.getItem("data")) || [];
export let basket = [];
const storedData = localStorage.getItem("data");
if (storedData) {
  console.log("Retrieved data from localStorage:", storedData);
  basket = JSON.parse(storedData);
}
export function cardQuantityManag() {
  // Card Increment or Decrement Function

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
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let updateValue = (curElem) => {
    let search = basket.find((x) => x.id == curElem);
    document.getElementById(curElem).textContent = search.item;
    calculation();
  };

  let calculation = () => {
    let cartIcon = document.getElementById("cartItems");
    cartIcon.textContent = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  calculation();
}
