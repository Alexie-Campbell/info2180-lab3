"use strict";



window.onload= function(){
  var board = document.getElementById('board');
  var classList = 'classList' in board;
  for (var i = 0; i < board.children.length; i++) {
      var square = board.children[i];
      if (square.tagName == 'DIV') {
            square.setAttribute("class", "square")
      }
  }
}





