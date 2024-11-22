let box = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll(".reset");
let textbox = document.getElementsByClassName(".text");
let turnO = true;


const winptn = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const check = () => {
    for (let ptn of winptn) { 
        const [a, b, c] = ptn; 
        if (
    box[a].innerText !== "" && 
    box[a].innerText === box[b].innerText && 
    box[a].innerText === box[c].innerText
        ) {
    alert(`Player ${box[a].innerText} is the winner!`);
     resetGame();
            return;
        }
    }
    if ([...box].every((b) => b.innerText !== "")) {
        alert("It's a draw!");
        resetGame();
    }
};

const resetGame  = () => {
    box.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; 
    });
    turnO = true;
};

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.pointerEvents = "none";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.pointerEvents = "none";
            turnO = true;
        }
        check();
    });
});

resetbtn.forEach((resetbtn) => {
    resetbtn.addEventListener("click", () => {
        resetGame();
    });
});