function changeText() {
    let textArray = ['text1', 'text2', 'text3', 'text4', 'text5'];
    let randomNumber = getRandomNumber(0, textArray.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textArray[randomNumber];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}