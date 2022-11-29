/*FIRST ROOM
MAT - if mat is klicked a paper will show. click outside the paper will dissapear. this will happen every time.
PLANT - if the plant is klicked it will move to center of box, and show the key. this will be stored so its
always moved after this.
KEY -  when the key is shown it can be clicked on and it will dissapear and appear in the top grid-box and stored.
CABINET - if cabinet is clicked you get a message that it is closed, but IF a key has been found before,
        the cabinet will open and the key will disapear from the top grid-box.
        Then a paper will be shown in the new image of an opened cabinet. so if its clicked again a paper will
        show on screen and whn clicked outside it will dissapear. and can be clicked on multiple times as well
        as the other paper. 
DOOR LOCK - if clicked it will be "zoomed in on" and appear big on screen. it will have 9 buttons. if the 
right 4 buttons are pressed a lamp will turn green and when going back to the room the door will be open.
DOOR - message that it is locked if clicked on. appear open if the right code is written in doorlock.

*/

const conversation = document.querySelector(".conversation");
const foundKey = document.querySelector("#foundkey");
const hideKey = document.querySelector("#hidekey");
const plant = document.querySelector("#plant");
const codeLock = document.querySelector("#codelock");
const codeLockSelected = document.querySelector(".codelockselected");
const door = document.querySelector("#door");
const openDoor = document.querySelector("#openDoor");
const cabinet = document.querySelector("#cabinet");
const paperCabinet = document.querySelector("#paperCabinet");
const openCabinet = document.querySelector("#openCabinet");
const mat = document.querySelector("#mat");
const paperMat = document.querySelector("#paperMat");
const wrongCode = document.querySelector(".buttonsWrong");
const code1 = document.querySelector("#code1");
const code2 = document.querySelector("#code2");
const code5 = document.querySelector("#code5");
const code7 = document.querySelector("#code7");
const submitButton = document.querySelector("#submitButton");
const submission = document.querySelector("#submission");

let gameside = 1;

paperMat.style.display = "none";
let paperMatVisible = false; /*i need the paper to not show in beginning */

let PlantFirstPlace = true;

foundKey.style.display = "none";
openCabinet.style.display = "none";

let keyIsFound = false;

paperCabinet.style.display = "none";
let paperCabinetVisible = false;

codeLockSelected.style.display = "none";
let codeLockVisible = false;

let value = 0;
openDoor.style.display = "none";

/*show the paper under mat*/
mat.addEventListener("click", function () {
  if (paperMatVisible === false) {
    paperMat.style.display = "block";
    paperMatVisible = true;
  } else {
    paperMat.style.display = "none";
    paperMatVisible = false;
  }
});

/*move plant */
plant.addEventListener("click", function () {
  if (plant.style.marginLeft !== "0%") {
    plant.style.marginLeft = "0%";
    PlantFirstPlace = false;
    hideKey.style.display = "block";
  }
});

/*show the key behind plant*/
hideKey.addEventListener("click", function () {
  hideKey.style.display = "none";
  foundKey.style.display = "block";
  keyIsFound = true;
});

/* opening the cabinet */
cabinet.addEventListener("click", function () {
  if (keyIsFound == true) {
    openCabinet.style.display = "block";
    cabinet.style.display = "none";
    foundKey.style.display = "none";
    keyIsFound = false;
  }
});

/*show paper in cabinet */
openCabinet.addEventListener("click", function () {
  if (paperCabinetVisible == false) {
    paperCabinet.style.display = "block";
    paperCabinetVisible = "true";
  } else {
    paperCabinet.style.display = "none";
    paperCabinetVisible = false;
  }
});

/* show code lock */
codeLock.addEventListener("click", function () {
  if (codeLockVisible == false) {
    codeLockSelected.style.display = "block";
    codeLockVisible = true;
  } else {
    codeLockSelected.style.display = "none";
    codeLockVisible = false;
  }
});

/* typing the code - 2 5 7 1 */
code2.addEventListener("click", function () {
  if (value == 0) {
    value = 1;
    console.log(value);
  } else {
    value = 0;
  }
});

code5.addEventListener("click", function () {
  if (value == 1) {
    value = 2;
    console.log(value);
  } else {
    value = 0;
  }
});

code7.addEventListener("click", function () {
  if (value == 2) {
    value = 3;
    console.log(value);
  } else {
    value = 0;
  }
});

code1.addEventListener("click", function () {
  if (value == 3) {
    value = 4;
    unlockDoor();
    console.log(value);
  } else {
    value = 0;
  }
});
wrongCode.addEventListener("click", function () {
  value = 0;
});

/*door opens */
function unlockDoor() {
  if (value == 4) {
    openDoor.style.display = "block";
    door.style.display = "none";
    gameside = 3;
  }
}

/**funkar ej!!!!!!!!!!!!!!!!!! */
submitButton.addEventListener("click", function () {
  submission.style.display = "none";
});

function callName() {
  let name = document.querySelector("#name").value;
  localStorage.setItem("playerName", name);
}
