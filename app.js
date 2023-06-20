//the main setup

const gameboard = document.querySelector("#gameboard");
const player = documnet.querySelector("#player");
const infodisplay = document.querySelector("#info-display");

//pieces of the board game 
const width = 8
const startpieces{
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
}

function createboard()
{
    startpieces.forEach(startPiece)=> {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('biege');
        gameboard.append(square);
        
    });
}

createboard()

