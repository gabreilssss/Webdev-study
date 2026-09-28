let firstCard = 6
let secondCard = 2
let cardSum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let message = ""


if(sum < 21){
    message = "Do you want do draw a new card?"
}else if(sum === 21){
    message = "wohoo you got blackjack"
    hasBlackjack = true
}else {
    message = "ha ha ha you lost"
    isAlive = false
}