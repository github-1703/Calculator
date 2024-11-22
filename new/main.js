

function Choice() 
{
  let randomNum = Math.random() * 3;
  if (randomNum > 0 && randomNum <= 1) {
    return 'Rock';
  } else if (randomNum > 1 && randomNum <= 2) {
    return 'Paper';
  } else {
    return 'Scissor' ;
  }
}
function result(userchoice,compchoice)
{
  if(userchoice==='Paper' && compchoice==='Paper'
  )
  {return 'Tie';}
  else if(userchoice==='Paper' && compchoice==='Rock'
  )
  {
    return 'Won';
  }
  else if(userchoice==='Paper' && compchoice==='Scissor'
  )
  {
    return 'Loss';
  }
  else if(userchoice==='Rock' && compchoice==='Rock'
  )
  {
    return 'Tie';
  }
  else if(userchoice==='Rock' && compchoice==='Paper'
  )
  {
    return 'Loss';
  }
  
  else if(userchoice==='Rock' && compchoice==='Scissor'
  )
  {
    return 'Won';
  }

  else if(userchoice==='Scissor' && compchoice==='Paper'
  )
  {
    return 'Won';
  }
  else if(userchoice==='Scissor' && compchoice==='Rock'
  )
  {
    return 'Loss';
  }
  else if(userchoice==='Scissor' && compchoice==='Scissor'
  )
  {
    return 'Tie';
  }
}