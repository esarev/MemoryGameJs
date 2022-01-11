const cardsArr = [
    {imageName: 'image1', imagePath: 'img/shirt_card.png'},
    {imageName: 'image2', imagePath: 'img/shirt_card.png'}
];

cardsArr.sort(function() {return 0.5 - Math.random()});
console.log(cardsArr);

const span = document.querySelector('#span'),
    cardsDiv = document.querySelector('.cardsDiv'),
    messageDiv = document.querySelector('.messageDiv');

function createBoard() {
    for (let i = 0; i < cardsArr; i++) {
        const imgCard = document.createElement('IMG');
        imgCard.setAttribute('id', String(i));
        imgCard.setAttribute('src', 'img/shirt_card.png');
        imgCard.addEventListener('click', flipCard);
        cardsDiv.appendChild(imgCard);
    }
}

createBoard();

let cardsChosenArr =[];
let cardsChosenArrId =[];
let nOfOpenedCardsArr = [];

function checkForMatch() {
    const cards = document.querySelectorAll('.img');
    const id1 = cardsChosenArrId[0];
    const id2 = cardsChosenArrId[1];

    if (cardsChosenArrId[0] === cardsChosenArrId[1] && id1 !== id2) {
        messageDiv.innerHTML = 'Совпадение найдено!';
        cards[id1].removeEventListener('click', flipCard);
        cards[id2].removeEventListener('click', flipCard);
        nOfOpenedCardsArr.push(cardsChosenArr);
    }
}
