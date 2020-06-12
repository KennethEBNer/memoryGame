document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'blueberries',
            img: 'resources/images/blueberries.jpeg'
        },
        {
            name: 'blueberries',
            img: 'resources/images/blueberries.jpeg'
        },
        {
            name: 'strawberries',
            img: 'resources/images/strawberries.jpeg'
        },
        {
            name: 'strawberries',
            img: 'resources/images/strawberries.jpeg'
        },
        {
            name: 'kiwi',
            img: 'resources/images/kiwi.jpeg'
        },
        {
            name: 'kiwi',
            img: 'resources/images/kiwi.jpeg'
        },
        {
            name: 'lemon',
            img: 'resources/images/lemon.jpeg'
        },
        {
            name: 'lemon',
            img: 'resources/images/lemon.jpeg'
        },
        {
            name: 'pineapple',
            img: 'resources/images/pineapple.jpeg'
        },
        {
            name: 'pineapple',
            img: 'resources/images/pineapple.jpeg'
        },
        {
            name: 'lime',
            img: 'resources/images/lime.jpeg'
        },
        {
            name: 'lime',
            img: 'resources/images/lime.jpeg'
        }
    ]

    cardArray.sort(function(){
        return 0.5 - Math.random();
    });

    const gridDiv = document.querySelector('.grid');
    const resultDisplaySpan = document.querySelector('#result');
    const matchesSpan = document.querySelector('#matches');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Create the board

    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            // Sets the src of the 11 img elements
            card.setAttribute('src', 'resources/images/card.jpeg')
            // Sets the data-id of the 11 img elements
            card.setAttribute('data-id', i)
            card.addEventListener("click", flipCard)
            gridDiv.appendChild(card)
        }
    }

    createBoard();

    // Check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            /* alert("You found a match!") */
            cards[optionOneId].setAttribute('src', 'resources/images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'resources/images/blank.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'resources/images/card.jpeg')
            cards[optionTwoId].setAttribute('src', 'resources/images/card.jpeg')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplaySpan.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            matchesSpan.innerHTML = "";
            resultDisplaySpan.textContent = "Congratualations, you won!"
        }
    }

    // Flip your card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400)
        }
    }
})
