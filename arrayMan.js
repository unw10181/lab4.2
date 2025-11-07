let shoppingList = [];

const addItem = (param, arr) => {
  if (arr.includes(param)) {
    return "Item already in storage";
  } else {
    arr.push(param);
  }
};

const removeLastItem = (arr) => {
  arr.pop();
};

const displayList = (arr) => {
  console.log(arr);
};

const filterItems = (param, arr) => {
  let items;
  items = arr.filter((item) => item.includes(param));
  return items;
};

addItem("twix", shoppingList);
displayList(shoppingList);
addItem("snickers", shoppingList);
addItem("skittles", shoppingList);
addItem("mnms", shoppingList);
displayList(shoppingList);
removeLastItem(shoppingList);
displayList(shoppingList);
console.log(filterItems("s", shoppingList));