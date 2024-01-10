// Iteration 8: Making scoreboard functional
const scoreBox = document.getElementById("score-board")

let passcode = localStorage.getItem("scr")

scoreBox.innerHTML = passcode


const playAgain = document.getElementById("play-again-button")

playAgain.onclick = ()=>{
    window.location.href = "./game.html"
}
