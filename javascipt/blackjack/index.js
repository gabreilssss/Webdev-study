let firstCard = 0
let secondCard = 0
let cardSum = 0
let cards = []
let numCards = 0
let hasBlackjack = false
let isAlive = false


let sumMessage = document.getElementById("sum-message-el")
let cardMessage = document.getElementById("card-message-el")
let resultMessage = document.getElementById("message-el")
let dealAgain = document.getElementById("deal-again-btn")
let message = ""

function getRandomCard(){

    let random = Math.floor(Math.random()*13)+1
    if (random === 1){
        return 11
    } else if (random >= 11){
        return 10

    } else{
        return random
    }
    
}

function startGame(){
    document.getElementById("game-start-btn").textContent = "RESTART"
    firstCard = getRandomCard()
    secondCard = getRandomCard() 
    cards.push(firstCard,secondCard)
    hasBlackjack = false
    isAlive = true
    cardSum = firstCard + secondCard
    numCards = 0
    cardMessage.textContent = "Cards: "
    updateGame()
}

function updateGame(){

    if(cardSum < 21){
        message = "Do you want do draw a new card?"
    }else if(cardSum === 21){
        message = "wohoo you got blackjack"
        hasBlackjack = true
    }else {
        message = "ha ha ha you lost"
        isAlive = false
    }

    if (isAlive === true && hasBlackjack === false ){
        dealAgain.style.display = "inline"
    } else{
        document.getElementById("game-start-btn").textContent = "START GAME"
        dealAgain.style.display = "none"
    }

    for(let i = numCards; i < cards.length; i++){

        cardMessage.textContent += cards[i] + " "
        numCards += 1
    }
    
    sumMessage.textContent = "Sum: " + cardSum
    resultMessage.textContent = message
}

function drawCard(){

    let newCard = getRandomCard()
    cardSum += newCard
    cards.push(newCard)
    
    updateGame()


}



