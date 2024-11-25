let boxes = document.querySelectorAll(".box");
let resetBtns = document.querySelectorAll(".reset"); // Use querySelectorAll if there are multiple reset buttons
let newGameBtn = document.querySelector("#new-btn");
let msgContaier = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let resetGame = () => {
    turn0 = true; 
    enabledBoxes();
    msgContaier.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContaier.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winpattern) {
        console.log(pattern);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtns.forEach((resetBtn) => {
    resetBtn.addEventListener("click", resetGame);
});
