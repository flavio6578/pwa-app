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
                <p>Na cidade ou em ambientes remotos, longe de hospitais e recursos médicos imediatos, saber como agir em situações de emergência pode fazer toda a diferença. Este e-book foi criado para capacitar você a lidar com imprevistos de saúde utilizando tanto um <strong>kit de primeiros socorros convencional</strong> quanto <strong>recursos naturais e acessíveis</strong>, como água, chás, compressas e outros meios que a natureza oferece.</p>
                <p>Aqui, você encontrará técnicas simples e eficazes para tratar ferimentos, aliviar dores, controlar reações alérgicas e até mesmo estabilizar condições mais graves enquanto espera por ajuda profissional. Nosso objetivo é unir o <strong>conhecimento tradicional dos primeiros socorros</strong> com <strong>alternativas sustentáveis</strong> e fáceis de implementar, na cidade e especialmente útil para excursionistas, campistas, agricultores e qualquer pessoa que precise se virar longe da infraestrutura urbana.</p>
                <p>Prepare-se para aprender como transformar itens comuns em ferramentas de emergência e como agir com segurança e confiança diante de imprevistos. Vamos começar essa jornada rumo à autossuficiência em primeiros socorros!</p>
            </div>
            
            <div class="protocol-section">
                <div class="aviso-importante" style="background:#fff3f3; padding:15px; border-left:5px solid #c62828; margin:15px 0;">
                    <p><strong>⚠️ ATENÇÃO:</strong> As informações contidas neste material são para fins educativos e de apoio geral. Elas não substituem de forma alguma o diagnóstico, aconselhamento ou tratamento médico profissional. Em caso de emergência médica, se for possível, ligue imediatamente para o serviço de emergência (192) e siga os protocolos de primeiros socorros convencionais. Nunca interrompa ou substitua um tratamento médico prescrito sem orientação expressa do seu médico.</p>
                </div>
            </div>
            
            <h2>Importante saber antes de tudo: leia com atenção</h2>
            
            <div class="protocol-section">
                <h3>Como Avaliar uma Situação de Emergência no Campo</h3>
                <p>Em uma situação de emergência, manter a calma e agir de forma rápida e organizada é essencial. Siga estas etapas para avaliar o cenário com segurança:</p>
                
                <h4>1. Garanta a Segurança do Local</h4>
                <ul>
                    <li>Verifique se não há riscos imediatos, como animais perigosos, incêndios, desmoronamentos ou outros perigos ambientais.</li>
                    <li>Se necessário, mova a vítima para um local seguro, mas só faça isso se não houver risco de agravar lesões (especialmente em casos de suspeita de fraturas ou trauma na coluna).</li>
                </ul>
                
                <h4>2. Verifique o Estado da Vítima</h4>
                <ul>
                    <li><strong>Consciência:</strong> Chame a pessoa e observe se ela responde. Se não houver reação, pode ser uma emergência grave (como desmaio, parada cardíaca ou choque).</li>
                    <li><strong>Respiração:</strong> Observe se o peito está movimentando e se há sinais de respiração normal.</li>
                    <li><strong>Sinais de Sangramento ou Traumas Visíveis:</strong> Identifique ferimentos, fraturas ou queimaduras que precisem de atenção imediata.</li>
                </ul>
                
                <h4>3. Priorize os Cuidados</h4>
                <ul>
                    <li>Se a vítima não estiver respirando, inicie RCP (Procure na Seção RCP) ou busque ajuda imediatamente.</li>
                    <li>Controle sangramentos graves com compressão direta (usando um pano limpo ou suas mãos, se necessário).</li>
                    <li>Imobilize fraturas ou lesões suspeitas para evitar movimentos perigosos.</li>
                </ul>
                
                <h4>4. Use Recursos Disponíveis</h4>
                <p>Se não tiver um kit de primeiros socorros, improvise com o que estiver à mão:</p>
                <ul>
                    <li><strong>Compressas frias:</strong> Use água gelada ou um pano umedecido para inchaços e queimaduras.</li>
                    <li><strong>Ataduras improvisadas:</strong> Use roupas limpas ou panos para cobrir ferimentos.</li>
                </ul>
                
                <h4>5. Busque Ajuda Profissional</h4>
                <ul>
                    <li>Se a situação for grave (como falta de ar intensa, sangramento incontrolável ou suspeita de envenenamento), tente contatar resgate ou transporte médico o mais rápido possível.</li>
                </ul>
                <p><em>Lembre-se: agir com rapidez e clareza pode salvar vidas, mas nunca coloque sua própria segurança em risco.</em></p>
            </div>
            
            <div class="protocol-section">
                <h3>Transporte de Feridos no Campo: Resumo Baseado em Manuais de Primeiros Socorros</h3>
                <p>Em situações de emergência no campo, o transporte inadequado de uma vítima pode agravar lesões, especialmente em casos de trauma na coluna, fraturas ou hemorragias internas. Manuais como os da Fiocruz e de autores como Cássia Oliveira Lopes destacam princípios essenciais para mover um ferido com segurança quando o socorro profissional está distante.</p>
                
                <h4>1. Quando Transportar (e Quando Não Transportar)</h4>
                <p><strong>NÃO mova a vítima se:</strong></p>
                <ul>
                    <li>Houver suspeita de fratura na coluna (queda de altura, acidente grave).</li>
                    <li>Ela estiver consciente mas com dor intensa no pescoço ou costas.</li>
                    <li>O transporte improvisado puder piorar sangramentos ou lesões.</li>
                </ul>
                <p><strong>Mova apenas se:</strong></p>
                <ul>
                    <li>O local for perigoso (incêndio, enchente, risco de desabamento).</li>
                    <li>Não houver como pedir socorro e for necessário buscar ajuda.</li>
                </ul>
                
                <h4>2. Técnicas de Transporte no Campo (Improvisadas)</h4>
                <ul>
                    <li><strong>Maca improvisada:</strong> Use materiais que conseguir para fazer o transporte da vítima. Mais detalhes no próximo capítulo.</li>
                </ul>
                
                <h4>3. Cuidados Durante o Transporte</h4>
                <ul>
                    <li><strong>Fraturas:</strong> Imobilize com talas improvisadas (galhos, revistas enroladas, tiras de pano).</li>
                    <li><strong>Sangramentos:</strong> Mantenha pressão sobre o ferimento durante o movimento.</li>
                    <li><strong>Choque:</strong> Mantenha a vítima aquecida (use cobertores ou folhas secas) e eleve os pés (se não houver fraturas).</li>
                </ul>
                
                <h4>4. Alternativas Naturais para Estabilização</h4>
                <ul>
                    <li><strong>Ataduras:</strong> Use cipó flexível, tiras de casca de árvore ou cordas de fibra natural (evite apertar demais).</li>
                    <li><strong>Talas:</strong> Bambu, galhos retos ou até palhas de milho envoltas em pano para amortecer.</li>
                </ul>
                
                <h4>5. Quando Parar e Esperar Socorro</h4>
                <p>Se a vítima estiver estável, mas o transporte for arriscado (ex.: trilha íngreme, escuridão), é melhor:</p>
                <ul>
                    <li>Sinalizar o local (fogueira, panos coloridos, espelho refletindo luz).</li>
                    <li>Manter a vítima hidratada (ofereça água ou chás calmantes, como camomila). Em caso de suspeita de hemorragia interna, não dê líquidos.</li>
                </ul>
                <p><em>No campo, o transporte de feridos deve ser a última opção. Priorize a estabilização no local e só mova a vítima se for absolutamente necessário. Improvise com segurança, usando materiais naturais e evitando movimentos bruscos.</em></p>
            </div>
            
            <div class="protocol-section">
                <h3>Transporte de Feridos - Macas Improvisadas</h3>
                
                <h4>(A) Maca Rígida (Com Galhos e Tecido)</h4>
                <p><strong>Materiais necessários:</strong></p>
                <ul>
                    <li>2 galhos retos e resistentes (2m de comprimento, 5cm diâmetro).</li>
                    <li>Tecido resistente (casaco, lona, mochila aberta, rede ou capa de chuva).</li>
                </ul>
                <p><strong>Passo a passo:</strong></p>
                <ol>
                    <li>Posicione os galhos paralelamente (50–60 cm de distância).</li>
                    <li>Amarre o tecido entre eles (ex.: feche zíperes de casacos e prenda mangas nos galhos).</li>
                    <li>Teste a resistência antes de colocar a vítima.</li>
                </ol>
                <p><strong>Alternativas:</strong></p>
                <ul>
                    <li>Maca de corda/cipó: Entrelace em padrão de rede entre os galhos.</li>
                    <li>Maca com cobertor.</li>
                    <li>Maca de porta/tábua: Use madeira plana de abrigos próximos.</li>
                </ul>
                
                <h4>(B) Maca de Emergência (Sem Galhos)</h4>
                <p><strong>Métodos rápidos se não houver materiais rígidos:</strong></p>
                <ul>
                    <li>Arraste com lona/casaco: Deite a vítima sobre um tecido resistente e puxe.</li>
                    <li>Cadeirinha de mãos: Duas pessoas formam um "assento" entrelaçando braços (para vítimas conscientes).</li>
                    <li>Outros métodos: diversas técnicas de transporte improvisado.</li>
                    <li>Outra alternativa: Transporte em Canguru (Para Crianças ou Vítimas Leves) - Amarre a vítima às costas com lençol ou mochila adaptada.</li>
                </ul>
            </div>
            
            <!-- IMAGENS DO PROTOCOLO 1 -->
            <div class="protocol-section">
                <h3>📸 Imagens do Procedimento</h3>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem01.jpg" alt="Figura 01" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 01</strong> - Técnica de transporte com galhos</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem02.jpg" alt="Figura 02" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 02</strong> - Transporte em área remota</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem03.jpg" alt="Figura 03" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 03</strong> - Maca rígida com galhos e tecido</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem04.jpg" alt="Figura 04" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 04</strong> - Maca de corda/cipó entrelaçado</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem05.jpg" alt="Figura 05" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 05</strong> - Maca com cobertor</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem06.jpg" alt="Figura 06" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 06</strong> - Arraste com lona/casaco</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem07.jpg" alt="Figura 07" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 07</strong> - Cadeirinha de mãos</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem08.jpg" alt="Figura 08" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 08</strong> - Outros métodos de transporte (1)</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem09.jpg" alt="Figura 09" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 09</strong> - Outros métodos de transporte (2)</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo01-imagem10.jpg" alt="Figura 10" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 10</strong> - Transporte em Canguru</p>
                </div>
            </div>
        `,
        palavrasChave: ["primeiros socorros", "introdução", "guia prático", "avaliação", "transporte", "maca", "improvisado", "imagens"]
    },
    
    // PROTOCOLO 2 - Abscessos
    {
        id: 2,
        titulo: "Abscessos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Abscessos</h2>
            
            <div class="protocol-section">
                <p>Abscessos são coleções de pus que se formam em um espaço do tecido, geralmente devido a uma infecção bacteriana. Eles podem ocorrer em qualquer parte do corpo, mas são mais comuns na pele, axilas, virilha ou ao redor do ânus e dos dentes. Os sintomas incluem inchaço, vermelhidão, calor, dor local e sensibilidade; em casos mais profundos, podem ocorrer sintomas como febre.</p>
                
                <h3>Tratamento Natural</h3>
                <ul>
                    <li>Aplicar pasta de inhame e gengibre (Ver como fazer na Seção "Farmácia Natural")</li>
                </ul>
            </div>
        `,
        palavrasChave: ["abscesso", "pus", "infecção", "inchaço", "vermelhidão", "inhame", "gengibre"]
    },
    
    // PROTOCOLO 3 - Afogamento
    {
        id: 3,
        titulo: "Afogamento",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Afogamento</h2>
            
            <div class="protocol-section">
                <h3>Procedimentos imediatos</h3>
                
                <h4>1. Segurança em primeiro lugar</h4>
                <ul>
                    <li>Nunca entre na água sem segurança.</li>
                    <li>Se possível, jogue boias, cordas ou objetos que flutuem para a vítima.</li>
                    <li>Só entre na água se tiver treinamento ou se for absolutamente seguro.</li>
                </ul>
                
                <h4>2. Retirada da vítima da água</h4>
                <ul>
                    <li>Apoie sempre a cabeça e o pescoço, pois pode ter havido trauma.</li>
                    <li>Coloque a pessoa de barriga para cima em local seguro.</li>
                </ul>
                
                <h4>3. Verificar consciência e respiração</h4>
                <ul>
                    <li>Toque e chame a vítima.</li>
                    <li>Se não responder e não respirar normalmente, inicie reanimação.</li>
                </ul>
                
                <h4>4. Reanimação (RCP – ver em "Outros Procedimentos")</h4>
                <ul>
                    <li>Deite a vítima de costas em superfície firme.</li>
                    <li>Inicie compressões torácicas: 30 compressões + 2 ventilações.</li>
                    <li>Continue até a vítima respirar sozinha ou chegar ajuda médica.</li>
                </ul>
                
                <h4>5. Se a vítima estiver respirando, mas inconsciente</h4>
                <ul>
                    <li>Coloque-a de lado (posição lateral de segurança) para evitar aspiração de vômito.</li>
                    <li>Aqueça a pessoa com toalhas ou roupas secas.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>Abordagem natural complementar</h3>
                <p><em>Essas medidas não substituem os primeiros socorros convencionais, mas podem ajudar após a estabilização da vítima:</em></p>
                <ul>
                    <li>Massagem suave nos braços e pernas pode auxiliar na circulação e relaxamento.</li>
                    <li>Aquecimento natural: enrolar a vítima em cobertores secos ou utilizar calor corporal (abraço de outra pessoa) em casos de frio intenso.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>⚠️ Alertas importantes</h3>
                <ul>
                    <li>Sempre acione imediatamente o serviço de emergência (192 no Brasil).</li>
                    <li>Não tente "espremer água" do pulmão: isso é mito.</li>
                    <li>Afogamento pode causar complicações graves mesmo após a recuperação inicial. Leve a vítima ao hospital para avaliação.</li>
                    <li>Crianças devem ser observadas constantemente após qualquer episódio de afogamento, mesmo leve.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["afogamento", "afogar", "água", "afundar", "reanimação", "respiração", "parada"]
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
                    <li>Beber 400 ml de água por hora para reduzir a resposta imune exagerada.</li>
                    <li>Aplicar vinagre de maçã (de preferência orgânico) na pele para aliviar coceira.</li>
                    <li>Repetir o processo se necessário.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["alergia", "alérgico", "reação", "coceira", "urticária", "carvão ativado", "vinagre"]
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
                    <li>Afaste curiosos e reduza estímulos externos</li>
                    <li>Mantenha voz calma e baixa</li>
                </ul>
                
                <h4>2. Técnica de Grounding (Aterramento)</h4>
                <ul>
                    <li>Peça para a pessoa nomear <strong>5 coisas que pode ver</strong></li>
                    <li><strong>4 coisas que pode tocar</strong></li>
                    <li><strong>3 sons que pode ouvir</strong></li>
                    <li><strong>2 coisas que pode cheirar</strong></li>
                    <li><strong>1 coisa que pode saborear</strong></li>
                </ul>
                
                <h4>3. Controle Respiratório</h4>
                <ul>
                    <li>Incentive respiração lenta: 4 segundos inspirando, 7 segundos segurando, 8 segundos expirando</li>
                    <li>Use a técnica do quadrado: respirar seguindo os lados de um quadrado imaginário</li>
                </ul>
                
                <h4>4. Contato Físico Seguro</h4>
                <ul>
                    <li>Ofereça a mão para segurar (se a pessoa consentir)</li>
                    <li>Pressão firme nos ombros pode ajudar (com permissão)</li>
                </ul>
                
                <h4>5. Foco em Sensações Físicas</h4>
                <ul>
                    <li>Ofereça um copo de água fria para segurar</li>
                    <li>Pedir para descrever a sensação do copo na mão</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>ABORDAGEM NATURAL COMPLEMENTAR</h3>
                
                <h4>6. Chás Calmantes</h4>
                <ul>
                    <li>Chá de camomila (2 colheres de flores por xícara)</li>
                    <li>Chá de erva cidreira (folhas frescas ou secas)</li>
                    <li>Chá de passiflora (flor do maracujá)</li>
                </ul>
                
                <h4>7. Compressas</h4>
                <ul>
                    <li>Compressa fria na nuca e pulsos</li>
                    <li>Toalha úmida com água fria no rosto</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>TÉCNICAS COMPLEMENTARES</h3>
                
                <h4>9. Movimento Suave</h4>
                <ul>
                    <li>Caminhada bem lenta se a pessoa conseguir</li>
                    <li>Balanço suave do corpo sentado</li>
                </ul>
                
                <h4>10. Focalização Externa</h4>
                <ul>
                    <li>Contar elementos de uma paisagem ou foto</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>ALERTAS IMPORTANTES</h3>
                <ul>
                    <li>Nunca diga "acalma" ou "relaxa" – isso pode piorar</li>
                    <li>Não minimize o sofrimento da pessoa</li>
                    <li>Permaneça calmo – sua tranquilidade ajuda</li>
                    <li>Se houver dor no peito intensa, busque ajuda médica</li>
                    <li>Ataques podem durar de 5 a 30 minutos</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O QUE EVITAR</h3>
                <ul>
                    <li>Cafés, chás pretos, refrigerantes</li>
                    <li>Discussões ou assuntos estressantes</li>
                    <li>Ambientes lotados ou barulhentos</li>
                    <li>Pressão para que a pessoa "melhore rápido"</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>APÓS A CRISE</h3>
                <ul>
                    <li>Ofereça água em pequenos goles</li>
                    <li>Mantenha companhia por pelo menos 1 hora</li>
                    <li>Sugira repouso em local tranquilo</li>
                    <li>Observe se há necessidade de acompanhamento psicológico</li>
                </ul>
            </div>
        `,
        palavrasChave: ["ansiedade", "nervosismo", "pânico", "crise", "ataque", "respiração", "calma", "grounding"]
    },
    
    // PROTOCOLO 6 - Asma
    {
        id: 6,
        titulo: "Asma / Bronquite asmática",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Asma / Bronquite asmática</h2>
            
            <div class="protocol-section">
                <p>Doença inflamatória crônica das vias aéreas, que causa estreitamento e inchaço dos brônquios, dificultando a passagem do ar.</p>
                
                <h3>Principais Sintomas:</h3>
                <ul>
                    <li>Falta de ar (dispneia)</li>
                    <li>Chiado no peito (sibilos)</li>
                    <li>Tosse seca (especialmente à noite ou ao acordar)</li>
                    <li>Aperto ou dor no peito</li>
                </ul>
                
                <h3>Característica Crucial:</h3>
                <p>Os sintomas variam ao longo do tempo e em intensidade, frequentemente piorando à noite, ao acordar ou com gatilhos como exercício, alergenos ou frio.</p>
            </div>
            
            <div class="protocol-section">
                <h3>TRATAMENTO NATURAL</h3>
                <ol>
                    <li>Inalação: respirar o vapor de água quente com um dos seguintes chás: Orégano, Hortelã, Eucalipto ou camomila diariamente por 60 dias.</li>
                    <li>Usar a "Penicilina Russa" (Ver na Seção "Farmácia Natural")</li>
                </ol>
            </div>
        `,
        palavrasChave: ["asma", "bronquite", "falta de ar", "chiado", "tosse", "respiração", "inalação", "orégano", "eucalipto"]
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
                
                <h3>IDENTIFICAÇÃO DA PARADA – Checklist – Infarto (em outra pessoa)</h3>
                
                <h4>(1) Reconhecer os sinais</h4>
                <ul>
                    <li>Dor ou aperto no peito (irradia para braço, mandíbula, costas).</li>
                    <li>Falta de ar, suor frio, palidez.</li>
                    <li>Náusea, tontura, medo intenso.</li>
                </ul>
                
                <h4>(2) Chamar ajuda</h4>
                <ul>
                    <li>Ligue 192 (SAMU) ou 193 (Bombeiros).</li>
                    <li>Informe sintomas e localização exata.</li>
                </ul>
                
                <h4>(3) Manter repouso</h4>
                <ul>
                    <li>Colocar a vítima sentada ou semideitada, confortável.</li>
                    <li>Afrouxar roupas.</li>
                    <li>Evitar movimentos e esforço.</li>
                </ul>
                
                <h4>(4) Se estiver consciente</h4>
                <ul>
                    <li>Acalmar, falar com voz tranquila.</li>
                    <li>Não oferecer comida (apenas pequenos goles de água se pedir).</li>
                    <li>Se usar medicação prescrita (ex.: nitrato), auxiliar na tomada.</li>
                </ul>
                
                <h4>(5) Se perder a consciência</h4>
                <ul>
                    <li>Verificar respiração. Se não respira → PARADA CARDÍACA → RCP</li>
                    <li>30 compressões torácicas (centro do peito, ritmo firme).</li>
                    <li>2 ventilações (se souber aplicar).</li>
                    <li>Continuar 30:2 até socorro chegar.</li>
                </ul>
                
                <h4>(6) Suporte natural até ajuda chegar</h4>
                <ul>
                    <li>Ambiente arejado.</li>
                    <li>Compressa fria leve na testa/nuca.</li>
                    <li>Orientar respiração lenta (se consciente).</li>
                    <li>Palavras de encorajamento para reduzir ansiedade.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>SINAIS DE EFETIVIDADE</h3>
                <p><strong>Indicadores de Sucesso:</strong></p>
                <ul>
                    <li>Retorno da respiração espontânea</li>
                    <li>Recuperação do pulso</li>
                    <li>Movimentos voluntários</li>
                    <li>Tosse ou engasgo</li>
                </ul>
                
                <p><strong>Quando Parar a RCP:</strong></p>
                <ul>
                    <li>Quando a vítima recuperar sinais vitais</li>
                    <li>Quando chegar ajuda médica qualificada</li>
                    <li>Quando o socorrista estiver exausto</li>
                    <li>Após 30 minutos sem resposta (exceto em afogamento ou hipotermia)</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>Infarto – O que fazer se estiver sozinho</h3>
                
                <h4>Sinais de alerta</h4>
                <ul>
                    <li>Dor ou pressão intensa no peito.</li>
                    <li>Falta de ar.</li>
                    <li>Formigamento no braço esquerdo.</li>
                    <li>Dor na mandíbula.</li>
                    <li>Suor frio, tontura, medo súbito.</li>
                </ul>
                
                <h4>Técnicas de Emergência (até a ajuda chegar)</h4>
                <ol>
                    <li><strong>Tosse forçada:</strong> Inspire fundo, feche a boca e tussa com força a cada 2 segundos, por pelo menos 1 minuto. Isso comprime o tórax e pode ajudar o coração a retomar o ritmo.</li>
                    <li><strong>Golpe no centro do peito:</strong> Se não conseguir tossir, feche o punho e dê golpes firmes (5 a 6 vezes) no osso do peito (esterno).</li>
                    <li><strong>Pressão no ponto EGU (acupressão):</strong> Localizado entre o polegar e o indicador. Pressione forte por 5 segundos, solte por 2 segundos. Repita por 1 minuto, alternando as mãos.</li>
                </ol>
            </div>
            
            <div class="protocol-section">
                <h3>TRATAMENTO NATURAL (enquanto aguarda socorro)</h3>
                <ul>
                    <li>Fazer chá com 5-10 pimentas malaguetas socadas em 200 ml de água.</li>
                    <li>Adicionar suco de 3 limões.</li>
                    <li>Dar para a pessoa beber. Promove vasodilatação e melhora oxigenação do coração.</li>
                </ul>
                
                <h4>Opção 2</h4>
                <ul>
                    <li>Colocar meia colher de chá de pimenta caiena diretamente na boca do paciente.</li>
                    <li>O sangue afina rapidamente, os capilares se abrem e a circulação melhora em minutos.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["ataque cardíaco", "infarto", "coração", "dor no peito", "parada cardíaca", "rcp", "pimenta", "caiena"]
    },
    
    // PROTOCOLO 8 - AVC
    {
        id: 8,
        titulo: "AVC (Derrame cerebral)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>AVC (Derrame cerebral)</h2>
            
            <div class="protocol-section">
                <h3>IDENTIFICAÇÃO RÁPIDA – TESTE SAMU</h3>
                <ul>
                    <li><strong>S</strong> – Sorriso: Peça para a pessoa sorrir (um lado do rosto pode ficar paralisado)</li>
                    <li><strong>A</strong> – Abraço: Peça para levantar os dois braços (um braço pode cair)</li>
                    <li><strong>M</strong> – Mensagem: Peça para repetir uma frase simples (fala pode sair enrolada)</li>
                    <li><strong>U</strong> – Urgência: Se algum desses sinais aparecer, é URGENTE!</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>PROCEDIMENTOS IMEDIATOS</h3>
                
                <h4>1. Ação Imediata</h4>
                <ul>
                    <li>Ligue IMEDIATAMENTE para o SAMU 192</li>
                    <li>Anote o horário em que os sintomas começaram (CRUCIAL para tratamento)</li>
                </ul>
                
                <h4>2. Posicionamento Seguro</h4>
                <ul>
                    <li>Deite a pessoa com a cabeça elevada a 30 graus</li>
                    <li>Se houver vômito, vire a cabeça para o lado</li>
                    <li>Afrouxe roupas apertadas</li>
                </ul>
                
                <h4>3. Monitoramento</h4>
                <ul>
                    <li>Verifique se a pessoa está consciente</li>
                    <li>Observe a respiração</li>
                    <li>Não ofereça comida, bebida ou medicamentos</li>
                </ul>
                
                <h4>4. Informações para o Socorro</h4>
                <ul>
                    <li>Diga aos paramédicos: "Suspeita de AVC"</li>
                    <li>Informe o horário do início dos sintomas</li>
                    <li>Liste medicamentos que a pessoa toma</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O QUE NÃO FAZER</h3>
                <ul>
                    <li>Não dê aspirina ou qualquer medicamento</li>
                    <li>Não ofereça alimentos ou bebidas</li>
                    <li>Não tente fazer a pessoa caminhar</li>
                    <li>Não espere para ver se os sintomas passam</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>URGENTE – Cada minuto conta!</h3>
                <p>Tratamento nas primeiras 4½ horas pode salvar vidas e reduzir sequelas. Se não puder chamar o SAMU, leve a vítima ao hospital o mais rápido possível.</p>
            </div>
            
            <div class="protocol-section">
                <h3>TRATAMENTOS DE URGÊNCIA NATURAL</h3>
                <ul>
                    <li>Colocar os pés em água quente.</li>
                    <li>Aplicar toalha gelada na cabeça (trocar sempre que esquentar).</li>
                    <li>Preparar chá de alho: socar 2-3 dentes de alho, deixar em água por 10 minutos, coar e adicionar limão.</li>
                    <li>Administrar o chá para a pessoa.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["avc", "derrame", "samu", "paralisia", "rosto", "fala", "urgência", "alho"]
    },
    
    // PROTOCOLO 9 - Choque Elétrico
    {
        id: 9,
        titulo: "Choque Elétrico",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Choque Elétrico</h2>
            
            <div class="protocol-section">
                <h3>Procedimentos em caso de choque elétrico</h3>
                
                <h4>1. Garanta a sua segurança</h4>
                <ul>
                    <li>Nunca toque na vítima enquanto ela estiver em contato com a eletricidade.</li>
                    <li>Desligue imediatamente a fonte de energia (chave geral, disjuntor ou aparelho da tomada).</li>
                    <li>Se não for possível desligar, use um objeto isolante (madeira seca, plástico ou borracha) para afastar a vítima da fonte.</li>
                </ul>
                
                <h4>2. Verifique os sinais vitais</h4>
                <ul>
                    <li>Veja se a vítima está consciente e respirando.</li>
                    <li>Se não respirar, inicie RCP (30 compressões + 2 ventilações).</li>
                </ul>
                
                <h4>3. Cuide das queimaduras</h4>
                <ul>
                    <li>Se houver queimaduras, lave a área com água limpa em temperatura ambiente.</li>
                    <li>Use a POMADA PARA QUEIMADURAS (veja na Seção "Farmácia Natural").</li>
                    <li>Cubra com pano limpo e úmido para proteger a pele.</li>
                </ul>
                
                <h4>4. Acione ajuda médica</h4>
                <ul>
                    <li>Ligue para o SAMU (192) imediatamente.</li>
                    <li>Mantenha a vítima deitada e em repouso.</li>
                    <li>Não dê nada para comer ou beber.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <p><strong>⚠️ Atenção:</strong> mesmo que a vítima pareça bem após o choque, ela deve ser avaliada por um médico, pois complicações internas (como arritmias) podem surgir horas depois.</p>
                
                <!-- IMAGEM FIGURA 11 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo09-imagem11.jpg" alt="Figura 11" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 11</strong> - Procedimentos para choque elétrico</p>
                </div>
            </div>
        `,
        palavrasChave: ["choque elétrico", "eletricidade", "tomada", "cabo", "queimadura", "rcp"]
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
                
                <h4>Opção 1:</h4>
                <ul>
                    <li><strong>Compressa de batata ralada:</strong> Aplicar batata ralada sobre os olhos (envolvida em um pano). Acelera a cicatrização e reduz a inflamação.</li>
                </ul>
                
                <h4>Opção 2:</h4>
                <ul>
                    <li>Usar água com bicarbonato de sódio (1 colher de café rasa num copo com água).</li>
                    <li>Utilizar um pedaço de algodão umedecido e aplicar várias vezes ao dia.</li>
                    <li>Aplicar cataplasma de argila com água ou suco (couve, cenoura, etc.) ou chá (camomila, hortelã, orégano) no local e deixar 1 a 2 horas sobre os olhos fechados.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["conjuntivite", "olho", "coceira", "irritação", "vermelhidão", "batata", "bicarbonato", "argila"]
    },
    
    // PROTOCOLO 11 - Convulsão
    {
        id: 11,
        titulo: "Convulsão (Ataque epilético)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Convulsão (Ataque epilético)</h2>
            
            <div class="protocol-section">
                <h3>O QUE FAZER DURANTE A CONVULSÃO</h3>
                
                <h4>Ações Prioritárias:</h4>
                <ul>
                    <li><strong>Mantenha a Calma:</strong> Sua serenidade é essencial.</li>
                    <li><strong>Cronometre a Crise:</strong> Se durar mais de 5 minutos, ou se a pessoa tiver múltiplas crises sem recuperar a consciência, chame uma ambulância (192).</li>
                    <li><strong>Proteja a Cabeça:</strong> Coloque algo macio sob a cabeça da pessoa (casaco, travesseiro).</li>
                    <li><strong>Afaste Objetos Perigosos:</strong> Móveis, objetos pontiagudos.</li>
                    <li><strong>Coloque-a de Lado (Posição Lateral de Segurança):</strong> Isso ajuda a saliva e vômitos a escorrerem, evitando engasgos.</li>
                    <li><strong>Solte Roupas Apertadas:</strong> Especialmente ao redor do pescoço.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O Que Nunca Fazer:</h3>
                <ul>
                    <li>Não tente segurar a pessoa.</li>
                    <li>Não coloque nada na boca da pessoa (mito perigoso).</li>
                    <li>Não tente dar água, chá ou qualquer substância.</li>
                    <li>Não tente reanimação durante as convulsões ativas.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O QUE FAZER APÓS A CONVULSÃO</h3>
                
                <h4>1. Conforto e Ambiente:</h4>
                <ul>
                    <li>Fique com a pessoa até que esteja completamente alerta.</li>
                    <li>Ambiente calmo e escuro.</li>
                    <li>Voz suave e tranquilizadora.</li>
                </ul>
                
                <h4>2. Hidratação e Nutrição Suave:</h4>
                <ul>
                    <li>Ofereça pequenos goles de água quando estiver consciente.</li>
                    <li>Chás calmantes: camomila, erva cidreira, lavanda, passiflora.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <p><strong>ATENÇÃO:</strong> Procure um médico assim que possível para investigar as causas das convulsões.</p>
            </div>
        `,
        palavrasChave: ["convulsão", "epilepsia", "ataque epilético", "crise", "desmaio", "chamar ajuda"]
    },
    
    // PROTOCOLO 12 - Corpos Estranhos
    {
        id: 12,
        titulo: "Corpos Estranhos nos olhos / Nariz / Ouvidos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Corpos Estranhos nos olhos / Nariz / Ouvidos</h2>
            
            <div class="protocol-section">
                <h3>CORPO ESTRANHO NO NARIZ</h3>
                <p>Situação comum em crianças que inserem pequenos objetos.</p>
                
                <h4>O Que Fazer:</h4>
                <ul>
                    <li>Mantenha a calma e peça para respirar pela boca.</li>
                    <li>Peça para assoar o nariz suavemente, fechando a narina que não tem o objeto.</li>
                    <li>Se o objeto for visível e de fácil acesso, use uma pinça para removê-lo com cuidado.</li>
                </ul>
                
                <h4>O Que Não Fazer:</h4>
                <ul>
                    <li>Não use cotonetes ou instrumentos pontiagudos.</li>
                    <li>Não tente remover objetos profundos.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>CORPO ESTRANHO NOS OLHOS</h3>
                
                <h4>O Que Fazer:</h4>
                <ul>
                    <li>Lave as mãos cuidadosamente.</li>
                    <li>Peça para a pessoa piscar várias vezes.</li>
                    <li>Lave o olho com água limpa corrente.</li>
                    <li>Se visualizar o objeto, pode tentar removê-lo com ponta de pano limpo umedecido.</li>
                </ul>
                
                <h4>O Que Não Fazer:</h4>
                <ul>
                    <li>Não esfregue o olho.</li>
                    <li>Não tente remover objetos encravados na córnea.</li>
                </ul>
                
                <!-- IMAGEM FIGURA 12 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo12-imagem12.jpg" alt="Figura 12" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 12</strong> - Remoção de corpo estranho no olho</p>
                </div>
            </div>
            
            <div class="protocol-section">
                <h3>CORPO ESTRANHO NOS OUVIDOS</h3>
                
                <h4>Para Objetos Sólidos:</h4>
                <ul>
                    <li>Incline a cabeça para o lado afetado.</li>
                    <li>Se o objeto for visível e solto, use pinça de ponta romba.</li>
                    <li>Nunca use cotonetes ou instrumentos pontiagudos.</li>
                </ul>
                
                <h4>Para Insetos:</h4>
                <ul>
                    <li>Incline a cabeça e aplique algumas gotas de azeite morno.</li>
                    <li>Espere alguns minutos e incline para drenar.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>Sinais de Alerta que Requerem Atendimento Médico:</h3>
                <ul>
                    <li>Sangramento que não para</li>
                    <li>Dor intensa</li>
                    <li>Perda de audição ou visão</li>
                    <li>Objeto que não pode ser removido facilmente</li>
                </ul>
            </div>
        `,
        palavrasChave: ["corpo estranho", "objeto", "olho", "nariz", "ouvido", "inseto", "criança"]
    },
    
    // PROTOCOLO 13 - Cortes / Sangramento
    {
        id: 13,
        titulo: "Cortes / Sangramento / Hemorragia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Cortes / Sangramento / Hemorragia</h2>
            
            <div class="protocol-section">
                <h3>FASE 1: AÇÃO IMEDIATA – Estancar e Limpar</h3>
                
                <h4>1. Controle do Sangramento com Pressão Direta:</h4>
                <ul>
                    <li>Use um pano limpo ou gaze e pressione diretamente sobre o corte com firmeza.</li>
                    <li>Mantenha a pressão por pelo menos 10-15 minutos sem interromper.</li>
                    <li>Eleve a parte do corpo ferida acima do nível do coração.</li>
                </ul>
                
                <h4>SE FOR MUITA HEMORRAGIA:</h4>
                <ul>
                    <li>Aplicar pimenta caiena diretamente no corte. Ela fecha os vasos sanguíneos e estanca o sangramento.</li>
                </ul>
                
                <h4>2. Limpeza Profunda da Ferida:</h4>
                <ul>
                    <li>Lave a ferida vigorosamente com a água mais limpa disponível.</li>
                    <li>Remova toda sujeira, fragmentos ou detritos visíveis.</li>
                    <li>Use uma pinça limpa (esterilizada com fogo) para remover partículas profundas.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>FASE 2: TRATAMENTO INICIAL</h3>
                
                <h4>1. Fechamento da Ferida:</h4>
                <ul>
                    <li>Se o corte for profundo e estiver limpo, aproxime as bordas com tiras adesivas.</li>
                </ul>
                
                <h4>2. Compressas de Água Fria:</h4>
                <ul>
                    <li>Aplique compressas de pano limpo embebido em água fria sobre o curativo por 15-20 minutos.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>SANGRAMENTO NASAL</h3>
                
                <h4>PROTOCOLO IMEDIATO:</h4>
                <ul>
                    <li>Mantenha a pessoa sentada e inclinada ligeiramente para frente.</li>
                    <li>Comprima as partes macias do nariz por 10-15 minutos sem interromper.</li>
                    <li>Aplique compressa fria na base do nariz e testa.</li>
                </ul>
                
                <h4>APÓS O CONTROLE:</h4>
                <ul>
                    <li>Não assoar o nariz por pelo menos 4 horas.</li>
                    <li>Evitar esforço físico por 12 horas.</li>
                </ul>
                
                <!-- IMAGENS FIGURA 13 E 14 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo13-imagem13.jpg" alt="Figura 13" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 13</strong> - Controle de sangramento nasal</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo13-imagem14.jpg" alt="Figura 14" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 14</strong> - Posição correta para sangramento nasal</p>
                </div>
            </div>
            
            <div class="protocol-section">
                <h3>SINAIS DE ALERTA – Quando Buscar Ajuda Médica:</h3>
                <ul>
                    <li>Sangramento que não cessa após 30 minutos de compressão</li>
                    <li>Palidez, tontura ou desmaio</li>
                    <li>Sangramento após trauma craniano</li>
                </ul>
            </div>
        `,
        palavrasChave: ["corte", "sangramento", "hemorragia", "ferida", "sangue", "nasal", "nariz", "pimenta caiena"]
    },
    
    // PROTOCOLO 14 - Desidratação / Insolação
    {
        id: 14,
        titulo: "Desidratação / Insolação",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Desidratação / Insolação</h2>
            
            <div class="protocol-section">
                <h3>PROCEDIMENTOS IMEDIATOS</h3>
                
                <h4>1. Resfriamento Imediato</h4>
                <ul>
                    <li>Leve a pessoa para local fresco e sombreado</li>
                    <li>Remova roupas desnecessárias</li>
                    <li>Deite a pessoa com pernas elevadas</li>
                </ul>
                
                <h4>2. Resfriamento da Pele</h4>
                <ul>
                    <li>Aplique panos úmidos frios no corpo todo</li>
                    <li>Foco em pescoço, axilas e virilhas</li>
                    <li>Use ventilador ou abane a pessoa</li>
                    <li>Aplicar gel de babosa no corpo para aliviar vermelhidão, inflamação e dor.</li>
                </ul>
                
                <h4>3. Hidratação</h4>
                <ul>
                    <li>Ofereça água fresca em pequenos goles</li>
                    <li>Beber 400 ml de água por hora</li>
                    <li>Soro caseiro: 1 litro de água + 1 colher de sopa de açúcar + 1 colher de chá de sal</li>
                    <li>Água de coco natural</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O QUE NÃO FAZER</h3>
                <ul>
                    <li>Não dê medicamentos para febre</li>
                    <li>Não use álcool na pele</li>
                    <li>Não ofereça bebidas alcoólicas ou com cafeína</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>QUANDO BUSCAR AJUDA MÉDICA</h3>
                <ul>
                    <li>Se houver perda de consciência</li>
                    <li>Se a temperatura não baixar em 30 minutos</li>
                    <li>Se houver convulsões</li>
                </ul>
            </div>
        `,
        palavrasChave: ["desidratação", "insolação", "calor", "sol", "febre", "hidratação", "água", "soro", "babosa"]
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
                    <li>Afrouxe roupas apertadas no pescoço e cintura</li>
                    <li>Providencie ar fresco abrindo janelas</li>
                </ol>
            </div>
            
            <div class="protocol-section">
                <h3>Após o Retorno à Consciência:</h3>
                <ol>
                    <li>Não a levante rapidamente – espere 10-15 minutos</li>
                    <li>Ofereça água quando estiver alerta</li>
                    <li>Acompanhe por pelo menos 30 minutos</li>
                </ol>
            </div>
            
            <div class="protocol-section">
                <h3>Quando Buscar Ajuda Médica:</h3>
                <ul>
                    <li>Se o desmaio durar mais de 1 minuto</li>
                    <li>Se houver convulsões ou batimentos cardíacos irregulares</li>
                    <li>Se for idoso, gestante ou pessoa com doença cardíaca</li>
                    <li>Se houver queda e trauma na cabeça</li>
                </ul>
            </div>
        `,
        palavrasChave: ["desmaio", "mal súbito", "inconsciência", "desmaiar", "pernas elevadas"]
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
                    <li><strong>Suco de limão com Maizena:</strong> Suco de 1 limão + 1 colher de sopa de Maizena. Consumir 1 a 3x ao dia.</li>
                    <li><strong>Chá de folha de Goiaba:</strong> 3 a 6 xícaras por dia.</li>
                    <li><strong>Alho cru:</strong> Durante as refeições, consumir 1 ou 2 dentes de alho pequenos (cuidado com gastrite).</li>
                </ul>
            </div>
        `,
        palavrasChave: ["diarréia", "soltura", "intestino", "limão", "maizena", "goiaba", "alho"]
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
                
                <h4>1. Cataplasma de cebola crua na sola dos pés:</h4>
                <ul>
                    <li>Picar cebola crua e colocar dentro de sacos plásticos.</li>
                    <li>Colocar os pés sobre a cebola (com meias por cima para fixar).</li>
                    <li>Deixar agir durante a noite.</li>
                </ul>
                
                <h4>2. Xarope de cebola e mel:</h4>
                <ul>
                    <li>Camadas alternadas de cebola fatiada e mel em um pote.</li>
                    <li>Deixar descansar por 24 horas até formar um xarope.</li>
                    <li>Tomar 1 colher de chá (crianças) ou 1 colher de sopa (adultos) 3 vezes ao dia.</li>
                </ul>
                
                <h4>3. Chá da planta "carrapicho beiço-de-boi"</h4>
                <ul>
                    <li>2 colheres da planta para cada xícara de água, 3 xícaras por dia.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["falta de ar", "respirar", "asma", "bronquite", "cebola", "xarope", "carrapicho"]
    },
    
    // PROTOCOLO 18 - Dor de Dentes
    {
        id: 18,
        titulo: "Dor de Dentes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor de Dentes</h2>
            
            <div class="protocol-section">
                <h3>Analgésicos Naturais e Caseiros:</h3>
                <ul>
                    <li><strong>Cravo da índia:</strong> Molhe um chumaço de algodão com óleo de cravo ou use um cravinho inteiro mastigado levemente. Aplique diretamente na cárie.</li>
                    <li><strong>Bochecho com Água Morna e Sal:</strong> Dissolva uma colher de chá de sal em um copo de água morna. Bocheche por 30 segundos.</li>
                    <li><strong>Compressa Fria no Rosto:</strong> Aplique compressa gelada na bochecha, sobre a área da dor, por 15 minutos.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>Conduta em Caso de Inchaço/Abcesso:</h3>
                <ul>
                    <li>Aplique compressas quentes na parte externa da bochecha por 20 minutos, várias vezes ao dia.</li>
                </ul>
                
                <h3>Nunca Faça:</h3>
                <ul>
                    <li>Nunca coloque aspirina diretamente sobre o dente ou gengiva.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor de dente", "dente", "cárie", "abcesso", "cravo", "bochecho"]
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
                
                <h4>1. Cataplasma de cebola crua:</h4>
                <ul>
                    <li>Fatiar cebola crua e colocar em um pano (gaze).</li>
                    <li>Aplicar no pescoço (envolvendo com um cachecol ou plástico).</li>
                    <li>Pode ser usado durante a noite.</li>
                </ul>
                
                <h4>2. Gargarejo com água morna e sal ou água com limão e mel</h4>
                
                <h4>3. Chá de mel com gengibre/malva/eucalipto/sálvia/alteia</h4>
                
                <h4>4. Mel e própolis</h4>
                
                <h4>5. Mel com açafrão</h4>
            </div>
        `,
        palavrasChave: ["dor de garganta", "garganta", "inflamação", "gargarejo", "cebola", "mel", "própolis"]
    },
    
    // PROTOCOLO 20 - Dor Muscular
    {
        id: 20,
        titulo: "Dor Muscular / Torcicolo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor Muscular / Torcicolo</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural (primeiros socorros):</h3>
                
                <h4>Opção 1:</h4>
                <ul>
                    <li>Usar folhas de repolho amassadas com mel.</li>
                    <li>Colocar nas articulações doloridas.</li>
                    <li>Cobrir com filme plástico e deixar agir (idealmente durante a noite).</li>
                </ul>
                
                <h4>Opção 2:</h4>
                <ul>
                    <li>Ralar gengibre fresco e espalhar sobre um pano.</li>
                    <li>Aplicar na área dolorida.</li>
                    <li>Cobrir com plástico e deixar agir por 30 minutos a algumas horas.</li>
                </ul>
                
                <h4>No caso de TORCICOLO:</h4>
                <ul>
                    <li>Imobilizar o pescoço com um pano que dê várias voltas no pescoço caso não tenha o colar cervical.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor muscular", "torcicolo", "músculo", "dor", "repolho", "gengibre", "imobilizar"]
    }
];
    // PROTOCOLO 21 - Dor de Ouvido
    {
        id: 21,
        titulo: "Dor de Ouvido",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Dor de Ouvido</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais:</h3>
                
                <h4>1. Cataplasma de cebola cozida:</h4>
                <ul>
                    <li>Cozinhar uma cebola inteira no vapor (não na água).</li>
                    <li>Cortar ao meio e extrair o suco quente (testar a temperatura).</li>
                    <li>Colocar algumas gotas do suco no ouvido afetado.</li>
                    <li>Envolver a cebola em um pano e aplicar sobre o ouvido.</li>
                </ul>
                
                <h4>2. Chá da casca da laranja ou limão:</h4>
                <ul>
                    <li>Usar 1 laranja ou 1 limão inteiro ou apenas a casca.</li>
                    <li>Ferver em meio litro de água.</li>
                    <li>Beber morno ou frio durante o dia.</li>
                    <li>Pode acrescentar mel e própolis.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["dor de ouvido", "ouvido", "cebola", "laranja", "limão", "chá"]
    },
    
    // PROTOCOLO 22 - Embriaguez / Alcoolismo
    {
        id: 22,
        titulo: "Embriaguez / Alcoolismo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Embriaguez / Alcoolismo</h2>
            
            <div class="protocol-section">
                <h3>Embriaguez (Bebedeira)</h3>
                <ul>
                    <li>Tomar 4 a 5 comprimidos de carvão ativado.</li>
                    <li>Reduz efeitos do álcool em 10 a 20 minutos.</li>
                </ul>
                
                <h3>Alcoolismo</h3>
                <ul>
                    <li>Usar extrato de alho em álcool (25 gotas em meia xícara de água, 3 vezes ao dia).</li>
                    <li>Preparo: uma cabeça de alho roxo em 100ml de álcool de cereais.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["embriaguez", "bebedeira", "álcool", "alcoolismo", "carvão ativado", "alho"]
    },
    
    // PROTOCOLO 23 - Engasgo em Adultos
    {
        id: 23,
        titulo: "Engasgo em Adultos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Engasgo em Adultos</h2>
            
            <div class="protocol-section">
                <h3>O que fazer em ADULTOS</h3>
                
                <h4>1. Engasgo parcial:</h4>
                <ul>
                    <li>Incentive a tossir com força.</li>
                </ul>
                
                <h4>2. Engasgo total - Manobra de Heimlich:</h4>
                <ul>
                    <li>Fique atrás da vítima.</li>
                    <li>Abrace-a pela cintura.</li>
                    <li>Feche uma mão em punho e coloque acima do umbigo.</li>
                    <li>Segure o punho com a outra mão e faça compressões rápidas e fortes para dentro e para cima.</li>
                    <li>Repita até o objeto sair ou a vítima perder a consciência.</li>
                </ul>
                
                <h4>Se perder a consciência:</h4>
                <ul>
                    <li>Deite a vítima no chão.</li>
                    <li>Inicie RCP, observando se o objeto é expelido.</li>
                </ul>
                
                <!-- IMAGEM FIGURA 15 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo23-imagem15.jpg" alt="Figura 15" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 15</strong> - Manobra de Heimlich em adultos</p>
                </div>
            </div>
        `,
        palavrasChave: ["engasgo", "heimlich", "adulto", "obstrução", "respiração", "manobra"]
    },
    
    // PROTOCOLO 24 - Engasgo em Crianças
    {
        id: 24,
        titulo: "Engasgo em Crianças",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Engasgo em Crianças</h2>
            
            <div class="protocol-section">
                <h3>O que fazer em CRIANÇAS (maiores de 1 ano)</h3>
                <ul>
                    <li>Procedimento igual ao do adulto, mas com menos força nas compressões.</li>
                    <li>Sempre procure ajuda médica após o episódio.</li>
                </ul>
                
                <h3>O que fazer em BEBÊS (menores de 1 ano)</h3>
                <ul>
                    <li>Segure o bebê de barriga para baixo, apoiado no seu braço, com a cabeça mais baixa que o tronco.</li>
                    <li>Dê 5 tapas firmes nas costas, entre as escápulas.</li>
                    <li>Se não resolver, vire o bebê de barriga para cima e faça 5 compressões torácicas com dois dedos no centro do peito.</li>
                    <li>Alterne entre 5 tapas nas costas e 5 compressões no peito até o objeto sair ou a ajuda chegar.</li>
                </ul>
                
                <h3>O que NÃO fazer:</h3>
                <ul>
                    <li>Não oferecer água ou alimentos para "empurrar".</li>
                    <li>Não colocar os dedos na garganta sem ver o objeto.</li>
                    <li>Não sacudir o bebê.</li>
                </ul>
                
                <!-- IMAGEM FIGURA 16 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo24-imagem16.jpg" alt="Figura 16" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 16</strong> - Manobra em bebês engasgados</p>
                </div>
            </div>
        `,
        palavrasChave: ["engasgo", "criança", "bebê", "heimlich", "tapas nas costas", "obstrução"]
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
                <p>Lesão traumática de uma articulação, causada pelo estiramento, torção ou ruptura de ligamentos.</p>
                
                <h4>Protocolo GECA (primeiras 48-72 horas):</h4>
                <ul>
                    <li><strong>G</strong> – Guardar: Não force o membro afetado.</li>
                    <li><strong>E</strong> – Gelar: Aplique gelo envolto em pano por 15-20 minutos a cada 2-3 horas.</li>
                    <li><strong>C</strong> – Comprimir: Use atadura para compressão leve.</li>
                    <li><strong>A</strong> – Elevar: Mantenha o membro elevado.</li>
                </ul>
                
                <h4>Tratamento Natural:</h4>
                <ul>
                    <li>Folhas de repolho amassadas com mel.</li>
                    <li>Cataplasma de gengibre ralado.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>Luxação</h3>
                <p>Deslocamento completo de uma articulação.</p>
                
                <h4>Procedimentos Imediatos:</h4>
                <ul>
                    <li>Não tente recolocar a articulação no lugar.</li>
                    <li>Imobilize na posição em que está.</li>
                    <li>Aplique compressa fria.</li>
                    <li>Eleve o membro afetado.</li>
                </ul>
                
                <h4>O que NÃO fazer:</h4>
                <ul>
                    <li>Não tente recolocar a articulação.</li>
                    <li>Não massageie a área.</li>
                    <li>Não aplique calor.</li>
                </ul>
                
                <h4>Quando buscar URGENTE:</h4>
                <ul>
                    <li>Articulação claramente fora do lugar.</li>
                    <li>Dor insuportável.</li>
                    <li>Formigamento ou dormência.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["entorse", "luxação", "torção", "articulação", "imobilizar", "gelo", "repolho", "gengibre"]
    },
    
    // PROTOCOLO 26 - Farpas / Corpos estranhos na pele
    {
        id: 26,
        titulo: "Farpas ou corpos estranhos na pele",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Farpas ou corpos estranhos na pele</h2>
            
            <div class="protocol-section">
                <h3>PROTOCOLO GERAL DE REMOÇÃO</h3>
                
                <h4>Preparação Inicial:</h4>
                <ul>
                    <li>Lave bem as mãos com água e sabão.</li>
                    <li>Limpe a área ao redor com água limpa e sabão neutro.</li>
                    <li>Esterilize o instrumento (pinça ou agulha) no fogo ou álcool.</li>
                </ul>
                
                <h4>Remoção para objetos visíveis:</h4>
                <ul>
                    <li>Use pinça esterilizada para segurar firmemente o objeto.</li>
                    <li>Puxe na mesma direção em que o objeto entrou.</li>
                    <li>Após remoção, esprema suavemente para sangrar um pouco e limpar.</li>
                </ul>
                
                <h4>Para espinhos e farpas profundas:</h4>
                <ul>
                    <li>Cataplasma de batata ralada ou pasta de inhame e gengibre.</li>
                    <li>Compressa de contraste (água quente/fria).</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>O QUE NÃO FAZER</h3>
                <ul>
                    <li>Não use agulhas não esterilizadas.</li>
                    <li>Não force a remoção se o objeto estiver muito profundo.</li>
                    <li>Não ignore sinais de infecção.</li>
                </ul>
                
                <h3>Sinais de alerta para infecção:</h3>
                <ul>
                    <li>Vermelhidão ao redor da ferida.</li>
                    <li>Inchaço crescente.</li>
                    <li>Presença de pus.</li>
                    <li>Febre ou mal-estar.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["farpa", "espinho", "corpo estranho", "pele", "remoção", "pinça", "infecção", "batata"]
    },
    
    // PROTOCOLO 27 - Febre alta
    {
        id: 27,
        titulo: "Febre alta",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Febre alta</h2>
            
            <div class="protocol-section">
                <h3>IDENTIFICAÇÃO</h3>
                <ul>
                    <li>Temperatura acima de 38,5°C</li>
                    <li>Calafrios e suores</li>
                    <li>Pele quente e avermelhada</li>
                    <li>Dor no corpo e mal-estar</li>
                </ul>
                
                <h3>PROCEDIMENTOS NATURAIS IMEDIATOS</h3>
                
                <h4>1. Hidratação Intensiva:</h4>
                <ul>
                    <li>Água em pequenos goles a cada 15 minutos</li>
                    <li>Água de coco natural</li>
                    <li>Soro caseiro: 1 litro de água + 1 colher de sopa de açúcar + 1 colher de chá de sal</li>
                </ul>
                
                <h4>2. Banho Morno:</h4>
                <ul>
                    <li>Água morna (nunca fria) por 15-20 minutos</li>
                    <li>Adicione 2 colheres de vinagre de maçã à água</li>
                </ul>
                
                <h4>3. Compressas de Água Fria:</h4>
                <ul>
                    <li>Pulsos, testa, nuca e tornozelos</li>
                    <li>Troque a cada 10 minutos</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>CHÁS MEDICINAIS</h3>
                <ul>
                    <li><strong>Chá de Sabugueiro:</strong> 2 colheres de flores secas por xícara, 3x ao dia</li>
                    <li><strong>Chá de Gengibre:</strong> 2 rodelas com suco de limão</li>
                    <li><strong>Chá de Camomila com Hortelã:</strong> Acalma e reduz a temperatura</li>
                </ul>
                
                <h3>SINAIS DE ALERTA - BUSQUE AJUDA MÉDICA</h3>
                <ul>
                    <li>Febre acima de 40°C</li>
                    <li>Convulsões febris</li>
                    <li>Manchas vermelhas na pele</li>
                    <li>Rigidez na nuca</li>
                    <li>Febre por mais de 3 dias</li>
                </ul>
                
                <p><em>A febre é um mecanismo de defesa do corpo – o objetivo é aliviar o desconforto, não necessariamente eliminar completamente a febre!</em></p>
            </div>
        `,
        palavrasChave: ["febre", "alta", "temperatura", "calafrios", "hidratação", "chá", "sabugueiro", "gengibre"]
    },
    
    // PROTOCOLO 28 - Feridas
    {
        id: 28,
        titulo: "Feridas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Feridas</h2>
            
            <div class="protocol-section">
                <h3>FERIDAS CRÔNICAS</h3>
                
                <h4>Tratamento Natural:</h4>
                <ul>
                    <li>Usar a "Pomada de açafrão, camomila e mel" (ver na seção Farmácia Natural).</li>
                    <li>Preencher a ferida profundamente com a pomada e cobrir com gaze.</li>
                    <li>Aplicar 2 vezes ao dia (manhã e tarde).</li>
                    <li>À noite usar carvão em pó para evitar pus.</li>
                </ul>
                
                <p>Para saber mais, procure a sessão: Cortes / Sangramento / Hemorragias</p>
            </div>
        `,
        palavrasChave: ["ferida", "corte", "cicatrização", "pomada", "açafrão", "camomila", "mel", "carvão"]
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
                
                <h4>1. Cataplasma de batata ralada:</h4>
                <ul>
                    <li>Aplicar sobre a área afetada para reduzir inchaço e drenar pus.</li>
                    <li>Fazer compressa de contraste (água quente 3 min + água fria 30 seg, repetir 3 vezes).</li>
                </ul>
                
                <h4>2. Pasta de inhame e gengibre</h4>
                <p>(Ver na Seção "Farmácia Natural")</p>
                
                <h4>3. Tomar a "Penicilina Russa"</h4>
                <p>(Ver na Seção "Farmácia Natural")</p>
                
                <p>Para saber mais, procure a sessão: Cortes / Sangramento / Hemorragias</p>
            </div>
        `,
        palavrasChave: ["prego", "enferrujado", "ferimento", "tétano", "batata", "inhame", "penicilina russa"]
    },
    
    // PROTOCOLO 30 - Fraturas
    {
        id: 30,
        titulo: "Fraturas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Fraturas</h2>
            
            <div class="protocol-section">
                <h3>IDENTIFICAÇÃO RÁPIDA</h3>
                <ul>
                    <li>Dor intensa que piora com movimento</li>
                    <li>Inchaço e hematoma rápido</li>
                    <li>Deformidade visível</li>
                    <li>Incapacidade de usar o membro</li>
                </ul>
                
                <h3>PROTOCOLO DE IMOBILIZAÇÃO</h3>
                
                <h4>1. Controle Inicial:</h4>
                <ul>
                    <li>Não tente alinhar o osso.</li>
                    <li>Corte a roupa se necessário para expor a área.</li>
                    <li>Remova anéis, pulseiras e relógios (antes de inchar).</li>
                </ul>
                
                <h4>2. Talas Improvisadas:</h4>
                <ul>
                    <li>Jornais/revistas enrolados</li>
                    <li>Galhos retos (use dois de cada lado)</li>
                    <li>Papelão dobrado (molhe para moldar)</li>
                    <li>Para fixação: gravatas, cintos, tiras de pano</li>
                </ul>
                
                <h4>3. Fratura de Braço/Antebraço:</h4>
                <ul>
                    <li>Dobrar o cotovelo a 90 graus</li>
                    <li>Tipoia com camiseta ou pano triangular</li>
                    <li>Prender ao corpo com tiras</li>
                </ul>
                
                <h4>4. Fratura de Perna:</h4>
                <ul>
                    <li>Imobilizar a perna inteira</li>
                    <li>Amarrar as pernas juntas (a sã serve de tala)</li>
                    <li>Usar galhos longos dos pés à virilha</li>
                </ul>
                
                <!-- IMAGENS FIGURA 17 E 18 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo30-imagem17.jpg" alt="Figura 17" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 17</strong> - Imobilização de fratura no braço</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo30-imagem18.jpg" alt="Figura 18" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 18</strong> - Tala improvisada para perna</p>
                </div>
                
                <h3>O QUE NUNCA FAZER</h3>
                <ul>
                    <li>Tentar "endireitar" o osso</li>
                    <li>Aplicar calor na fratura</li>
                    <li>Dar bebidas alcoólicas para a dor</li>
                    <li>Apertar demais as talas</li>
                </ul>
            </div>
        `,
        palavrasChave: ["fratura", "osso quebrado", "imobilizar", "tala", "improvisar", "galho", "papelão"]
    },
    
    // PROTOCOLO 31 - Furúnculos
    {
        id: 31,
        titulo: "Furúnculos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Furúnculos</h2>
            
            <div class="protocol-section">
                <h3>TRATAMENTOS NATURAIS</h3>
                
                <h4>1. Cataplasma de cebola cozida:</h4>
                <ul>
                    <li>Aplicar metade de uma cebola cozida diretamente sobre o furúnculo.</li>
                    <li>Manter por várias horas.</li>
                    <li>Ajuda a drenar o pus e acelera a cicatrização.</li>
                </ul>
                
                <h4>2. Cataplasma de Repolho:</h4>
                <ul>
                    <li>Amassar uma folha de repolho com uma colher.</li>
                    <li>Aplicar gotas de limão sobre a folha.</li>
                    <li>Colocar sobre o furúnculo e amarrar um pano por cima.</li>
                    <li>Deixar várias horas.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["furúnculo", "pus", "infecção", "cebola", "repolho", "limão"]
    },
    
    // PROTOCOLO 32 - Hemorróidas
    {
        id: 32,
        titulo: "Hemorróidas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hemorróidas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                
                <h4>Via oral:</h4>
                <ul>
                    <li>Tomar 1 colher de chá da pomada (açafrão, camomila e mel) 3 a 5 vezes ao dia.</li>
                </ul>
                
                <h4>Uso tópico:</h4>
                <ul>
                    <li>Adicionar pimenta malagueta triturada (sem sementes) à pomada de Açafrão.</li>
                    <li>Aplicar topicamente nas hemorroidas 3 vezes ao dia.</li>
                    <li>Melhora em 3 dias (casos agudos) ou 20 dias (casos crônicos).</li>
                </ul>
            </div>
        `,
        palavrasChave: ["hemorróida", "hemorroida", "pomada", "açafrão", "pimenta", "malagueta"]
    },
    
    // PROTOCOLO 33 - Hipotermia
    {
        id: 33,
        titulo: "Hipotermia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Hipotermia</h2>
            
            <div class="protocol-section">
                <h3>IDENTIFICAÇÃO DA HIPOTERMIA</h3>
                
                <h4>Sinais Leves a Moderados:</h4>
                <ul>
                    <li>Calafrios intensos e incontroláveis</li>
                    <li>Pele pálida e fria ao toque</li>
                    <li>Fala arrastada ou confusa</li>
                    <li>Movimentos descoordenados</li>
                </ul>
                
                <h4>Sinais Graves:</h4>
                <ul>
                    <li>Ausência de calafrios (sinal perigoso)</li>
                    <li>Perda de consciência ou sonolência extrema</li>
                    <li>Respiração muito lenta e superficial</li>
                    <li>Pulso fraco e lento</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>TRATAMENTO DE EMERGÊNCIA</h3>
                
                <h4>Primeiras Medidas:</h4>
                <ul>
                    <li>Remova a pessoa do ambiente frio.</li>
                    <li>Retire roupas molhadas.</li>
                    <li>Isole do chão frio (cobertores, colchonete).</li>
                </ul>
                
                <h4>Aquecimento Progressivo:</h4>
                <ul>
                    <li>Aqueça primeiro tórax, pescoço, axilas e virilha.</li>
                    <li>Use compressas mornas (não quentes).</li>
                    <li>Use contato corporal (pele com pele, cobertores).</li>
                    <li>Ofereça líquidos quentes (apenas se consciente).</li>
                </ul>
                
                <h4>O QUE NÃO FAZER:</h4>
                <ul>
                    <li>Não aqueça braços e pernas primeiro.</li>
                    <li>Não use fonte de calor direto (fogueira, bolsas quentes).</li>
                    <li>Não dê massagem vigorosa.</li>
                    <li>Não permita bebidas alcoólicas.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["hipotermia", "frio", "calafrio", "aquecer", "temperatura", "reaquecimento"]
    },
    
    // PROTOCOLO 34 - Intoxicação Alimentar / Química / Medicamentos
    {
        id: 34,
        titulo: "Intoxicação Alimentar / Química / Medicamentos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Intoxicação Alimentar / Química / Medicamentos</h2>
            
            <div class="protocol-section">
                <h3>Princípios Gerais:</h3>
                <ul>
                    <li>Mantenha a calma.</li>
                    <li>Afaste a vítima da fonte intoxicante.</li>
                    <li>Identifique o agente causador (o que foi ingerido, quantidade, quando).</li>
                    <li>NÃO provoque vômito a menos que instruído por profissional.</li>
                </ul>
                
                <h3>A) Intoxicação Alimentar:</h3>
                <ul>
                    <li>Hidratação: soro caseiro, água de coco.</li>
                    <li>Dieta leve.</li>
                    <li>Repouso.</li>
                    <li>Buscar ajuda se vômitos/diarreia incontroláveis, febre alta, desidratação.</li>
                </ul>
                
                <h3>B) Intoxicação por Produtos Químicos:</h3>
                <ul>
                    <li>Inalação: leve para local arejado.</li>
                    <li>Contato pele/olhos: lave com água corrente por 15-20 minutos.</li>
                    <li>Ingestão: NÃO provoque vômito.</li>
                </ul>
                
                <h3>TRATAMENTO NATURAL DE EMERGÊNCIA:</h3>
                <ul>
                    <li>Tomar 3 a 4 comprimidos de carvão ativado de uma vez.</li>
                    <li>Repetir 3 vezes no mesmo dia (intervalo de 3 horas).</li>
                    <li>Neutraliza infecção intestinal, náuseas, vômitos, dores e febre.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["intoxicação", "envenenamento", "alimento estragado", "químico", "medicamento", "carvão ativado"]
    },
    
    // PROTOCOLO 35 - Mordida de cachorro ou gato
    {
        id: 35,
        titulo: "Mordida de cachorro ou gato",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Mordida de cachorro ou gato</h2>
            
            <div class="protocol-section">
                <h3>PRIMEIROS SOCORROS IMEDIATOS</h3>
                
                <h4>1. Controle do Sangramento:</h4>
                <ul>
                    <li>Aplique pressão direta com pano limpo.</li>
                    <li>Eleve o membro afetado.</li>
                </ul>
                
                <h4>2. Limpeza Minuciosa:</h4>
                <ul>
                    <li>Lave abundantemente com água e sabão por 15 minutos.</li>
                    <li>Remova toda sujeira e saliva do animal.</li>
                </ul>
                
                <h4>3. Aplicação de Carvão Ativado:</h4>
                <ul>
                    <li>Faça pasta com carvão ativado e água.</li>
                    <li>Aplique sobre a ferida e cubra com gaze.</li>
                    <li>Troque a cada 4-6 horas nas primeiras 24 horas.</li>
                </ul>
                
                <h4>4. Administração Oral de Carvão:</h4>
                <ul>
                    <li>Ingira 1 colher de sopa de carvão diluído em água.</li>
                    <li>Repita a cada 6 horas por 24-48 horas.</li>
                </ul>
                
                <h3>RESUMO DO TRATAMENTO NATURAL:</h3>
                <ul>
                    <li>Se jorrar muito sangue, jogue pimenta caiena sobre a ferida.</li>
                    <li>Aplique carvão vegetal ou folha de repolho com limão.</li>
                    <li>Tomar 5 comprimidos de carvão ativado.</li>
                    <li>Continuar carvão de 6 em 6 horas.</li>
                    <li>Tomar "Penicilina Russa" como preventivo.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["mordida", "cachorro", "gato", "animal", "raiva", "carvão ativado", "pimenta caiena"]
    },
    
    // PROTOCOLO 36 - Náuseas ou enjoo
    {
        id: 36,
        titulo: "Náuseas ou enjoo",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Náuseas ou enjoo</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                
                <h4>1. Chá de gengibre:</h4>
                <ul>
                    <li>Ralar gengibre fresco e adicionar água fervente.</li>
                    <li>Deixar em infusão por 10 minutos.</li>
                    <li>Beber aos goles para aliviar náuseas (incluindo enjoo de viagem).</li>
                </ul>
                
                <h4>2. Suco de limão com água morna</h4>
            </div>
        `,
        palavrasChave: ["náusea", "enjoo", "vômito", "gengibre", "limão", "viagem"]
    },
    
    // PROTOCOLO 37 - Parada Cardíaca
    {
        id: 37,
        titulo: "Parada Cardíaca (Coração parou)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Parada Cardíaca (Coração parou)</h2>
            
            <div class="protocol-section">
                <h3>Sinais Principais:</h3>
                <ul>
                    <li>Perda de consciência – não responde quando chamada</li>
                    <li>Ausência de respiração – peito não se move</li>
                    <li>Ausência de pulso</li>
                </ul>
                
                <h3>PROCEDIMENTO DE EMERGÊNCIA</h3>
                
                <h4>1. Verifique a Segurança do Local</h4>
                <h4>2. Avalie o Estado de Consciência</h4>
                <h4>3. Abra as Vias Aéreas</h4>
                <h4>4. Verifique a Respiração (10 segundos)</h4>
                
                <h3>RESSUSCITAÇÃO CARDIOPULMONAR</h3>
                
                <h4>Sequência Básica:</h4>
                <ul>
                    <li>2 ventilações de resgate (tampe o nariz, sopre até ver o peito levantar).</li>
                    <li>30 compressões torácicas (centro do peito, 5 cm de profundidade).</li>
                    <li>Ritmo: 100-120 compressões por minuto.</li>
                    <li>Continue 30:2 até ajuda chegar.</li>
                </ul>
                
                <h4>Para Crianças (1 ano até puberdade):</h4>
                <ul>
                    <li>Comprima cerca de 1/3 da profundidade do tórax.</li>
                    <li>Inicie com 5 ventilações de resgate.</li>
                </ul>
                
                <h4>Para Bebês (até 1 ano):</h4>
                <ul>
                    <li>Use dois dedos para compressões.</li>
                    <li>Comprima na linha mamilar.</li>
                    <li>Cubra nariz e boca com sua boca para ventilar.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["parada cardíaca", "coração parou", "rcp", "massagem cardíaca", "compressão", "ventilação"]
    },
    
    // PROTOCOLO 38 - Pedra nos Rins
    {
        id: 38,
        titulo: "Pedra nos Rins",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pedra nos Rins</h2>
            
            <div class="protocol-section">
                <h3>CHÁ PARA OS RINS</h3>
                
                <h4>1. Chá de abacateiro:</h4>
                <ul>
                    <li>1 litro de água + 10 folhas de abacateiro (secas).</li>
                    <li>Ferver por 2-3 minutos, tampar e deixar 10 minutos.</li>
                    <li>Beber ao longo do dia.</li>
                    <li>Diurético, diminui ácido úrico, combate inflamação renal e pedras.</li>
                </ul>
                
                <h4>2. Chá de Quebra Pedra ou Chá de cana do brejo:</h4>
                <ul>
                    <li>2 colheres de planta seca para 1 litro d'água.</li>
                    <li>Infusão por 5-10 minutos.</li>
                    <li>Beber por vários dias até a pedra sair.</li>
                </ul>
                
                <h4>Para dores nos rins:</h4>
                <ul>
                    <li>Compressa de contraste: água quente 3 min + fria 30 seg, repetir 3 vezes.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pedra nos rins", "rim", "cálculo renal", "abacateiro", "quebra pedra", "cana do brejo"]
    },
    
    // PROTOCOLO 39 - Pedra na Vesícula
    {
        id: 39,
        titulo: "Pedra na Vesícula",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pedra na Vesícula</h2>
            
            <div class="protocol-section">
                <h3>Remédio Natural:</h3>
                <ul>
                    <li>1 caroço de abacate bem seco.</li>
                    <li>Ralar bem fino na hora de consumir.</li>
                    <li>Tomar 1 colherzinha rasa (chá) do pó em um copo de água morna.</li>
                    <li>Fazer isso todas as noites antes de dormir.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pedra na vesícula", "vesícula", "cálculo biliar", "abacate", "caroço de abacate"]
    },
    
    // PROTOCOLO 40 - Picada de Abelhas / Vespas / Insetos
    {
        id: 40,
        titulo: "Picada de Abelhas / Vespas / Insetos",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Abelhas / Vespas / Insetos</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                
                <h4>Cataplasma de carvão ativado:</h4>
                <ul>
                    <li>Misturar 3 partes de carvão ativado + 1 parte de casca de psyllium (ou linhaça) + água.</li>
                    <li>Formar uma pasta e aplicar diretamente na picada.</li>
                    <li>Cobrir com plástico e fixar com fita.</li>
                    <li>Neutraliza toxinas e alivia a dor rapidamente.</li>
                </ul>
                
                <h4>Em caso de alergia:</h4>
                <ul>
                    <li>Tomar 5 comprimidos de carvão ativado.</li>
                    <li>Fazer pasta e aplicar no local.</li>
                    <li>Evita choque anafilático e edema de glote.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["picada", "abelha", "vespa", "inseto", "alergia", "carvão ativado", "toxina"]
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
                <h3>Tratamento Natural:</h3>
                
                <h4>Cataplasma de carvão ativado:</h4>
                <ul>
                    <li>Misturar 3 partes de carvão ativado + 1 parte de casca de psyllium (ou linhaça) + água.</li>
                    <li>Formar uma pasta e aplicar diretamente na picada.</li>
                    <li>Cobrir com plástico e fixar com fita.</li>
                    <li>Neutraliza toxinas e alivia a dor rapidamente.</li>
                </ul>
                
                <h4>Em caso de aranha muito venenosa:</h4>
                <ul>
                    <li>Usar a pomada de açafrão, camomila e mel (para feridas crônicas e necrose).</li>
                    <li>Aplicar topicamente e internamente em casos graves.</li>
                    <li>Evita amputação e infecção generalizada.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["picada de aranha", "aranha", "veneno", "carvão ativado", "pomada de açafrão"]
    },
    
    // PROTOCOLO 42 - Picada de Cobra
    {
        id: 42,
        titulo: "Picada de Cobra (Acidente Ofídico)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Cobra (Acidente Ofídico)</h2>
            
            <div class="protocol-section">
                <h3>O que Fazer (Primeiros Socorros Convencionais)</h3>
                <ul>
                    <li>Mantenha a vítima deitada e tranquila.</li>
                    <li>Lave o local da picada apenas com água e sabão.</li>
                    <li>Transporte a vítima imediatamente para um hospital.</li>
                </ul>
                
                <h3>O que NÃO Fazer (Erros Graves)</h3>
                <ul>
                    <li>NÃO faça torniquete ou garrote.</li>
                    <li>NÃO corte o local da picada.</li>
                    <li>NÃO tente chupar o veneno.</li>
                    <li>NÃO aplique folhas, terra ou outros "remédios".</li>
                </ul>
                
                <h3>Tratamento Natural (complementar):</h3>
                <ul>
                    <li>Fazer pasta com carvão ativado e água, aplicar no local da picada.</li>
                    <li>Trocar o carvão a cada 1 hora.</li>
                    <li>Tomar 10 comprimidos de carvão ativado a cada 3 horas.</li>
                    <li>Usar a pomada de açafrão, camomila e mel para necrose.</li>
                </ul>
                
                <!-- IMAGEM FIGURA 19 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo42-imagem19.jpg" alt="Figura 19" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 19</strong> - Picada de cobra - áreas de maior risco</p>
                </div>
            </div>
        `,
        palavrasChave: ["picada de cobra", "cobra", "veneno", "ofídico", "carvão ativado", "soro antiofídico"]
    },
    
    // PROTOCOLO 43 - Picada de Escorpião
    {
        id: 43,
        titulo: "Picada de Escorpião",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Picada de Escorpião</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                <ul>
                    <li>Aplicar pasta de carvão ativado (4-5 comprimidos com água) no local da picada.</li>
                    <li>Tomar 5 comprimidos de carvão ativado (em casos graves).</li>
                    <li>Repetir a cada 3 horas se necessário.</li>
                    <li>Compressa de água fria para aliviar a dor.</li>
                </ul>
                
                <p><strong>OBS:</strong> A picada de escorpião em crianças pode ser bem grave. Faça os procedimentos acima e procure ajuda médica urgente.</p>
            </div>
        `,
        palavrasChave: ["picada de escorpião", "escorpião", "veneno", "carvão ativado", "criança"]
    },
    
    // PROTOCOLO 44 - Pneumonia
    {
        id: 44,
        titulo: "Pneumonia",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Pneumonia</h2>
            
            <div class="protocol-section">
                <p><strong>ATENÇÃO:</strong> A pneumonia é uma infecção pulmonar potencialmente grave. Este guia não substitui avaliação médica.</p>
                
                <h3>Sinais e Sintomas de Alerta:</h3>
                <ul>
                    <li>Tosse persistente (seca ou com catarro)</li>
                    <li>Febre alta (acima de 38°C)</li>
                    <li>Falta de ar ou dificuldade para respirar</li>
                    <li>Dor no peito que piora ao respirar fundo</li>
                </ul>
                
                <h3>Tratamento Natural:</h3>
                <h4>1. Cataplasma de cebola na sola dos pés:</h4>
                <ul>
                    <li>Picar cebola crua e colocar em sacos plásticos.</li>
                    <li>Colocar os pés sobre a cebola e cobrir com meias.</li>
                    <li>Deixar agir durante a noite.</li>
                </ul>
                
                <h4>2. Xarope de cebola e mel</h4>
                <h4>3. "Penicilina Russa"</h4>
                <h4>4. Inalação com chá de orégano, hortelã, camomila ou eucalipto</h4>
            </div>
        `,
        palavrasChave: ["pneumonia", "pulmão", "infecção", "tosse", "febre", "cebola", "inalação"]
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
                    <li>Ralar 3-4 cebolas e colocar os pés da pessoa sobre a cebola ralada.</li>
                    <li>Preparar chá de capim cidreira + chapéu-de-couro (ou alecrim/embaúba).</li>
                    <li>Beber o chá.</li>
                    <li>Normaliza a pressão em 30 minutos.</li>
                </ul>
                
                <h4>Outra opção:</h4>
                <ul>
                    <li>3 copos de água com 4 dentes de alho macerados (deixar de molho a noite).</li>
                    <li>Ao tomar, acrescentar gotas de limão.</li>
                </ul>
                
                <h3>Pressão Baixa</h3>
                <ul>
                    <li>Tomar um copo d'água com 1/4 de colher de chá de sal.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["pressão alta", "hipertensão", "pressão baixa", "hipotensão", "cebola", "alho", "sal"]
    },
    
    // PROTOCOLO 46 - Prisão de Ventre
    {
        id: 46,
        titulo: "Prisão de Ventre (constipação)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Prisão de Ventre (constipação)</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais:</h3>
                
                <h4>1. Compressa de óleo de rícino no abdômen:</h4>
                <ul>
                    <li>Ajuda a estimular o funcionamento do intestino.</li>
                </ul>
                
                <h4>2. Chá de Sene:</h4>
                <ul>
                    <li>Laxante natural potente. Efeito em 6-12 horas.</li>
                    <li>Usar com moderação (pode causar cólicas e dependência).</li>
                </ul>
                
                <h4>3. Chá de Erva doce ou Funcho:</h4>
                <ul>
                    <li>Comece por esses. Se não fizer efeito, use o chá de Sene.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["prisão de ventre", "constipação", "intestino preso", "sene", "erva doce", "óleo de rícino"]
    },
    
    // PROTOCOLO 47 - Queimaduras
    {
        id: 47,
        titulo: "Queimaduras",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Queimaduras</h2>
            
            <div class="protocol-section">
                <h3>Classificação das Queimaduras</h3>
                
                <h4>1º Grau:</h4>
                <ul>
                    <li>Atinge camada superficial da pele.</li>
                    <li>Vermelhidão, dor leve, sem bolhas.</li>
                </ul>
                
                <h4>2º Grau:</h4>
                <ul>
                    <li>Camadas mais profundas.</li>
                    <li>Vermelhidão intensa, dor forte, bolhas.</li>
                </ul>
                
                <h4>3º Grau:</h4>
                <ul>
                    <li>Todas as camadas da pele.</li>
                    <li>Pele esbranquiçada ou carbonizada.</li>
                    <li>Pode haver pouca dor (nervos destruídos).</li>
                </ul>
                
                <h3>Primeiros Socorros Imediatos</h3>
                <ul>
                    <li>Afaste a vítima da fonte de calor.</li>
                    <li>Resfrie a área com água corrente por 10-20 minutos.</li>
                    <li>Não aplique gelo diretamente.</li>
                    <li>Não estoure as bolhas.</li>
                </ul>
            </div>
            
            <div class="protocol-section">
                <h3>TRATAMENTOS NATURAIS</h3>
                <ul>
                    <li>Resfriar a pele com água fria por 7 a 10 minutos.</li>
                    <li>Aplicar pomada caseira feita com:
                        <ul>
                            <li>1 colher de sopa de açafrão (cúrcuma) em pó</li>
                            <li>1 colher de sopa de camomila em pó</li>
                            <li>200 ml de mel</li>
                        </ul>
                    </li>
                    <li>Misturar bem por pelo menos 3 minutos.</li>
                    <li>Aplicar 2 a 3 vezes ao dia.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["queimadura", "fogo", "escaldão", "bolha", "pomada", "açafrão", "mel", "camomila"]
    },
    
    // PROTOCOLO 48 - Queimaduras de Taturanas
    {
        id: 48,
        titulo: "Queimaduras de Taturanas / Lagartas",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Queimaduras de Taturanas / Lagartas</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                <ul>
                    <li>Aplicar uma pasta de Carvão ativado sobre a queimadura.</li>
                    <li>Misturar carvão com água até formar pasta.</li>
                    <li>Repetir após 10 minutos. Se necessário, mais vezes.</li>
                    <li>Tomar meia colher de carvão em meio copo d'água (muito importante).</li>
                </ul>
            </div>
        `,
        palavrasChave: ["taturana", "lagarta", "queimadura", "carvão ativado", "veneno"]
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
                
                <h4>1. AVALIAÇÃO INICIAL - ABCD</h4>
                <ul>
                    <li><strong>A</strong> – Via Aérea: Verificar e desobstruir</li>
                    <li><strong>B</strong> – Respiração: Verificar se respira (5-10 segundos)</li>
                    <li><strong>C</strong> – Circulação: Verificar pulso (máx. 10 segundos)</li>
                    <li><strong>D</strong> – Desfibrilação: Chamar ajuda e buscar DEA</li>
                </ul>
                
                <h4>2. SE NÃO RESPONDE E NÃO RESPIRA</h4>
                <ul>
                    <li>Ligue 192 (Samu) ou 193 (Bombeiros)</li>
                    <li>Peça um DEA</li>
                </ul>
                
                <h4>3. INICIAR COMPRESSÕES TORÁCICAS</h4>
                <ul>
                    <li>Vítima em superfície rígida</li>
                    <li>Mãos no centro do tórax</li>
                    <li>Frequência: 100-120/minuto</li>
                    <li>Profundidade: 5-6 cm (adultos)</li>
                </ul>
                
                <h4>4. VENTILAÇÕES</h4>
                <ul>
                    <li>30 compressões : 2 ventilações</li>
                    <li>Incline a cabeça, eleve o queixo</li>
                    <li>Sopre por 1 segundo observando elevação do tórax</li>
                </ul>
                
                <!-- IMAGENS FIGURA 20 E 21 -->
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo49-imagem20.jpg" alt="Figura 20" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 20</strong> - Posição das mãos para RCP</p>
                </div>
                
                <div style="margin:20px 0; text-align:center;">
                    <img src="/imagens/protocolo49-imagem21.jpg" alt="Figura 21" style="max-width:100%; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                    <p><strong>Figura 21</strong> - Compressões torácicas em adulto</p>
                </div>
                
                <h4>TEMPOS CRÍTICOS</h4>
                <ul>
                    <li>0-4 min: Danos reversíveis</li>
                    <li>4-6 min: Possível dano cerebral</li>
                    <li>6-10 min: Danos cerebrais prováveis</li>
                    <li>+10 min: Danos cerebrais severos</li>
                </ul>
            </div>
        `,
        palavrasChave: ["rcp", "ressuscitação", "massagem cardíaca", "parada", "compressão", "ventilação"]
    },
    
    // PROTOCOLO 50 - Taquicardia
    {
        id: 50,
        titulo: "Taquicardia (Coração disparou)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Taquicardia (Coração disparou)</h2>
            
            <div class="protocol-section">
                <h3>Sinais e Sintomas:</h3>
                <ul>
                    <li>Coração acelerado (>100 bpm em repouso)</li>
                    <li>Falta de ar</li>
                    <li>Tontura ou vertigem</li>
                    <li>Desconforto no peito</li>
                </ul>
                
                <h3>Primeiras Medidas Imediatas:</h3>
                <ul>
                    <li>Sente-se ou deite-se</li>
                    <li>Respiração lenta e profunda</li>
                    <li>Mergulhe o rosto em água fria</li>
                    <li>Manobra de Valsalva (tampe nariz, feche boca e tente expirar com força)</li>
                </ul>
                
                <h3>TRATAMENTO NATURAL:</h3>
                <ul>
                    <li>Colocar os cotovelos em uma bacia com água fria por 3-5 minutos.</li>
                    <li>Normaliza o ritmo cardíaco rapidamente.</li>
                </ul>
                
                <h3>Quando buscar ajuda:</h3>
                <ul>
                    <li>Dor no peito intensa</li>
                    <li>Desmaio</li>
                    <li>Sintomas persistentes por mais de 15 minutos</li>
                </ul>
            </div>
        `,
        palavrasChave: ["taquicardia", "coração acelerado", "palpitação", "arritmia", "água fria"]
    },
    
    // PROTOCOLO 51 - Tosse persistente
    {
        id: 51,
        titulo: "Tosse persistente",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Tosse persistente</h2>
            
            <div class="protocol-section">
                <h3>Tratamento Natural:</h3>
                
                <h4>1. Cataplasma de cebola na sola dos pés:</h4>
                <ul>
                    <li>Picar cebola crua e colocar em sacos plásticos.</li>
                    <li>Colocar os pés sobre a cebola e cobrir com meias.</li>
                    <li>Deixar agir durante a noite.</li>
                </ul>
                
                <h4>2. Xarope de cebola e mel:</h4>
                <ul>
                    <li>Camadas alternadas de cebola fatiada e mel.</li>
                    <li>Deixar descansar por 24 horas.</li>
                    <li>Coar e tomar para alívio da tosse.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["tosse", "persistente", "xarope", "cebola", "mel", "cataplasma"]
    },
    
    // PROTOCOLO 52 - Trauma Craniano
    {
        id: 52,
        titulo: "Trauma Craniano (Batida forte na cabeça)",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Trauma Craniano (Batida forte na cabeça)</h2>
            
            <div class="protocol-section">
                <h3>Sinais de alerta:</h3>
                <ul>
                    <li>Dor de cabeça intensa</li>
                    <li>Sangramento no couro cabeludo, nariz ou ouvidos</li>
                    <li>Náusea e vômito</li>
                    <li>Sonolência ou confusão mental</li>
                    <li>Convulsões</li>
                    <li>Pupilas de tamanhos diferentes</li>
                </ul>
                
                <h3>O que fazer:</h3>
                <ul>
                    <li>Acione imediatamente o SAMU (192)</li>
                    <li>Mantenha a vítima deitada e imóvel</li>
                    <li>Se houver sangramento, comprima levemente com pano limpo</li>
                    <li>Se inconsciente mas respirando, coloque em posição lateral de segurança (sem suspeita de fratura na coluna)</li>
                </ul>
                
                <h3>O que não fazer:</h3>
                <ul>
                    <li>Não mover a vítima sem necessidade</li>
                    <li>Não dar água, alimentos ou remédios</li>
                    <li>Não limpar sangue que sai dos ouvidos/nariz</li>
                </ul>
            </div>
        `,
        palavrasChave: ["trauma craniano", "cabeça", "batida", "concussão", "sangramento", "samu"]
    },
    
    // PROTOCOLO 53 - Varizes
    {
        id: 53,
        titulo: "Varizes",
        conteudo: `
            <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
            <h2>Varizes</h2>
            
            <div class="protocol-section">
                <h3>Tratamentos Naturais:</h3>
                <ul>
                    <li>Pegue tomate verde e corte ao meio. Aplique sobre as varizes e deixe agir por 5 minutos. 1-2 vezes ao dia durante 10 dias.</li>
                    <li>Chá de folha da uva: 1 litro de água para 7 folhas. Tomar uma xícara 3x ao dia.</li>
                    <li>Banhar as pernas com chá de folhas de sinamomo.</li>
                </ul>
            </div>
        `,
        palavrasChave: ["varizes", "pernas", "circulação", "tomate", "uva", "sinamomo"]
    }
];

// =====================================
// SEÇÃO 2: FARMÁCIA NATURAL
// =====================================

// PROTOCOLO 54 - Antibiótico Natural
topicos.push({
    id: 54,
    titulo: "Antibiótico Natural",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Antibiótico Natural</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>3 limões (um deles com casca)</li>
                <li>2 dentes de alho</li>
                <li>1 pedaço de cebola roxa</li>
                <li>1 copo de água filtrada ou suco de laranja</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Bata tudo muito bem no liquidificador.</li>
                <li>Coe e coloque 25 gotas de própolis e 1 colher de mel.</li>
                <li>Misture e beba na mesma hora.</li>
            </ul>
            
            <p><strong>Benefícios:</strong> Melhora imunidade, desintoxica, anti-inflamatório, combate febre.</p>
        </div>
    `,
    palavrasChave: ["antibiótico natural", "imunidade", "alho", "limão", "própolis", "cebola"]
});

