const container = document.querySelector(".container");
const Next = document.querySelector("#next");
const O_pl = document.querySelector("#O");
const X_pl = document.querySelector("#X");
const title = document.querySelector(".dash");
const Again = document.querySelector("#again")
const Back = document.querySelector("#back");
let turn = "";
let squares = [];

//move to choose player type page
Next.addEventListener("click", () => {
    container.classList.add("choose-mode");
});
//move to game page 
//change title of game by choosed type
X_pl.addEventListener("click", () => {
    container.classList.add("game-mode");
    title.innerHTML = "player <span>X</span>";
    turn = "X";
});
//move to game page 
//change title of game by choosed type
O_pl.addEventListener("click", () => {
    container.classList.add("game-mode");
    title.innerHTML = "player <span>O</span>";
    turn = "O";
});
Again.addEventListener("click", () => {
    container.classList.remove("game-mode");
})
Back.addEventListener("click", () => {
    container.classList.remove("game-mode", "choose-mode");
})
// play function
function game(id) {
    let element = document.getElementById(id);
    if (turn === "X" && element.innerHTML == "") {
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "player <span>O</span>";
    } else if (turn === "O" && element.innerHTML == "") {
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = "player <span>X</span>";
    }
    winner();
}
function end(num1, num2, num3) {
    document.getElementById('item' + num1).style.background = '#226ffd';
    document.getElementById('item' + num2).style.background = '#226ffd';
    document.getElementById('item' + num3).style.background = '#226ffd';
    title.innerHTML = 'player ' + `${squares[num1]} Winner`;
    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 5000)
}
//compare function
function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    //horizontal compare
    if (squares[1] == squares[2] && squares[1] == squares[3] && squares[1] != "") {
        end(1, 2, 3);
    }
    else if (squares[4] == squares[5] && squares[4] == squares[6] && squares[4] != "") {
        end(4, 5, 6);
    }
    else if (squares[7] == squares[8] && squares[7] == squares[9] && squares[7] != "") {
        end(7, 8, 9);
    }
    //vertical compare
    else if (squares[1] == squares[4] && squares[1] == squares[7] && squares[1] != "") {
        end(1, 4, 7);
    }
    else if (squares[2] == squares[5] && squares[2] == squares[8] && squares[2] != "") {
        end(2, 5, 8);
    }
    else if (squares[3] == squares[6] && squares[3] == squares[9] && squares[3] != "") {
        end(3, 6, 9);
    }
    //digonal compare
    else if (squares[1] == squares[5] && squares[1] == squares[9] && squares[1] != "") {
        end(1, 5, 9);
    }
    else if (squares[3] == squares[5] && squares[3] == squares[7] && squares[3] != "") {
        end(3, 5, 7);
    }
    else {

    }
}