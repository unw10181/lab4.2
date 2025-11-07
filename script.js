let groceryCart = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

addItemButton.addEventListener("click", function () {
  let item = itemInput.value;

  if (item === "") {
    alert("Please enter an item.");
    return;
  }

  groceryCart.push(item);
  renderCart();
  itemInput.value = "";
});

removeItemButton.addEventListener("click", function () {
  groceryCart.pop();
  renderCart();
});

function renderCart() {
  cartList.innerHTML = ""; // Clear existing list
  for (let i = 0; i < groceryCart.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = groceryCart[i];
    cartList.appendChild(listItem);
  }
}