// PROTOCOLO 55 - Extrato de Alho
topicos.push({
    id: 55,
    titulo: "Extrato de Alho",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Extrato de Alho</h2>
        
        <div class="protocol-section">
            <h3>Preparo:</h3>
            <ul>
                <li>Amassar uma cabeça de Alho.</li>
                <li>Colocar em 100ml de álcool de cereais.</li>
                <li>Esperar no mínimo 10 dias antes de usar.</li>
            </ul>
        </div>
    `,
    palavrasChave: ["extrato de alho", "alho", "tintura"]
});

// PROTOCOLO 56 - Fortificante de Uva
topicos.push({
    id: 56,
    titulo: "Fortificante de Uva",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Fortificante de Uva</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>1,5 litro de suco de uva integral (sem açúcar)</li>
                <li>7 limões (suco)</li>
                <li>7 dentes de alho</li>
                <li>1 cebola média</li>
                <li>5cm de babosa (gel)</li>
                <li>10-20 ameixas secas (opcional)</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Bater tudo no liquidificador.</li>
                <li>Coar e guardar na geladeira.</li>
                <li>Acrescentar 20 gotas de própolis (conservante).</li>
            </ul>
        </div>
    `,
    palavrasChave: ["fortificante", "uva", "alho", "cebola", "babosa", "imunidade"]
});

