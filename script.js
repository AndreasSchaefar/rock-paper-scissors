const container = document.querySelector(".container");
const selections = document.querySelectorAll(".selection");
const selectionsArray = Array.from(selections);
const playButton = document.querySelector(".play");
const results = document.querySelector(".results");
const scores = document.querySelector(".scores");
const state = document.querySelector(".state");
let maxWins = 5;
let playerScore = 0;
let computerScore = 0;


function getElementName(element) {
    return element.target.name;
};
function addHover(element) {
    element.classList.add("mouseover");
};


function computerPlay() {
    const gameElements = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * gameElements.length);
    return gameElements[randomChoice];
};


function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            return "tie";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "win";
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "win";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "win";
        default:
            return "lose";
    };
};

function getState(result) {
    if (result === "win") {
        return "You win!";
    } else if (result === "lose") {
        return "You lose!";
    } else if (result === "tie") {
        return "It's a tie!";
    }
    return;
};

playButton.addEventListener("click", e => {
    playerScore = 0;
    computerScore = 0;
    state.style.visibility = "hidden";
    e.target.remove();
    selectionsArray.forEach(item => {
        item.classList.add("mouseover");
        item.addEventListener("click", game);
    });
});

function game(e) {
    if (playerScore === 5 || computerScore === 5) {
        selectionsArray.forEach(item => {
            item.classList.remove("mouseover");
            item.removeEventListener("click", game);
            playButton.textContent = "Play again?";
            state.style.visibility = "hidden";
            container.insertBefore(playButton, results);
        });
    };
    state.style.visibility = "visible";
    let player = getElementName(e);
    let computer = computerPlay();
    let result = playRound(player, computer);
    if (result === "win") playerScore++;
    if (result === "lose") computerScore++;
    state.textContent = getState(result);
    scores.textContent = `You: ${playerScore} Computer: ${computerScore}`;
};