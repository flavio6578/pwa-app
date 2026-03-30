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
    // 29. Diabetes
    {
        id: 29,
        titulo: "Diabetes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Diabetes</h2>
            
            <div class="protocol-section">
                <p>O diabetes é uma condição crônica que afeta a forma como o corpo processa a glicose no sangue. O acompanhamento médico é essencial para o tratamento adequado.</p>
                
                <h3>Tratamento Natural Complementar</h3>
                <ul>
                    <li>Chá de pata-de-vaca (2 colheres de sopa por litro de água)</li>
                    <li>Chá de carqueja (auxilia na regulação da glicose)</li>
                    <li>Consumir alimentos ricos em fibras e evitar açúcar refinado</li>
                </ul>
                <p><strong>Atenção:</strong> Nunca substitua o tratamento médico por medidas naturais sem orientação profissional.</p>
            </div>
        `,
        palavrasChave: ["diabetes", "açúcar", "glicose", "pata de vaca", "carqueja"]
    },
    
    // 30. Diarréia
    {
        id: 30,
        titulo: "Diarréia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Diarréia</h2>
            
            <div class="protocol-section">
                <h3>RECEITAS NATURAIS</h3>
                <ul>
                    <li>Suco de limão com Maizena (1 limão + 1 col sopa)</li>
                    <li>Chá de folha de Goiaba (3-6 xícaras/dia)</li>
                    <li>Alho cru durante as refeições</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Soro Isotônico Repositor</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["diarréia", "soltura", "intestino"]
    },
    
    // 31. Dificuldade para respirar / Falta de ar
    {
        id: 31,
        titulo: "Dificuldade para respirar / Falta de ar / Crise asmática",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dificuldade para respirar / Falta de ar / Crise asmática</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de cebola crua na sola dos pés (durante a noite)</li>
                    <li>Xarope de cebola e mel</li>
                </ul>
            </div>
        `,
        palavrasChave: ["falta de ar", "respirar", "asma", "cebola", "xarope"]
    },
    
    // 32. Dor de Dentes
    {
        id: 32,
        titulo: "Dor de Dentes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor de Dentes</h2>
            
            <div class="protocol-section">
                <h3>Analgésicos Naturais</h3>
                <ul>
                    <li>Cravo da índia (óleo ou mastigado)</li>
                    <li>Bochecho com água morna e sal</li>
                    <li>Compressa fria na bochecha</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor de dente", "dente", "cárie", "cravo"]
    },
    
    // 33. Dor de Garganta
    {
        id: 33,
        titulo: "Dor de Garganta",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor de Garganta</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais:</h3>
                <ul>
                    <li>Cataplasma de cebola crua no pescoço</li>
                    <li>Gargarejo com água morna e sal</li>
                    <li>Mel com própolis</li>
                    <li>Mel com açafrão</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor de garganta", "garganta", "inflamação", "mel", "própolis"]
    },
    
    // 34. Dor de Ouvido
    {
        id: 34,
        titulo: "Dor de Ouvido",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor de Ouvido</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais:</h3>
                <ul>
                    <li>Cataplasma de cebola cozida: extrair o suco e colocar gotas no ouvido</li>
                    <li>Chá da casca da laranja ou limão (ferver em meio litro de água)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor de ouvido", "ouvido", "cebola", "laranja", "limão"]
    },
    
    // 35. Dor Muscular / Torcicolo
    {
        id: 35,
        titulo: "Dor Muscular / Torcicolo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor Muscular / Torcicolo</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Folhas de repolho amassadas com mel</li>
                    <li>Cataplasma de gengibre ralado</li>
                    <li>Para torcicolo: imobilizar pescoço com pano</li>
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
        palavrasChave: ["dor muscular", "torcicolo", "músculo", "repolho", "gengibre"]
    },
    
    // 36. Embriaguez / Alcoolismo
    {
        id: 36,
        titulo: "Embriaguez / Alcoolismo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Embriaguez / Alcoolismo</h2>
            
            <div class="protocol-section">
                <h3>Embriaguez</h3>
                <ul>
                    <li>Tomar 4 a 5 comprimidos de carvão ativado (reduz efeitos em 10-20 min)</li>
                </ul>
                <h3>Alcoolismo</h3>
                <ul>
                    <li>Extrato de alho em álcool (25 gotas em água, 3x ao dia)</li>
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
        palavrasChave: ["embriaguez", "bebedeira", "álcool", "alcoolismo", "carvão ativado"]
    },
    
    // 37. Engasgo em Adultos
    {
        id: 37,
        titulo: "Engasgo em Adultos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Engasgo em Adultos</h2>
            
            <div class="protocol-section">
                <h3>O que fazer</h3>
                <ul>
                    <li>Engasgo parcial: incentive a tossir com força</li>
                    <li>Engasgo total: Manobra de Heimlich (compressões abdominais)</li>
                    <li>Se perder a consciência, inicie RCP</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Desengasgador</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["engasgo", "heimlich", "adulto", "obstrução"]
    },
    
    // 38. Engasgo em Crianças
    {
        id: 38,
        titulo: "Engasgo em Crianças",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Engasgo em Crianças</h2>
            
            <div class="protocol-section">
                <h3>Crianças (>1 ano)</h3>
                <ul>
                    <li>Mesmo procedimento do adulto, com menos força</li>
                </ul>
                <h3>Bebês (<1 ano)</h3>
                <ul>
                    <li>5 tapas nas costas (barriga para baixo)</li>
                    <li>5 compressões torácicas (barriga para cima, 2 dedos)</li>
                    <li>Alternar até sair o objeto</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Desengasgador</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["engasgo", "criança", "bebê", "tapas nas costas"]
    },
    
    // 39. Entorse / Luxações
    {
        id: 39,
        titulo: "Entorse / Luxações",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Entorse / Luxações</h2>
            
            <div class="protocol-section">
                <h3>Entorse</h3>
                <ul>
                    <li>Protocolo GECA: Guardar, Gelar, Comprimir, Elevar</li>
                    <li>Folhas de repolho amassadas com mel</li>
                    <li>Cataplasma de gengibre ralado</li>
                </ul>
                <h3>Luxação</h3>
                <ul>
                    <li>Não tente recolocar</li>
                    <li>Imobilize na posição em que está</li>
                    <li>Aplique compressa fria</li>
                    <li>Busque atendimento médico urgente</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Tornozeleira Ortopédica</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["entorse", "luxação", "torção", "articulação"]
    },
    
    // 40. Espinhas
    {
        id: 40,
        titulo: "Espinhas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Espinhas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar pasta de inhame e gengibre (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["espinhas", "acne", "pele", "inhame", "gengibre"]
    },
    
    // 41. Estomatite
    {
        id: 41,
        titulo: "Estomatite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Estomatite</h2>
            
            <div class="protocol-section">
                <p>A estomatite causa aftas, bolhas ou úlceras dolorosas na boca, vermelhidão, inchaço, dor, ardência e dificuldade para comer.</p>
                
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar o <strong>FORTIFICANTE DE UVA</strong> 3x ao dia (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["estomatite", "aftas", "boca", "fortificante"]
    },
    
    // 42. Farpas / Corpos estranhos na pele
    {
        id: 42,
        titulo: "Farpas ou corpos estranhos na pele",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Farpas ou corpos estranhos na pele</h2>
            
            <div class="protocol-section">
                <h3>Remoção</h3>
                <ul>
                    <li>Lave as mãos e esterilize a pinça</li>
                    <li>Puxe na mesma direção que entrou</li>
                    <li>Para farpas profundas: cataplasma de batata ou inhame com gengibre</li>
                </ul>
                <h3>Sinais de infecção</h3>
                <ul>
                    <li>Vermelhidão, inchaço, pus, febre → procure ajuda médica</li>
                </ul>
            </div>
        `,
        palavrasChave: ["farpa", "espinho", "corpo estranho", "pele"]
    },
    
    // 43. Febre Alta
    {
        id: 43,
        titulo: "Febre alta",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Febre alta</h2>
            
            <div class="protocol-section">
                <h3>Sintomas</h3>
                <ul>
                    <li>Temperatura >38,5°C, calafrios, pele quente</li>
                </ul>
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Hidratação: água, água de coco, soro caseiro</li>
                    <li>Banho morno (nunca frio)</li>
                    <li>Compressas frias na testa, pulsos, nuca</li>
                    <li>Chá de sabugueiro, gengibre, camomila com hortelã</li>
                </ul>
            </div>
        `,
        palavrasChave: ["febre", "alta", "temperatura", "calafrios"]
    },
    
    // 44. Feridas
    {
        id: 44,
        titulo: "Feridas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Feridas</h2>
            
            <div class="protocol-section">
                <h3>Feridas Crônicas</h3>
                <ul>
                    <li>Pomada de açafrão, camomila e mel</li>
                    <li>Aplicar 2x ao dia</li>
                    <li>À noite, carvão em pó para evitar pus</li>
                </ul>
            </div>
        `,
        palavrasChave: ["ferida", "corte", "cicatrização", "pomada"]
    },
    
    // 45. Ferimento com prego enferrujado
    {
        id: 45,
        titulo: "Ferimento com prego enferrujado",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Ferimento com prego enferrujado</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de batata ralada</li>
                    <li>Pasta de inhame e gengibre</li>
                    <li>Tomar "Penicilina Russa" (Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["prego", "enferrujado", "ferimento", "tétano"]
    },
    
    // 46. Fraturas
    {
        id: 46,
        titulo: "Fraturas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Fraturas</h2>
            
            <div class="protocol-section">
                <h3>Identificação</h3>
                <ul>
                    <li>Dor intensa, inchaço, deformidade, incapacidade de usar o membro</li>
                </ul>
                <h3>Imobilização</h3>
                <ul>
                    <li>Não tente alinhar o osso</li>
                    <li>Use talas improvisadas (galhos, jornais, papelão)</li>
                    <li>Fixe com tiras de pano, cintos ou cordas</li>
                    <li>Braço: tipoia com camiseta</li>
                    <li>Perna: amarrar as pernas juntas (a sã serve de tala)</li>
                </ul>
            </div>
            
            <!-- PRODUTOS RECOMENDADOS -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Colar Cervical Inflável | Tornozeleira Ortopédica</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["fratura", "osso quebrado", "imobilizar", "tala"]
    },
    
    // 47. Furúnculos
    {
        id: 47,
        titulo: "Furúnculos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Furúnculos</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Cataplasma de cebola cozida diretamente sobre o furúnculo</li>
                    <li>Cataplasma de repolho com limão</li>
                </ul>
            </div>
        `,
        palavrasChave: ["furúnculo", "pus", "infecção"]
    },
    
    // 48. Hemorróidas
    {
        id: 48,
        titulo: "Hemorróidas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hemorróidas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar 1 colher de chá da pomada de açafrão, camomila e mel (3-5x/dia)</li>
                    <li>Uso tópico: adicionar pimenta malagueta à pomada</li>
                </ul>
            </div>
        `,
        palavrasChave: ["hemorróida", "pomada", "açafrão", "pimenta"]
    },
    
    // 49. Hepatite
    {
        id: 49,
        titulo: "Hepatite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hepatite</h2>
            
            <div class="protocol-section">
                <p>A hepatite é uma inflamação do fígado, causada comumente por vírus, álcool ou medicamentos.</p>
                
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Chá de Boldo (folhas)</li>
                    <li>Chá de Segurelha (3 colheres sopa para meio litro de água)</li>
                    <li>Chá de Pariparoba (3 colheres sopa para 1 litro de água)</li>
                    <li>Chá de Erva-tostão ou Agarrapinto</li>
                    <li>Chá de Alecrim (3 colheres sopa para 1 litro de água)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["hepatite", "fígado", "boldo", "alecrim"]
    },
    
    // 50. Hérnia de Disco
    {
        id: 50,
        titulo: "Hérnia de Disco",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hérnia de Disco</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>1 copo de água com duas colheres de sopa de GERGELIM com casca</li>
                    <li>Bater no liquidificador e coar</li>
                    <li>Tomar um copo por dia</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Gergelim</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["hérnia de disco", "coluna", "dor nas costas", "gergelim"]
    },
    
    // 51. Herpes Genital
    {
        id: 51,
        titulo: "Herpes Genital",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Herpes Genital</h2>
            
            <div class="protocol-section">
                <p>Herpes genital causa bolhas dolorosas, feridas, dor, coceira e ardor na região íntima.</p>
                
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Fazer duchas vaginais com pó de Barbatimão (uso externo apenas)</li>
                    <li>Chá de Guaçatonga: decocção de 2 colheres de sopa de folhas para 1 litro de água, tomar até 3x ao dia</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Barbatimão | Guaçatonga</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["herpes", "genital", "barbatimão", "guaçatonga"]
    },
    
    // 52. Hipotermia
    {
        id: 52,
        titulo: "Hipotermia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hipotermia</h2>
            
            <div class="protocol-section">
                <h3>Sinais</h3>
                <ul>
                    <li>Leve: calafrios, pele fria, fala arrastada</li>
                    <li>Grave: ausência de calafrios, perda de consciência</li>
                </ul>
                <h3>Tratamento</h3>
                <ul>
                    <li>Remova roupas molhadas</li>
                    <li>Aqueça o tronco primeiro (compressas mornas, contato corporal)</li>
                    <li>Ofereça líquidos quentes (se consciente)</li>
                    <li>Não aqueça braços e pernas primeiro</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Cobertor Manta Térmica Aluminizado</p>
                <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["hipotermia", "frio", "calafrio", "aquecer"]
    },
    
    // 53. H1N1
    {
        id: 53,
        titulo: "H1N1",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>H1N1</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar o <strong>ANTIBIÓTICO NATURAL</strong> 3x ao dia por 14 dias</li>
                    <li>Usar também o <strong>FORTIFICANTE DE UVA</strong> 3x ao dia o tempo que for necessário</li>
                    <li>Ambas receitas estão na Seção Farmácia Natural</li>
                </ul>
            </div>
        `,
        palavrasChave: ["h1n1", "gripe", "vírus", "imunidade", "antibiótico natural"]
    },
    
    // 54. Impotência Sexual
    {
        id: 54,
        titulo: "Impotência Sexual",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Impotência Sexual</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <p>Suco de:</p>
                <ul>
                    <li>1 Pepino</li>
                    <li>1/4 de melancia</li>
                    <li>Meia beterraba</li>
                    <li>1 Limão com casca</li>
                    <li>1 colher de chá de mel</li>
                </ul>
                <p>Bater tudo e tomar um copo por dia</p>
            </div>
        `,
        palavrasChave: ["impotência", "sexual", "melancia", "beterraba", "pepino"]
    },
    
    // 55. Infecção Urinária
    {
        id: 55,
        titulo: "Infecção Urinária",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Infecção Urinária</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <p><strong>CHÁ DE PLANTAS MEDICINAIS:</strong></p>
                <ul>
                    <li>Despejar 1 litro de água fervente sobre 1 colher (sopa) de cavalinha, cana do brejo e chapéu de couro</li>
                    <li>Mexer e tampar, aguardar 20 minutos e coar</li>
                    <li>Tomar 1 xícara 3-4 vezes ao dia, por pelo menos 5 dias</li>
                </ul>
                <p><strong>CATAPLASMA DE ARGILA:</strong> Misturar argila com água fria e aplicar na testa e na altura do umbigo até à virilha.</p>
                <p><strong>NÃO CONSUMIR AÇÚCAR</strong> - Aumenta as bactérias e dificulta a cura.</p>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Argila</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["infecção urinária", "cistite", "bexiga", "cavalinha", "argila"]
    },
    
    // 56. Intoxicação Alimentar / Química / Medicamentos
    {
        id: 56,
        titulo: "Intoxicação Alimentar / Química / Medicamentos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Intoxicação Alimentar / Química / Medicamentos</h2>
            
            <div class="protocol-section">
                <h3>O que fazer</h3>
                <ul>
                    <li>Identifique o agente causador</li>
                    <li>Não provoque vômito (a menos que instruído)</li>
                    <li>Hidratação: soro caseiro, água de coco</li>
                    <li>Contato com pele: lave com água corrente</li>
                    <li>Inalação: leve para local arejado</li>
                </ul>
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar 3-4 comprimidos de carvão ativado</li>
                    <li>Repetir a cada 3 horas</li>
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
        palavrasChave: ["intoxicação", "envenenamento", "carvão ativado"]
    },
    
    // 57. Labirintite
    {
        id: 57,
        titulo: "Labirintite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Labirintite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Beber chá de Cavalinha para restaurar o equilíbrio</li>
                    <li>Ou usar comprimidos de Ginkgo Biloba</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Ginkgo Biloba</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["labirintite", "tontura", "vertigem", "cavalinha", "ginkgo"]
    },
    
    // 58. Malária
    {
        id: 58,
        titulo: "Malária",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Malária</h2>
            
            <div class="protocol-section">
                <p>A malária é uma infecção parasitária transmitida pela picada do mosquito Anopheles. O tratamento médico é obrigatório.</p>
                
                <h3>Tratamento Natural Complementar</h3>
                <ul>
                    <li>Tomar o <strong>ANTIBIÓTICO NATURAL</strong> (Ver na Seção Farmácia Natural)</li>
                </ul>
                <p><strong>Importante:</strong> O tratamento convencional com medicamentos antimaláricos é essencial. As medidas naturais são complementares.</p>
            </div>
        `,
        palavrasChave: ["malária", "febre", "mosquito", "antibiótico natural"]
    },
    
    // 59. Meningite
    {
        id: 59,
        titulo: "Meningite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Meningite</h2>
            
            <div class="protocol-section">
                <p>A meningite é uma inflamação das meninges, com sintomas como febre alta, dor de cabeça intensa e rigidez na nuca. É uma emergência médica.</p>
                
                <h3>Tratamento de Emergência</h3>
                <ul>
                    <li>Procure atendimento médico IMEDIATAMENTE</li>
                    <li>Até chegar ajuda, colocar gelo atrás da cabeça (na nuca)</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Bolsa de Gelo</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["meningite", "febre", "nuca", "rigidez", "emergência"]
    },
    
    // 60. Micose
    {
        id: 60,
        titulo: "Micose",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Micose</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Usar a casca da Babosa (Gel) diretamente nas partes afetadas</li>
                    <li>Ou fazer uma pasta de Dolomita em pó com água e aplicar nas áreas afetadas</li>
                </ul>
            </div>
            
            <!-- PRODUTOS RECOMENDADOS -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produtos recomendados:</strong> Gel de Babosa | Dolomita</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["micose", "fungo", "pele", "babosa", "dolomita"]
    },
    
    // 61. Micose de Unhas
    {
        id: 61,
        titulo: "Micose de Unhas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Micose de Unhas</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Aplicar topicamente o extrato de alho em álcool</li>
                    <li>Usar suco de Gengibre puro, passar na unha e deixar secar</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Extrato de Alho | Gengibre</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["micose de unha", "fungo", "alho", "gengibre"]
    },
    
    // 62. Mordida de Cachorro ou Gato
    {
        id: 62,
        titulo: "Mordida de cachorro ou gato",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Mordida de cachorro ou gato</h2>
            
            <div class="protocol-section">
                <h3>Primeiros Socorros</h3>
                <ul>
                    <li>Controle o sangramento com pressão direta</li>
                    <li>Lave abundantemente com água e sabão (15 minutos)</li>
                    <li>Aplique pasta de carvão ativado na ferida</li>
                    <li>Tome carvão ativado (1 colher sopa em água)</li>
                    <li>Repita a cada 6 horas por 24-48 horas</li>
                    <li>Em casos graves, procure ajuda médica</li>
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
        palavrasChave: ["mordida", "cachorro", "gato", "raiva", "carvão ativado"]
    },
    
    // 63. Náuseas ou Enjôo
    {
        id: 63,
        titulo: "Náuseas ou enjoo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Náuseas ou enjoo</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Chá de gengibre fresco</li>
                    <li>Suco de limão com água morna</li>
                </ul>
            </div>
        `,
        palavrasChave: ["náusea", "enjoo", "vômito", "gengibre"]
    },
    
    // 64. Parada Cardíaca
    {
        id: 64,
        titulo: "Parada Cardíaca (Coração parou)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Parada Cardíaca (Coração parou)</h2>
            
            <div class="protocol-section">
                <h3>Sinais</h3>
                <ul>
                    <li>Perda de consciência</li>
                    <li>Ausência de respiração</li>
                    <li>Ausência de pulso</li>
                </ul>
                <h3>RCP</h3>
                <ul>
                    <li>30 compressões torácicas (centro do peito, 5-6 cm de profundidade, 100-120/min)</li>
                    <li>2 ventilações (se souber)</li>
                    <li>Continue até ajuda chegar</li>
                </ul>
            </div>
        `,
        palavrasChave: ["parada cardíaca", "rcp", "massagem cardíaca", "compressão"]
    },
    
    // 65. Pedra nos Rins
    {
        id: 65,
        titulo: "Pedra nos Rins",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pedra nos Rins</h2>
            
            <div class="protocol-section">
                <h3>Chá de abacateiro</h3>
                <ul>
                    <li>1 litro água + 10 folhas secas de abacateiro</li>
                    <li>Ferver 2-3 min, descansar 10 min</li>
                    <li>Beber ao longo do dia</li>
                </ul>
                <h3>Chá de Quebra Pedra</h3>
                <ul>
                    <li>2 colheres de planta seca para 1 litro d'água</li>
                    <li>Beber por vários dias</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pedra nos rins", "rim", "cálculo renal"]
    },
    
    // 66. Pedra na Vesícula
    {
        id: 66,
        titulo: "Pedra na Vesícula",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pedra na Vesícula</h2>
            
            <div class="protocol-section">
                <h3>Remédio Natural</h3>
                <ul>
                    <li>Caroço de abacate bem seco, ralado na hora</li>
                    <li>1 colher chá do pó em um copo de água morna</li>
                    <li>Tomar todas as noites antes de dormir</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pedra na vesícula", "vesícula", "cálculo biliar"]
    },
    
    // 67. Picada de Abelhas / Vespas / Insetos
    {
        id: 67,
        titulo: "Picada de Abelhas / Vespas / Insetos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Abelhas / Vespas / Insetos</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de carvão ativado com água</li>
                    <li>Para alergia: tomar 5 comprimidos de carvão ativado</li>
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
        palavrasChave: ["picada", "abelha", "vespa", "inseto", "carvão ativado"]
    },
    
    // 68. Picada de Cobra
    {
        id: 68,
        titulo: "Picada de Cobra (Acidente Ofídico)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Cobra (Acidente Ofídico)</h2>
            
            <div class="protocol-section">
                <h3>O que fazer</h3>
                <ul>
                    <li>Mantenha a vítima deitada e tranquila</li>
                    <li>Lave o local com água e sabão</li>
                    <li>Transporte imediatamente para o hospital</li>
                </ul>
                <h3>O que NÃO fazer</h3>
                <ul>
                    <li>Não faça torniquete</li>
                    <li>Não corte o local</li>
                    <li>Não tente chupar o veneno</li>
                </ul>
                <h3>Tratamento Natural Complementar</h3>
                <ul>
                    <li>Cataplasma de carvão ativado (trocar a cada 1h)</li>
                    <li>Tomar 10 comprimidos de carvão ativado a cada 3h</li>
                </ul>
            </div>
        `,
        palavrasChave: ["picada de cobra", "cobra", "veneno", "ofídico", "carvão ativado"]
    },
    
    // 69. Picada de Escorpião
    {
        id: 69,
        titulo: "Picada de Escorpião",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Escorpião</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de carvão ativado no local</li>
                    <li>Tomar 5 comprimidos de carvão ativado (repetir a cada 3h se necessário)</li>
                </ul>
                <p><strong>OBS:</strong> Em crianças, é grave. Faça os procedimentos e procure ajuda médica urgente.</p>
            </div>
        `,
        palavrasChave: ["picada de escorpião", "escorpião", "veneno", "carvão ativado"]
    },
    
    // 70. Pneumonia
    {
        id: 70,
        titulo: "Pneumonia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pneumonia</h2>
            
            <div class="protocol-section">
                <p><strong>ATENÇÃO:</strong> A pneumonia é grave. Procure atendimento médico.</p>
                <h3>Sintomas</h3>
                <ul>
                    <li>Tosse persistente, febre alta, falta de ar, dor no peito</li>
                </ul>
                <h3>Tratamento Natural Complementar</h3>
                <ul>
                    <li>Cataplasma de cebola na sola dos pés (durante a noite)</li>
                    <li>Xarope de cebola e mel</li>
                    <li>Inalação com chá de orégano, hortelã, camomila ou eucalipto</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pneumonia", "pulmão", "infecção", "tosse", "febre"]
    },
    
    // 71. Pressão Alta e Baixa
    {
        id: 71,
        titulo: "Pressão Alta e Baixa",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pressão Alta e Baixa</h2>
            
            <div class="protocol-section">
                <h3>Pressão Alta (Crise Hipertensiva)</h3>
                <ul>
                    <li>Ralar 3-4 cebolas e colocar os pés sobre ela</li>
                    <li>Chá de capim cidreira + chapéu-de-couro</li>
                    <li>Normaliza a pressão em 30 minutos</li>
                </ul>
                <h3>Pressão Baixa</h3>
                <ul>
                    <li>Tomar um copo d'água com 1/4 colher de chá de sal</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pressão alta", "hipertensão", "pressão baixa", "cebola", "sal"]
    },
    
    // 72. Prisão de Ventre (Constipação)
    {
        id: 72,
        titulo: "Prisão de Ventre (constipação)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Prisão de Ventre (constipação)</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Compressa de óleo de rícino no abdômen</li>
                    <li>Chá de Sene (laxante natural, usar com moderação)</li>
                    <li>Chá de erva doce ou funcho</li>
                </ul>
            </div>
        `,
        palavrasChave: ["prisão de ventre", "constipação", "intestino preso"]
    },
    
    // 73. Prostatite
    {
        id: 73,
        titulo: "Prostatite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Prostatite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Beber chá das folhas de Abacateiro e fazer banho de assento com o mesmo chá</li>
                    <li>Ou tomar chá de cavalinha 3x ao dia (1 colher da planta para meio litro de água)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["prostatite", "próstata", "abacateiro", "cavalinha"]
    },
    
    // 74. Queimaduras
    {
        id: 74,
        titulo: "Queimaduras",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Queimaduras</h2>
            
            <div class="protocol-section">
                <h3>Classificação</h3>
                <ul>
                    <li><strong>1º grau:</strong> vermelhidão, sem bolhas</li>
                    <li><strong>2º grau:</strong> bolhas, dor forte</li>
                    <li><strong>3º grau:</strong> pele esbranquiçada ou carbonizada</li>
                </ul>
                <h3>Primeiros Socorros</h3>
                <ul>
                    <li>Resfrie com água corrente por 10-20 minutos</li>
                    <li>Não estoure bolhas</li>
                    <li>Não aplique gelo diretamente</li>
                </ul>
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Pomada de açafrão, camomila e mel (2-3x ao dia)</li>
                    <li>Gel de babosa para queimaduras leves</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produtos recomendados:</strong> Gel de Babosa</p>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["queimadura", "fogo", "bolha", "pomada", "babosa"]
    },
    
    // 75. Queimaduras de Taturana / Lagartas
    {
        id: 75,
        titulo: "Queimaduras de Taturanas / Lagartas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Queimaduras de Taturanas / Lagartas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar pasta de carvão ativado sobre a queimadura</li>
                    <li>Tomar meia colher de carvão em meio copo d'água</li>
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
        palavrasChave: ["taturana", "lagarta", "queimadura", "carvão ativado"]
    },
    
    // 76. RCP (Ressuscitação Cardiopulmonar)
    {
        id: 76,
        titulo: "RCP (Ressuscitação Cardiopulmonar)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>RCP (Ressuscitação Cardiopulmonar)</h2>
            
            <div class="protocol-section">
                <h3>PROCEDIMENTO DE EMERGÊNCIA</h3>
                <ul>
                    <li><strong>1.</strong> Verifique consciência e respiração</li>
                    <li><strong>2.</strong> Chame ajuda (192)</li>
                    <li><strong>3.</strong> Inicie compressões: 30 compressões / 2 ventilações</li>
                    <li><strong>Frequência:</strong> 100-120 compressões/minuto</li>
                    <li><strong>Profundidade:</strong> 5-6 cm (adultos)</li>
                    <li>Continue até ajuda chegar ou a vítima reagir</li>
                </ul>
                <h3>Tempos Críticos</h3>
                <ul>
                    <li>0-4 min: danos reversíveis</li>
                    <li>4-6 min: possível dano cerebral</li>
                    <li>6-10 min: danos cerebrais prováveis</li>
                </ul>
            </div>
        `,
        palavrasChave: ["rcp", "ressuscitação", "massagem cardíaca", "parada", "compressão"]
    },
    
    // 77. Rinite
    {
        id: 77,
        titulo: "Rinite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Rinite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Inalação: respirar o vapor de água quente com chá de orégano, hortelã, eucalipto ou camomila diariamente por 60 dias</li>
                    <li>Usar a "Penicilina Russa" (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["rinite", "alergia", "nariz", "espirro", "inalação"]
    },
    
    // 78. Sinusite
    {
        id: 78,
        titulo: "Sinusite",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Sinusite</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de cebola na sola dos pés (durante a noite)</li>
                    <li>Xarope de cebola e mel</li>
                    <li>Usar "Penicilina Russa" (Farmácia Natural)</li>
                    <li>Inalação com chá de orégano, hortelã, camomila ou eucalipto</li>
                </ul>
            </div>
        `,
        palavrasChave: ["sinusite", "cabeça", "dor facial", "cebola", "inalação"]
    },
    
    // 79. Taquicardia
    {
        id: 79,
        titulo: "Taquicardia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Taquicardia</h2>
            
            <div class="protocol-section">
                <h3>Sintomas</h3>
                <ul>
                    <li>Coração acelerado (>100 bpm em repouso)</li>
                    <li>Falta de ar, tontura, desconforto no peito</li>
                </ul>
                <h3>Primeiras Medidas</h3>
                <ul>
                    <li>Sente-se ou deite-se</li>
                    <li>Respiração lenta e profunda</li>
                    <li>Mergulhe o rosto em água fria</li>
                </ul>
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Colocar os cotovelos em uma bacia com água fria por 3-5 minutos</li>
                </ul>
            </div>
        `,
        palavrasChave: ["taquicardia", "coração acelerado", "palpitação"]
    },
    
    // 80. Tireóide
    {
        id: 80,
        titulo: "Tireóide",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Tireóide</h2>
            
            <div class="protocol-section">
                <h3>Hipotireoidismo (Baixa produção)</h3>
                <ul>
                    <li>Aplicar cataplasma de pimenta caiena sobre a tireóide (pescoço) para estimular sua função</li>
                    <li>Colocar um pouco de azeite em um papel toalha, polvilhar meia colher de chá de pimenta caiena e aplicar</li>
                </ul>
                <h3>Hipertireoidismo (Excesso de produção)</h3>
                <ul>
                    <li>Aplicar compressa de gelo sobre a tireóide para desacelerar sua função</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Pimenta Caiena | Bolsa de Gelo</p>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:8px 20px; border-radius:50px; text-decoration:none; font-weight:bold;">
                        🛒 PIMENTA CAIENA
                    </a>
                    <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#2E7D32; color:white; padding:8px 20px; border-radius:50px; text-decoration:none; font-weight:bold;">
                        ❄️ BOLSA DE GELO
                    </a>
                </div>
            </div>
        `,
        palavrasChave: ["tireóide", "hipotireoidismo", "hipertireoidismo", "pimenta caiena"]
    },
    
    // 81. Tosse persistente
    {
        id: 81,
        titulo: "Tosse persistente",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Tosse persistente</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de cebola na sola dos pés (durante a noite)</li>
                    <li>Xarope de cebola e mel</li>
                </ul>
            </div>
        `,
        palavrasChave: ["tosse", "persistente", "xarope", "cebola", "mel"]
    },
    
    // 82. Trauma craniano
    {
        id: 82,
        titulo: "Trauma Craniano (Batida forte na cabeça)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Trauma Craniano (Batida forte na cabeça)</h2>
            
            <div class="protocol-section">
                <h3>Sinais de alerta</h3>
                <ul>
                    <li>Dor de cabeça intensa</li>
                    <li>Sangramento no couro cabeludo, nariz ou ouvidos</li>
                    <li>Náusea e vômito</li>
                    <li>Sonolência ou confusão mental</li>
                    <li>Convulsões</li>
                </ul>
                <h3>O que fazer</h3>
                <ul>
                    <li>Acione imediatamente o SAMU (192)</li>
                    <li>Mantenha a vítima deitada e imóvel</li>
                    <li>Se houver sangramento, comprima levemente com pano limpo</li>
                </ul>
            </div>
            
            <!-- PRODUTO RECOMENDADO -->
            <div style="margin-top:30px; padding:15px; background:#f5f5f5; border-radius:10px; border-left:4px solid #C62828;">
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Colar Cervical Inflável</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["trauma craniano", "cabeça", "batida", "concussão"]
    },
    
    // 83. Tuberculose
    {
        id: 83,
        titulo: "Tuberculose",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Tuberculose</h2>
            
            <div class="protocol-section">
                <p>A tuberculose é uma doença infecciosa causada pela bactéria Mycobacterium tuberculosis, que afeta principalmente os pulmões. O tratamento médico é obrigatório.</p>
                
                <h3>Tratamento Natural Complementar</h3>
                <ul>
                    <li>Tomar a "Penicilina Russa" (Ver na Seção Farmácia Natural)</li>
                    <li>Inalação com chá de eucalipto e hortelã</li>
                    <li>Alimentação rica em vitamina C e zinco</li>
                </ul>
                <p><strong>Importante:</strong> O tratamento convencional com antibióticos deve ser seguido rigorosamente.</p>
            </div>
        `,
        palavrasChave: ["tuberculose", "pulmão", "tosse", "bactéria", "penicilina russa"]
    },
    
    // 84. Úlcera Estomacal
    {
        id: 84,
        titulo: "Úlcera Estomacal",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Úlcera Estomacal</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Tomar pimenta caiena em pó (começar com 1/4 de colher de chá AO DIA, aumentar gradualmente até 1/2 colher de chá)</li>
                    <li>Misturar em água e beber</li>
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
        palavrasChave: ["úlcera", "estômago", "gastrite", "pimenta caiena"]
    },
    
    // 85. Unhas Encravadas
    {
        id: 85,
        titulo: "Unhas Encravadas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Unhas Encravadas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar pasta de inhame e gengibre (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["unha encravada", "dedo", "inflamação", "inhame", "gengibre"]
    },
    
    // 86. Vermes
    {
        id: 86,
        titulo: "Vermes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Vermes</h2>
            
            <div class="protocol-section">
                <h3>Desparasitação Natural</h3>
                <ul>
                    <li>2 cenouras</li>
                    <li>1 xícara de semente de mamão</li>
                    <li>1 xícara de semente de abóbora</li>
                    <li>1 xícara de coco ralado</li>
                    <li>1 cabeça de alho roxo</li>
                </ul>
                <p>Bater tudo no liquidificador até virar um creme, guardar num vidro com tampa na geladeira.</p>
                <p>Tomar uma colher de sopa duas vezes ao dia por 7 dias, descansa 7 e repete mais 7.</p>
                <p><strong>Ideal:</strong> Tomar na fase da Lua minguante, nessa fase ocorre a desova dos vermes.</p>
            </div>
        `,
        palavrasChave: ["vermes", "parasitas", "desparasitação", "semente de abóbora", "alho"]
    },
    
    // 87. Varizes
    {
        id: 87,
        titulo: "Varizes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Varizes</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais</h3>
                <ul>
                    <li>Pegue tomate verde e corte ao meio. Aplique sobre as varizes e deixe agir por 5 minutos. 1-2 vezes ao dia durante 10 dias.</li>
                    <li>Chá de folha da uva: 1 litro de água para 7 folhas. Tomar uma xícara 3x ao dia.</li>
                    <li>Banhar as pernas com chá de folhas de sinamomo.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["varizes", "pernas", "circulação", "tomate", "uva"]
    },
    
    // 88. Zika Virus
    {
        id: 88,
        titulo: "Zika Virus",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Zika Virus</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Usar o <strong>ANTIBIÓTICO NATURAL</strong> (Ver na Seção Farmácia Natural)</li>
                </ul>
            </div>
        `,
        palavrasChave: ["zika", "vírus", "febre", "antibiótico natural"]
    }
];

// =====================================
// SEÇÃO: KITS DE EMERGÊNCIA (PRODUTOS RECOMENDADOS)
// =====================================

topicos.push({
    id: 89,
    titulo: "Kits de Emergência - Produtos Recomendados",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>🛒 Produtos Recomendados</h2>
        
        <div class="protocol-section">
            <p>Selecionamos os melhores produtos para você se preparar para emergências. Clique nos links abaixo e compre com segurança.</p>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>📖 Guia de Sobrevivência na Natureza</strong></p>
            <a href="https://sites.google.com/view/07store/livros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>📖 Livro Intestino</strong></p>
            <a href="https://sites.google.com/view/07store/livros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🎒 Kit de sobrevivência trekking</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🧶 Paracord</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🌡️ Cobertor manta térmica aluminizado</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>📻 Par de Walk Talk</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>💧 Filtro de água portátil</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🧪 Carvão Ativado</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🪨 Dolomita em pó</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🌿 Açafrão</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>😊 Farinha da Felicidade</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🔥 Pimenta caiena</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🏺 Filtro de barro</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🥤 Soro isotônico repositor</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>💚 Gel de babosa</strong></p>
            <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🩹 Kit básico de primeiros socorros</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🫁 Desengasgador</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🦷 Colar cervical inflável</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>👜 Bolsa de primeiros socorros pequena</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🦵 Tornozeleira ortopédica</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>💊 Pomada Calminex</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🎒 Mochila kit sobrevivência</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
    `,
    palavrasChave: ["kits", "emergência", "sobrevivência", "produtos", "recomendados"]
});

// =====================================
// FUNÇÕES DO APP (NÃO MEXER)
// =====================================
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
        (topico.palavrasChave && topico.palavrasChave.some(palavra => 
            palavra.toLowerCase().includes(filtro.toLowerCase())
        ))
    );

    if (topicosFiltrados.length === 0) {
        topicsList.innerHTML = '<div class="no-results">Nenhum tópico encontrado</div>';
        return;
    }

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

    if (topicosFiltrados.length === 0) {
        topicsList.innerHTML = '<div class="no-results">Nenhum tópico encontrado com a letra ' + letra + '</div>';
        return;
    }

    topicosFiltrados.forEach(topico => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.innerHTML = `<h3>${topico.titulo}</h3>`;
        div.onclick = () => mostrarProtocolo(topico.id);
        topicsList.appendChild(div);
    });

    topicsList.scrollIntoView({ behavior: 'smooth' });
}

