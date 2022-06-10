
var computerScore = document.querySelector(".computer-score")

var youScore = document.querySelector(".you-score");


function clickedRock() {

  youScore.style.backgroundImage = "url('rock.png')";
  var randomNumber = Math.floor(Math.random()*3) + 1;
  if (randomNumber === 1) {
    computerScore.style.backgroundImage = "url('rock.png')";
    computerScore.style.opacity = "1";
    computerScore.style.transform = "scale(1.5)";
    youScore.style.opacity = "1"
    youScore.style.transform = "scale(1.5)";
    document.querySelector(".who-won h1").innerHTML = "DRAW!"
  };
  if (randomNumber === 2) {
    computerScore.style.backgroundImage = "url('paper.png')";
    computerScore.style.opacity = "1";
    computerScore.style.transform = "scale(1.5)";
    youScore.style.opacity = ".5"
    youScore.style.transform = "scale(1)";
    document.querySelector(".who-won h1").innerHTML = "OOPS! COMPUTER DEFEATED YOU"
  };
  if (randomNumber === 3) {
    computerScore.style.backgroundImage = "url('scissors.png')";
    youScore.style.opacity = "1"
    youScore.style.transform = "scale(1.5)";
    computerScore.style.opacity = ".5";
    computerScore.style.transform = "scale(1)"
    document.querySelector(".who-won h1").innerHTML = "YOU WON!!!"   
  };

};
document.querySelectorAll("button")[0].addEventListener("click", clickedRock);



function clickedPaper() {

  youScore.style.backgroundImage = "url('paper.png')";
  var randomNumber = Math.floor(Math.random()*3) + 1;
  if (randomNumber === 1) {
    computerScore.style.backgroundImage = "url('rock.png')";
    computerScore.style.opacity = ".5";
    computerScore.style.transform = "scale(1)";
    youScore.style.opacity = "1"
    youScore.style.transform = "scale(1.5)";
    document.querySelector(".who-won h1").innerHTML = "YOU WON!!!"
  };
  if (randomNumber === 2) {
    computerScore.style.backgroundImage = "url('paper.png')";
    computerScore.style.opacity = "1";
    computerScore.style.transform = "scale(1.5)";
    youScore.style.opacity = "1"
    youScore.style.transform = "scale(1.5)";
    document.querySelector(".who-won h1").innerHTML = "DRAW!"
  };
  if (randomNumber === 3) {
    computerScore.style.backgroundImage = "url('scissors.png')";
    youScore.style.opacity = ".5"
    youScore.style.transform = "scale(1)";
    computerScore.style.opacity = "1";
    computerScore.style.transform = "scale(1.5)"
    document.querySelector(".who-won h1").innerHTML = "OOPS! COMPUTER DEFEATED YOU"

  };
};
  document.querySelectorAll("button")[1].addEventListener("click", clickedPaper);

function clickedScissors() {

    youScore.style.backgroundImage = "url('scissors.png')";
    var randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1) {
      computerScore.style.backgroundImage = "url('rock.png')";
      computerScore.style.opacity = "1";
      computerScore.style.transform = "scale(1.5)";
      youScore.style.opacity = ".5"
      youScore.style.transform = "scale(1)";
      document.querySelector(".who-won h1").innerHTML = "OOPS! COMPUTER DEFEATED YOU"
    };
    if (randomNumber === 2) {
      computerScore.style.backgroundImage = "url('paper.png')";
      computerScore.style.opacity = ".5";
      computerScore.style.transform = "scale(1)";
      youScore.style.opacity = "1"
      youScore.style.transform = "scale(1.5)";
      document.querySelector(".who-won h1").innerHTML = "YOU WON!!!"
    };
    if (randomNumber === 3) {
      computerScore.style.backgroundImage = "url('scissors.png')";
      youScore.style.opacity = "1"
      youScore.style.transform = "scale(1.5)";
      computerScore.style.opacity = "1";
      computerScore.style.transform = "scale(1.5)"
      document.querySelector(".who-won h1").innerHTML = "DRAW!"
    };
};
    document.querySelectorAll("button")[2].addEventListener("click", clickedScissors);
