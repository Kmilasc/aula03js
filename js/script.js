document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('resultado').innerHTML = `<strong>Média:</strong> ${media.toFixed(2)}`;

    document.getElementById('calcularBtn').addEventListener('click', calcularSoma);
});

function calcularSoma() {
    let soma = 0; 
    for (let i = 2; i <= 50; i += 2) { 
        soma += i;
    }
    document.getElementById('resultado').innerHTML = `A soma é: ${soma}`;
}


function atualizarRelogio() {
    const agora = new Date();
    const horario = agora.toLocaleTimeString();
    document.getElementById('relogio').innerHTML = horario;
}

setInterval(atualizarRelogio, 1000);

function carbon() {
    const substancia1 = parseInt(document.getElementById('substancia1').value);
    const substancia2 = parseInt(document.getElementById('substancia2').value);

    if (isNaN(substancia1) || isNaN(substancia2)) {
        alert('Por favor, digite quantidades válidas de carbono.');
        return;
    }

    if (substancia1 === substancia2 + 2) {
        alert('Quantidade igual.');
    } else {
        alert('Quantidade diferente.');
    }
}

function exibirIdade() {
    const idade = document.getElementById('idade').value;

    if (!idade || idade < 0 || idade > 120) {
        alert('Por favor, insira uma idade válida.');
    } else {
        alert('Sua idade é: ' + idade + ' anos.');

    }
}

function listarPares() {
    const lista = document.getElementById('listaPares');
    lista.innerHTML = ''; 
    for (let i = 2; i <= 100; i += 2) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.textContent = i;
        lista.appendChild(item);
    }
}

function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

const fibonacciSequence = fibonacci(20);
console.log(fibonacciSequence);

