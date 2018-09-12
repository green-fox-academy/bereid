// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
// use css class to change the color instead of the style property

let myNewItems = ['apple', 'banana', 'cat', 'dog'];
let myItems = document.getElementsByTagName('li');

for (let i = 0; i < myItems.length; i++){
    myItems[i].innerText = myNewItems[i];
}