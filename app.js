let selectBox = document.querySelector(".select-box")
let selectXbtn = selectBox.querySelector(".PlayerX")
let  selectObtn = selectBox.querySelector(".PlayerO")
let playerSection = document.querySelector(".player-section")
let allBox = document.querySelectorAll("section span")
let players =document.querySelector(".players")
let resultBox =document.querySelector(".result")
let wonText = resultBox.querySelector(".won-text")
let replayBtn = resultBox.querySelector("button")

window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }
    selectXbtn.onclick =()=>{
        selectBox.classList.add("hide");
        playerSection.classList.add("show")
    }
    selectObtn.onclick =()=>{
        selectBox.classList.add("hide");
        playerSection.classList.add("show")
        players.setAttribute("class","players active player")
    }
}
let playerXicon = "fas fa-times"
let playerOicon = "far fa-circle"
let playerSign = "X";
let runBot = true;

////// User Click Function //////

function clickedBox(element){
    // console.log(element)
   if(players.classList.contains("player")){
    element.innerHTML = `<i class="${playerOicon}"></i>`
    players.classList.add("active")
    playerSign = "O";    
    element.setAttribute("id",playerSign)
   }else{
    element.innerHTML = `<i class="${playerXicon}"></i>`
    players.classList.add("active")
    element.setAttribute("id",playerSign)
   }
   selectWinner();
   playerSection.style.pointerEvents = "none";
   element.style.pointerEvents = "none";
   let randomDelaytime =((Math.random()*1000)+200).toFixed();
   setTimeout(()=>{
    bot(runBot)
   },randomDelaytime)
}

//////// Bot Function Click /////////

function bot(runBot){
  if (runBot) {
    playerSign = "O"
    let array = [];
    for (let i = 0; i < allBox.length; i++){
      if (allBox[i].childElementCount == 0){
       array.push(i) 
    //    console.log(i+" "+ "has no children")
      }
    }
    let randomBox = array[Math.floor(Math.random()*array.length)]
    // console.log(randomBox)
    if (array.length > 0){
        if(players.classList.contains("player")){
           allBox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`
            players.classList.remove("active");
            playerSign ="X";
            allBox[randomBox].setAttribute("id",playerSign)
           }else{
           allBox[randomBox].innerHTML = `<i class="${playerOicon}"></i>`
            players.classList.remove("active")
            allBox[randomBox].setAttribute("id",playerSign)
           }
           selectWinner();
    }
   allBox[randomBox].style.pointerEvents = "none";
   playerSection.style.pointerEvents = "auto";
   playerSign = "X";
  }
}
function getClass(idname){
  return document.querySelector(".box" + idname).id   
}
function checkClasses(val1,val2,val3,sign){
    if (getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
        return true;
    }
}
function selectWinner(){
    if (checkClasses(1,2,3,playerSign)||checkClasses(4,5,6,playerSign)||checkClasses(7,8,9,playerSign)||checkClasses(1,4,7,playerSign)||checkClasses(2,5,8,playerSign)||checkClasses(3,6,9,playerSign)||checkClasses(1,5,9,playerSign) ||checkClasses(3,5,7,playerSign)) {
     console.log(playerSign + " " + "is the winner") 
     runBot = false;
     bot(runBot);
     setTimeout(()=>{
        playerSection.classList.remove("show");
         resultBox.classList.add("show")
     },700)
     wonText.innerHTML = `Player <p>${playerSign}</p> won the Game!`
    }else{
        if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" &&getClass(8) != "" &&getClass(9) != ""){
            runBot = false;
     bot(runBot);
     setTimeout(()=>{
        playerSection.classList.remove("show");
         resultBox.classList.add("show")
     },700)
     wonText.textContent = `Match has been Drawn!`
        }
    }
}
replayBtn.onclick=()=>{
    window.location.reload();
}






















































