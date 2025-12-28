let min = 1;
let max = 100;
let moves = 0;
let num = Math.floor(Math.random()*(max-min+1))+min;

while(true){
    let guess = window.prompt("guess a number");
    guess = Number(guess)
    if(guess>num){
        console.log("number is too big");
    }else if(guess<num){
        console.log("number is too small");
    }else{
        console.log("correct");
        console.log(`The actual number is ${num} and your guess is ${guess} you guessed in ${moves} moves`);
        break;
    }
    moves++;
}