// PROTOCOLO 57 - Garrafada de Babosa e Mel
topicos.push({
    id: 57,
    titulo: "Garrafada de Babosa e Mel",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Garrafada de Babosa e Mel</h2>
        
        <div class="protocol-section">
            <h3>Preparo:</h3>
            <ul>
                <li>3 folhas grandes de Babosa, deixar de molho para sair a baba amarela.</li>
                <li>Retirar os espinhos e a casca de um lado.</li>
                <li>Retirar a polpa (gel) com uma colher.</li>
                <li>Acrescentar 500g de mel.</li>
                <li>Armazenar em garrafa escura na geladeira.</li>
            </ul>
            
            <h3>Como tomar:</h3>
            <ul>
                <li>Acima de 12 anos: 1 colher de sopa manhã e noite (1ª semana).</li>
                <li>Se não der diarréia, dobrar para 2 colheres.</li>
            </ul>
        </div>
    `,
    palavrasChave: ["garrafada", "babosa", "aloe vera", "mel", "imunidade"]
});

// PROTOCOLO 58 - Penicilina Russa
topicos.push({
    id: 58,
    titulo: "Penicilina Russa",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Penicilina Russa</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>2 laranjas (caldo)</li>
                <li>2 limões (caldo)</li>
                <li>2 dentes de alho amassados</li>
                <li>2 colheres (sopa) de mel</li>
                <li>Meio copo de água</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Bater tudo e tomar imediatamente.</li>
                <li>Não guardar para depois.</li>
            </ul>
            
            <h3>Indicações:</h3>
            <ul>
                <li>Inflamações (garganta, ouvido, etc.)</li>
                <li>Feridas, bronquite, pneumonia, asma</li>
                <li>Tosse, sinusite, rinite</li>
                <li>Furúnculos, aumentar imunidade</li>
            </ul>
            
            <h3>Dosagem:</h3>
            <ul>
                <li>Adultos: tomar 2 vezes ao dia</li>
                <li>Crianças >7 anos: metade da dose, 2x ao dia</li>
            </ul>
        </div>
    `,
    palavrasChave: ["penicilina russa", "inflamação", "garganta", "alho", "limão", "laranja", "mel"]
});

