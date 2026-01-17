//heart count 
const heartCountSpan = document.getElementById('heart-count')
let heartCount = parseInt(heartCountSpan.textContent);

function increaseHeartCount(){
    heartCount++;
    heartCountSpan.textContent = heartCount + '';
}

const cardHearts = document.getElementsByClassName('card-heart');
for (const heart of cardHearts){
    heart.addEventListener('click', increaseHeartCount)
}

//call buttons

const buttons = document.querySelectorAll('.call-button');

for (const button of buttons ){
    button.addEventListener('click', function(){
        const card = button.closest('.card')
        const text = card.querySelector('p').innerText;
        const number = card.querySelector('h1').innerText;

        const coinSpan = document.querySelector('.coin-count')
        let coins = parseInt(coinSpan.innerText);
        if(coins <20){
            alert('Not enough coins to make a call');
            return;
        }
        alert(`calling ${text}-${number}...`)
        
        coins = Math.max(coins -20, 0)
        coinSpan.innerText = coins
    })
}