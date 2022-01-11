const cardsArr = [
    {imageName: 'shirt_card', imagePath: 'img/shirt_card.png'},
    {imageName: 'shirt_card', imagePath: 'img/shirt_card.png'}
];

cardsArr.sort(function() {return 0.5 - Math.random()});
console.log(cardsArr);

const span = document.querySelector('#span'),
    cardsDiv = document.querySelector('.cardsDiv'),
    messageDiv = document.querySelector('.messageDiv');