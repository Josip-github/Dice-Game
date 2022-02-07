var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

function winnerOfPlay(){

    if(randomNumber1 > randomNumber2){
        return "Player 1 wins!"
    } else if(randomNumber1 < randomNumber2){
        return "Player 2 wins!"
    } else {
        return "Draw";
    }
}

