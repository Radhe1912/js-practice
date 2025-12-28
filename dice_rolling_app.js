function rollDice(){
    let val = Math.floor(Math.random()*6)+1;
    let img = `dice_images/${val}.png`
    document.getElementById('result').innerHTML = `<img src="${img}" alt="Dice Image">`;
}