let uscore = 0;
let cscore = 0;

const msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

const usercore = document.getElementById("userscore");
const compscore = document.getElementById("computerscore");

const genCompChoice = () =>{
    const options = ["stone", "paper", "scissors"];
    const rand = Math.floor(Math.random()*3);
    return options[rand];
}

const draw =() =>{
    msg.innerHTML = "Game was DRAW";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        uscore++;
        userscore.innerHTML = uscore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        cscore++;
        compscore.innerHTML = cscore;
        msg.innerHTML = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const play = (userChoice) => {
    console.log("User Choice is = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice is = ", compChoice);

    if(userChoice == compChoice){
        draw();
    }
    else{
        let userwin = true;
        if(userChoice === "stone"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            userwin = compChoice === "stone" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice)
    });
});