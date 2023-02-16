
const totalScore={playerScore:0,computerScore:0}

function getComputerChoice() {
  const rpsChoice=['Rock','Paper','Scissors']
  const num = Math.floor(Math.random()*3)
  return rpsChoice[num]
}


function getResult(playerChoice, computerChoice) {

  let score;
  if(playerChoice==computerChoice){
    score = 0
  }
  else if(playerChoice=='Rock' && computerChoice== 'Scissors'){
  score = 1
  }
  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1 
    }
    else if(playerChoice=='Scissors' && computerChoice== 'Paper'){
        score = 1
        }
        else{
            score = -1
        }
        return score
  
}



function showResult(score, playerChoice, computerChoice) {

  const resDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score')
  const computerScoreDiv=document.getElementById('computer-score')
  if(score == -1){
    resDiv.innerText='You Lose'
  }else if(score == 0){
    resDiv.innerText="It's a tie!"
  }
else{
  resDiv.innerText='You Won'
}
handsDiv.innerText= `👱 ${playerChoice} vs 🤖 ${computerChoice}`
playerScoreDiv.innerText= `your score: ${totalScore['playerScore']}`
computerScoreDiv.innerText= `Computer score: ${totalScore['computerScore']}`
}


function onClickRPS(playerChoice) {
  console.log({playerChoice});
  const computerChoice=getComputerChoice()
  const score=getResult(playerChoice,computerChoice)
  console.log({computerChoice});
  console.log({score});
  totalScore['playerScore'] +=score;
  totalScore['computerScore'] -= score;
  console.log(totalScore);
  showResult(score,playerChoice,computerChoice)
}




function playGame() {

const rpsButtons=document.querySelectorAll('.rpsButton')
rpsButtons.forEach(rpsButton=>{
    rpsButton.onclick=()=>{
        onClickRPS(rpsButton.value)
    }
})
 const endButton=document.getElementById('endGameButton')
  endButton.onclick=()=> endGame(totalScore)
}


function endGame() {
  totalScore['playerScore']= 0
  totalScore['computerScore']= 0
  const resDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score') 
resDiv.innerText=''
handsDiv.innerText=''
playerScoreDiv.innerText=''

}

playGame()