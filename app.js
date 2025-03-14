const counterDisplay = document.querySelector("#input-value h1")
const incBtn= document.getElementById("inc")
const decBtn = document.getElementById("dec")
const resetBtn = document.getElementById("Reset")

let count=0;

const updateDisplay = ()=>{
    counterDisplay.textContent=count;
}

incBtn.addEventListener('click',()=>{
    count++;
    updateDisplay();
})


decBtn.addEventListener('click',()=>{
    count--;
    updateDisplay();
})

resetBtn.addEventListener('click',()=>{
    count=0;
    updateDisplay();
})

updateDisplay();