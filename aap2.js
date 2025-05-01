let usersco=0;
let compsco=0;
const msg= document.querySelector("#mess");
const display= document.querySelector("#disp");
const choices=document.querySelectorAll(".choice");
const compgame=document.querySelector(".compgame");

const userpara=document.querySelector("#user");
const comppara=document.querySelector("#comp");
const compchoice=()=>{
    const options=["rock","paper","scissors"];
    const randin=Math.floor(Math.random()*3);
    return options[randin];
}
 const drawgame=()=>{
    console.log("draw");
    msg.innerText="draw";
    msg.style.backgroundColor="#7C4585";
 }

 const showwin=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
        usersco++;
        userpara.innerText=usersco
    }else{
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
        msg.style.padding="0.5%";
        msg.style.borderRadius = "10px 20px";
        compsco++;
       comppara.innerText=compsco

    }
 }

const play=(userchoice)=>{
    console.log("user:",userchoice);
    
    const comp=compchoice();
    console.log("comp:",comp);
    display.innerText = "You: " + userchoice + "\n Computer: " + comp;

    
    if(userchoice===comp){
        drawgame();
    }else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin=comp==="paper"? false:true;
        }else if(userchoice==="paper"){
            userwin=comp==="scissors"? false:true;
        }else{
            userwin=comp==="rock"?false:true;
        }
        console.log("winner:",userwin);
        let win=showwin(userwin);
        
    }
    displaycompchoice(comp);
}
choices.forEach( (choice)=> {
    choice.addEventListener("click",(e)=>{
        let userchoice = e.target.id;
        play(userchoice);
    })
    
});

const displaycompchoice = (compchoice) => {
    let imgSrc = "";
    let altText = "";

    if (compchoice === "rock") {
        imgSrc = "./img/rock.png";
        altText = "Rock";
    } else if (compchoice === "paper") {
        imgSrc = "./img/paper.png";
        altText = "Paper";
    } else {
        imgSrc = "./img/scissors.jpg";
        altText = "Scissors";
    }

    compgame.innerHTML = `<img src="${imgSrc}" alt="${altText}" style="width:120px; height:auto;border-radius: 50%;">`;
};


