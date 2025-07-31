let edit = document.querySelector(".edit");
let del = document.querySelector(".delete");

// console.log(edit)
// console.log(del)

// console.dir(edit)
// console.dir(del)

// NOTES
// parent child nd sibling
// 1. next element sibling
// console.dir(edit.nextElementSibling); // next element sibling
// // 2. previous element sibling
// console.dir(edit.previousElementSibling); // previous element sibling

// console.log(edit.nextElementSibling.nextElementSibling.innerText); // next element sibling of next element sibling

// // 3. parent element
// console.dir(edit.parentElement.previousElementSibling);

// 4. children
// first , last, nth child
// console.dir(edit.parentElement.children[0]); // first child  
// console.dir(edit.parentElement.children[1]); // second child
// console.dir(edit.parentElement.children[2]); // third child
// console.dir(edit.parentElement.children[edit.parentElement.children.length - 1]); // last child
// console.dir(edit.parentElement.children[2].children[0]); // accessing child of third child
// console.dir(edit.parentElement.children[2].children[0].children[0]); // accessing child of child of third child
// END OF NOTES


let id = del.parentElement.parentElement.parentElement.getAttribute("id"); // accessing parent element id
console.log(id);