// accessing dom element/node
//1. using id
let res = document.getElementById("mydiv");
// console.log(res);
console.dir(res);

//2. using class
let res2 = document.getElementsByClassName("h2");  
console.log(res2); // list/collection
console.log(res2[0]);

//3. using tag name
let res3 = document.getElementsByTagName("p");
console.log(res3)

//4. using querySelector
let res4 = document.querySelector("#mydiv"); // returns object with first element with id mydiv
console.log(res4);

//5. using querySelectorAll
let res5 = document.querySelectorAll("p");    
console.log(res5); // list/collection


// Document Properties
// 1. accessing element content and changing it
// *innerHTML
console.log(res.innerHTML); // getter 
// res.innerHTML = `<p>change using DOM manipulation</p>`; // setter

// *innerText
console.log(res.innerText); // getter
// res.innerText = `hello world`; // setter

// *textContent
console.log(res.textContent); // getter
// res.textContent = `hello world`; // setter

// difference between innerText and textContent
// innerText is aware of styling and will not return hidden elements, while textContent returns all elements including hidden ones. innerText is slower than textContent.

// 2. accessing element class or id or etc
// *getAttribute
console.log(res.getAttribute("id")); // getter
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    res.setAttribute("class", "js"); // setter
})

// *classList - only for class attribute
let myH = document.querySelector(".h2");
console.log(myH.classList); // getter
myH.classList.add("hii"); // add class
myH.classList.remove("myh"); // remove class
btn.addEventListener("click", () => {
    myH.classList.toggle("jaiho"); // toggle class - add if not present, remove if present
})

let form = document.querySelector(".signup");
btn.addEventListener("click", () => {
    form.classList.toggle("hide"); // toggle class on form submit
}); 