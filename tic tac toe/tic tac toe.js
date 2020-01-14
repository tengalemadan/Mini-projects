var count = 0;
const gamestatus = new Array(3);
//initialize 2d array  
for (let j = 0; j < gamestatus.length; j++) {
    gamestatus[j] = new Array(3);
}
//Function for set symbol to user clicked button
function setSymbol(id) {

    let symbol;
    switch (id) {
        case '1':
            let one = document.getElementById("1");
            symbol = currentPlayer();
            one.value = symbol;
            one.style.color = "red";
            gamestatus[0][0] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            console.log(count);
            
            break;

        case '2':
            let two = document.getElementById("2");
            symbol = currentPlayer();
            two.value = symbol
            two.style.color = "red";
            gamestatus[0][1] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '3':
            let three = document.getElementById("3");
            symbol = currentPlayer();
            three.value = symbol
            three.style.color = "red";
            gamestatus[0][2] = symbol
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '4':
            let four = document.getElementById("4");
            symbol = currentPlayer();
            four.value = symbol;
            four.style.color = "red";
            gamestatus[1][0] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '5':
            let five = document.getElementById("5");
            symbol = currentPlayer();
            five.value = symbol;
            five.style.color = "red";
            gamestatus[1][1] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '6':
            let six = document.getElementById("6");
            symbol = currentPlayer();
            six.value = symbol;
            six.style.color = "red";
            gamestatus[1][2] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '7':
            let seven = document.getElementById("7");
            symbol = currentPlayer();
            seven.value = symbol;
            seven.style.color = "red";
            gamestatus[2][0] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '8':
            let eight = document.getElementById("8");
            symbol = currentPlayer();
            eight.value = symbol;
            eight.style.color = "red";
            gamestatus[2][1] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;

        case '9':
            let nine = document.getElementById("9");
            symbol = currentPlayer();
            nine.value = symbol;
            nine.style.color = "red";
            gamestatus[2][2] = symbol;
            if (isWin()) {
                alert(symbol+" Winner")
                disableAllButtons();
            }
            count++;
            break;
    }
    console.log(gamestatus);
    if (count == 9 && isWin() == false) {
        alert("Draw");
        count=0;
    }

}
//Function returns the current player symbol
let userTurn = true;
function currentPlayer() {
    if (userTurn) {
        userTurn = false;
        console.log("x");
        return "X";
    } else {
        userTurn = true;
        console.log("o");
        return 'O';
    }

}
//Function to check winner 
function isWin() {
    
    //for [0][0]
    if (gamestatus[0][0] == 'X' && gamestatus[0][1] == 'X' && gamestatus[0][2] == 'X' || gamestatus[0][0] == 'X' && gamestatus[1][0] == 'X' && gamestatus[2][0] == 'X' || gamestatus[0][0] == 'X' && gamestatus[1][1] == 'X' && gamestatus[2][2] == 'X'
        || gamestatus[0][0] == 'O' && gamestatus[0][1] == 'O' && gamestatus[0][2] == 'O' || gamestatus[0][0] == 'O' && gamestatus[1][0] == 'O' && gamestatus[2][0] == 'O' || gamestatus[0][0] == 'O' && gamestatus[1][1] == 'O' && gamestatus[2][2] == 'O')
        return true;

    //for [0][1]
    if (gamestatus[0][1] == 'X' && gamestatus[0][0] == 'X' && gamestatus[0][2] == 'X' || gamestatus[0][1] == 'X' && gamestatus[1][1] == 'X' && gamestatus[2][1] == 'X'
        || gamestatus[0][1] == 'O' && gamestatus[0][0] == 'O' && gamestatus[0][2] == 'O' || gamestatus[0][1] == 'O' && gamestatus[1][1] == 'O' && gamestatus[2][1] == 'O')
        return true;

    //for [0][2]
    if (gamestatus[0][2] == 'X' && gamestatus[0][0] == 'X' && gamestatus[0][1] == 'X' || gamestatus[0][2] == 'X' && gamestatus[1][2] == 'X' && gamestatus[2][2] == 'X' || gamestatus[0][2] == 'X' && gamestatus[1][1] == 'X' && gamestatus[2][0] == 'X'
        || gamestatus[0][2] == 'O' && gamestatus[0][0] == 'O' && gamestatus[0][1] == 'O' || gamestatus[0][2] == 'O' && gamestatus[1][2] == 'O' && gamestatus[2][2] == 'O' || gamestatus[0][2] == 'O' && gamestatus[1][1] == 'O' && gamestatus[2][0] == 'O')
        return true;

    //for [1][0]
    if (gamestatus[1][0] == 'X' && gamestatus[0][0] == 'X' && gamestatus[2][0] == 'X' || gamestatus[1][0] == 'X' && gamestatus[1][1] == 'X' && gamestatus[1][2] == 'X'
        || gamestatus[1][0] == 'O' && gamestatus[0][0] == 'O' && gamestatus[2][0] == 'O' || gamestatus[1][0] == 'O' && gamestatus[1][1] == 'O' && gamestatus[1][2] == 'O')
        return true;

    //for [1][1]
    if (gamestatus[1][1] == 'X' && gamestatus[0][1] == 'X' && gamestatus[2][1] == 'X' || gamestatus[1][1] == 'X' && gamestatus[1][0] == 'X' && gamestatus[1][2] == 'X' || gamestatus[1][1] == 'X' && gamestatus[0][2] == 'X' && gamestatus[2][0] == 'X' || gamestatus[1][1] == 'X' && gamestatus[0][0] == 'X' && gamestatus[2][2] == 'X'
        || gamestatus[1][1] == 'O' && gamestatus[0][1] == 'O' && gamestatus[2][1] == 'O' || gamestatus[1][1] == 'O' && gamestatus[1][0] == 'O' && gamestatus[1][2] == 'O' || gamestatus[1][1] == 'O' && gamestatus[0][2] == 'O' && gamestatus[2][0] == 'O' || gamestatus[1][1] == 'O' && gamestatus[0][0] == 'O' && gamestatus[2][2] == 'O')
        return true;

    //for [1][2]
    if (gamestatus[1][2] == 'X' && gamestatus[0][2] == 'X' && gamestatus[2][2] == 'X' || gamestatus[1][2] == 'X' && gamestatus[1][1] == 'X' && gamestatus[1][0] == 'X'
        || gamestatus[1][2] == 'O' && gamestatus[0][2] == 'O' && gamestatus[2][2] == 'O' || gamestatus[1][2] == 'O' && gamestatus[1][1] == 'O' && gamestatus[1][0] == 'O')
        return true;

    //for [2][0]
    if (gamestatus[2][0] == 'X' && gamestatus[2][1] == 'X' && gamestatus[2][2] == 'X' || gamestatus[2][0] == 'X' && gamestatus[1][0] == 'X' && gamestatus[0][0] == 'X' || gamestatus[2][0] == 'X' && gamestatus[1][1] == 'X' && gamestatus[0][2] == 'X'
        || gamestatus[2][0] == 'O' && gamestatus[2][1] == 'O' && gamestatus[2][2] == 'O' || gamestatus[2][0] == 'O' && gamestatus[1][0] == 'O' && gamestatus[0][0] == 'O' || gamestatus[2][0] == 'O' && gamestatus[1][1] == 'O' && gamestatus[0][2] == 'O')
        return true;


    //for [2][1]
    if (gamestatus[2][1] == 'X' && gamestatus[2][0] == 'X' && gamestatus[2][2] == 'X' || gamestatus[2][1] == 'X' && gamestatus[1][1] == 'X' && gamestatus[0][1] == 'X'
        || gamestatus[2][1] == 'O' && gamestatus[2][0] == 'O' && gamestatus[2][2] == 'O' || gamestatus[2][1] == 'O' && gamestatus[1][1] == 'O' && gamestatus[0][1] == 'O')
        return true;

    //for [2][2]
    if (gamestatus[2][2] == 'X' && gamestatus[1][2] == 'X' && gamestatus[0][2] == 'X' || gamestatus[2][2] == 'X' && gamestatus[2][1] == 'X' && gamestatus[2][0] == 'X' || gamestatus[2][2] == 'X' && gamestatus[1][1] == 'X' && gamestatus[0][0] == 'X'
        || gamestatus[2][2] == 'O' && gamestatus[1][2] == 'O' && gamestatus[0][2] == 'O' || gamestatus[2][2] == 'O' && gamestatus[2][1] == 'O' && gamestatus[2][0] == 'O' || gamestatus[2][2] == 'O' && gamestatus[1][1] == 'O' && gamestatus[0][0] == 'O')
        return true;

    //else
    return false;


}

//Function for reset game
function reset() {
    window.location.reload();
}

//function for disable all button if win or draw
function disableAllButtons() {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
}

