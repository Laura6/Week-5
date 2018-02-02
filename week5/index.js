var myInp = document.getElementById("num");
var numDisp = document.getElementById("numDisplay");

var answer = Math.round(Math.random()*100);
var score = 100;


document.getElementById("guess").addEventListener("click", function() {
   // console.log("45", parseInt("45")+1);
  
    //numDisp.innerText = "Hi";
  
  var myNum = parseInt(myInp.value);
  
  if(myNum == answer) {
    numDisp.innerText = "You win Score: "+score;
    
  } else {
    if(myNum < answer){
      numDisp.innerText = "Too Small";
      
    } else if(myNum > answer){
      numDisp.innerText = "Too Big";
      
    } else
      numDisp.innerText = "You lose";
    
  }
  
    score = score - 1;
});