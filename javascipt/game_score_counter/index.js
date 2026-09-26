let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

function add(team, addvalue) {

    
    if (team === "home") {
        scoreHome += addvalue
        scoreHomeEl.textContent = scoreHome
    }

    if (team === "guest") {
        scoreGuest += addvalue
        scoreGuestEl.textContent = scoreGuest
    }

}

function newGame(){
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
}