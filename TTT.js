let boxes=document.querySelectorAll(".box");
let btn=document.querySelectorAll(".but");
let container=document.querySelector(".container");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let rst=document.querySelector(".reset");
let nbtn=document.querySelector(".res");



let turnX=true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
    const resetGame = () =>{
        turnX = true;
        enableboxes();
        msgContainer.classList.add("hide");
    };
    const enableboxes = () => {
        for (let but of btn){
            but.disabled=false;
            but.innerText = "";
        }
    };
    rst.addEventListener("click",resetGame);
    nbtn.addEventListener("click",resetGame);
    



  const disableBoxes = () => {
    for (let but of btn) {
      but.disabled = true;
    }
  };

  const win = (won) => {
    msg.innerText = `Congratulations, Winner is ${won}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };

btn.forEach((but) => {
    but.addEventListener('click', () =>{
        if (turnX){
            but.innerText="X";
            turnX=false;
        }else{
            but.innerText="O";
            turnX=true;
        }
        but.disabled=true;
        checkwinner()
    });
    
});
const checkwinner = () => {
   for (let pattern of winPatterns){
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    
    if (pos1!='' && pos2 !='' && pos3 !=''){
        if (pos1===pos2 && pos2===pos3){
            win(pos1);
            
        }

    }

   }
    
};
