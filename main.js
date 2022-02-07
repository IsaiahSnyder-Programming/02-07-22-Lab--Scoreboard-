let clickCount1 = 0
let clickCount2 = 0


function team1Score() {
    clickCount1++

    document.getElementById("click-count-1").innerText = clickCount1.toString()

    console.log(clickCount1)
}

function team2Score() {
    clickCount2++

    document.getElementById("click-count-2").innerText = clickCount2.toString()

    console.log(clickCount2)
}




// NOTE Condensed Version
let dictionary = {
    team3 : 0,
    team4 : 0
}

function teamScore(team) {
    dictionary[team]++

    document.getElementById('click-count-3').innerText = dictionary[team]
    document.getElementById('click-count-4').innerText = dictionary[team]
}