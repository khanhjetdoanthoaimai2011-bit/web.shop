const cards = [
    { name: 'apple', icon: '🍎' }, { name: 'apple', icon: '🍎' },
    { name: 'banana', icon: '🍌' }, { name: 'banana', icon: '🍌' },
    { name: 'cherry', icon: '🍒' }, { name: 'cherry', icon: '🍒' },
    { name: 'grape', icon: '🍇' }, { name: 'grape', icon: '🍇' },
    { name: 'watermelon', icon: '🍉' }, { name: 'watermelon', icon: '🍉' },
    { name: 'pear', icon: '🍐' }, { name: 'pear', icon: '🍐' }
];

cards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');


function createBoard() {
    gameBoard.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'card');
        cardElement.setAttribute('data-id', index);

        cardElement.addEventListener('click', flipCard);

        gameBoard.appendChild(cardElement);
    });
}
let score = 0;
let chosenCards = [];
let chosenCardsId = [];

function flipCard() {
    let cardId = this.getAttribute('data-id');

    if (chosenCardsId.includes(cardId) || this.classList.contains('matched')) return;

    this.innerHTML = cards[cardId].icon;
    this.classList.add('flipped');

    chosenCards.push(cards[cardId].name);
    chosenCardsId.push(cardId);

    if (chosenCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const allCards = document.querySelectorAll('.card');
    const optionOneId = chosenCardsId[0];
    const optionTwoId = chosenCardsId[1];

    if (chosenCards[0] === chosenCards[1]) {
        allCards[optionOneId].classList.add('matched');
        allCards[optionTwoId].classList.add('matched');
        score += 10;
        scoreDisplay.textContent = score;
    } else {
        alert('Không khớp rồi! Thử lại nhé.');
        allCards[optionOneId].innerHTML = '';
        allCards[optionOneId].classList.remove('flipped');
        allCards[optionTwoId].innerHTML = '';
        allCards[optionTwoId].classList.remove('flipped');
    }

    chosenCards = [];
    chosenCardsId = [];

    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
        alert('Chúc mừng! Bạn đã chiến thắng trò chơi!');
    }
}


createBoard();