// PROTOCOLO 59 - Pasta de Inhame e Gengibre
topicos.push({
    id: 59,
    titulo: "Pasta de Inhame e Gengibre",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Pasta de Inhame e Gengibre</h2>
        
        <div class="protocol-section">
            <h3>Preparo:</h3>
            <ul>
                <li>Ralar inhame e gengibre (1 parte de gengibre para 10 de inhame).</li>
                <li>Misturar com farinha para dar liga (pasta úmida).</li>
                <li>Aplicar sobre a região e cobrir com gaze (nunca plástico).</li>
                <li>Quando secar, retirar com água morna e colocar novo.</li>
            </ul>
            
            <h3>Indicações:</h3>
            <ul>
                <li>"Puxa" furúnculos, quistos, unhas encravadas, verrugas, farpas.</li>
                <li>Desinflama cicatrizes, abscessos, tumores.</li>
                <li>Fraturas, queimaduras (evita inchaço e dor).</li>
                <li>Hemorroidas, apendicite, artrite, reumatismo.</li>
            </ul>
        </div>
    `,
    palavrasChave: ["inhame", "gengibre", "pasta", "emplastro", "furúnculo", "abcesso"]
});

// PROTOCOLO 60 - Pomada para queimaduras
topicos.push({
    id: 60,
    titulo: "Pomada de Açafrão, Camomila e Mel",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Pomada de Açafrão, Camomila e Mel</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>1 colher de sopa de açafrão (cúrcuma) em pó</li>
                <li>1 colher de sopa de camomila em pó</li>
                <li>200 ml de mel</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Misturar bem por pelo menos 3 minutos.</li>
                <li>Cobrir a ferida com a pomada.</li>
                <li>Aplicar 2-3 vezes ao dia.</li>
            </ul>
            
            <h3>Versão avançada para casos graves:</h3>
            <ul>
                <li>Acrescentar 20 pimentas malaguetas trituradas (sem sementes).</li>
            </ul>
        </div>
    `,
    palavrasChave: ["pomada", "açafrão", "camomila", "mel", "queimadura", "ferida"]
});

