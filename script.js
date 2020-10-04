let computerPoints = 0;
let playerPoints = 0;

let computerChoice = '';
let playerChoice = '';

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

const choiceBlock = document.querySelector('.choiceblock')

rockBtn.addEventListener('click', () => {
    playerChoice = 'Rock'
    playRound()
})

paperBtn.addEventListener('click', () => {
    playerChoice = 'Paper'
    playRound()
})

scissorsBtn.addEventListener('click', () => {
    playerChoice = 'Scissors'
    playRound()
})

const playRound = () => {
    let winner = ''

    let random = Math.floor(Math.random() * 3)

    if (random === 0) {
        computerChoice = 'Rock'
    } else if (random === 1) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }

    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        winner = 'Win'
        playerPoints++
    } else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || (playerChoice === 'Paper' && computerChoice === 'Scissors') || (playerChoice === 'Scissors' && computerChoice === 'Rock')) {
        winner = 'Lose'
        computerPoints++
    } else {
        winner = 'Draw'
    }

    updatePoints()
    updateChoices(winner)
    checkWin()
}   

const updatePoints = () => {
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
}

const updateChoices = (winner) => {
    let playerDiv = document.createElement('div')
    let winnerDiv = document.createElement('div')
    let computerDiv = document.createElement('div')

    let choiceContainer = document.createElement('div')

    playerDiv.textContent = playerChoice
    winnerDiv.textContent = winner
    computerDiv.textContent = computerChoice

    choiceContainer.append(playerDiv, winnerDiv, computerDiv)
    choiceContainer.classList.add('choicecontainer')

    choiceBlock.removeChild(choiceBlock.lastChild)
    choiceBlock.append(choiceContainer)

    createLoader()
}

const createLoader = () => {
    let loaderContainer = document.createElement('div')
    let loader1 = document.createElement('div')
    let loader2 = document.createElement('div')
    let loader3 = document.createElement('div')
    let emptyDiv1 = document.createElement('div')
    let emptyDiv2 = document.createElement('div')
    let choiceContainer = document.createElement('div')

    loaderContainer.classList.add('loaderContainer')
    loader1.classList.add('loader')
    loader2.classList.add('loader')
    loader3.classList.add('loader')
    choiceContainer.classList.add('choicecontainer')

    loaderContainer.append(loader1, loader2, loader3)

    choiceContainer.append(emptyDiv1, loaderContainer, emptyDiv2)
    choiceBlock.append(choiceContainer)
}

choiceBlock.removeChild(choiceBlock.lastChild)
