function criarJogador(nome) {
    return {
        nome: nome,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    };
}

var jogadores = [];

function adicionarJogador() {
    var nomeJogador = document.getElementById('nomeJogador').value;

    if (nomeJogador) {
        // Cria um novo jogador e adiciona à lista
        var novoJogador = criarJogador(nomeJogador);
        jogadores.push(novoJogador);

        // Atualiza a tabela
        setupTable();

        // Limpa o campo de entrada
        document.getElementById('nomeJogador').value = '';
    } else {
        alert('Digite o nome do jogador');
    }
}

function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos++;
    setupTable();
}

function adicionarEmpate(jogador) {
    jogador.empate++;
    setupTable();
}

function adicionarDerrota(jogador) {
    jogador.derrota++;
    setupTable();
}

function setupTable() {
    var elementoTabela = document.getElementById('tabelaJogadores');
    elementoTabela.innerHTML = '';

    for (var i=0; i < jogadores.length; i++) {
        elementoTabela.innerHTML +=
    
        `
        <tr>
          <td>${jogadores[i].nome}</td>
          <td>${jogadores[i].vitoria}</td>
          <td>${jogadores[i].empate}</td>
          <td>${jogadores[i].derrota}</td>
          <td>${jogadores[i].pontos}</td>

          <td><button onClick="adicionarVitoria(jogadores[${i}])">Vitória</button></td>

          <td><button onClick="adicionarEmpate(jogadores[${i}])">Empate</button></td>

          <td><button onClick="adicionarDerrota(jogadores[${i}])">Derrota</button></td>
      </tr>
        `;
    }
}

// Call the setupTable function when the page loads
window.onload = setupTable;

function zerarPontos() {
    // Itera sobre a lista de jogadores e zera os pontos
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitoria = 0;
        jogadores[i].empate = 0;
        jogadores[i].derrota = 0;
        jogadores[i].pontos = 0;
    }

    setupTable(); // Atualiza a tabela após zerar os pontos
}



