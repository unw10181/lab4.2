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

// How did array methods like push() and filter() help you manipulate data in this activity?
// Was able to add and retract things from array
// What challenges did you face when trying to filter and search for items in the array?
//Web3 documentation on using filter was not good. But MDN showed a clear example on how to utilize the function.
// it is a bit tricky though.
// How would you modify this code to make it more efficient or user-friendly?
// Maybe refactor in a way that there is less repetition within my code.
