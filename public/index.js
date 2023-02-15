
function game(){
    var dice1 = Math.floor(Math.random()*6 + 1);
var dice2 = Math.floor(Math.random()*6 + 1);
    var randomPath1 = "/images/dice"+dice1+".png";
var randomPath2 = "/images/dice"+dice2+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomPath1);
    document.querySelectorAll("img")[1].setAttribute("src",randomPath2);
    if (dice1===dice2){
        document.querySelector("h1").innerHTML="Draw!";
        } else if (dice1>dice2) {
            document.querySelector("h1").innerHTML="🚩Player1 Wins!";
        } else if(dice1<dice2){
            document.querySelector("h1").innerHTML="Player2 Wins!🚩";
        }
        console.log(randomPath1 , randomPath2);
}