let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset");

//Increment the value of the counter
incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

//Decrement the value of the counter
decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    //the decrement button will only decrement the counter when it's greater than 0. If the counter is already at 0, clicking the decrement button will have no effect, ensuring that the counter doesn't go below 0.
    counter--;
    counterValue.innerHTML = counter;
  }
});

//Reset the counter to zero
resetBtn.addEventListener("click", reset); //This line of code sets up an event listener on an HTML element with the ID resetBtn. It listens for a 'click' event on this button and, when clicked, it calls the reset function.
function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}
