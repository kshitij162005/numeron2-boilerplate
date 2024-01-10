// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")

let n1 = Math.round(Math.random()*100)
let n2 = Math.round(Math.random()*100)

num1.innerText = n1
num2.innerText = n2
// Iteration 3: Creating variables required to make the game functional
var score = 0

var operator;

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")

const modulus = document.getElementById("modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3 = document.getElementById("number3")
var n3;


// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    n1 = Math.round(Math.random()*100)
    n2 = Math.round(Math.random()*100)


    if(n1<n2){
        let temp = n1
        n1 =n2
        n2 =temp
    }


operator = Math.round(Math.random()*5)
switch(operator){
    case 1:
        n3 = n1+n2
        break
    case 2:
        n3 = n1-n2
        break
    case 3:
        n3 = n1*n2
        break
    case 4:
        n3 = Math.round(n1/n2)
        break
    case 5:
        n3 = n1%n2
        break
    case 0:
        randomise()
}
num1.innerHTML = n1
num2.innerHTML = n2
num3.innerHTML = n3

}

randomise()

// // Iteration 6: Making the Operators (button) functional
plus.onclick=()=>{
    if(n1+n2==n3){
        score++
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href = "./gameover.html"
    }
}


minus.onclick=()=>{
    if(n1-n2==n3){
        score++
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href = "./gameover.html"
    }
}

mul.onclick=()=>{
    if(n1*n2==n3){
        score++
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href = "./gameover.html"
    }
}


divide.onclick= () => {
    if(n1/n2==n3){
        score++
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href = "./gameover.html"
    }
}


modulus.onclick =() => {
    if(n1%n2==n3){
        score++

        randomise()
        resetTimer(timerId)
    }
    else{
        location.href ="./gameover.html"
    }
}


// // Iteration 7: Making Timer functional
const timer = document.getElementById("timer")
var timerId;

function  startTimer(){
    var time = 15;
    timer.innerHTML = time;
    timerId = setInterval(()=> {
        time = time-1
        if(time==0){
            window.location.href = "./gameover.html"
        }

        timer.innerHTML = time
    },1000)
    localStorage.setItem("scr",score)

}


function resetTimer(intervalId) {
    clearInterval(intervalId)
    startTimer(timerId)
}


startTimer()