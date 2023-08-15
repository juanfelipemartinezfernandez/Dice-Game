function updatePlayer(string){

  document.querySelector("h1").textContent = string;
}
function generateRandomNumber(){
  return (Math.floor(Math.random()*6)+1);
}


function tirarDados(player){
let player1 = generateRandomNumber();
let player2 = generateRandomNumber();
for (let index = 1; index < 7; index++){
  
    document.querySelectorAll("img")[player].setAttribute("src","./images/dice"+player1+".png");
    document.querySelectorAll("img")[player + 1].setAttribute("src","./images/dice"+player2+".png");
  if (player1 > player2) {
    updatePlayer("Player 1 Wins!");
  } else if(player2 > player1){
    updatePlayer("Player 2 Wins!");
  } else {
    updatePlayer("Even");
  }

}
}
