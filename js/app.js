// Lista de nomes
let sorteio = [];

// Pegar o nome informado no input
const nomeAmigo = document.getElementById('nome-amigo');

function adicionar() {
    const nome = nomeAmigo.value.trim();

    if (!nome) {
        alert('Digite um nome válido.');
        return limparInput(nomeAmigo);
    }

    const jaExiste = sorteio.some(n => n.toLowerCase() === nome.toLowerCase());
    if (jaExiste) {
        alert(`O nome "${nome}" já está na lista!`);
        return limparInput(nomeAmigo);
    }

    sorteio.push(nome);
    document.getElementById('lista-amigos').textContent = sorteio.join(', ');
    limparInput(nomeAmigo);
}

// SORTEIO — todos dão e recebem presente
function sortear() {
    if (sorteio.length < 2) {
        alert('Adicione pelo menos 2 nomes para sortear.');
        return;
    }

    let destino = embaralhar([...sorteio]);

    // Garantir que ninguém tire a si mesmo
    while (temAlguemComMesmoNome(sorteio, destino)) {
        destino = embaralhar([...sorteio]);
    }

    // Montar pares "A → B"
    const pares = sorteio.map((nome, i) => `${nome} 🎁 ${destino[i]}`);

    // Exibir resultado
    document.getElementById('lista-sorteio').innerHTML = pares.join('<br>');

}

// Função para embaralhar (Fisher–Yates)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = numeroAleatorio(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Verifica se alguém tirou a si mesmo
function temAlguemComMesmoNome(origem, destino) {
    return origem.some((nome, i) => nome === destino[i]);
}

function reiniciar() {
    limparInput(nomeAmigo);
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    sorteio.length = 0;
}

function limparInput(input) {
    input.value = '';
    input.focus();
}

// Gera número aleatório inteiro (inclusivo)
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
