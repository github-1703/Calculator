
//const input = prompt("enter you name");

//console.log(input);

let num = 0;
let button;
greeting("Prashant")
  ;

function greeting(getname = "hi") {
  let date = new Date();
  console.log(date);
  let hour = date.getHours();
  console.log(hour)
  let greeting = document.querySelector('#greeting');
  if (hour >= 4 && hour < 12) {
    greeting.innerText = `Good morning ${getname} time is  ${hour}`;
  }

  else if (hour >= 12 && hour < 17) {
    greeting.innerText = `Good afternoon ${getname} time is ${hour}`;
  }
  else if (hour >= 17 && hour < 19) {
    greeting.innerText = `Good Evening ${getname}  tiem is  ${hour}`;
  }
  else {
    greeting.innerText = `Good Night ${getname} time is ${hour}`;
  }



}



function Pressed() {
  console.log("pressed");


  button = document.querySelector('#pressed');
  button.innerText = num;
  num++;

  updateColor();
}
function updateColor() {

  if (num % 2 === 0) {
    button.classList.remove('js-odd');//it removes the class list from js-odd
    button.classList.add('js-even');//add the class name of the button to js-even
  }
  else {

     button.classList.remove('js-even');
    button.classList.add('js-odd');
  }

}