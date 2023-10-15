'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct number";


document.querySelector('.number').textContent = "10";
document.querySelector('.guess').value = '3';
console.log(document.querySelector('.guess').value);
 */

let num = Math.trunc(Math.random()*20)+1;
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
document.querySelector('.check').addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);

    if (guess == 0) {
        document.querySelector('.message').textContent = "No Number";
    } else if ( guess > num) {
        if (score > 1){
            document.querySelector('.message').textContent = "too high";
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "game over";
        }
    } else if ( guess < num) {
        if (score > 1){
           document.querySelector('.message').textContent = "too low";
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "game over";
        }
        
    } else{
        document.querySelector('.message').textContent = "Correct Guess";
        document.querySelector('body').style.backgroundColor = '#60b347';
        if ( score >highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        
    }
    }
    
});

document.querySelector('.again').addEventListener('click',function(){
    

    score = 20
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    num = Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value = '';
    

})

