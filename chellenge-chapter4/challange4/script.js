
function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'rock-p1';
    if (comp >= 0.34 && comp > 0.67) return 'paper-p1'; return 'scissors-p1';
}

function getHasil(comp, player) {
    if (player == comp) return 'Draw';
    if (player == 'rock-p1') return (comp == 'scissors-p1') ? 'Win' : 'Lose';
    if (player == 'paper-p1') return (comp == 'rock-p1') ? 'Win' : 'Lose';
    if (player == 'scissors-p1') return (comp == 'paper-p1') ? 'Win' : 'Lose';
}

const pRock = document.querySelector('.rock-p1')
pRock.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pRock.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp : ' + pilihanComputer);
    console.log('player : ' + pilihanPlayer);
    console.log('hasil : ' + hasil);
})

const pPaper = document.querySelector('.paper-p1')
pPaper.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pPaper.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp : ' + pilihanComputer);
    console.log('player : ' + pilihanPlayer);
    console.log('hasil : ' + hasil);

})

const pScissors = document.querySelector('.scissors-p1')
pScissors.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pScissors.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp : ' + pilihanComputer);
    console.log('player : ' + pilihanPlayer);
    console.log('hasil : ' + hasil);
})

const rockP1 = document.querySelector('.rock-p1');
rockP1.addEventListener('click', function(){
    rockP1.style.backgroundColor = '#c4c4c4';
    rockP1.style.padding = '40px';
    rockP1.style.borderRadius = '30px';
})

const paperP1 = document.querySelector('.paper-p1')
paperP1.addEventListener('click', function(){
    paperP1.style.backgroundColor = '#c4c4c4';
    paperP1.style.padding = '40px';
    paperP1.style.borderRadius = '30px';
})

const scissorsP1 = document.querySelector('.scissors-p1')
scissorsP1.addEventListener('click', function(){
    scissorsP1.style.backgroundColor = '#c4c4c4';
    scissorsP1.style.padding = '40px';
    scissorsP1.style.borderRadius = '30px';
})

const reset = document.querySelector('.refresh')
reset.addEventListener('click', function(){
    reset.addEventListener('reset')
})