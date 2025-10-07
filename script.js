console.log("Tic Tac Toe game Started!!");
const gameBoard= (function(){
    const board=[['','',''],['','',''],['','','']];
    function placeMarker( row,col,marker){
        if(board[row][col]==='') {board[row][col]=marker;return true;}
        return false;
    } 
    function printBoard(){
        console.log("Current Board:");
        board.forEach(row=> console.log(row));
    };
    function resetBoard(){
          for(let i=0;i<3;i++){
              for(let j=0;j<3;j++){
                board[i][j]='';
              }
        }
    }
    function getCell(row,col){
        return board[row][col];
    }
   
    return{printBoard,placeMarker,resetBoard,getCell};
})();
const Player=(name,marker)=>{
    return{name,marker};
};
const GameController =(function(){
    let players=[];
    let index=0;
    let gameOver=false;
    let winner=null;
    function startGame(player1,player2){
    players=[Player('player1','X'),Player('player2','O')];
    gameBoard.resetBoard();
    index=0;
    gameOver=false;
    winner=null;
    }
    function playTurn(row,col){
        if(gameOver) return;
        const current=players[index];
        if(gameBoard.placeMarker(row,col,current.marker)){
           const status= checkGameStatus();
           if (status==='win' || status==='tie'){ gameOver=true;}
           else{ switchPlayer();}
        }
    
    }
    function checkGameStatus(){
        const marker=players[index].marker;
        for(let i=0;i<3;i++){
            if(gameBoard.getCell(i, 0)!== '' && gameBoard.getCell(i, 0)==gameBoard.getCell(i, 1) && gameBoard.getCell(i, 1)==gameBoard.getCell(i, 2)){
                winner=players[index];
                console.log(`We have a winner it's ${players[index].name} `);
                return 'win';
            }
        }
        for(let j=0;j<3;j++){
             if(gameBoard.getCell(0, j) !== '' && gameBoard.getCell(0, j)==gameBoard.getCell(1, j) && gameBoard.getCell(1, j)==gameBoard.getCell(2, j)){
                winner=players[index];
                console.log(`We have a winner it's ${players[index].name} `);
                return 'win';
            }
        }
        if(gameBoard.getCell(1, 1) !== '' && (gameBoard.getCell(0, 0)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 2)) || (gameBoard.getCell(0, 2)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 0))){
            winner=players[index];
            console.log(`We have a winner it's ${players[index].name} `);
            return 'win';
        }
        if(isBoardFull()){
            console.log('It is a tie!!');
            return 'tie';
        }
        return 'continue';
    }
    function isBoardFull(){
        for(let i=0;i<3;i++){
              for(let j=0;j<3;j++){
                if(gameBoard.getCell(i, j)==='') return false;
              }
        }
        return true;
    }
    function switchPlayer(){
        index=index===0 ? 1:0;
        console.log(`It's now ${players[index].name}'s turn!! `);
    }
    function printStatus(){}

    return{startGame,playTurn,checkGameStatus,isBoardFull}
})();