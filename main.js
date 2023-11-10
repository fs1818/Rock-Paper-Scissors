var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var defeatSound = new Audio(
  "https://praxeds.github.io/theodinproject-rock-paper-scissors/assets/audios/wronganswer-37702.mp3"
);
var victorySound = new Audio(
  "https://praxeds.github.io/theodinproject-rock-paper-scissors/assets/audios/correct-choice-43861.mp3"
);


var choices = ["rock", "paper", "scissors"];

window.onload = function() {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
}

function selectChoice(){
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";
  //opponent's choice
  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";
  //winner
  if (you == opponent){
    yourScore ++;
    opponentScore ++;
    defeatSound.play();
  }
  else {
    if (you == "rock"){
      if (opponent == "scissors"){
        yourScore ++;
      }
      else if (opponent == "paper"){
        opponentScore ++;
        defeatSound.play();
      }
    }
    else if (you == "scissors"){
      if (opponent == "paper"){
        yourScore ++;
        victorySound.play();
      }
      else if (opponent == "rock"){
        opponentScore ++;
        defeatSound.play();
      }
    }
    else if (you == "paper"){
      if (opponent == "rock"){
        yourScore ++;
        victorySound.play();
      }
      else if (opponent == "scissors"){
        opponentScore ++;
        defeatSound.play();
      }
    }
  }
  
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;


}





