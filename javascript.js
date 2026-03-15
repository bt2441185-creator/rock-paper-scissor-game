let userscore=0 ;
let computerscore=0 ;
let result=document.querySelector(".result")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const user = document.querySelector(".user")
const comp = document.querySelector(".comp")
const con = document.querySelector(".con")
const move = document.querySelector(".move")
function play(userchoice){
  move.style.display="none" ;
let  choice=["rock", "paper", "scissor"] 
computerchoice=choice[Math.floor(Math.random()*3)];
if(userchoice === computerchoice){
  result.innerText=`draw `;
  con.innerText=` computer choose ${computerchoice}`
}
else if (
  (userchoice === "rock" && computerchoice ==="scissor" ) ||
(userchoice === "scissor" && computerchoice ==="paper")||
(userchoice === "paper" && computerchoice ==="rock")
  )
{
  result.innerText=` you win `;
  con.innerText=` computer choose ${computerchoice}`
  userscore++ ; 
  user.innerText=userscore ;

} 
else {
  result.innerText= ` you lose `;
  con.innerText=` computer choose ${computerchoice}` ;
    computerscore++ ; 
  comp.innerText=computerscore ;

} 
}
rock.addEventListener("click" , () => play("rock"))
paper.addEventListener("click" , () => play("paper"))
scissor.addEventListener("click" , () => play("scissor"))