//  js 

let coputerChoice = document.getElementById("coputerChoice")
let yourChoice = document.getElementById("yourChoice")
let rusult = document.getElementById("rusult")
let psdipleChoice = document.querySelectorAll('button')
let userId

// startPlay 
startPlay() 

function startPlay() {
psdipleChoice.forEach(psdipleChoice => psdipleChoice.addEventListener('click', (e) => {
    userId = e.target.id
    yourChoice.innerHTML = userId
    autoNumber()
    rulesGame()
}))
}

//  autoNumber

function autoNumber() {

    let randomRumber = Math.floor(Math.random() * 3) + 1

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

// rulesGame

function rulesGame() {
    // Draw
    if (
        (coputerChoice.textContent == 'rock' && yourChoice.textContent == 'rock') ||
        (coputerChoice.textContent == 'peper' && yourChoice.textContent == 'peper') ||
        (coputerChoice.textContent == 'scissors' && yourChoice.textContent == 'scissors')
    ) {
        swal("Draw", "...Do you want to try again?");


    }
    // lost
    if (
        (coputerChoice.textContent == 'rock' && yourChoice.textContent == 'peper') ||
        (coputerChoice.textContent == 'scissors' && yourChoice.textContent == 'peper' || yourChoice.textContent == 'rock')
    ) {
        swal({
            title: "you lost?",
            text: "Do you want to play again?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
        rusult.textContent = "lose"

    }
    // the winner
    if (
        (yourChoice.textContent == 'rock' && coputerChoice.textContent == 'peper') ||
        (yourChoice.textContent == 'scissors' && coputerChoice.textContent == 'peper' || coputerChoice.textContent == 'rock')
    ) {

        swal("Congrats!", "You are the winner!", "success");
        rusult.textContent = "win"

    }


}