function configurarBusca() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            carregarListaTopicos(e.target.value);
        });
    }
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

// Funções para o menu principal
function mostrarIntroducao() {
    const content = document.getElementById('protocolContent');
    content.innerHTML = `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Introdução</h2>
        
        <div class="protocol-section">
            <p>Bem-vindo ao aplicativo <strong>Primeiros Socorros - Métodos Normais e Naturais</strong>.</p>
            <p>Este guia foi desenvolvido para fornecer instruções rápidas e claras sobre como agir em situações de emergência.</p>
        </div>

        <div class="protocol-section">
            <h3>📌 Objetivo</h3>
            <p>Oferecer informações confiáveis para que qualquer pessoa possa prestar primeiros atendimentos enquanto aguarda ajuda profissional.</p>
        </div>

        <div class="protocol-section">
            <h3>📞 Telefones de Emergência</h3>
            <ul>
                <li><strong>Samu:</strong> 192</li>
                <li><strong>Bombeiros:</strong> 193</li>
                <li><strong>Polícia:</strong> 190</li>
            </ul>
        </div>
    `;
    
    document.getElementById('topicsContainer').style.display = 'none';
    content.style.display = 'block';
}

function mostrarImportante() {
    const content = document.getElementById('protocolContent');
    content.innerHTML = `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Importante Saber</h2>
        
        <div class="protocol-section">
            <h3>🔴 Antes de tudo, lembre-se:</h3>
            <ul>
                <li><strong>Não entre em pânico</strong> – A calma é essencial.</li>
                <li><strong>Verifique a segurança do local</strong> – Não se torne mais uma vítima.</li>
                <li><strong>Peça ajuda</strong> – Ligue 192 ou 193.</li>
            </ul>
        </div>

        <div class="protocol-section">
            <h3>📋 Avaliação Inicial (ABCDE)</h3>
            <ul>
                <li><strong>A</strong> – Vias aéreas</li>
                <li><strong>B</strong> – Respiração</li>
                <li><strong>C</strong> – Circulação</li>
                <li><strong>D</strong> – Neurológico</li>
                <li><strong>E</strong> – Exposição</li>
            </ul>
        </div>
    `;
    
    document.getElementById('topicsContainer').style.display = 'none';
    content.style.display = 'block';
}

function mostrarIndice() {
    document.getElementById('topicsContainer').style.display = 'block';
    document.getElementById('protocolContent').style.display = 'none';
    document.getElementById('topicsList').scrollIntoView({ behavior: 'smooth' });
}

// Lógica do botão PWA (instalação)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const pwaButton = document.getElementById('pwaInstallButton');
    if (pwaButton) pwaButton.style.display = 'block';
});

document.addEventListener('click', (e) => {
    if (e.target.closest('#pwaInstallButton')) {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt = null;
        document.getElementById('pwaInstallButton').style.display = 'none';
    }
});

// Inicializar app
document.addEventListener('DOMContentLoaded', initApp);
