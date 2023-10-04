//  js 

let coputerChoice = document.getElementById("coputerChoice")
const yourChoice = document.getElementById("yourChoice")
const rusult = document.getElementById("rusult")
const psdipleChoice = document.querySelectorAll('button')
console.log(psdipleChoice)
let userId
psdipleChoice.forEach(psdipleChoice => psdipleChoice.addEventListener('click', (e) => {
    userId = e.target.id
    yourChoice.innerHTML = userId
   cumputerChoiceffff()
}))

function cumputerChoiceffff() {
   let randomRumber = Math.floor(Math.random() * 3)  + 1

    if (randomRumber === 1) {
        coputerChoice.innerHTML = 'rock'
   
    }
    if (randomRumber === 2) {
           coputerChoice.innerHTML = 'peper'
    }
    if (randomRumber === 3) {
        coputerChoice.innerHTML = 'scissors'
    }

}
function rusult() {
    if()
}