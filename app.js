let userScore = 0;   // Initial score of user.
let compScore = 0;  // Initial score of computer.

const choices = document.querySelectorAll(".choice"); // 3 choice are store in array form
const msg = document.querySelector("#msg"); // message p is accessed
const userScorePara = document.querySelector("#user-score"); // user score p accessed
const compScorePara = document.querySelector("#comp-score"); // comp score p accessed

const genCompChoice = () => { // fun for generating computer choice
    const options = ["Rock", "Paper", "Scissors"] // generated choice from these 3 
    const randIdx = Math.floor(Math.random() * 3) // random num is generating which will act as index to pick array items
    return options[randIdx]; // returning the generated choice to playGame func
}

// Draw func
const drawGame = () => {  
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "white";
    msg.style.color = "#152238";
}

// func decides whether user won/lose
const showWinner = (userWin, userChoice, compChoice) => {    
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#920000ff";
        msg.style.color = "white";
    }
}

// func where userchoice will be compared with compChoice
const playGame = (userChoice) => {  
    // computer choice generated
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice) { // Draw Condition
        drawGame(); // if draw message will print
    } else {
        let userWin = true; // var to track if user is winning/losing
        if (userChoice === "Rock") { // if the choice is rock
            userWin = compChoice === "Paper" ? false : true; // compchoice will be either scissor/paper
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true; // compchoice will be either rock/scissor
        } else {
            userWin = compChoice === "Rock" ? false : true; // compchoice will be either rock/paper
        }
        showWinner(userWin, userChoice, compChoice); // func decides whether user won/lose
    }
}

// Event listener is added on each div using forEach func
choices.forEach((choice) => {                         
    choice.addEventListener("click", () => {  // When user click on any div (user made choice)        
        const userChoice = choice.getAttribute("id"); // That div's id is stored (choice id)
        playGame(userChoice); // That div's id (choice id) is sent to playGame func where it will be compared with comp choice
    });
});