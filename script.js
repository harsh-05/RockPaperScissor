//Getting the HTML reference to various variables.
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#computer-score");
const result = document.querySelector(".result > p");

const choice = document.querySelectorAll(".choices > .choice");



if (user_score.textContent === '0' && comp_score.textContent === '0') {
    result.textContent = "";
}

let u_score = 0;
let c_score = 0;

choice.forEach(choice => {
    choice.addEventListener("click", () => {
        console.log(choice.id);
        const user_choice = choice.id;
        
        const comp_choice = getComputerChoice(); //getting computer choice.
        console.log(comp_choice);

        const result_text = playRound_result_text(user_choice, comp_choice);

        const result_score = round_result(user_choice, comp_choice);
        
        //Updating the User and Comp score according to the round_result(). 
        if(result_score === 1) {
            u_score += 1;
            result.textContent = result_text;
            user_score.textContent = u_score;

        } else if (result_score === 0) {
            c_score += 1;
            result.textContent = result_text;
            comp_score.textContent = c_score;
        } else {
            result.textContent = result_text;
        }



    });
});


function getComputerChoice () {
    let random_choice = Math.floor(Math.random()*3) + 1;

    if (random_choice === 1) {
        return "r";
    } else if (random_choice === 2) {
        return "p";
    } else {
        return "s";
    }
}

function playRound_result_text (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
     
    if (playerSelection === "r" && computerSelection === "p") {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "p" && computerSelection === "r") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection === "p" && computerSelection === "s") {
        return "You Lose! scissor beats paper";
    }
    if (playerSelection === "s" && computerSelection === "p") {
        return "You Win! scissor beats paper";
    }
    if (playerSelection === "s" && computerSelection === "r") {
        return "You Lose! Rock beats scissor";
    }
    if (playerSelection === "r" && computerSelection === "s") {
        return "You Win! Rock beats scissor";
    }

    //Draw cases
    if (playerSelection === "r" && computerSelection === "r") {
        return "Draw! Rock cannot beat Rock";
    }
    if (playerSelection === "s" && computerSelection === "s") {
        return "Draw! Scissor cannot beat Scissor";
    }
    if (playerSelection === "p" && computerSelection === "p") {
        return "Draw! Paper cannot beat Paper";
    }
    


}

function round_result (playerSelection, computerSelection ) {
    if (playerSelection === "r" && computerSelection === "p") {
        return 0;
    }
    if (playerSelection === "p" && computerSelection === "r") {
        return 1;
    }
    if (playerSelection === "p" && computerSelection === "s") {
        return 0;
    }
    if (playerSelection === "s" && computerSelection === "p") {
        return 1;
    }
    if (playerSelection === "s" && computerSelection === "r") {
        return 0;
    }
    if (playerSelection === "r" && computerSelection === "s") {
        return 1;
    }

    //Draw cases
    if (playerSelection === "r" && computerSelection === "r") {
        return -1;
    }
    if (playerSelection === "s" && computerSelection === "s") {
        return -1;
    }
    if (playerSelection === "p" && computerSelection === "p") {
        return -1;
    }
}
