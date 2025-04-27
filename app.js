let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
const winnerText = document.querySelector(".winner-text");


let turnO= true;
 
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,4,2],
    [1,4,7],
    [2,5,8],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText="X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disablebox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const checkwinner=()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       
        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1)
                disablebox();
                let winner=document.createElement("p");
                winner.innerText=`Woo! Winner is player ${pos1}`;
                winnerText.innerHTML = ""; // clear old message if any
                winnerText.appendChild(winner);
            }
        }
    }
}
const resetgame=()=>{
    turnO=true;
    enablebox();
    winnerText.innerText="";
}

const enablebox=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

resetbtn.addEventListener("click",()=>{
    resetgame();
})