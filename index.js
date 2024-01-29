let homeNewscore = document.getElementById("homescore")
let guestNewscore = document.getElementById("guestscore")
let countHome = 0
let countGuest = 0


function homePlusOne() {
  countHome += 1
  homeNewscore.textContent = countHome  
}

function homePlusTwo() {
  countHome += 2
  homeNewscore.textContent = countHome  
}

function homePlusThree() {
  countHome += 3
  homeNewscore.textContent = countHome  
}

function guestPlusOne() {
  countGuest += 1
  guestNewscore.textContent = countGuest  
}

function guestPlusTwo() {
  countGuest += 2
  guestNewscore.textContent = countGuest  
}

function guestPlusThree() {
  countGuest += 3
  guestNewscore.textContent = countGuest  
}
