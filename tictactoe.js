let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-Btn"); 

let NewBtn= document.querySelector("#New-Btn");
let msgcontainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

turno= true;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turn0= true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
       if(turno){
        box.innerText="O";
        turno= false;
       }
       else{
        box.innerText="X";
        turno= true;
       }
       box.disabled= true;
       checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
 msg.innerText=`Congratulations, Winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 disableBoxes();
}
const checkWinner=()=>{
    for(let patterns of winPatterns){
            let pos1val= boxes[patterns[0]].innerText ;
            let pos2val= boxes[patterns[1]].innerText ;
            let pos3val= boxes[patterns[2]].innerText ;
             if(pos1val !="" && pos2val!="" && pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    showWinner(pos1val);
                }
             }
        }
}
NewBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
