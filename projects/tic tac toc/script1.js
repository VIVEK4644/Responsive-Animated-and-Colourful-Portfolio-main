let boxes = document.querySelectorAll(".box");
let rsbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".new-btn"); 
let msgcontainer = document.querySelector(".main-container");
let msg = document.querySelector("#msg");

let turn0 = true; 

// Winning patterns
const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game function
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable all boxes and clear text
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Show winner message
const showWinner = (winner) => {
    msg.innerHTML = `🎉 Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// Check if there is a winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner:", pos1val);
                showWinner(pos1val); // ✅ FIXED: Move inside the if-block
                return; // ✅ Stop checking further once winner is found
            }
        }
    }
};

// ✅ Event Listeners (corrected)
newgamebtn.addEventListener("click", resetGame);
rsbtn.addEventListener("click", resetGame);
