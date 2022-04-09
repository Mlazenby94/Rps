let choices = ['rock','paper','scissors']


//create a function that generates a random computer choice
function computerChoice(){
    let randomC = choices[Math.floor(Math.random() * choices.length)]
    console.log(randomC)
    return randomC
}
computerChoice()

//create a function that takes a players input and goes against the computer

function playRound(){
    let computer = computerChoice()
    let humanChoice = 'rock'
    
}