let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"]
let Started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(Started == false){
        console.log("Game Start");
      Started = true;  

      levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("Flash")
    setTimeout(function(){
        btn.classList.remove("Flash")
    },1000);
} 

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },200);
} 

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `level ${level}`
    let ranInx = Math.floor(Math.random()*3);
    let randColor = btns[ranInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
 
 if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
 }else{
    h2.innerText = `game Over! Press any key to start`;
 }
}

function btnPress(){
    let btn = this  
    userFlash(btn)  
    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length -1); 
}   


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
} 

function reset(){
    Started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
 