// EX 01
document.getElementById('mediaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira notas válidas (números).');
    } else {
        var media = (nota1 + nota2 + nota3) / 3;
        var resultadoTexto;

        if(media > 6) {
            resultadoTexto = `Aprovado com média: ${media.toFixed(2)}`;
        } else {
            resultadoTexto = `Recuperação com média: ${media.toFixed(2)}`;
        }

        document.getElementById('resultado').innerHTML = resultadoTexto;
    }
});

// EX 02
document.getElementById('calcularBtn').addEventListener('click', calcularSoma);

function calcularSoma() {
    let soma = 0;
    for (let i = 2; i <= 50; i += 2) {
        soma += i;
        if (i >= 50) {
            break; 
        }
    }
    document.getElementById('resultado').textContent = `A soma dos primeiros 50 números pares é: ${soma}`;
}

// EX 03
function atualizarRelogio() {
    const agora = new Date();
    const horario = agora.toLocaleTimeString();
    document.getElementById('relogio').innerHTML = horario;
}

setInterval(atualizarRelogio, 1000);

// EX 04
function handleSelection(option) {
    switch(option) {
        case 1:
            document.getElementById('feedback').innerHTML = '<div class="alert alert-success">Checkin feito com sucesso, seja bem-vindo.</div>';
            break;
        case 2:
            if(confirm('Você tem certeza?')) {
                document.getElementById('feedback').innerHTML = '<div class="alert alert-success">Checkout feito com sucesso, até mais.</div>';
            }
            break;
        case 3:
            let dias = prompt('Por quantos dias gostaria de estender a hospedagem?');
            if(dias) {
                document.getElementById('feedback').innerHTML = `<div class="alert alert-success">Hospedagem estendida por ${dias} dias :D</div>`;
            }
            break;
        case 4:
            document.getElementById('feedback').innerHTML = '<div class="alert alert-primary">Ok.</div>';
            break;
        default:
            document.getElementById('feedback').innerHTML = '<div class="alert alert-danger">Opção inválida!</div>';
    }
}

// EX 05
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

// EX 06
function imprimirPares() {
    let numerosPares = '';
    for (let i = 0; i <= 100; i += 2) {
        numerosPares += i + (i < 100 ? ', ' : '');
    }
    document.getElementById('numerosPares').innerText = numerosPares;
}

// EX 07
function exibirIdade() {
    const idade = document.getElementById('idade').value;

    if (!idade || idade < 0 || idade > 120) {
        alert('Por favor, insira uma idade válida.');
    } else {
        alert('Sua idade é: ' + idade + ' anos.');

    }
}

// EX 08
document.getElementById("calculateBonus").addEventListener("click", function() {
    const salario = parseFloat(document.getElementById("salaryInput").value);
    if (!isNaN(salario)) {
        let bonus = salario * (salario < 10000 ? 0.35 : 0.25);
        document.getElementById("bonusResult").innerText = 'Bônus: ' + bonus.toFixed(2);
    } else {
        document.getElementById("bonusResult").innerText = 'Por favor, insira um valor válido para o salário.';
    }
});


// EX 09
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}

function mostrarFibonacci() {
    const fibonacciSequence = fibonacci(20);
    document.getElementById('resultadoFibonacci').innerText = fibonacciSequence.join(', ');
}
