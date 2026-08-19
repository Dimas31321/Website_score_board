let cntHome = 0
let cntGuest = 0
let cntHomeEl = document.getElementById("count-home-el")
cntHomeEl.textContent = cntHome
let cntGuestEl = document.getElementById("count-guest-el")
cntGuestEl.textContent = cntGuest
function incrementBy1HomeCount(){
    cntHome += 1
    cntHomeEl.textContent = cntHome
}

function incrementBy2HomeCount(){
    cntHome += 2
    cntHomeEl.textContent = cntHome
}

function incrementBy3HomeCount(){
    cntHome += 3
    cntHomeEl.textContent = cntHome
}
function incrementBy1GuestCount(){
    cntGuest += 1
    cntGuestEl.textContent = cntGuest
}

function incrementBy2GuestCount(){
    cntGuest += 2
    cntGuestEl.textContent = cntGuest
}

function incrementBy3GuestCount(){
    cntGuest += 3
    cntGuestEl.textContent = cntGuest
}
