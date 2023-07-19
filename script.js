const statusDisplay=document.querySelector('.game--status');
let gameActive=true;//initial state of a game
let currentPlayer="X";//initial player
//initialize all the 9 cells as empty cells
let gameState=["","","","","","","","",""];
//give a winning message X,O
const winningMessage=()=>`Player ${currentPlayer} has won!`;
const drawMessage=()=>'Game ended in draw';
const currentPlayerTurn=()=>`Its ${currentPlayer} turn` ;
statusDisplay.innerHTML=currentPlayerTurn();
//declares 5 functions
function handleCellPlayed(){
}
function handlePlayerChange(){

}
function handleResultValidation(){

}
function handleCellClick(){
    
}
function handleRestartGame(){

}
document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handleCellClick));
document.querySelector('.game--restart').addEventListener('click',handleRestartGame);
//part-2 od the code-handleCellClick--> handleCell 
function handleCellClick(clickedCellEvent){
    const clickedCell=clickedCellEvent.target;//moving
    const clickedCellIndex=parseInt(clickedCell.getAttribute('data-cell-index'));
    if(gameState[clickedCellIndex]!=="" || !gameActive){
        return;//this does not allow a cell click twice,playing after game over
    }
    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();
}
//part 3 of the program
function handleCellPlayed(clickedCell,clickedCellIndex){
    gameState[clickedCellIndex]=currentPlayer;
    clickedCell.innerHTML=currentPlayer;
}
//part 4 Result validation-probabilities
const winningCondtions=[
    [0,1,2,],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
function handleResultValidation(){
    let roundWon=false;
    for(let i=0;i<=7;i++){
        const winCondition=winningCondtions[i];
        let a=gameState[winCondition[0]];
        let b=gameState[winCondition[1]];
        let c=gameState[winCondition[2]];
        if(a===""||b===""||c===""){
               continue;
        }
        if(a===b && b===c){
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        statusDisplay.innerHTML=winningMessage();
        gameActive=false;
        return;
    }
    let roundDraw=!gameState.includes("");//true if all 9 cells are filled
    if(roundDraw){
        statusDisplay.innerHTML=drawMessage();
        gameActive=false;
        return;
    }
    handlePlayerChange();
}
//part 5 x-o-x-o
function handlePlayerChange(){
    currentPlayer=currentPlayer==="X"?"O":"X";
    statusDisplay.innerHTML=currentPlayerTurn();
}
//part 6 restart the game
function handleRestartGame(){
    gameActive=true;
    currentPlayer="X";
    gameState=["","","","","","","","",""]
    statusDisplay.innerHTML=currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
}

