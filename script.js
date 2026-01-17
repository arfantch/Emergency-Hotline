//heart count + copy count + copy+paste 

function setupCounter(counterId, clickAbleclass, alertMsg = null) {

    const CountSpan = document.getElementById(counterId)
    let Count = parseInt(CountSpan.textContent);

    function increaseCount() {
        Count++;
        CountSpan.textContent = Count + '';

        if (alertMsg) {
            const card = event.target.closest('.card');
            if (card) {
                const numberElement = card.querySelector('h1');
                const pElement = card.querySelector('p');
                if (numberElement, pElement) {
                    const hotLineNumber = numberElement.innerText;
                    const PhotLineNumber = pElement.innerText;
                    navigator.clipboard.writeText(hotLineNumber, PhotLineNumber);
                    alert(`${alertMsg}: ${PhotLineNumber} Number  ${hotLineNumber}`);
                }
            }
        }
    }

    const clickAbles = document.getElementsByClassName(clickAbleclass);
    for (const clickAble of clickAbles) {
        clickAble.addEventListener('click', increaseCount)
    }

}

setupCounter('heart-count', 'card-heart')

setupCounter('copy-count', 'card-copy', 'copied successfully')

//call buttons

const buttons = document.querySelectorAll('.call-button');

for (const button of buttons) {
    button.addEventListener('click', function () {
        const card = button.closest('.card')
        const text = card.querySelector('p').innerText;
        const number = card.querySelector('h1').innerText;
        const mainText = card.querySelector('h2').innerText;

        const coinSpan = document.querySelector('.coin-count')
        let coins = parseInt(coinSpan.innerText);
        if (coins < 20) {
            alert('❌ Not enough coins to make a call : minimum need 20 coins');
            return;
        }
        alert(`📞calling ${text}-${number}...`)

        coins = Math.max(coins - 20, 0)
        coinSpan.innerText = coins


        const historyContainer = document.getElementById('call-history')
        const now = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })

        const historyCard = document.createElement('div');
        historyCard.className = "history-card"
        historyCard.innerHTML = `
                        <div class="flex justify-between items-center rounded-lg bg-gray-100 shadow-md p-3 ">
                        <div>
                            <h2 class="text-lg font-semibold">${mainText}</h2>
                            <h1 class="text-lg">${number}</h1>
                        </div>
                        <div class=" text-lg+ font-semibold">
                            ${now}
                        </div>
                    </div>
        `;
        historyContainer.appendChild(historyCard);
    });
}

document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('call-history').innerHTML = '';
})

