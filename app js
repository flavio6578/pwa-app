// Dados dos tópicos de primeiros socorros
const topicos = [
    {
        id: 1,
        titulo: "Desmaio",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Desmaio</h2>
            
            <div class="protocol-section">
                <h3>O Que Fazer Imediatamente</h3>
                <ol>
                    <li>Deite a pessoa de costas no chão</li>
                    <li>Levante as pernas 30-40 cm acima do coração</li>
                    <li>Afrouxe roupas apertadas no pescoço e cintura</li>
                    <li>Providencie ar fresco abrindo janelas</li>
                </ol>
            </div>

            <div class="protocol-section">
                <h3>Após o Retorno à Consciência</h3>
                <ol>
                    <li>Não a levante rapidamente - espere 10-15 minutos</li>
                    <li>Ofereça água ou suco quando estiver alerta</li>
                    <li>Acompanhe por pelo menos 30 minutos</li>
                </ol>
            </div>

            <div class="protocol-section">
                <h3>Quando Buscar Ajuda Médica</h3>
                <ul>
                    <li>Se o desmaio durar mais de 1 minuto</li>
                    <li>Se houver convulsões ou batimentos cardíacos irregulares</li>
                    <li>Se for idoso, gestante ou pessoa com doença cardíaca</li>
                    <li>Se houver queda e trauma na cabeça</li>
                </ul>
            </div>

            <div class="protocol-section">
                <h3>Medidas Preventivas</h3>
                <ul>
                    <li>Beber água regularmente</li>
                    <li>Evitar ficar muito tempo em pé parado</li>
                    <li>Levantar-se lentamente após deitar/sentar</li>
                    <li>Comer em intervalos regulares</li>
                </ul>
            </div>
        `,
        palavrasChave: ["desmaio", "perda consciencia", "mal subito"]
    },
    {
        id: 2,
        titulo: "Corpos Estranhos na Pele",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Corpos Estranhos na Pele</h2>
            
            <div class="protocol-section">
                <h3>Protocolo Geral de Remoção</h3>
                <h4>Preparação Inicial</h4>
                <ol>
                    <li>Lave bem as mãos com água e sabão</li>
                    <li>Limpe a área ao redor do corpo estranho com água limpa e sabão neutro</li>
                    <li>Esterilize o instrumento de remoção passando pelo fogo ou mergulhando em álcool</li>
                    <li>Use uma boa fonte de luz para visualizar claramente o objeto</li>
                </ol>

                <h4>Técnica de Remoção para Objetos Visíveis</h4>
                <ol>
                    <li>Use uma pinça esterilizada para segurar firmemente o objeto</li>
                    <li>Puxe na mesma direção em que o objeto entrou</li>
                    <li>Se o objeto estiver profundamente enterrado, use uma agulha esterilizada para abrir suavemente a pele ao redor</li>
                    <li>Após a remoção, esprema suavemente a área para sangrar um pouco e limpar a ferida</li>
                    <li>Lave novamente com água limpa e aplique um curativo</li>
                </ol>
            </div>

            <div class="protocol-section">
                <h3>O Que Não Fazer</h3>
                <ul>
                    <li>Não use agulhas não esterilizadas</li>
                    <li>Não corte muito a pele ao redor do objeto</li>
                    <li>Não force a remoção se o objeto estiver muito profundo</li>
                    <li>Não ignore sinais de infecção</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pele", "espinho", "farpa", "vidro", "metal"]
    }
];

// Funções do app
function initApp() {
    criarIndiceAlfabetico();
    carregarListaTopicos();
    configurarBusca();
}

function criarIndiceAlfabetico() {
    const alphaIndex = document.getElementById('alphaIndex');
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    letras.forEach(letra => {
        const div = document.createElement('div');
        div.className = 'alpha-letter';
        div.textContent = letra;
        div.onclick = () => filtrarPorLetra(letra);
        alphaIndex.appendChild(div);
    });
}

function carregarListaTopicos(filtro = '') {
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = '';

    const topicosFiltrados = topicos.filter(topico => 
        topico.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
        topico.palavrasChave.some(palavra => 
            palavra.toLowerCase().includes(filtro.toLowerCase())
        )
    );

    topicosFiltrados.forEach(topico => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.innerHTML = `<h3>${topico.titulo}</h3>`;
        div.onclick = () => mostrarProtocolo(topico.id);
        topicsList.appendChild(div);
    });
}

function filtrarPorLetra(letra) {
    const topicosFiltrados = topicos.filter(topico => 
        topico.titulo.toUpperCase().startsWith(letra)
    );
    
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = '';

    topicosFiltrados.forEach(topico => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.innerHTML = `<h3>${topico.titulo}</h3>`;
        div.onclick = () => mostrarProtocolo(topico.id);
        topicsList.appendChild(div);
    });
}

function configurarBusca() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        carregarListaTopicos(e.target.value);
    });
}

function mostrarProtocolo(id) {
    const topico = topicos.find(t => t.id === id);
    if (!topico) return;

    document.getElementById('topicsContainer').style.display = 'none';
    document.getElementById('protocolContent').style.display = 'block';
    document.getElementById('protocolContent').innerHTML = topico.conteudo;
}

function voltarParaLista() {
    document.getElementById('topicsContainer').style.display = 'block';
    document.getElementById('protocolContent').style.display = 'none';
}

// Inicializar app quando a página carregar
document.addEventListener('DOMContentLoaded', initApp);
