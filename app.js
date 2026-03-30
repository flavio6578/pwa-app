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
    // 11. Câimbras
    {
        id: 11,
        titulo: "Câimbras",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Câimbras</h2>
            
            <div class="protocol-section">
                <ul>
                    <li>Se a cãibra ocorrer em movimento, parar;</li>
                    <li>Fazer massagens firmes com movimentos circulares no músculo / região atingida;</li>
                    <li>Adotar posições que alonguem os músculos atingidos;</li>
                    <li>Aplicar calor na região atingida (bolsa de água quente).</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Pomada Calminex</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["câimbra", "cãibra", "musculo", "dor"]
    },
    
    // 12. Câncer
    {
        id: 12,
        titulo: "Câncer",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Câncer</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Beber chá de Caseara (Guaçatonga verdadeira) para aumentar os linfócitos (defesa do corpo)</li>
                    <li><strong>Atenção:</strong> Não confundir com outras plantas diuréticas de nome similar</li>
                </ul>
                <h3>Câncer no Sangue (Leucemia)</h3>
                <ul>
                    <li>Beber chá frio de Caseara sylvestris (Guaçatonga verdadeira), na proporção de 2 colheres de sopa para 1 litro de água</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Guaçatonga (Caseara)</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["câncer", "cancro", "leucemia", "guaçatonga", "caseara"]
    },
    
    // 13. Catarata
    {
        id: 13,
        titulo: "Catarata",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Catarata</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar mel de Abelha jataí</li>
                    <li>Aplicar colírio de cinerária</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Mel de Abelha Jataí</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["catarata", "visão", "olhos", "mel", "jataí"]
    },
    
    // 14. Ciático (Dor / Inflamação)
    {
        id: 14,
        titulo: "Ciático (Dor / Inflamação)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Ciático (Dor / Inflamação)</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Tomar o <strong>Tônico Energizante</strong> 3x ao dia (Ver na Seção Farmácia Natural)</li>
                    <li>Ou tomar chá de hortelã 3 vezes ao dia</li>
                    <li>Uso da Pomada Calminex</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Pomada Calminex</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["ciático", "ciatica", "dor nas costas", "ciatalgia"]
    },
    
    // 15. Choque Elétrico
    {
        id: 15,
        titulo: "Choque Elétrico",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Choque Elétrico</h2>
            
            <div class="protocol-section">
                <h3>Procedimentos</h3>
                <ul>
                    <li>Desligue a fonte de energia</li>
                    <li>Use objeto isolante (madeira, plástico) para afastar a vítima</li>
                    <li>Verifique respiração e pulso</li>
                    <li>Se não respirar, inicie RCP</li>
                    <li>Ligue 192</li>
                </ul>
            </div>
        `,
        palavrasChave: ["choque elétrico", "eletricidade", "queimadura", "rcp"]
    },
    
    // 16. Cólera
    {
        id: 16,
        titulo: "Cólera",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Cólera</h2>
            
            <div class="protocol-section">
                <p>A cólera é uma doença infecciosa intestinal aguda e grave, causada pela bactéria Vibrio cholerae. A transmissão ocorre principalmente através da ingestão de água ou alimentos contaminados.</p>
                
                <h3>Sintomas Principais</h3>
                <ul>
                    <li>Diarreia aquosa e profusa (aspecto de "água de arroz")</li>
                    <li>Vômitos</li>
                    <li>Cãibras musculares</li>
                    <li>Sinais de desidratação grave</li>
                </ul>
                
                <h3>Tratamento</h3>
                <ul>
                    <li>Reidratação Oral: Soro caseiro (1 litro de água + 1 colher sopa açúcar + 1 colher chá sal)</li>
                    <li>Antibiótico Natural (Ver na Seção Farmácia Natural)</li>
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
        palavrasChave: ["cólera", "diarreia", "desidratação", "carvão ativado"]
    },
    
    // 17. Conjuntivite
    {
        id: 17,
        titulo: "Conjuntivite (coceira, irritação nos olhos)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Conjuntivite (coceira, irritação nos olhos)</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Compressa de batata ralada sobre os olhos</li>
                    <li>Água com bicarbonato (1 colher café para um copo)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["conjuntivite", "olho", "coceira", "irritação"]
    },
    
    // 18. Convulsão / Ataque epilético
    {
        id: 18,
        titulo: "Convulsão / Ataque epilético",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Convulsão / Ataque epilético</h2>
            
            <div class="protocol-section">
                <h3>O QUE FAZER</h3>
                <ul>
                    <li>Proteja a cabeça</li>
                    <li>Afaste objetos perigosos</li>
                    <li>Coloque de lado (posição lateral de segurança)</li>
                    <li>Cronometre a crise (se >5 min, chame 192)</li>
                </ul>
                <h3>O QUE NÃO FAZER</h3>
                <ul>
                    <li>Não coloque nada na boca</li>
                    <li>Não segure a pessoa</li>
                </ul>
            </div>
        `,
        palavrasChave: ["convulsão", "epilepsia", "crise"]
    },
    
    // 19. Corpos estranhos (olhos/nariz/ouvidos)
    {
        id: 19,
        titulo: "Corpos Estranhos nos olhos / Nariz / Ouvidos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Corpos Estranhos nos olhos / Nariz / Ouvidos</h2>
            
            <div class="protocol-section">
                <h3>Olhos</h3>
                <ul>
                    <li>Lave com água corrente</li>
                    <li>Não esfregue</li>
                </ul>
                <h3>Nariz</h3>
                <ul>
                    <li>Assoe suavemente</li>
                    <li>Se visível, remova com pinça</li>
                </ul>
                <h3>Ouvidos</h3>
                <ul>
                    <li>Para insetos: azeite morno</li>
                    <li>Não use cotonetes</li>
                </ul>
            </div>
        `,
        palavrasChave: ["corpo estranho", "objeto", "olho", "nariz", "ouvido"]
    },
    
    // 20. Corrimento Vaginal
    {
        id: 20,
        titulo: "Corrimento Vaginal",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Corrimento Vaginal</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Fazer duchas vaginais com pó de Barbatimão por um período de uma semana</li>
                    <li><strong>Atenção:</strong> NÃO beber o chá de barbatimão, apenas uso externo</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Barbatimão</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["corrimento", "vaginal", "barbatimão"]
    },
    
    // 21. Cortes / Sangramento / Hemorragia
    {
        id: 21,
        titulo: "Cortes / Sangramento / Hemorragia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Cortes / Sangramento / Hemorragia</h2>
            
            <div class="protocol-section">
                <h3>Controle do Sangramento</h3>
                <ul>
                    <li>Pressione diretamente com pano limpo</li>
                    <li>Eleve o membro afetado</li>
                    <li>Se for muita hemorragia: pimenta caiena sobre o corte</li>
                </ul>
                <h3>Limpeza</h3>
                <ul>
                    <li>Lave com água limpa</li>
                    <li>Remova sujeira visível</li>
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
        palavrasChave: ["corte", "sangramento", "hemorragia", "sangue"]
    },
    
    // 22. Covid
    {
        id: 22,
        titulo: "Covid",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Covid</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar o <strong>FORTIFICANTE DE UVA</strong> (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["covid", "coronavírus", "fortificante", "imunidade"]
    },
    
    // 23. Dengue
    {
        id: 23,
        titulo: "Dengue",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dengue</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar o <strong>FORTIFICANTE DE UVA</strong> (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dengue", "febre", "fortificante", "imunidade"]
    },
    
    // 24. Depressão
    {
        id: 24,
        titulo: "Depressão",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Depressão</h2>
            
            <div class="protocol-section">
                <p>A depressão é um transtorno de humor grave e comum, caracterizado por tristeza profunda, perda de interesse e energia reduzida, durando pelo menos duas semanas.</p>
                
                <h3>📋 Principais Sintomas</h3>
                <ul>
                    <li><strong>Humor Deprimido:</strong> Tristeza profunda, desesperança</li>
                    <li><strong>Anedonia:</strong> Perda de prazer em atividades</li>
                    <li><strong>Fadiga:</strong> Cansaço excessivo</li>
                    <li><strong>Alterações no Sono:</strong> Insônia ou excesso de sono</li>
                    <li><strong>Baixa Autoestima:</strong> Culpa excessiva</li>
                </ul>
                
                <h3>🌿 Tratamento Natural</h3>
                <p>Método mais rápido de tratamento natural é tomar a <strong>"FARINHA DA FELICIDADE"</strong>.</p>
                
                <h4>📝 Ingredientes:</h4>
                <ul>
                    <li>100g Farinha de Aveia</li>
                    <li>100g Fibra de Maçã</li>
                    <li>100g Gérmen de Trigo</li>
                    <li>100g Gergelim</li>
                    <li>100g Farinha de Banana Verde</li>
                </ul>
                <p><em>Todos esses ingredientes são ricos em tirosina, ótimo para o cérebro e o bem-estar.</em></p>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Farinha da Felicidade</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["depressão", "tristeza", "ansiedade", "farinha da felicidade", "tirosina"]
    },
    
    // 25. Dermatite
    {
        id: 25,
        titulo: "Dermatite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dermatite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar a <strong>Garrafada de BABOSA e MEL</strong> (Ver na Seção Farmácia Natural)</li>
                    <li>Compressas: Prepare uma infusão de camomila (chá) deixe esfriar e aplique com um pano limpo na área afetada</li>
                    <li>Aplicação Direta: Óleos como o de coco ou Aloe Vera (Gel da Babosa)</li>
                </ul>
                <h3>OBS EVITAR:</h3>
                <ul>
                    <li>Carnes vermelhas, porco, peixes de couro, camarão, lagosta</li>
                    <li>Embutidos (mortadela, presunto, salsicha, etc.)</li>
                    <li>Sucos artificiais, alimentos industrializados</li>
                    <li>Evite fumar ou beber bebidas alcoólicas</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Gel de Babosa</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["dermatite", "pele", "inflamação", "babosa", "aloe vera"]
    },
    
    // 26. Desidratação / Insolação
    {
        id: 26,
        titulo: "Desidratação / Insolação",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Desidratação / Insolação</h2>
            
            <div class="protocol-section">
                <h3>PROCEDIMENTOS</h3>
                <ul>
                    <li>Leve para local fresco e sombreado</li>
                    <li>Aplique panos úmidos frios (pescoço, axilas, virilhas)</li>
                    <li>Ofereça água em pequenos goles</li>
                    <li>Soro caseiro: 1L água + 1 col sopa açúcar + 1 col chá sal</li>
                    <li>Gel de babosa no corpo para aliviar vermelhidão</li>
                </ul>
            </div>
            
            <!-- PRODUTOS RECOMENDADOS -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produtos recomendados:</strong> Filtro de água portátil | Soro isotônico | Gel de Babosa | Filtro de Barro</p>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:8px 20px; border-radius:50px; text-decoration:none; font-weight:bold;">
                        🛒 EQUIPAMENTOS
                    </a>
                    <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#2E7D32; color:white; padding:8px 20px; border-radius:50px; text-decoration:none; font-weight:bold;">
                        🌿 NATURAIS
                    </a>
                </div>
            </div>
        `,
        palavrasChave: ["desidratação", "insolação", "calor", "hidratação", "soro"]
    },
    
    // 27. Desinteria
    {
        id: 27,
        titulo: "Desinteria",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Desinteria</h2>
            
            <div class="protocol-section">
                <h3>Sintomas Comuns</h3>
                <ul>
                    <li>Diarreia aquosa frequente com sangue e/ou muco</li>
                    <li>Cólicas e dor abdominal intensa</li>
                    <li>Febre, náuseas e vômitos</li>
                    <li>Desidratação, fadiga, perda de peso</li>
                </ul>
                
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Tomar 1 colher de sopa de carvão vegetal em pó em um copo de água</li>
                    <li>Suco de limão com Maizena (1 limão + 1 colher sopa) 1-3x ao dia</li>
                    <li>Chá de folha de Goiaba (3-6 xícaras/dia)</li>
                    <li>Tomar o <strong>ANTIBIÓTICO NATURAL</strong> (Ver na Seção Farmácia Natural)</li>
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
        palavrasChave: ["desinteria", "diarreia", "sangue", "carvão ativado"]
    },
    
    // 28. Desmaio / Mal súbito
    {
        id: 28,
        titulo: "Desmaio / Mal súbito",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Desmaio / Mal súbito</h2>
            
            <div class="protocol-section">
                <h3>O Que Fazer Imediatamente:</h3>
                <ol>
                    <li>Deite a pessoa de costas no chão</li>
                    <li>Levante as pernas 30-40 cm acima do coração</li>
                    <li>Afrouxe roupas apertadas</li>
                    <li>Providencie ar fresco</li>
                </ol>
                <h3>Após o Retorno à Consciência:</h3>
                <ul>
                    <li>Não levante rapidamente</li>
                    <li>Ofereça água</li>
                </ul>
            </div>
        `,
        palavrasChave: ["desmaio", "mal súbito", "inconsciência"]
    }
];
