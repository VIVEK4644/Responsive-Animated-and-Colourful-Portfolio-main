let userScore = 0;
let comScore = 0;


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const Userscorepara = document.querySelector("#Userscore");
const Comrscorepara = document.querySelector("#Comrscore");
const msgcontainer = document.querySelector(".msgcontainer");
const restbtn = document.querySelector(".rsGame");

console.log(restbtn);


// after computer chocei declare
const genComchoice = ()=>{
    let array = ['rock', 'paper' ,'scissors'];

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}




const showWinner = (userWin, UserChoice , compchoice)=>{
    if(userWin)
    {   
        userScore++;
        Userscorepara.innerHTML = userScore;
        // console.log("User Winner.");     
        message.innerText = `You Win ! Your ${UserChoice} beats ${compchoice}`;
        msgcontainer.style.backgroundColor = "green";

    }
    else
    {
        comScore++;
        Comrscorepara.innerHTML = comScore;
        message.innerText = `You Loss !  ${compchoice} beats Your ${UserChoice}`;  
        msgcontainer.style.backgroundColor = "red";

    }
}

const dravGame = ()=>{
    message.innerText = "Game Was Draw./Play again.";
    msg.style.backgroundcolor = "#333";
    msgcontainer.style.backgroundColor = "#333";

}

restbtn.addEventListener("click", ()=>{
     
    let userScore = 0;
    let comScore = 0;
    Userscorepara.innerHTML = userScore;
    Comrscorepara.innerHTML = comScore;
    console.log("hello");
      
});

// user chocei declare
const playGame = (UserChoice)=>{
    const compchoice =  genComchoice();
    if(UserChoice === compchoice)
    {
        dravGame();
    }
    else
    {
        let userWin = true;
        if(UserChoice == "rock")
        {
            //scissors , paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if(UserChoice == "paper")
        {
            //scissors , paper
            userWin = compchoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin ,UserChoice ,compchoice);
    }

}

// 1 here user clicked
choices.forEach((choice)=>{
    console.log(choice);
    
    choice.addEventListener("click" , ()=>{
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    })
})


