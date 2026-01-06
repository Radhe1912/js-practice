const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const computer = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");

const user = (choice) => {
    const computerChoice = computer();
    computerChoiceDisplay.textContent = computerChoice;
    userChoiceDisplay.textContent = choice;
    if (choice === computerChoice) {
        alert(`It's a tie! Both chose ${choice}`);
    } else if ((choice === "rock" && computerChoice === "scissors") ||
               (choice === "paper" && computerChoice === "rock") ||
               (choice === "scissors" && computerChoice === "paper")) {
        alert(`You win! ${choice} beats ${computerChoice}`);
    } else {
        alert(`You lose! ${computerChoice} beats ${choice}`);
    }
}

rock.addEventListener("click", () => user("rock"));
paper.addEventListener("click", () => user("paper"));
scissors.addEventListener("click", () => user("scissors"));