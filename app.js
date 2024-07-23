let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["red", "yellow", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 350);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 350);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}