// PROTOCOLO 61 - Repelente Natural
topicos.push({
    id: 61,
    titulo: "Repelente Natural para Insetos",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Repelente Natural para Insetos</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>100 ml de Óleo de Amêndoas</li>
                <li>30 cravos da índia</li>
                <li>Meio litro de Álcool</li>
                <li>2 folhas de Citronela (opcional)</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Misturar todos os ingredientes em uma garrafa.</li>
                <li>Sacudir bem para misturar.</li>
                <li>Deixar descansar 24 horas.</li>
                <li>Pronto para usar.</li>
            </ul>
        </div>
    `,
    palavrasChave: ["repelente", "inseto", "mosquito", "cravo", "citronela", "óleo de amêndoas"]
});

// PROTOCOLO 62 - Tônico Energizante
topicos.push({
    id: 62,
    titulo: "Tônico Energizante",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Tônico Energizante</h2>
        
        <div class="protocol-section">
            <h3>Ingredientes:</h3>
            <ul>
                <li>1 quiabo cru</li>
                <li>1 folha de couve manteiga crua</li>
                <li>Meio litro de água</li>
                <li>2 colheres de mel ou melado</li>
            </ul>
            
            <h3>Preparo:</h3>
            <ul>
                <li>Bater tudo no liquidificador.</li>
                <li>Não precisa coar.</li>
                <li>Consumir o suco todo no mesmo dia.</li>
            </ul>
            
            <h3>Indicações:</h3>
            <ul>
                <li>Anemia, artrite, artrose, bursite, tendinite</li>
                <li>Câncer, cérebro (raciocínio)</li>
                <li>Febre (dengue, zika, covid)</li>
                <li>Fraqueza, fraturas, gastrite</li>
                <li>Osteoporose, queda de cabelo, unhas fracas</li>
            </ul>
        </div>
    `,
    palavrasChave: ["tônico", "energizante", "quiabo", "couve", "mel", "imunidade", "anemia"]
});

