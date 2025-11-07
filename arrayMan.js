let shoppingList = [];

const addItem =  (param, arr) => {
    arr.push(param)
}

const removeLastItem = (arr) => {
    arr.pop();
}

const displayList = (arr) => {
    console.log(arr)
}

addItem("twix", shoppingList);
displayList(shoppingList);
addItem("snickers", shoppingList);
addItem("skittles", shoppingList);
addItem("mnms", shoppingList);
displayList(shoppingList);
removeLastItem(shoppingList)
displayList(shoppingList)



// How did array methods like push() and filter() help you manipulate data in this activity?
// What challenges did you face when trying to filter and search for items in the array?
// How would you modify this code to make it more efficient or user-friendly?