
//creating an object
let score =
{
  won: 0,
  lost: 0,
  tie: 0,
};
function Choice() {
  let randomNum = Math.random() * 3;
  if (randomNum > 0 && randomNum <= 1) {
    return 'Rock';
  } else if (randomNum > 1 && randomNum <= 2) {
    return 'Paper';
  } else {
    return 'Scissor';
  }
}

function result(userchoice, compchoice) {
  if (userchoice === 'Paper') {
    if (compchoice === 'Rock') {
      score.won++;
      return 'won';
    }
    else if (compchoice === 'Scissor') {
      score.lost++
      return 'loosed';

    }
    else {
      score.tie++;
      return 'tied';
    }
  }
  else if (userchoice === 'Rock') {
    if (compchoice === 'Rock') {
      score.tie++;
      return 'tied';
    }
    else if (compchoice === 'Scissor') {
      score.won++;

      return 'won';
    }
    else if (compchoice === 'Paper') {
      score.lost++;
      return 'loosed';
    }

  }



  else if (userchoice === 'Scissor') {
    if (compchoice === 'Scissor') {
      score.tie++;

      return 'tied';
    }
    else if (compchoice === 'Paper') {
      score.won++;

      return 'won';
    }
    else {
      score.loss++;
      return 'loosed'
    }

  }
}

function showresult(userchoice, compchoice, result) {
  console.log(score);
  document.querySelector('.msg').innerText = 
  `Won: ${score.won} 
   Loss: ${score.lost} 
   Tie: ${score.tie}`;
  setTimeout(() => {
    alert(`You have "${result}".   
    
  YOU chosed ${userchoice} computer choosed ${compchoice}`);
  }, 50);
}

