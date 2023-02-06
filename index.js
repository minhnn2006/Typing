let score = 0;
let time = 10;
let wordType = document.getElementById('Type');
let currentWord = document.getElementById('Word');
let scoreDiv = document.getElementById('Score');
scoreDiv.innerHTML = "Score: " + score;
let timeDiv = document.getElementById('Timer');
timeDiv.innerHTML = "Time left: " + time;
let words = ['shirt', 'protein', 'laptop', 'it', 'tennis', 'runaway', 'he', 'hit', 'she', 'he'];
let randomWord = words[Math.floor(Math.random() * words.length)];
let restartBtn = document.getElementById('Restart');
currentWord.innerHTML = randomWord;
console.log(wordType);


function loop() {
    score.innerHTML = "Score: " + score;
    randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord.innerHTML = randomWord;
    wordType.value = "";
    time.innerHTML = "Time: " + time;
    time = time - 1;
    reTime();

}
let remainingTimer = setInterval(function reTime(){
    if(time <= 0){
      //clearInterval(remainingTimer);
      document.getElementById("Timer").innerHTML = "Time over";
     
    } else {
      document.getElementById("Timer").innerHTML = time + " seconds remaining";
    }
    time =time - 1;
    
  }, 1000);
  
restartBtn.addEventListener('click', Restart)
function Restart() {
    score = 0;
    loop();
    reTime(time);
}

