let boxes = document.querySelectorAll(".box");
let rsbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newgamebtn");
let msgcontainer = document.querySelector(".main-container");
let msg = document.querySelector("#msg")

let turn0 = true;//palyer , palyer0

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


const resetGame = ()=>{
    turn0 = true;
    enblebox();
    msgcontainer.classList.add("hide");
    console.log("Click....");
    
}

boxes.forEach((box) => {

    box.addEventListener("click", ()=> {
    if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else
       {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
   
    });

});

const disabledbox = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enblebox = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner)=>{
    msg.innerHTML = `🏆 🎉Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disabledbox();
}

//winner part
const checkwinner = ()=>{
    for(let pattern of winPattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
            {
                if (pos1val === pos2val && pos2val === pos3val)
                    {
                        console.log("🏆 🎉 🏅 You are winner.");
                        showwinner(pos1val);
                    }
                    
            } 

    }
};

newgamebtn.addEventListener("click",resetGame)
rsbtn.addEventListener("click",resetGame)



















