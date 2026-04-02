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
    },
    // PROTOCOLO 21 - Dor de Ouvido
    {
        id: 21,
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
    
    // PROTOCOLO 22 - Embriaguez / Alcoolismo
    {
        id: 22,
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
    
    // PROTOCOLO 23 - Engasgo em Adultos
    {
        id: 23,
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
    
    // PROTOCOLO 24 - Engasgo em Crianças
    {
        id: 24,
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
    
    // PROTOCOLO 25 - Entorse / Luxações
    {
        id: 25,
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
    
    // PROTOCOLO 26 - Farpas / Corpos estranhos na pele
    {
        id: 26,
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
    
    // PROTOCOLO 27 - Febre alta
    {
        id: 27,
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
    
    // PROTOCOLO 28 - Feridas
    {
        id: 28,
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
    
    // PROTOCOLO 29 - Ferimento com prego enferrujado
    {
        id: 29,
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
    
    // PROTOCOLO 30 - Fraturas
    {
        id: 30,
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
                <p style="margin-bottom:10px;"><strong>📦 Produtos recomendados:</strong> Colar Cervical | Tornozeleira Ortopédica</p>
                <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                    🛒 COMPRE AQUI
                </a>
            </div>
        `,
        palavrasChave: ["fratura", "osso quebrado", "imobilizar", "tala"]
    },
    
    // PROTOCOLO 31 - Furúnculos
    {
        id: 31,
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
    
    // PROTOCOLO 32 - Hemorróidas
    {
        id: 32,
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
    
    // PROTOCOLO 33 - Hipotermia
    {
        id: 33,
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
    
    // PROTOCOLO 34 - Intoxicação
    {
        id: 34,
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
    
    // PROTOCOLO 35 - Mordida de cachorro ou gato
    {
        id: 35,
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
    
    // PROTOCOLO 36 - Náuseas
    {
        id: 36,
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
    
    // PROTOCOLO 37 - Parada Cardíaca
    {
        id: 37,
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
    
    // PROTOCOLO 38 - Pedra nos Rins
    {
        id: 38,
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
    
    // PROTOCOLO 39 - Pedra na Vesícula
    {
        id: 39,
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
    
    // PROTOCOLO 40 - Picada de Abelhas
    {
        id: 40,
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
    }
];
    // PROTOCOLO 41 - Picada de Aranha
    {
        id: 41,
        titulo: "Picada de Aranha",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Aranha</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Cataplasma de carvão ativado com água</li>
                    <li>Para aranhas muito venenosas: usar pomada de açafrão, camomila e mel</li>
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
        palavrasChave: ["picada de aranha", "aranha", "veneno", "carvão ativado"]
    },
    
    // PROTOCOLO 42 - Picada de Cobra
    {
        id: 42,
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
    
    // PROTOCOLO 43 - Picada de Escorpião
    {
        id: 43,
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
    
    // PROTOCOLO 44 - Pneumonia
    {
        id: 44,
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
    
    // PROTOCOLO 45 - Pressão Alta ou Baixa
    {
        id: 45,
        titulo: "Pressão Alta ou Baixa",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pressão Alta ou Baixa</h2>
            
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
    
    // PROTOCOLO 46 - Prisão de Ventre
    {
        id: 46,
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
    
    // PROTOCOLO 47 - Queimaduras
    {
        id: 47,
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
    
    // PROTOCOLO 48 - Queimaduras de Taturanas
    {
        id: 48,
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
    
    // PROTOCOLO 49 - RCP
    {
        id: 49,
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
    
    // PROTOCOLO 50 - Depressão
    {
        id: 50,
        titulo: "Depressão",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Depressão</h2>
            
            <div class="protocol-section">
                <p>A depressão é um transtorno de humor grave e comum, caracterizado por tristeza profunda, perda de interesse e energia reduzida, durando pelo menos duas semanas.</p>
                
                <h3>📋 Principais Sintomas</h3>
                <ul>
                    <li><strong>Humor Deprimido:</strong> Tristeza profunda, desesperança</li>
                    <li><strong>Anedonia:</strong> Perda de prazer em atividades que antes eram agradáveis</li>
                    <li><strong>Fadiga:</strong> Cansaço excessivo e falta de energia</li>
                    <li><strong>Alterações no Sono:</strong> Insônia ou excesso de sono</li>
                    <li><strong>Alterações de Peso:</strong> Perda ou ganho significativo</li>
                    <li><strong>Baixa Autoestima:</strong> Culpa excessiva, inutilidade</li>
                    <li><strong>Dificuldade Cognitiva:</strong> Problemas de concentração e memória</li>
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
    }
];

// =====================================
// SEÇÃO: KITS DE EMERGÊNCIA (PRODUTOS)
// =====================================

// PRODUTOS RECOMENDADOS NA SEÇÃO KITS
topicos.push({
    id: 51,
    titulo: "Kits de Emergência - Produtos Recomendados",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>🛒 Produtos Recomendados</h2>
        
        <div class="protocol-section">
            <p>Selecionamos os melhores produtos para você se preparar para emergências. Clique nos links abaixo e compre com segurança.</p>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🎒 Kit de sobrevivência trekking</strong></p>
            <a href="https://sites.google.com/view/07store/equipamentos" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
        
        <div style="margin-top:20px; padding:15px; background:#f5f5f5; border-radius:10px; margin-bottom:15px;">
            <p><strong>🧰 Kit básico de primeiros socorros</strong></p>
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
            <p><strong>🎒 Mochila kit sobrevivência</strong></p>
            <a href="https://sites.google.com/view/07store/primeiros-socorros" target="_blank" style="display:inline-block; background:#C62828; color:white; padding:10px 25px; border-radius:50px; text-decoration:none; font-weight:bold;">
                🛒 COMPRE AQUI
            </a>
        </div>
    `,
    palavrasChave: ["kits", "emergência", "sobrevivência", "mochila", "bolsa"]
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
