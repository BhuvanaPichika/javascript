const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({ target: clickedCard }) {
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        setTimeout(() => {
            cardOne.style.visibility = "hidden";
            cardTwo.style.visibility = "hidden";
            cardOne = cardTwo = "";
            disableDeck = false;

            // If all pairs are matched, shuffle the cards again
            if (matched == 6) {
                setTimeout(() => {
                    shuffleCard();
                }, 1000);
            }
        }, 400); // Slight delay before hiding the cards for a better user experience
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
}


function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6,  1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `img-${arr[i]}.jpg`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard(); // Call shuffleCard to initialize the game

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
