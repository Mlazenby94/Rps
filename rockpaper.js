let scissBtn = document.querySelector('#scissors')
let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let scores = document.querySelector('#placehere')
let computerScore = document.querySelector('#computerscore')
let playerScore = document.querySelector('#playerscore')
let results = document.querySelector('#placehere')
let resetBtn = document.querySelector('#reset')

//set initiate values of scores to 0
let computerS = 0;
let playerS = 0;

playerScore.textContent = playerS
computerScore.textContent = computerS

//choices for the game
let choices = ['rock', 'paper', 'scissors']
//function to get a random choice
function computerChoice(){
  let randomC = choices[Math.floor(Math.random() * choices.length)]
  return randomC
}

function playRound(playerC){
  let computerC = computerChoice()
  if(playerC === computerC){
    results.textContent = 'the round was a tie'
    results.style.color = '#eee'
  } else if((playerC === 'rock' && computerC ==='scissors')||(playerC === 'paper' && computerC === 'rock') || (playerC === 'scissors' && computerC === 'paper')){
    playerS++
    playerScore.textContent = playerS
    results.textContent = `you choose ${playerC} and the computer choose ${computerC} you win! `
    results.style.color = '#eee'
    if(playerS >= 5){
      results.style.color = '#00FFFF'
      results.textContent = 'you beat the computer to 5 and won!'
      rockBtn.setAttribute('disabled', '')
      paperBtn.setAttribute('disabled', '')
      scissBtn.setAttribute('disabled', '')
      resetBtn.removeAttribute('disabled')
    }
  } else {
    computerS++
    computerScore.textContent = computerS
    results.style.color = 'orange'
    results.textContent = 'The computer won the round'
    if(computerS >= 5){
      results.style.color = 'red';
      results.textContent = 'The game is over and the computer won!'
      rockBtn.setAttribute('disabled', '')
      paperBtn.setAttribute('disabled', '')
      scissBtn.setAttribute('disabled', '')
      resetBtn.removeAttribute('disabled')
      
    }
  } 
}

function resetGame(){
  playerS = 0;
  computerS = 0;
  computerScore.textContent = computerS
  playerScore.textContent = playerS
  paperBtn.removeAttribute('disabled')
  scissBtn.removeAttribute('disabled')
  rockBtn.removeAttribute('disabled')
  resetBtn.setAttribute('disabled', '')
  
  
  
  
}



rockBtn.addEventListener('click', () => {
  playRound('rock')
})
paperBtn.addEventListener('click', () => {
  playRound('paper')
})
scissBtn.addEventListener('click', () => {
  playRound('scissors')
})

resetBtn.addEventListener('click', resetGame)