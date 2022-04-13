let scissBtn = document.querySelector('#scissors')
let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let textBox = document.querySelector('#placehere')
let player = document.querySelector('#playerscore')
let computer = document.querySelector('#computerscore')

//set initiate values of scores to 0
let computerS = 0;
let playerS = 0;

//set scores to the dom.

player.textContent = playerS
computer.textContent = computerS
//choices of the game
let choices = ['rock', 'paper', 'scissors']

//generte the computer choices
function computerChoice(){
  let randomC = choices[Math.floor(Math.random() * choices.length)]
  return randomC
}

function playRound(playerC){
  let computerC = computerChoice()
  if(playerC === computerC){
    textBox.textContent = 'The game is a tie'
  } else if((playerC === 'rock' && computerC === 'scissors') || (playerC === 'paper' && computerC === 'rock') ||(playerC === 'scissors' && computerC === 'paper')){
    playerS++
    player.textContent = playerS
    textBox.textContent = 'You beat the computer'
    if(playerS === 5){
      textBox.style.color = 'green'
      textBox.textContent = 'You have bested the computer and won'
    }
  } else {
    computerS++
    textBox.textContent ='the computer beat you!'
    computer.textContent = computerS
    
    if(computerS === 5){
      textBox.style.color = 'red';
      textBox.textContent = 'You lost to a computer try again'
    }
  }
}


//event listeners for buttons
rockBtn.addEventListener('click', () => {
  playRound('rock')
})
scissBtn.addEventListener('click', () => {
  playRound('scissors')
})
paperBtn.addEventListener('click', () => {
  playRound('paper')
})
