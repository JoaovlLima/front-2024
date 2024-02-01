function requestElevator(floor) {
    let cabin = document.querySelector('.elevator-cabin');
    let floorHeight = document.querySelector('.elevator-container .button').offsetHeight + 5;

    cabin.style.transform = `translateY(-${(floor - 1) * floorHeight}px)`;
}

function requestElevator2(floor) {
    let cabin = document.querySelector('.elevator-cabin2');
    let floorHeight = document.querySelector('.elevator-container2 .button2').offsetHeight + 5;

    cabin.style.transform = `translateY(-${(floor - 1) * floorHeight}px)`;
}
function getRandomNumber() {
    return Math.floor(Math.random() * 6) - 2;
}

// Função para exibir o número aleatório em um elemento <p>
function displayRandomNumber() {
    let randomNumber = getRandomNumber();
    document.getElementById('andar').innerText = ` ${randomNumber}`;
}
function posicionarElevadoresAleatoriamente() {
    let andarAleatorio1 = getRandomNumber();
    let andarAleatorio2 = getRandomNumber();

    let cabin = document.querySelector('.elevator-cabin');
    let floorHeight = document.querySelector('.elevator-container .button').offsetHeight + 5;
    cabin.style.transform = `translateY(-${(andarAleatorio1 - 1) * floorHeight}px)`;

    let cabin2 = document.querySelector('.elevator-cabin2');
    let floorHeight2 = document.querySelector('.elevator-container2 .button2').offsetHeight + 5;
    cabin2.style.transform = `translateY(-${(andarAleatorio2 - 1) * floorHeight2}px)`;
}
///////
let andarAtual1 = 0;
let andarAtual2 = 0;

function moverElevador(elevador, andarDesejado) {
    let cabin = document.querySelector(`.${elevador} .elevator-cabin`);
    let button = document.querySelector(`.${elevador} .${elevador === 'elevator' ? 'button' : 'button2'}`);

    if (cabin && button) {
        let floorHeight = button.offsetHeight + 5;
        cabin.style.transform = `translateY(-${(andarDesejado - 1) * floorHeight}px)`;
    }
}

function chamarElevador() {
    let andarDesejado = getRandomNumber();

    let distanciaElevador1 = Math.abs(andarAtual1 - andarDesejado);
    let distanciaElevador2 = Math.abs(andarAtual2 - andarDesejado);

    if (distanciaElevador1 < distanciaElevador2) {
        moverElevador('elevator', andarDesejado);
        andarAtual1 = andarDesejado;
    } else {
        moverElevador('elevator2', andarDesejado);
        andarAtual2 = andarDesejado;
    }

    
}

document.querySelector('.chamarElevador button').addEventListener('click', chamarElevador);

// Chamar a função para posicionar os elevadores aleatoriamente ao carregar a página
window.addEventListener('load', posicionarElevadoresAleatoriamente);
window.addEventListener('load', displayRandomNumber);