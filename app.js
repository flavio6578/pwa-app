// =====================================
// DADOS DOS PROTOCOLOS DE PRIMEIROS SOCORROS
// =====================================
const topicos = [
    // PROTOCOLO 1 - Primeiros socorros – Método convencional e Natural
    {
        id: 1,
        titulo: "Primeiros socorros – Método convencional e Natural",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Primeiros socorros – Método convencional e Natural</h2>
            
            <div class="protocol-section">
                <h3>Bem-vindo ao Guia Prático de Primeiros Socorros</h3>
                <p>Na cidade ou em ambientes remotos, longe de hospitais e recursos médicos imediatos, saber como agir em situações de emergência pode fazer toda a diferença. Este guia foi criado para capacitar você a lidar com imprevistos de saúde utilizando tanto um <strong>kit de primeiros socorros convencional</strong> quanto <strong>recursos naturais e acessíveis</strong>, como água, chás, compressas e outros meios que a natureza oferece.</p>
                <p>Aqui, você encontrará técnicas simples e eficazes para tratar ferimentos, aliviar dores, controlar reações alérgicas e até mesmo estabilizar condições mais graves enquanto espera por ajuda profissional. Nosso objetivo é unir o <strong>conhecimento tradicional dos primeiros socorros</strong> com <strong>alternativas sustentáveis</strong> e fáceis de implementar, especialmente útil para quem precisa se virar longe da infraestrutura urbana.</p>
            </div>
            
            <div class="protocol-section">
                <div class="aviso-importante" style="background:#fff3f3; padding:15px; border-left:5px solid #c62828; margin:15px 0;">
                    <p><strong>⚠️ ATENÇÃO:</strong> As informações contidas neste material são para fins educativos e de apoio geral. Elas não substituem de forma alguma o diagnóstico, aconselhamento ou tratamento médico profissional. Em caso de emergência médica, se for possível, ligue imediatamente para o serviço de emergência (192) e siga os protocolos de primeiros socorros convencionais.</p>
                </div>
            </div>
            
            <div class="protocol-section">
                <h3>Como Avaliar uma Situação de Emergência no Campo</h3>
                <p>Em uma situação de emergência, manter a calma e agir de forma rápida e organizada é essencial. Siga estas etapas:</p>
                <h4>1. Garanta a Segurança do Local</h4>
                <ul>
                    <li>Verifique se não há riscos imediatos, como animais perigosos, incêndios, desmoronamentos.</li>
                    <li>Se necessário, mova a vítima para um local seguro, mas só faça isso se não houver risco de agravar lesões.</li>
                </ul>
                <h4>2. Verifique o Estado da Vítima</h4>
                <ul>
                    <li><strong>Consciência:</strong> Chame a pessoa e observe se ela responde.</li>
                    <li><strong>Respiração:</strong> Observe se o peito está movimentando.</li>
                    <li><strong>Sinais de Sangramento ou Traumas Visíveis:</strong> Identifique ferimentos, fraturas ou queimaduras.</li>
                </ul>
                <h4>3. Priorize os Cuidados</h4>
                <ul>
                    <li>Se a vítima não estiver respirando, inicie RCP ou busque ajuda imediatamente.</li>
                    <li>Controle sangramentos graves com compressão direta.</li>
                    <li>Imobilize fraturas ou lesões suspeitas.</li>
                </ul>
                <h4>4. Use Recursos Disponíveis</h4>
                <ul>
                    <li><strong>Compressas frias:</strong> Use água gelada para inchaços.</li>
                    <li><strong>Ataduras improvisadas:</strong> Use roupas limpas.</li>
                </ul>
                <h4>5. Busque Ajuda Profissional</h4>
                <p><em>Lembre-se: agir com rapidez e clareza pode salvar vidas.</em></p>
            </div>
        `,
        palavrasChave: ["primeiros socorros", "introdução", "guia prático", "avaliação"]
    },
    
    // PROTOCOLO 2 - Abscessos
    {
        id: 2,
        titulo: "Abscessos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Abscessos</h2>
            
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
    
    // PROTOCOLO 3 - Afogamento
    {
        id: 3,
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
    
    // PROTOCOLO 4 - Alergias
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
    
    // PROTOCOLO 5 - Ansiedade
    {
        id: 5,
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
    
    // PROTOCOLO 6 - Asma
    {
        id: 6,
        titulo: "Asma / Bronquite asmática",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Asma / Bronquite asmática</h2>
            
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
    
    // PROTOCOLO 7 - Ataque Cardíaco
    {
        id: 7,
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
    
    // PROTOCOLO 8 - AVC
    {
        id: 8,
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
    
    // PROTOCOLO 9 - Choque Elétrico
    {
        id: 9,
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
    
    // PROTOCOLO 10 - Conjuntivite
    {
        id: 10,
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
    
    // PROTOCOLO 11 - Convulsão
    {
        id: 11,
        titulo: "Convulsão (Ataque epilético)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Convulsão (Ataque epilético)</h2>
            
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
    
    // PROTOCOLO 12 - Corpos Estranhos
    {
        id: 12,
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
    
    // PROTOCOLO 13 - Cortes / Sangramento
    {
        id: 13,
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
    
    // PROTOCOLO 14 - Desidratação / Insolação
    {
        id: 14,
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
                <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold; margin-right:10px;">
                    🛒 EQUIPAMENTOS
                </a>
                <a href="https://sites.google.com/view/07store/naturais" target="_blank" style="display:inline-block; background:#2E7D32; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🌿 NATURAIS
                </a>
            </div>
        `,
        palavrasChave: ["desidratação", "insolação", "calor", "hidratação", "soro"]
    },
    
    // PROTOCOLO 15 - Desmaio
    {
        id: 15,
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
    },
    
    // PROTOCOLO 16 - Diarréia
    {
        id: 16,
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
    
    // PROTOCOLO 17 - Falta de ar
    {
        id: 17,
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
    
    // PROTOCOLO 18 - Dor de Dentes
    {
        id: 18,
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
    
    // PROTOCOLO 19 - Dor de Garganta
    {
        id: 19,
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
    
    // PROTOCOLO 20 - Dor Muscular
    {
        id: 20,
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
                <p style="margin-bottom:10px;"><strong>📦 Produto recomendado:</strong> Pomada Calminex (contusões)</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["dor muscular", "torcicolo", "músculo", "repolho", "gengibre"]
    }
];
