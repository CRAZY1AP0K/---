let currentPlayer = "X";
let  gameEnded = false; 
// создаём пустое поле для игры 
let board = ["","","","","","","","","",];
// определяем выигрышние комбинации для игры 
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
// Функция, вызываемая при  клике на ячейку 
function cellClicked(cellIndex) {
    //проверяет что игры не завершена и выбранна ячейка пуста 
    if (!gameEnded && board[cellIndex] === "") {
        //получает элемент ячейки по его индексу 
        const cell = document.getElementById(`cell${cellIndex}`);
        //УСТАНАВЛИВАЕТ ТЕКСТ ЯЧЕЙКИ В ЗНАЧЕНИЕ ТЕКУЩЕГО ИГРОКА
        cell.textContent = currentPlayer;
        // устанавливает атрибут data-value в значение текущего игрока
        cell.setAttribute('data-value', currentPlayer);
        // записыввает значение текущего игрока в массив игрового поля
        board[cellIndex] = currentPlayer;
        // проверяет выиграл л текущий игрок
        if (checkWinner(currentPlayer)) {
            //выводит сообщение о победе текущего игрока
            document.getElementById("massage").textContent = `Игрок ${currentPlayer} победил!`
            // устанавливает что игры завершена 
            gameEnded = true ;
            } else if (isBoardFull()) {
                //выводит сообщение о ничьей если игровое поле полностью заполено 
                document.getElementById("massage").textContent = "Ничья!";
                // устанавливает что игра завершена 
                gameEnded = true ; 
            } else {
                // переключает текущего игрока на другого игрока 
                currentPlayer = currentPlayer === "X"? "O": "X";
                            
       }
    }
}
// функйия которая проверяет выйграл ли игрок 
function checkWinner(player) {
    // перебирает все выиграшные комбинации 
    for (const pattern of winPatterns) {
        // получает индексы ячеек из текущей выиграшной комбинации 
        const [a, b, c] = pattern ;
        // проверяет что все три ячейки имеют значение текущего игрока 
         if (board[a] === player && board[b] === player && board[c] === player) {
            // возвращяет true  если текущий игрок выиграл 
            return true ;
         }
    }
    // возвращяет false, если тукущий игрок не выиграл
    return false;
}
function isBoardFull() {
    return board.every(cell => cell !== "");
}