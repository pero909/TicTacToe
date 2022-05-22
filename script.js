window.onload = function (){
    let board = document.createElement('div');
    let container= document.getElementById('container');
    board.setAttribute('id','board');
    board.style.border = "2px solid black"
    container.appendChild(board);
}