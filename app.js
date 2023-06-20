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
         square.innerHTML = startPiece
        square.setAttribute('square-id')
        //square.classList.add('biege');
        const row= Math.floor(63-i/8)+1;
        if(row%2===0)
        {
            square.classList.add(i % 2 === 0 ? "biege":"brown");
        }
        else 
        {
            square.classList.add(i%2===0 ? "brown":"biege");
        }
        if(i <= 15)
        {
            square.firstChild.firstChild.classList.add('black');
        }
        gameboard.append(square);
        
    });
}

createboard()

