

const counterEl = document.querySelector(".counter");

const increasebuttonEl = document.querySelector(".increase-button");

const decreasebuttonEl = document.querySelector(".decrease-button");

console.log("🚀 ~ counterEl:", counterEl)

let count = 0;

const updateDisplay = () => {
    counterEl.innerText = count;
};



const increase = () => {
    
    if (count<10){
    count = count+ 1; 
    updateDisplay();

    }
   
};



const decrease = () => {
    if (count>0){
        count = count - 1; 
        updateDisplay();}
  
};


increasebuttonEl.addEventListener("click", increase)
decreasebuttonEl.addEventListener("click", decrease)
