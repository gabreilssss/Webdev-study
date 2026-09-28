let firstCard = 6
let secondCard = 2
let cards = [firstCard,secondCard]
let cardSum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true


let sumMessage = document.getElementById("sum-message-el")
let cardMessage = document.getElementById("card-message-el")
let resultMessage = document.getElementById("message-el")
let dealAgain = document.getElementById("deal-again-btn")
let message = ""



function startGame(){
    cardSum = firstCard + secondCard
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

    if (isAlive){
        dealAgain.style.display = "inline"
    }
    cardMessage.textContent = "Cards: " + cards[0] + "  " + cards[1]
    sumMessage.textContent = "Sum: " + cardSum
    resultMessage.textContent = message
}

function drawCard(){
    cards.push(1)
    cardSum += cards[2]
    updateGame()


}



