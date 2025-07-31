let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "magenta" , "lavender"];

let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let stopBtn = document.querySelector("#stopBtn");


// btn.addEventListener("click", () => {
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     display.style.backgroundColor = randomColor;
// });


function generateRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    console.log(index)
    let randomColor = colors[index];
    console.log(randomColor)
    display.style.backgroundColor = randomColor;
}

// btn.addEventListener("click", function(){
//     setInterval(()=>{
//         generateRandomColor();
//     },500)
// });


let id = null;

btn.addEventListener("click", function() {
    id = setInterval(() => {
        generateRandomColor();
    }, 500);
});

stopBtn.addEventListener("click", function() {
    if(id) {
        clearInterval(id);
    }
});