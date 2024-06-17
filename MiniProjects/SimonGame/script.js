let gamesqe=[];
let usersqe=[];
let level=0;
let highScore=0;

let randamcol=["red","yellow","green","blue"];

let levels=document.getElementById("level");

let started=false;

function startGame(){
    if(started===false){
        console.log("game start");
        started=true;
        levelUp();
    }
}

document.querySelector("body").addEventListener("keypress",startGame);

function levelUp(){
    usersqe=[];
    level++;
    levels.innerText=`Level : ${level}`;
    
    let rind=Math.floor(Math.random()*3);
    let rcol=randamcol[rind];
    let btn=document.querySelector(`.${rcol}`);
    gamesqe.push(rcol);
    console.log(gamesqe);
    btnFlush(btn);
}

function btnFlush(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userbtnFlush(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function Check(idx){
    if(usersqe[idx]===gamesqe[idx]){
        if(usersqe.length===gamesqe.length){
            setTimeout(levelUp(),150);
        }
    }
    else{
        levels.innerHTML=`Game Over! Your Score is <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="black";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }
}

function btnpressed(){
    if(started){
        let btn=this;
        userbtnFlush(this);
        let usercolor=btn.getAttribute("id");
        usersqe.push(usercolor);
        Check(usersqe.length-1);
    }
    else{
        startGame();
    }
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpressed);
}

function reset(){
    if(level>highScore){
        highScore=level;
    }
    level=0;
    started=false;
    usersqe=[];
    gamesqe=[];
    let score=document.querySelector("#highScore");
    score.innerHTML=`Highest Score : <b>${highScore}</b>`;
}