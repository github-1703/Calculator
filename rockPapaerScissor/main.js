
let strscore = localStorage.getItem('Score');
let

  score = strscore ? JSON.parse(strscore) :
    {
      YOU: 0,
      COMPUTER: 0,
      TIE: 0,
    };//it sees weathere the locatl sta

// function resetScore()
// {
//   YOU:
// }

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
      score.YOU++;
      return 'WON';
    }
    else if (compchoice === 'Scissor') {
      score.COMPUTER++
      return 'loosed';

    }
    else {
      score.TIE++;
      return 'tied';
    }
  }
  else if (userchoice === 'Rock') {
    if (compchoice === 'Rock') {
      score.TIE++;
      return 'tied';
    }
    else if (compchoice === 'Scissor') {
      score.YOU++;

      return 'WON';
    }
    else if (compchoice === 'Paper') {
      score.COMPUTER++;
      return 'loosed';
    }

  }



  else if (userchoice === 'Scissor') {
    if (compchoice === 'Scissor') {
      score.TIE++;

      return 'tied';
    }
    else if (compchoice === 'Paper') {
      score.YOU++;

      return 'WON';
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
    `YOU: ${score.YOU} 

    COMPUTER: ${score.COMPUTER} 

   TIE: ${score.TIE}`;

  setTimeout(() => {
    alert(`You have "${result}".   
    
  YOU chosed ${userchoice} computer choosed ${compchoice}`);
  }, 50);
  localStorage.setItem('Score', JSON.stringify(score));//it stores the score in the local storege



}