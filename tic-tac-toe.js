"use strict";



window.onload= function(){
  var board = document.getElementById('board');
  var classList = 'classList' in board;
  for (var i = 0; i < board.children.length; i++) {
      var square = board.children[i];
      if (square.tagName == 'DIV') {
            square.setAttribute("class", "square");
            square.addEventListener("click", squareClicked);
            square.addEventListener("mouseover", squareHoverTrue);
            square.addEventListener("mouseout", squareHoverFalse);
      }
  }
}

const playBoard = [];

function pushElement(el, object){
  var element = el;
  let thisSquare = object;
  playBoard.push(element);
    console.log(playBoard);
    thisSquare.innerHTML = element;
    thisSquare.classList.add(element);
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