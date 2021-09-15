/* Define app constant veriables*/

/* define state variables */

let board
let turn = "X"

/* DOM functions: cachine element references  */

const squares = Array.from(document.querySelectorAll('#board div'))
console.log(squares)





/* DOM functions: add event listeners to our elements */
document.getElementById('board').addEventListener('click', handleTurn)

/* General Gameplay functions */
//later change function syntax to arrow function syntax :)
//to Start
function handleTurn(event){
    // console.log("clicked!", event)
    let index = squares.findIndex((square)=> {
        return square === event.target
    })
    board[index] = turn;
    if(turn === "X"){
        turn = "O"
    }else {
        turn = "X"
    }
    render()
}

function init() {
    board = ["","","","","","","","",""]
    render()
}
function render(){
    //runs everytime something happens on screen or event or anything chnages
    //responsible for iterating thru the array of board and checks if its properly mapped to screen
    board.forEach((mark, index) => {
        squares[index].textcontent = mark
    })
}

init()