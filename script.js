let computerImage = document.querySelector(".computer-image");
let displayResult = document.querySelector(".result-display")
let rockImage = document.querySelector(".rock-image");
let paperImage = document.querySelector(".paper-image");
let scissorsImage = document.querySelector(".scissors-image");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");


let botValue = "";
let playerInput = "";
const youWinText = `You win and Computer lose 😍`;
const computerWinText = `Computer wins and You lose 😢`;
const tieText = `Both chose the same. Tie 😐`;


function youWinFun() {
  displayResult.textContent = youWinText;
  rockImage.style.border = "10px solid #008000";
  paperImage.style.border = "10px solid #008000";
  scissorsImage.style.border = "10px solid #008000";
  computerImage.style.border = "10px solid #FF0000";
}

function computerWinFun() {
  displayResult.textContent = computerWinText;
  rockImage.style.border = "10px solid #FF0000";
  paperImage.style.border = "10px solid #FF0000";
  scissorsImage.style.border = "10px solid #FF0000";
  computerImage.style.border = "10px solid #008000";
}

function tieFun() {
  displayResult.textContent = tieText;
  rockImage.style.border = "10px solid rgb(255, 217, 0)";
  paperImage.style.border = "10px solid rgb(255, 217, 0)";
  scissorsImage.style.border = "10px solid rgb(255, 217, 0)";
  computerImage.style.border = "10px solid rgb(255, 217, 0)";
}

// computer choosing
function bot() {
  let random = Math.random()*100;
  if(random >= 0 && random < (100/3)*1) {
    computerImage.src = "rock.webp"
    botValue = "Rock";
  } else if(random >= (100/3)*1 && random < (100/3)*2) {
    computerImage.src = "paper.avif"
    botValue = "Paper";
  } else if(random >= (100/3)*2 && random < (100/3)*3) {
    computerImage.src = "scissors.jpg"
    botValue = "Scissors";
  }
}



// player choosing

rockButton.addEventListener("click", function() {
  playerInput = "Rock";
  bot();
  calculateResult();
});

paperButton.addEventListener("click", function() {
  playerInput = "Paper";
  bot();
  calculateResult();
});

scissorsButton.addEventListener("click", function() {
  playerInput = "Scissors";
  bot();
  calculateResult();
});




// calculating result


function calculateResult() {
  if (playerInput == "Rock") {
    if (botValue == "Rock") {
      tieFun();
    } else if (botValue == "Paper") {
      computerWinFun();
    } else if (botValue == "Scissors") {
      youWinFun();
    }
  } else if (playerInput == "Paper") {
    if (botValue == "Rock") {
      youWinFun();
    } else if (botValue == "Paper") {
      tieFun();
    } else if (botValue == "Scissors") {
      computerWinFun();
    }
  } else if (playerInput == "Scissors") {
    if (botValue == "Rock") {
      computerWinFun();
    } else if (botValue == "Paper") {
      youWinFun();
    } else if (botValue == "Scissors") {
      tieFun();
    }
  }
}

console.log("No need of console here, that's why console will be empty. However, you can you the console. 😉")