// =====================================
// SEÇÃO 3: TENHA EM CASA E KITS
// =====================================

// PROTOCOLO 63 - Tenha em Casa
topicos.push({
    id: 63,
    titulo: "Tenha em Casa - Ingredientes Chave",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Tenha em Casa - Ingredientes Chave</h2>
        
        <div class="protocol-section">
            <ul>
                <li><strong>Carvão ativado:</strong> Intoxicações, picadas, alergias.</li>
                <li><strong>Pomada de açafrão, camomila e mel:</strong> Queimaduras, feridas.</li>
                <li><strong>Pimenta malagueta:</strong> Infarto, hemorroidas.</li>
                <li><strong>Alho:</strong> AVC, vasodilatação, antibiótico.</li>
                <li><strong>Cebola:</strong> Pressão alta, queimaduras, problemas respiratórios.</li>
                <li><strong>Ervas:</strong> Capim-cidreira, chapéu-de-couro, alecrim.</li>
                <li><strong>Limão:</strong> Infarto, potencializar tratamentos.</li>
                <li><strong>Gel de babosa:</strong> Insolação, queimaduras.</li>
                <li><strong>Vinagre de maçã:</strong> Alergias, coceira.</li>
                <li><strong>Repolho e mel:</strong> Dores articulares.</li>
                <li><strong>Batata:</strong> Inflamações.</li>
                <li><strong>Óleo de rícino:</strong> Dissolve nódulos.</li>
                <li><strong>Pimenta caiena:</strong> Circulação.</li>
                <li><strong>Bicarbonato de sódio:</strong> Problemas nos olhos, aftas.</li>
            </ul>
        </div>
    `,
    palavrasChave: ["tenha em casa", "ingredientes", "kit", "emergência", "naturais"]
});

// PROTOCOLO 64 - Kit de Emergência Portátil
topicos.push({
    id: 64,
    titulo: "Kit de Emergência Portátil - Básico",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Kit de Emergência Portátil - Básico</h2>
        
        <div class="protocol-section">
            <h3>Itens Básicos:</h3>
            <ul>
                <li>Caixa de primeiros socorros</li>
                <li>Gaze estéril (5 unidades)</li>
                <li>Esparadrapo ou fita micropore</li>
                <li>Bandaid de vários tamanhos</li>
                <li>Ataduras de crepe e triangular</li>
                <li>Tesoura sem ponta, pinça</li>
                <li>Luvas descartáveis</li>
                <li>Analgésico e antitérmico</li>
                <li>Pomada para queimaduras</li>
                <li>Soro fisiológico</li>
                <li>Antisséptico</li>
                <li>Repelente, protetor solar</li>
                <li>Lenços umedecidos, álcool em gel</li>
            </ul>
            
            <h3>Itens Naturais:</h3>
            <ul>
                <li>Carvão vegetal (pó ou cápsulas)</li>
                <li>Pimenta Malagueta</li>
                <li>Pomada Natural para feridas</li>
                <li>Repelente Natural</li>
            </ul>
            
            <h3>Opcionais:</h3>
            <ul>
                <li>Colar cervical para Torcicolo</li>
                <li>Aparelho de desengasgo</li>
            </ul>
        </div>
    `,
    palavrasChave: ["kit", "emergência", "portátil", "primeiros socorros", "itens"]
});

