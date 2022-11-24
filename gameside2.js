/*const randomNumber = Math.floor(Math.random() * 3);*/
const themRock = document.querySelector("#themrock");
const themPaper = document.querySelector("#thempaper");
const themScissors = document.querySelector("#themscissors");
const youRock = document.querySelector("#yourock");
const youPaper = document.querySelector("#youpaper");
const youScissors = document.querySelector("#youscissors");
const firstMessage = document.querySelector(".firstMessage");
const winnerBox = document.querySelector(".winner");
const winnerIsThem = document.querySelector("#winnerIsThem");
const winnerIsYou = document.querySelector("#winnerIsYou");

/*buttons */
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    themRock.style.display = "block";
    themPaper.style.display = "none";
    themScissors.style.display = "none";
  }
  if (randomNumber === 1) {
    themRock.style.display = "none";
    themPaper.style.display = "block";
    themScissors.style.display = "none";
  }
  if (randomNumber === 2) {
    themRock.style.display = "none";
    themPaper.style.display = "none";
    themScissors.style.display = "block";
  }
}
/*let theWinnerIs = "You won! Now run!!";
let theWinnerIsThem = "They won, let's try again.";
winner.innerText = theWinnerIs;*/

/*points. the valueYouThem will change the inline text in pointsThem/you to the value of valueThemYou.  */
let valueYou = 0;
let valueThem = 0;

const pointsThem = document.querySelector("#pointsThem");
const pointsYou = document.querySelector("#pointsYou");

pointsThem.innerText = valueThem;
pointsYou.innerText = valueYou;

firstMessage.addEventListener("click", function () {
  firstMessage.style.display = "none";
});

/*pressing the Rock button */
rockButton.addEventListener("click", function () {
  getRandomNumber();
  youPaper.style.display = "none";
  youScissors.style.display = "none";
  youRock.style.display = "block";
  if (themPaper.style.display == "block") {
    console.log("hellothem");
    valueThem += 1;
    console.log("under them");
    pointsThem.innerText = valueThem;
    pointsYou.innerText = valueYou;
  } else if (themScissors.style.display == "block") {
    console.log("helloyou");
    valueYou += 1;
    console.log("under you");
    pointsYou.innerText = valueYou;
    pointsThem.innerText = valueThem;
  }
  if (valueThem == 3) {
    winnerBox.style.display = "block";
    winnerIsThem.style.display = "block";
  } else if (valueYou == 3) {
    winnerBox.style.display = "block";
    winnerIsYou.style.display = "block";
  }
});

/*pressing the Paper button */
paperButton.addEventListener("click", function () {
  getRandomNumber();
  youRock.style.display = "none";
  youScissors.style.display = "none";
  youPaper.style.display = "block";
  if (themScissors.style.display == "block") {
    valueThem += 1;
    pointsThem.innerText = valueThem;
    pointsYou.innerText = valueYou;
  } else if (themRock.style.display == "block") {
    valueYou += 1;
    pointsYou.innerText = valueYou;
    pointsThem.innerText = valueThem;
  }
  if (valueThem == 3) {
    winnerBox.style.display = "block";
    winnerIsThem.style.display = "block";
  } else if (valueYou == 3) {
    winnerBox.style.display = "block";
    winnerIsYou.style.display = "block";
  }
});

/*pressing the Scissors button */
scissorsButton.addEventListener("click", function () {
  getRandomNumber();
  youRock.style.display = "none";
  youPaper.style.display = "none";
  youScissors.style.display = "block";
  if (themRock.style.display == "block") {
    valueThem += 1;
    pointsThem.innerText = valueThem;
    pointsYou.innerText = valueYou;
  } else if (themPaper.style.display == "block") {
    valueYou += 1;
    pointsYou.innerText = valueYou;
    pointsThem.innerText = valueThem;
  }
  if (valueThem == 3) {
    winnerBox.style.display = "block";
    winnerIsThem.style.display = "block";
  } else if (valueYou == 3) {
    winnerBox.style.display = "block";
    winnerIsYou.style.display = "block";
  }
});
