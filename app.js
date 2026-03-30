// =====================================
// DADOS DOS PROTOCOLOS DE PRIMEIROS SOCORROS
// =====================================
const topicos = [
    // 1. Abcessos
    {
        id: 1,
        titulo: "Abcessos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Abcessos</h2>
            
            <div class="protocol-section">
                <p>Abscessos são coleções de pus que se formam em um espaço do tecido, geralmente devido a uma infecção bacteriana. Os sintomas incluem inchaço, vermelhidão, calor, dor local.</p>
                
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar pasta de inhame e gengibre (Ver na Seção "Farmácia Natural")</li>
                </ul>
            </div>
        `,
        palavrasChave: ["abscesso", "pus", "infecção", "inchaço"]
    },
    
    // 2. Afogamento
    {
        id: 2,
        titulo: "Afogamento",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Afogamento</h2>
            
            <div class="protocol-section">
                <h3>Procedimentos Imediatos</h3>
                <h4>1. Segurança em primeiro lugar</h4>
                <ul>
                    <li>Nunca entre na água sem segurança.</li>
                    <li>Jogue boias, cordas ou objetos que flutuem para a vítima.</li>
                </ul>
                <h4>2. Retirada da vítima</h4>
                <ul>
                    <li>Apoie sempre a cabeça e o pescoço.</li>
                    <li>Coloque a pessoa de barriga para cima em local seguro.</li>
                </ul>
                <h4>3. Verificar consciência e respiração</h4>
                <ul>
                    <li>Toque e chame a vítima.</li>
                    <li>Se não responder e não respirar, inicie RCP.</li>
                </ul>
                <h4>4. Se estiver respirando, mas inconsciente</h4>
                <ul>
                    <li>Coloque-a de lado (posição lateral de segurança).</li>
                    <li>Aqueça a pessoa com toalhas secas.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>⚠️ Alertas importantes</h3>
                <ul>
                    <li>Sempre acione o serviço de emergência (192).</li>
                    <li>Não tente "espremer água" do pulmão (mito).</li>
                </ul>
            </div>
        `,
        palavrasChave: ["afogamento", "água", "reanimação", "respiração"]
    },
    
    // 3. Aftas
    {
        id: 3,
        titulo: "Aftas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Aftas</h2>
            
            <div class="protocol-section">
                <p>São pequenas úlceras dolorosas que aparecem na boca, como na língua ou bochechas, com centro branco ou amarelado e bordas avermelhadas. Geralmente se curam sozinhas em uma ou duas semanas, mas podem ser causadas por estresse, baixa imunidade ou deficiências nutricionais.</p>
                
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Molhar o dedo e passar no BICARBONATO DE SÓDIO e aplicar sobre a afta algumas vezes por dia</li>
                    <li>Evitar alimentos ácidos</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Bicarbonato de Sódio</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["aftas", "úlcera", "boca", "bicarbonato"]
    },
    
    // 4. Alergias
    {
        id: 4,
        titulo: "Alergias (Reações alérgicas)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Alergias (Reações alérgicas)</h2>
            
            <div class="protocol-section">
                <h3>Alergias Alimentares ou Medicamentosas</h3>
                <h4>Tratamento Natural</h4>
                <ul>
                    <li>Tomar 3 a 4 comprimidos de carvão ativado imediatamente.</li>
                    <li>Beber 400 ml de água por hora para reduzir a resposta imune.</li>
                    <li>Aplicar vinagre de maçã na pele para aliviar coceira.</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Carvão Ativado</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["alergia", "alérgico", "coceira", "carvão ativado"]
    },
    
    // 5. Anemia
    {
        id: 5,
        titulo: "Anemia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Anemia</h2>
            
            <div class="protocol-section">
                <p>É a diminuição da quantidade de glóbulos vermelhos ou hemoglobina no sangue, o que compromete o transporte de oxigênio pelo corpo. Os sintomas incluem fadiga, palidez e falta de ar.</p>
                
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar <strong>FORTIFICANTE DE UVA</strong> (Ver na Seção Farmácia Natural) 3x ao dia por 30 dias</li>
                    <li>Ou tomar o <strong>TÔNICO ENERGIZANTE</strong> (Ver na Seção Farmácia Natural) 3x ao dia por 30 dias</li>
                </ul>
            </div>
        `,
        palavrasChave: ["anemia", "sangue", "ferro", "palidez", "fadiga"]
    },
    
    // 6. Ansiedade / Nervosismo / Pânico
    {
        id: 6,
        titulo: "Ansiedade / Nervosismo / Pânico",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Ansiedade / Nervosismo / Pânico</h2>
            
            <div class="protocol-section">
                <h3>ATAQUE DE ANSIEDADE/PÂNICO - PROCEDIMENTOS IMEDIATOS</h3>
                <h4>1. Acalmando o Ambiente</h4>
                <ul>
                    <li>Leve a pessoa para um local tranquilo e arejado</li>
                    <li>Afaste curiosos</li>
                    <li>Mantenha voz calma e baixa</li>
                </ul>
                <h4>2. Técnica de Grounding (Aterramento)</h4>
                <ul>
                    <li>Peça para nomear <strong>5 coisas que pode ver</strong>, <strong>4 que pode tocar</strong>, <strong>3 sons</strong>, <strong>2 cheiros</strong>, <strong>1 sabor</strong></li>
                </ul>
                <h4>3. Controle Respiratório</h4>
                <ul>
                    <li>4 segundos inspirando, 7 segundos segurando, 8 segundos expirando</li>
                </ul>
                <h4>4. Chás Calmantes</h4>
                <ul>
                    <li>Camomila, erva cidreira, passiflora</li>
                </ul>
            </div>
        `,
        palavrasChave: ["ansiedade", "pânico", "crise", "respiração", "calma"]
    },
    
    // 7. Asma / Bronquite Asmática
    {
        id: 7,
        titulo: "Asma / Bronquite Asmática",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Asma / Bronquite Asmática</h2>
            
            <div class="protocol-section">
                <p>Doença inflamatória crônica das vias aéreas, que causa estreitamento dos brônquios.</p>
                <h3>Principais Sintomas:</h3>
                <ul>
                    <li>Falta de ar</li>
                    <li>Chiado no peito</li>
                    <li>Tosse seca</li>
                </ul>
                <h3>TRATAMENTO NATURAL</h3>
                <ul>
                    <li>Inalação com chá de orégano, hortelã, eucalipto ou camomila</li>
                    <li>Usar "Penicilina Russa" (Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["asma", "bronquite", "falta de ar", "chiado", "inalação"]
    },
    
    // 8. Ataque Cardíaco (Infarto / Dor no peito)
    {
        id: 8,
        titulo: "Ataque Cardíaco (Infarto / Dor no peito intensa)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Ataque Cardíaco (Infarto / Dor no peito intensa)</h2>
            
            <div class="protocol-section">
                <p>Ataque cardíaco é quando uma parte do coração morre por falta de circulação.</p>
                <h3>IDENTIFICAÇÃO DOS SINAIS</h3>
                <ul>
                    <li>Dor ou aperto no peito (irradia para braço, mandíbula, costas)</li>
                    <li>Falta de ar, suor frio, palidez</li>
                    <li>Náusea, tontura</li>
                </ul>
                <h3>O QUE FAZER</h3>
                <ul>
                    <li>Ligue 192 (SAMU)</li>
                    <li>Colocar a vítima sentada ou semideitada</li>
                    <li>Afrouxar roupas</li>
                    <li>Se perder a consciência, inicie RCP</li>
                </ul>
                <h3>TRATAMENTO NATURAL</h3>
                <ul>
                    <li>Chá com 5-10 pimentas malaguetas em 200ml de água + suco de 3 limões</li>
                    <li>Ou meia colher de chá de pimenta caiena diretamente na boca</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Pimenta Caiena</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["ataque cardíaco", "infarto", "coração", "dor no peito", "rcp", "pimenta"]
    },
    
    // 9. AVC
    {
        id: 9,
        titulo: "AVC (Derrame cerebral)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>AVC (Derrame cerebral)</h2>
            
            <div class="protocol-section">
                <h3>TESTE SAMU</h3>
                <ul>
                    <li><strong>S</strong> – Sorriso: pode ficar paralisado</li>
                    <li><strong>A</strong> – Abraço: um braço pode cair</li>
                    <li><strong>M</strong> – Mensagem: fala enrolada</li>
                    <li><strong>U</strong> – Urgência: ligue 192</li>
                </ul>
                <h3>O QUE FAZER</h3>
                <ul>
                    <li>Ligue 192 imediatamente</li>
                    <li>Deite a pessoa com cabeça elevada 30 graus</li>
                    <li>Afrouxe roupas</li>
                    <li>Não dê medicamentos nem alimentos</li>
                </ul>
            </div>
        `,
        palavrasChave: ["avc", "derrame", "samu", "paralisia"]
    },
    
    // 10. Bronquite / Bronquiolite
    {
        id: 10,
        titulo: "Bronquite / Bronquiolite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Bronquite / Bronquiolite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                
                <h4>1. Cataplasma de cebola na sola dos pés:</h4>
                <ul>
                    <li>Picar cebola crua e colocar em sacos plásticos</li>
                    <li>Colocar os pés sobre a cebola e cobrir com meias</li>
                    <li>Deixar agir durante a noite</li>
                </ul>
                
                <h4>2. Xarope de cebola e mel:</h4>
                <ul>
                    <li>Camadas alternadas de cebola fatiada e mel em um pote</li>
                    <li>Deixar descansar por 24 horas até formar um xarope</li>
                    <li>Coar e tomar para alívio da tosse</li>
                </ul>
                
                <h4>3. Inalação:</h4>
                <ul>
                    <li>Chá de orégano, hortelã, camomila ou eucalipto por 10-15 minutos</li>
                    <li>1 a 3x ao dia, o tempo que for necessário</li>
                </ul>
            </div>
        `,
        palavrasChave: ["bronquite", "bronquiolite", "tosse", "cebola", "inalação"]
    }
];