// PROTOCOLO 65 - Kit para Áreas Remotas
topicos.push({
    id: 65,
    titulo: "Kit de Emergência para Áreas Remotas",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Kit de Emergência para Áreas Remotas</h2>
        
        <div class="protocol-section">
            <h3>Acrescente ao Kit Básico:</h3>
            
            <h4>Sobrevivência e Utilidades:</h4>
            <ul>
                <li>Lanterna com pilhas extras</li>
                <li>Power bank</li>
                <li>Apito de emergência</li>
                <li>Canivete multiuso</li>
                <li>Corda (3 metros)</li>
                <li>Fita adesiva prateada</li>
                <li>Isqueiro ou fósforos à prova d'água</li>
                <li>Manta térmica</li>
                <li>Capa de chuva</li>
            </ul>
            
            <h4>Alimentação e Hidratação:</h4>
            <ul>
                <li>Água mineral</li>
                <li>Sachês de sal e açúcar</li>
            </ul>
            
            <h4>Itens Pessoais:</h4>
            <ul>
                <li>Dinheiro em espécie</li>
                <li>Cópia de documentos</li>
                <li>Medicamentos de uso pessoal</li>
            </ul>
            
            <h4>Itens Adicionais para Acampamento:</h4>
            <ul>
                <li>Purificador de água em pastilhas</li>
                <li>Kit de pesca compacto</li>
                <li>Bússola</li>
                <li>Apito com espelho de sinalização</li>
            </ul>
        </div>
    `,
    palavrasChave: ["kit remoto", "área remota", "campo", "sobrevivência", "acampamento"]
});

// PROTOCOLO 66 - Referências
topicos.push({
    id: 66,
    titulo: "Referências de Pesquisa",
    conteudo: `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Referências de Pesquisa</h2>
        
        <div class="protocol-section">
            <ul>
                <li>Dr. João Vaz – Especialista em nutrição Funcional</li>
                <li>Bárbara Oneill – Naturopata</li>
                <li>Dr. Adriano Silva – Naturopata</li>
                <li>Livro "Onde Não Há Médico" – David Werner</li>
                <li>Busca na Internet com auxílio de IA</li>
            </ul>
            <p><em>Compilado por Flávio Vieira, estudante de Naturopatia e Saúde.</em></p>
        </div>
    `,
    palavrasChave: ["referências", "fontes", "bibliografia", "david werner", "naturopatia"]
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

// Funções para o menu principal (Introdução, Importante, Índice)
function mostrarIntroducao() {
    const content = document.getElementById('protocolContent');
    content.innerHTML = `
        <button class="back-button" onclick="voltarParaLista()">← Voltar</button>
        <h2>Introdução</h2>
        
        <div class="protocol-section">
            <p>Bem-vindo ao aplicativo <strong>Primeiros Socorros - Métodos Normais e Naturais</strong>.</p>
            <p>Este guia foi desenvolvido para fornecer instruções rápidas, claras e objetivas sobre como agir em situações de emergência, utilizando tanto métodos convencionais quanto alternativos naturais.</p>
        </div>

        <div class="protocol-section">
            <h3>📌 Objetivo</h3>
            <p>Oferecer informações confiáveis e acessíveis para que qualquer pessoa possa prestar os primeiros atendimentos enquanto aguarda ajuda profissional.</p>
        </div>

        <div class="protocol-section">
            <h3>⚠️ Aviso Importante</h3>
            <p>Este aplicativo é um guia informativo e não substitui treinamento profissional em primeiros socorros. Em casos de emergência grave, sempre priorize o atendimento médico especializado.</p>
        </div>

        <div class="protocol-section">
            <h3>📞 Telefones de Emergência</h3>
            <ul>
                <li><strong>Samu:</strong> 192</li>
                <li><strong>Bombeiros:</strong> 193</li>
                <li><strong>Polícia:</strong> 190</li>
                <li><strong>Defesa Civil:</strong> 199</li>
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
                <li><strong>Não mova a vítima</strong> – A menos que haja perigo iminente.</li>
            </ul>
        </div>

        <div class="protocol-section">
            <h3>📋 Avaliação Inicial (ABCDE)</h3>
            <ul>
                <li><strong>A</strong> – Vias aéreas: Verifique se estão desobstruídas.</li>
                <li><strong>B</strong> – Respiração: Veja se a vítima respira.</li>
                <li><strong>C</strong> – Circulação: Verifique pulso e sangramentos.</li>
                <li><strong>D</strong> – Neurológico: Avalie consciência.</li>
                <li><strong>E</strong> – Exposição: Procure lesões visíveis.</li>
            </ul>
        </div>

        <div class="protocol-section">
            <h3>⚠️ O que NÃO fazer:</h3>
            <ul>
                <li>Não ofereça alimentos a vítima inconsciente.</li>
                <li>Não remova objetos encravados.</li>
                <li>Não ignore sinais de choque.</li>
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

// Inicializar app quando a página carregar
document.addEventListener('DOMContentLoaded', initApp);
