"use strict";


window.onload= function(){
  var board = document.getElementById('board');
  var classList = 'classList' in board;
  for (let i = 0; i < board.children.length; i++) {
      var square = board.children[i];
      if (square.tagName == 'DIV') {
            square.setAttribute("class", "square");
            square.setAttribute("id", "pos"+(i+1));
            square.addEventListener("click", squareClicked);
            square.addEventListener("mouseover", squareHoverTrue);
            square.addEventListener("mouseout", squareHoverFalse);
      }
  }


  var newGameBtn = document.getElementsByClassName("controls")[0].getElementsByClassName("btn")[0];
  newGameBtn.addEventListener("click", resetGame);
}




var playBoard = [];
var playPositionsX = [];
var playPositionsO = [];

const winScenarios= [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
//winScenarios include arrays of the possible wins (order does not matter)
//for example array [1,2,3] would also work if the player played [3,2,1] or [2,3,1] or [1,3,2] etc

function pushElement(el, object){
  var element = el;
  let thisSquare = object;
  playBoard.push(element);
  console.log(playBoard);
  thisSquare.innerHTML = element;
  thisSquare.classList.add(element);

  var thisSquareID = thisSquare.id;
  var thisSquarePos= thisSquareID.replace("pos","");
  if (element == "X"){
    playPositionsX.push(thisSquarePos);
    console.log(playPositionsX);
    var winX = checkSequence(playPositionsX);
    console.log("successFlag"+winX);
    if (winX){
      announceWin("X");
    }
  }
  else{
    playPositionsO.push(thisSquarePos);
    console.log(playPositionsO);
    var winO = checkSequence(playPositionsO);
    console.log("successFlag"+winO);
    if (winO){
      announceWin("O");
    }
  }
}

function announceWin(el){
  let winner = el;
  var status = document.getElementById("status");
  status.classList.add("you-won");
  status.innerHTML="Congratulations! "+winner+" is the Winner!";
}

function checkSequence(arrPos){
  let arrayToCheck = arrPos;
  console.log(arrayToCheck);
  for (let i=0; i<winScenarios.length; i++){
    let thisWinScenario = winScenarios[i];
    console.log(thisWinScenario);
    var successFlag = thisWinScenario.every((val) => arrayToCheck.includes(val));
    console.log(successFlag);
    if(successFlag){
      break;
    }
  }
  return successFlag;
}

function squareClicked(){
  let thisSquare = this;
  console.log("i clicked a square");
  if (playBoard.length == 0){
    pushElement("X",thisSquare);
  }
  else{
    var lastPlayed = playBoard[playBoard.length-1];
    if(lastPlayed == "X"){
    pushElement("O", thisSquare);
    }
    else{
     pushElement("X", thisSquare);
    }
  }
}

function squareHoverTrue(){
  let thisSquare = this;
  thisSquare.classList.add("hover");
}

function squareHoverFalse(){
  let thisSquare = this;
  thisSquare.classList.remove("hover");
}


function resetGame(){
  console.log("game is reset");
  playBoard = [];
  playPositionsX = [];
  playPositionsO = [];
  var status = document.getElementById("status");
  status.classList.remove("you-won");
  status.innerHTML="Move your mouse over a square and click to play an X or an O.";
  for (let i = 0; i < board.children.length; i++) {
      var square = board.children[i];
      if (square.tagName == 'DIV') {
            square.innerHTML="";
            square.classList.remove("X","O");
      }
   }
}