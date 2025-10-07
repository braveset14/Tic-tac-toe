/*console.log("Tic Tac Toe game Started!!");
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
        displayController.showBoard(); 
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
       console.log(`Game started! First player: ${players[0].name}`);
    }
    function playTurn(row,col){
        if(gameOver) return;
        const current=players[index];
         const success = gameBoard.placeMarker(row, col, current.marker);
        
         if(success){
            console.log(`${current.name} placed ${current.marker} at (${row}, ${col})`);
            const status = checkGameStatus();
            
            if(status === 'win'){
                gameOver = true;
                winner = current;
                console.log(`We have a winner: ${winner.name}!`);
            } else if(status === 'tie'){
                gameOver = true;
                console.log('Game ended in a tie!');
            } else {
                switchPlayer();
            }
            return true;
        }
        return false;
    }
    function getCurrentPlayer(){
        return players[index];
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
        if(gameBoard.getCell(1, 1) !== '' && ((gameBoard.getCell(0, 0)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 2)) || (gameBoard.getCell(0, 2)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 0)))){
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
    function isGameOver(){
        return gameOver;
    }
    
    function getWinner(){
        return winner;
    }
    

    return{startGame,playTurn,checkGameStatus,isBoardFull,getCurrentPlayer,isGameOver,getWinner}
})();
const displayController= (function(){
    function showBoard(){
        const boardElement=document.getElementById('board');
        boardElement.innerHTML='';
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const cell=document.createElement('div');
                cell.className = 'cell';
                cell.textContent = gameBoard.getCell(i, j);
                cell.dataset.row=i;
                cell.dataset.col=j;
                cell.addEventListener('click',handleClick);
                boardElement.appendChild(cell);
            }
        }
    }
    function handleClick(event){
        const row=parseInt(event.target.dataset.row);
        const col=parseInt(event.target.dataset.col);
        GameController.playTurn(row,col);
        showBoard();
        updateStatus();
    }
    function updateStatus(){
        const statusElement=document.getElementById('status');
        const gameStatus = GameController.checkGameStatus();
         if (gameStatus === 'win') {
            statusElement.textContent = `Winner: ${GameController.getCurrentPlayer().name}!`;
            disableBoard();
        } else if (gameStatus === 'tie') {
            statusElement.textContent = "It's a tie!";
            disableBoard();
        } else {
            statusElement.textContent = `Current player: ${GameController.getCurrentPlayer().name} (${GameController.getCurrentPlayer().marker})`;
        }
    }
    function disableBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
            cell.style.cursor = 'default';
        });
    }
     function resetGame() {
        GameController.startGame();
        showBoard();
        updateStatus();
    }
    return{showBoard, updateStatus,resetGame};
})();
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the game
    GameController.startGame();
    displayController.showBoard();
    displayController.updateStatus();
    
    // Add reset button functionality
    document.getElementById('resetButton').addEventListener('click', function() {
        GameController.startGame();
        displayController.showBoard();
        displayController.updateStatus();
    });
});
displayController.showBoard();*/
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
        displayController.showBoard(); 
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
       console.log(`Game started! First player: ${players[0].name}`);
    }
    function playTurn(row,col){
        if(gameOver) return;
        const current=players[index];
         const success = gameBoard.placeMarker(row, col, current.marker);
        
         if(success){
            console.log(`${current.name} placed ${current.marker} at (${row}, ${col})`);
            const status = checkGameStatus();
            
            if(status === 'win'){
                gameOver = true;
                winner = current;
                console.log(`We have a winner: ${winner.name}!`);
            } else if(status === 'tie'){
                gameOver = true;
                console.log('Game ended in a tie!');
            } else {
                switchPlayer();
            }
            return true;
        }
        return false;
    }
    function getCurrentPlayer(){
        return players[index];
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
        if(gameBoard.getCell(1, 1) !== '' && ((gameBoard.getCell(0, 0)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 2)) || (gameBoard.getCell(0, 2)==gameBoard.getCell(1, 1) && gameBoard.getCell(1, 1)==gameBoard.getCell(2, 0)))){
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
    function isGameOver(){
        return gameOver;
    }
    
    function getWinner(){
        return winner;
    }
    

    return{startGame,playTurn,checkGameStatus,isBoardFull,getCurrentPlayer,isGameOver,getWinner}
})();
const displayController= (function(){
    function showBoard(){
        const boardElement=document.getElementById('board');
        boardElement.innerHTML='';
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const cell=document.createElement('div');
                cell.className = 'cell';
                cell.textContent = gameBoard.getCell(i, j);
                cell.dataset.row=i;
                cell.dataset.col=j;
                cell.addEventListener('click',handleClick);
                boardElement.appendChild(cell);
            }
        }
    }
    function handleClick(event){
        const row=parseInt(event.target.dataset.row);
        const col=parseInt(event.target.dataset.col);
        GameController.playTurn(row,col);
        showBoard();
        updateStatus();
    }
    function updateStatus(){
        const statusElement=document.getElementById('status');
        const gameStatus = GameController.checkGameStatus();
         if (gameStatus === 'win') {
            statusElement.textContent = `Winner: ${GameController.getWinner().name}!`;
            disableBoard();
        } else if (gameStatus === 'tie') {
            statusElement.textContent = "It's a tie!";
            disableBoard();
        } else {
            statusElement.textContent = `Current player: ${GameController.getCurrentPlayer().name} (${GameController.getCurrentPlayer().marker})`;
        }
    }
    function disableBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick); // ✅ FIXED: changed handleCellClick to handleClick
            cell.style.cursor = 'default';
        });
    }
     function resetGame() {
        GameController.startGame();
        showBoard();
        updateStatus();
    }
    return{showBoard, updateStatus,resetGame};
})();
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the game
    GameController.startGame();
    displayController.showBoard();
    displayController.updateStatus();
    
    // Add reset button functionality
    document.getElementById('resetButton').addEventListener('click', function() {
        GameController.startGame();
        displayController.showBoard();
        displayController.updateStatus();
    });
});