
function getComputerChoice(){
    
    let computerAnswer = null

    let num_one = "rock"
    let num_two = "paper"
    let num_three = "scissors"

    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice === 0){
        computerAnswer = num_one
    }
    else if (compChoice === 1){
        computerAnswer = num_two
    }
    else{
        computerAnswer = num_three
    }
    return "Computer choice: "+computerAnswer    
}
console.log(getComputerChoice())

 function getHumanChoice(){
    let answer = prompt("Enter your choice. :Either rock, paper or scissors").toLowerCase()
    return "Your choice: "+answer

 }
 console.log(getHumanChoice())

// let humanScore = 0
// let computerScore = 0

// function playRound(humanChoice, computerChoice){
//     let win1 = "You win! Rock beats scissor"
//     let win2 = "You win! Paper beats rock"
//     let win3 = "You win! Scissor beats paper"

//     let lose1 = "You lose! Rock beats scissor"
//     let lose2 = "You lose! Paper beats rock"
//     let lose3 = "You lose! Scissor beats paper"

//     let draw = "You draw!"

//     if(humanChoice === "rock" && computerChoice === "scissors"){
//         console.log(win1)
//     }
//     else if(humanChoice === "paper" && computerChoice === "rock"){
//         console.log(win2)
//     }
//     else if(humanChoice === "scissors" && computerChoice === "paper"){
//         console.log(win3)
//     }
//     else if(humanChoice === "rock" && computerChoice === "paper"){
//         console.log(lose2)
//     }
//     else if(humanChoice === "paper" && computerChoice === "scissors"){
//         console.log(lose3)
//     }
//     else if(humanChoice === "scissors" && computerChoice === "rock"){
//         console.log(lose1)
//     }
//     else if (humanChoice == computerChoice){
//         console.log(draw)
//     }

// }

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

// playRound(humanSelection, computerSelection)









