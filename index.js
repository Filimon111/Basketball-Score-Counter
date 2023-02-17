let team1Score = 0, team2Score = 0;
//document.getElementbyClassName("score");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
//let score1 = document.querySelector(".score1");
function addOneHome(){
  team1Score++;
  score1.textContent = team1Score;
}

function addTwoHome(){
  team1Score+=2;
  score1.textContent = team1Score;
}

function addThreeHome(){
  team1Score+=3;
  score1.textContent = team1Score;
}

function addOneGuest(){
  team2Score++;
  score2.textContent = team2Score;
}

function addTwoGuest(){
  team2Score+=2;
  score2.textContent = team2Score;
}

function addThreeGuest(){
  team2Score+=3;
  score2.textContent = team2Score;
}
