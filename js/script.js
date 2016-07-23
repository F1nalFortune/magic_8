//define computer answers
//randomize computer answers
//function - onclick deliver randomized answer
//function - deliver computer answers in answer field and history field//

var wisdoms = ["Ofcourse!", "That's a terrible thought", "yes", "no", "maybe?", "it is decidedly so", "It doesn't matter, you're awesome", "Just take it slow", "Keep is drama free", "How could you even ask that?", "ask me later", "Can you repphrase that?", "I wouldn't get your hopes up"];

function response(){
  var userAnswer = document.getElementById("userAnswer");
  var history = document.getElementById("history");
  var input = document.getElementById("input");
  var computerAnswer = wisdoms[Math.floor(Math.random()*wisdoms.length)];

  if (input !== "") {
    userAnswer.innerHTML = computerAnswer;
  }
}