let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset");

//Increment the value of the counter
incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
  counter;
});

//Decrement the value of the counter
decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});

//Reset the counter to zero
resetBtn.addEventListener("click", reset); //This line of code sets up an event listener on an HTML element with the ID resetBtn. It listens for a 'click' event on this button and, when clicked, it calls the reset function.
function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}
