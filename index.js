window.onload = function(){
    randomCardNumber();
    randomCardSymbol();
}

let symbol = ["♦", "♥", "♠", "♣"];
let number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function randomCardNumber(){
    let generadordeindex = Math.floor(Math.random()*13);
    document.querySelector(".card-body").innerHTML = number[generadordeindex];
}

function randomCardSymbol(){
    let symbolindex = Math.floor(Math.random()*4);
    document.querySelector(".card-top").innerHTML = symbol[symbolindex];
    document.querySelector(".card-bottom").innerHTML = symbol[symbolindex];
    if (symbolindex === 0 || symbolindex === 1 ) {
        document.querySelector(".card").classList.add("color-red");
    }
    else{
        document.querySelector(".card").classList.add("color-black");
    }
}