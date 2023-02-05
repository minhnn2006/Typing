
let wordType = document.getElementById('Type');
let currentWord = document.getElementById('Word');
let score = 0 = document.getElementById('Score');
let time = 10 = document.getElementById('Timer');
let randomWord = words[Math.floor(Math.random() * words.length)];
let words = ['shirt','protein','laptop','it','tennis','runaway','he','developer','she',
  ];
let restartBtn = document.getElementById('Restart');
let CountDown = setInterval(timer,1000)
currentWord.innerHTML = randomWord;
console.log(wordType);
function loop()
{
    score.innerHTML = "Score: " + score;
    randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord.innerHTML = randomWord
    wordType.value = "";
    CountDown;
    time = 10;
    return CountDown;
}
wordType.addEventListener("Type", ({key}) => { 
    if (key === "Enter") {
        // Do work
        if(wordType.value === randomWord) {
            score++;
			loop();
        }
        else{
            loop();
        }
    }
})
function timer(){
    time--;
    time.innerHTML= "Time left: " + time;
    if (time = 0){
        
		loop();
    }
 }
restartBtn.addEventListener('click',restart)
function Restart()
{
    score = 0;
    loop();
}