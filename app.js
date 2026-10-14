// ==========================================================================
// YPSILON BIOINFORMATICS PLATFORM - INTERACTIVE CONTROLLER (SHOWCASE NEUTRO)
// ==========================================================================

const toolsDatabase = {
  ngs: {
    title: "NGS Analysis",
    category: "Genómica & Descoberta",
    desc: "Processamento de leituras FASTQ emparelhadas (R1/R2), controlo de qualidade e extração heurística de CDRs.",
    formFields: [
      { label: "Laboratório de Destino", type: "select", options: ["Biblioteca_Sintetica_01", "Projeto_Nanobodies_VHH"] },
      { label: "FASTQ Forward (R1)", type: "select", options: ["amostra_demo_R1.fastq.gz (Pasta Partilhada Segura)", "biblioteca_vhh_R1.fastq.gz"] },
      { label: "FASTQ Reverse (R2)", type: "select", options: ["amostra_demo_R2.fastq.gz (Pasta Partilhada Segura)", "biblioteca_vhh_R2.fastq.gz"] },
      { label: "pH Ambiental (Cálculo de Cargas)", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Funil de Filtragem & Heurística",
        icon: "filter_alt",
        body: "O algoritmo filtra leituras por qualidade Phred (Q30) e aplica expressões regulares nas âncoras conservadas de imunoglobulinas (Cisteína canónica em FR1/FR3, Triptofano em FR2 e motivo FG em FR4) para isolar com precisão as alças CDR1, CDR2 e CDR3."
      },
      {
        title: "Mecanismo 'Promote to Success'",
        icon: "check_circle",
        body: "Variantes com mutações extremas nas âncoras não são descartadas irreversivelmente: são encaminhadas para a tabela de 'Failed Sequences', onde o investigador pode inspecionar, corrigir manualmente e promover o clone de volta ao pipeline principal."
      },
      {
        title: "Bibliotecas & Backend",
        icon: "memory",
        body: "Executado em contentor Docker isolado com Python 3.10, BioPython (SeqIO), Pandas e rotinas multithreaded para descompressão assíncrona de ficheiros gzip."
      },
      {
        title: "Outputs Gerados",
        icon: "dataset",
        body: "Tabela de clones únicos validados, perfil termodinâmico instantâneo (MW, pI, carga molar), gráficos de distribuição clonal e gravação em Ficheiros Ghost."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Simulação de Resultados do Funil NGS (Dados Sintéticos)</h4>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">RAW READS</div>
            <div style="font-size:20px; font-weight:800; color:#0f172a;">120,450</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">VALID READS</div>
            <div style="font-size:20px; font-weight:800; color:#15803d;">119,728 (99.4%)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">UNIQUE CLONES</div>
            <div style="font-size:20px; font-weight:800; color:#2563eb;">28,340</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">TOP CLONE FREQ</div>
            <div style="font-size:20px; font-weight:800; color:#dc2626;">54x</div>
          </div>
        </div>
        <div style="background:#f1f5f9; padding:14px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:12px; color:#334155; line-height:1.6;">
          <strong>Sequência Representativa Sintética (Top 1):</strong><br>
          EVQLVESGGGLVQPGGSLRLSCAASGFTFS<span style="color:#2563eb; font-weight:700;">[CDR1: SYAMS]</span>WVRQAPGKGLEWVA<span style="color:#d97706; font-weight:700;">[CDR2: AISGSGGSTYY]</span>ADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYC<span style="color:#7c3aed; font-weight:700;">[CDR3: ARDFGSYYWFDY]</span>WGQGTLVTVSS
        </div>
      </div>
    `
  },

  seq: {
    title: "Sequence Analysis",
    category: "Biofísica & Desenvolvibilidade",
    desc: "Diagnóstico biofísico instantâneo e contagem de cisteínas livres para previsão de agregados ou conjugação (ADCs).",
    formFields: [
      { label: "Laboratório", type: "select", options: ["Biblioteca_Sintetica_01"] },
      { label: "Título da Análise", type: "text", value: "Diagnostico_Rapido_Clone_01" },
      { label: "Sequência de Aminoácidos (Fasta ou texto simples)", type: "textarea", value: "EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVAAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDFGSYYWFDYWGQGTLVTVSS" },
      { label: "pH para Cálculo da Carga", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Cálculo de Propriedades Molares",
        icon: "calculate",
        body: "Calcula o Peso Molecular preciso com base na massa monoisotópica de cada resíduo, o ponto isoelétrico teórico (pI) pela equação de Henderson-Hasselbalch e o balanço líquido de cargas a pH fisiológico."
      },
      {
        title: "Deteção Crítica de Cisteínas",
        icon: "warning",
        body: "Contabiliza o número total de resíduos Cys. Um valor ímpar gera alerta imediato de cisteína livre desemparelhada na superfície, crucial para prevenir pontes dissulfeto espúrias ou planear conjugação em Antibody-Drug Conjugates (ADCs)."
      },
      {
        title: "Índice de Instabilidade & GRAVY",
        icon: "thermostat",
        body: "Avalia a estabilidade proteolítica (índice de Guruprasad) e a hidrofobicidade global GRAVY (Kyte & Doolittle) para prever solubilidade em soluções farmacêuticas."
      },
      {
        title: "Biblioteca Responsável",
        icon: "code",
        body: "Módulo Bio.SeqUtils.ProtParam e algoritmos matemáticos termodinâmicos próprios da plataforma Ypsilon."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Diagnóstico Biofísico do Clone Sintético</h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">PESO MOLECULAR</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">12.82 kDa</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">PONTO ISOELÉTRICO (pI)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">6.65</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">CARGA (@ pH 7.4)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">-0.43</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">CISTEÍNAS TOTAIS</div>
            <div style="font-size:18px; font-weight:800; color:#15803d;">2 (Formam Ponte)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">ÍNDICE INSTABILIDADE</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">42.06 (Estável)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">HIDROFOBICIDADE (GRAVY)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">-0.430 (Hidrofílico)</div>
          </div>
        </div>
      </div>
    `
  },

  trans: {
    title: "Translation",
    category: "Genómica & Tradução",
    desc: "Tradução de DNA em proteína com identificação dos 3 reading frames e anotação visual do núcleo de anticorpo.",
    formFields: [
      { label: "Sequência de Nucleótidos (DNA)", type: "textarea", value: "GAGGTGCAGCTGGTGGAGTCTGGGGGAGGCTTGGTCCAGCCTGGGGGGTCCCTGAGACTCTCCTGTGCAGCCTCTGGATTCACCTTTAGTAGCTATGCCATGAGCTGGGTCCGCCAGGCTCCAGGGAAGGGGCTGGAGTGGGTCTCAGCTATTAGTGGTAGTGGTGGTAGCACATACTACGCAGACTCCGTGAAGGGCCGGTTCACCATCTCCAGAGACAATTCCAAGAACACGCTGTATCTGCAAATGAACAGCCTGAGAGCCGAGGACACGGCCGTGTATTACTGTGCGAGAGACTTTGGTAGCTACTACTGGTTCGACTACTGGGGCCAGGGAACCCTGGTCACCGTCTCCTCA" },
      { label: "Tabela de Código Genético", type: "select", options: ["Standard Genetic Code (Bacterial/Eukaryotic)"] }
    ],
    algoCards: [
      {
        title: "Quadros de Leitura (Reading Frames)",
        icon: "view_carousel",
        body: "Avalia os três quadros de leitura potenciais (+1, +2, +3), permitindo ao investigador detetar se existem deleções de nucleótidos (*frameshifts*) ou codões de paragem prematuros (*stop codons*)."
      },
      {
        title: "Realce do Núcleo do Anticorpo",
        icon: "brush",
        body: "Localiza automaticamente as assinaturas AQAA e caudas de histidinas (His-Tag) adicionadas em vetores de expressão fagídica."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Tradução no Quadro Ótimo (Frame +1)</h4>
        <div style="font-size:11px; color:#15803d; font-weight:700; margin-bottom:10px;">Codão de Paragem Ausente (Tradução Contínua Bem-Sucedida)</div>
        <div style="background:#f1f5f9; padding:14px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:13px; color:#1e293b; line-height:1.6; word-break:break-all;">
          EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVSAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDFGSYYWFDYWGQGTLVTVSS
        </div>
      </div>
    `
  },

  align: {
    title: "Alignment",
    category: "Alinhamento & MSA",
    desc: "Alinhamento múltiplo via Clustal Omega nativo com visualizador interativo colorido por famílias físico-químicas.",
    formFields: [
      { label: "Laboratório", type: "select", options: ["Biblioteca_Sintetica_01"] },
      { label: "Conjunto de Sequências", type: "select", options: ["Relatorio_Ghost_Top10 (Ficheiro Operacional Leve)"] },
      { label: "Destacar Mutações Relativas ao Consenso", type: "checkbox", value: "true" }
    ],
    algoCards: [
      {
        title: "Motor Clustal Omega Nativo",
        icon: "hub",
        body: "Executa alinhamentos progressivos utilizando árvores guia mBed e matrizes de pontuação Gonnet/PAM. Totalmente integrado como binário nativo no backend."
      },
      {
        title: "Paleta Cromática Clustal-X",
        icon: "palette",
        body: "Cada aminoácido é colorido em tempo real pela sua classe: Laranja (Hidrofóbico), Verde (Polar), Vermelho (Ácido), Roxo (Básico) e Amarelo (Cisteínas)."
      },
      {
        title: "Cálculo de Significância (P-Value)",
        icon: "functions",
        body: "A tabela de variações calcula o valor de P-Value para cada resíduo alterado na população, distinguindo mutações aleatórias de enriquecimento clonal."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Matriz de Alinhamento Demonstrativa (Clustal Omega)</h4>
        <div style="display:inline-block; padding:10px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; font-size:13px; font-weight:700; color:#166534; margin-bottom:15px;">
          Identidade Global de Alinhamento: 94.62%
        </div>
        <div style="overflow-x:auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; padding:12px; font-family:'JetBrains Mono', monospace; font-size:11px;">
          <div style="padding:4px 0; border-bottom:1px solid #e2e8f0; font-weight:700; color:#0f172a;">CONSENSUS: EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVA...</div>
          <div style="padding:4px 0; color:#334155;">Clone_01 : EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVA...</div>
          <div style="padding:4px 0; color:#334155;">Clone_02 : EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVA...</div>
          <div style="padding:4px 0; color:#334155;">Clone_03 : EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVA...</div>
        </div>
      </div>
    `
  },

  phylo: {
    title: "Phylogenetic Trees",
    category: "Evolução & Filogenia",
    desc: "Construção de dendrogramas UPGMA para mapear parentesco evolutivo e eventos de hipermutações somáticas.",
    formFields: [
      { label: "Laboratório", type: "select", options: ["Biblioteca_Sintetica_01"] },
      { label: "Alinhamento de Origem", type: "select", options: ["Alinhamento_Top10_Sintetico"] }
    ],
    algoCards: [
      {
        title: "Método UPGMA & Distâncias Molares",
        icon: "account_tree",
        body: "Utiliza a matriz de distâncias de identidade de sequências para agrupar progressivamente os clones mais próximos através da média aritmética de distâncias."
      },
      {
        title: "Interpretação da Árvore",
        icon: "insights",
        body: "O eixo horizontal mede substituições por site. Ramos curtos terminais refletem hipermutações pontuais derivadas de uma linhagem comum de sucesso."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Dendrograma Filogenético UPGMA (Estrutura Ilustrativa)</h4>
        <div style="font-size:12px; color:#64748b; margin-bottom:15px;">Distância Genética medida em substituições por resíduo.</div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:15px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:12px; line-height:1.8;">
          +--- Clone_Alpha (Seq.1) [dist: 0.004]<br>
          |&nbsp;&nbsp;&nbsp;&nbsp;+--- Clone_Beta (Seq.2) [dist: 0.006]<br>
          +--- Clone_Gamma (Seq.3) [dist: 0.019]<br>
          |<br>
          +-------------------------- Clone_Delta (Família B) [dist: 0.246]
        </div>
      </div>
    `
  },

  comp: {
    title: "Comparative Analysis",
    category: "Comparação de Bibliotecas",
    desc: "Cruzamento de frequências clonais entre rondas de biopanning para identificar clones enriquecidos.",
    formFields: [
      { label: "Dataset Referência (Ronda 1)", type: "select", options: ["Biblioteca_Inicial_R1"] },
      { label: "Dataset Comparativo (Ronda Final)", type: "select", options: ["Biblioteca_Enriquecida_R3"] }
    ],
    algoCards: [
      {
        title: "Cálculo de Enriquecimento Clonal",
        icon: "trending_up",
        body: "Identifica a taxa de enriquecimento (Fold-Change) de variantes entre sucessivos ciclos de seleção fagídica."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Sobreposição Clonal</h4>
        <p style="font-size:13px; color:#475569;">Candidatos com enriquecimento superior a 15x nos ciclos de seleção.</p>
      </div>
    `
  },

  "3d": {
    title: "Antibody Structural Profiler",
    category: "Modelação 3D & Inteligência Artificial",
    desc: "Predição estrutural tridimensional com AlphaFold2 / ColabFold, pontuações de confiança pLDDT e cálculo SASA.",
    formFields: [
      { label: "Sequência para Modelação", type: "textarea", value: "EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVAAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDFGSYYWFDYWGQGTLVTVSS" },
      { label: "Número de Modelos / Reciclagens", type: "select", options: ["1 Modelo (Rápido)", "3 Reciclagens (Alta Resolução)"] }
    ],
    algoCards: [
      {
        title: "Integração ColabFold / AlphaFold2",
        icon: "memory",
        body: "Comunicação via API assíncrona com nó de computação acelerado por GPU (NVIDIA CUDA) para geração de coordenadas PDB."
      },
      {
        title: "Confiança Residual (pLDDT)",
        icon: "speed",
        body: "Mapeamento resíduo a resíduo da confiança estereoquímica. Valores de pLDDT > 90 indicam conformação estrutural de altíssima certeza."
      },
      {
        title: "Área Acessível ao Solvente (SASA)",
        icon: "water_drop",
        body: "Cálculo da acessibilidade dos resíduos nas alças CDR3 para identificar os pontos de contacto direto com o epítopo."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Relatório de Modelação Estrutural 3D (Simulação)</h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:15px;">
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#166534; font-weight:700;">pLDDT MÉDIO GLOBAL</div>
            <div style="font-size:20px; font-weight:800; color:#15803d;">94.2 / 100</div>
          </div>
          <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#1e40af; font-weight:700;">pLDDT DA ALÇA CDR3</div>
            <div style="font-size:20px; font-weight:800; color:#2563eb;">89.7 / 100</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#475569; font-weight:700;">ÁREA SASA TOTAL</div>
            <div style="font-size:20px; font-weight:800; color:#0f172a;">6,820 Å²</div>
          </div>
        </div>
        <div style="font-size:12px; color:#64748b;">Estrutura PDB gerada em conformidade com os limites canónicos de Chothia/Kabat.</div>
      </div>
    `
  },

  dock: {
    title: "Interaction (Docking)",
    category: "Biofísica Computacional",
    desc: "Modelação molecular da interface anticorpo-antigénio e cálculo de energias livres de interação.",
    formFields: [
      { label: "Ficheiro PDB do Anticorpo", type: "select", options: ["Modelo_ColabFold_Clone01.pdb"] },
      { label: "Ficheiro PDB do Alvo (Antigénio)", type: "select", options: ["Target_Protein_Domain.pdb"] }
    ],
    algoCards: [
      {
        title: "Amostragem Conformacional",
        icon: "device_hub",
        body: "Algoritmos de docking molecular com refinamento energético para prever os resíduos intervenientes no parátopo."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Interface de Contacto Predita</h4>
        <div style="font-size:13px; color:#15803d; font-weight:600;">Energia de Ligação estimada: -11.4 kcal/mol (Forte Afinidade)</div>
      </div>
    `
  },

  mat: {
    title: "Affinity Maturation Lab",
    category: "Engenharia de Proteínas & IA",
    desc: "Maturação de afinidade in silico utilizando o modelo de linguagem ESM-2 para identificar mutações benéficas.",
    formFields: [
      { label: "Sequência Matriz (Wild-Type)", type: "textarea", value: "EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVAAISGSGGSTYYADSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCARDFGSYYWFDYWGQGTLVTVSS" },
      { label: "Alvo da Mutagénese", type: "select", options: ["Alças CDRs apenas (Preservar Frameworks)", "CDR3 estrita"] }
    ],
    algoCards: [
      {
        title: "Modelo de Linguagem ESM-2",
        icon: "psychology",
        body: "O modelo ESM-2 (Meta AI) analisa a probabilidade evolutiva e a estabilidade conformacional de cada uma das 19 substituições possíveis em cada posição das CDRs."
      },
      {
        title: "Pontuação ΔLog-Likelihood",
        icon: "score",
        body: "Valores positivos indicam mutações favorecidas na evolução natural das famílias de anticorpos, com menor risco de desnaturação ou perda de solubilidade."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Top Mutações Propostas pelo Modelo ESM-2</h4>
        <table class="neutral-table">
          <thead>
            <tr><th>Posição</th><th>Original</th><th>Mutação</th><th>Região</th><th>ΔScore ESM-2</th></tr>
          </thead>
          <tbody>
            <tr><td>31</td><td>S</td><td><strong>Y (Tirosina)</strong></td><td>CDR1</td><td><span style="color:#15803d; font-weight:700;">+2.41 (Favorável)</span></td></tr>
            <tr><td>53</td><td>G</td><td><strong>D (Aspartato)</strong></td><td>CDR2</td><td><span style="color:#15803d; font-weight:700;">+1.85 (Favorável)</span></td></tr>
            <tr><td>102</td><td>G</td><td><strong>W (Triptofano)</strong></td><td>CDR3</td><td><span style="color:#15803d; font-weight:700;">+3.12 (Alta Afinidade)</span></td></tr>
          </tbody>
        </table>
      </div>
    `
  }
};

let currentActiveToolKey = 'ngs';

// ==========================================
// NAVEGAÇÃO ENTRE MÓDULOS
// ==========================================
function switchModule(modName) {
  // Ocultar todos os módulos
  document.querySelectorAll('.module-view').forEach(view => {
    view.classList.remove('active');
  });

  // Ativar o módulo selecionado
  const targetView = document.getElementById(`mod-${modName}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Atualizar botões da sidebar
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-mod') === modName) {
      btn.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar listeners na sidebar
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mod = btn.getAttribute('data-mod');
    switchModule(mod);
  });
});

// ==========================================
// ABRIR TOOL RUNNER
// ==========================================
function openToolRunner(toolKey) {
  const tool = toolsDatabase[toolKey];
  if (!tool) return;

  currentActiveToolKey = toolKey;

  document.getElementById('runnerToolTitle').textContent = tool.title;
  document.getElementById('runnerToolDesc').textContent = tool.desc;
  document.getElementById('runnerToolCategory').textContent = tool.category;

  // Gerar campos de formulário
  const formContainer = document.getElementById('runnerFormFields');
  formContainer.innerHTML = '';

  tool.formFields.forEach(field => {
    const group = document.createElement('div');
    group.className = 'form-field-group';

    const label = document.createElement('label');
    label.textContent = field.label;
    group.appendChild(label);

    if (field.type === 'select') {
      const select = document.createElement('select');
      select.className = 'styled-select';
      field.options.forEach(opt => {
        const option = document.createElement('option');
        option.textContent = opt;
        select.appendChild(option);
      });
      group.appendChild(select);
    } else if (field.type === 'textarea') {
      const textarea = document.createElement('textarea');
      textarea.className = 'styled-textarea';
      textarea.rows = 4;
      textarea.value = field.value || '';
      group.appendChild(textarea);
    } else {
      const input = document.createElement('input');
      input.type = field.type;
      input.className = 'styled-input';
      input.value = field.value || '';
      group.appendChild(input);
    }

    formContainer.appendChild(group);
  });

  // Gerar detalhes de algoritmo (Tab 2)
  const algoContainer = document.getElementById('runnerAlgoDetails');
  algoContainer.innerHTML = '';

  tool.algoCards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'algo-card';
    cardEl.innerHTML = `
      <h4><span class="material-symbols-outlined" style="color:#2563eb;">${card.icon}</span> ${card.title}</h4>
      <p>${card.body}</p>
    `;
    algoContainer.appendChild(cardEl);
  });

  // Resetar simulação
  document.getElementById('runnerSimulationOutput').innerHTML = `
    <span class="material-symbols-outlined placeholder-icon">experiment</span>
    <h4>Sem execução ativa</h4>
    <p>Clique no botão <strong>"Executar Simulação Demonstrativa"</strong> para visualizar como a plataforma renderiza os resultados estruturais de forma neutra.</p>
  `;

  // Mudar para o módulo Tool_Runner e abrir Tab 1
  switchRunnerTab('overview');
  switchModule('Tool_Runner');
}

// ==========================================
// TABS DO TOOL RUNNER
// ==========================================
function switchRunnerTab(tabName) {
  document.querySelectorAll('.tab-pill').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const activeBtn = Array.from(document.querySelectorAll('.tab-pill')).find(btn => 
    btn.textContent.toLowerCase().includes(tabName.toLowerCase()) || 
    (tabName === 'overview' && btn.textContent.includes('Visão')) ||
    (tabName === 'architecture' && btn.textContent.includes('Algoritmos')) ||
    (tabName === 'demo' && btn.textContent.includes('Simulação'))
  );

  if (activeBtn) activeBtn.classList.add('active');

  const activeContent = document.getElementById(`tab-${tabName}`);
  if (activeContent) activeContent.classList.add('active');
}

// Simular execução neutra
function simulateToolExecution() {
  const tool = toolsDatabase[currentActiveToolKey];
  if (!tool) return;

  switchRunnerTab('demo');
  const outputContainer = document.getElementById('runnerSimulationOutput');
  outputContainer.innerHTML = `
    <div style="padding: 10px 0;">
      <div style="display:inline-flex; align-items:center; gap:8px; background:#eff6ff; color:#1e40af; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:700; margin-bottom:15px;">
        <span class="material-symbols-outlined" style="font-size:16px;">verified</span>
        Pipeline Concluído com Sucesso em Contentor Isolado
      </div>
      ${tool.demoOutput}
    </div>
  `;
}

// ==========================================
// MODAL DIALOGS
// ==========================================
function openNewLabModal() {
  const modal = document.getElementById('genericModal');
  document.getElementById('modalTitle').textContent = 'Criar Novo Laboratório Virtual';
  document.getElementById('modalBody').innerHTML = `
    <p style="margin-bottom:14px; font-size:13.5px; color:#475569;">
      Na plataforma Ypsilon, os <strong>Laboratórios Virtuais</strong> permitem isolar conjuntos de dados, campanhas de triagem ou alvos biológicos de diferentes clientes ou teses, garantindo total privacidade e controlo de acessos.
    </p>
    <div class="form-field-group" style="margin-bottom:12px;">
      <label>Nome do Laboratório:</label>
      <input type="text" class="styled-input" placeholder="Ex: Projeto_Anticorpo_X">
    </div>
    <div class="form-field-group">
      <label>Descrição do Alvo:</label>
      <input type="text" class="styled-input" placeholder="Breve nota científica sobre o alvo...">
    </div>
  `;
  modal.classList.add('active');
}

function showGhostInfo(assetName) {
  const modal = document.getElementById('genericModal');
  document.getElementById('modalTitle').textContent = `Registo: ${assetName}`;
  document.getElementById('modalBody').innerHTML = `
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:15px; margin-bottom:12px;">
      <div style="font-size:12px; color:#64748b; font-weight:700;">TIPO DE RECURSO</div>
      <div style="font-size:14px; color:#0f172a; font-weight:600;">Registo em Base de Dados (Instância Neutra)</div>
    </div>
    <p style="font-size:13px; color:#475569; line-height:1.5;">
      Este registo encontra-se arquivado na base de dados SQLite/PostgreSQL da plataforma. Na aplicação completa em produção, ao clicar em "Abrir", os clones e as matrizes associadas são carregados instantaneamente para o módulo correspondente.
    </p>
  `;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('genericModal').classList.remove('active');
}

// Fechar com Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ==========================================
// PESQUISA GLOBAL
// ==========================================
const mockArchive = [
  { id: "Seq.1 (Clone_Alpha)", cdr3: "ARDFGSYYWFDY", lab: "Biblioteca_Sintetica_01", type: "Anticorpo Monoclonal" },
  { id: "Seq.2 (Clone_Beta)", cdr3: "ARDLGYGYVMDY", lab: "Biblioteca_Sintetica_01", type: "Nanobody VHH" },
  { id: "Seq.3 (Clone_Gamma)", cdr3: "AKEYSSSWFAY", lab: "Biblioteca_Sintetica_01", type: "Fragmento scFv" },
  { id: "Seq.4 (Clone_Delta)", cdr3: "AREGAYYSYAMDY", lab: "Biblioteca_Sintetica_01", type: "Anticorpo Humano" }
];

function handleSearch(query) {
  const area = document.getElementById('searchResultsArea');
  if (!query.trim()) {
    area.innerHTML = '<div class="search-hint">Escreva um termo na barra de pesquisa para filtrar os registos demonstrativos da plataforma.</div>';
    return;
  }

  const matches = mockArchive.filter(item => 
    item.id.toLowerCase().includes(query.toLowerCase()) ||
    item.cdr3.toLowerCase().includes(query.toLowerCase()) ||
    item.lab.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    area.innerHTML = `<div class="search-hint">Nenhum resultado demonstrativo encontrado para "${query}".</div>`;
    return;
  }

  let html = `<div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:12px;">Resultados Encontrados (${matches.length})</div>`;
  matches.forEach(item => {
    html += `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:12px 16px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; font-size:13px; color:#0f172a;">${item.id}</div>
          <div style="font-size:11.5px; color:#64748b;">CDR3: <code style="background:#e2e8f0; padding:1px 4px; border-radius:2px;">${item.cdr3}</code> | Lab: ${item.lab}</div>
        </div>
        <span style="font-size:11px; background:#dbeafe; color:#1e40af; padding:3px 8px; border-radius:4px; font-weight:600;">${item.type}</span>
      </div>
    `;
  });

  area.innerHTML = html;
}

// ==========================================
// WORKSPACE (STREAMLIT NATIVE LAYOUT)
// ==========================================
function switchWsTab(tabId) {
  document.querySelectorAll('.st-tab-item').forEach(btn => {
    btn.classList.remove('active');
  });
  const clickedBtn = Array.from(document.querySelectorAll('.st-tab-item')).find(b => 
    b.getAttribute('onclick')?.includes(`'${tabId}'`)
  );
  if (clickedBtn) clickedBtn.classList.add('active');

  document.querySelectorAll('.ws-tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  const targetPane = document.getElementById(`ws-tab-${tabId}`);
  if (targetPane) targetPane.classList.add('active');
}

function selectLab(labIndex, labName, labDesc) {
  const buttons = document.querySelectorAll('.st-lab-btn');
  buttons.forEach((btn, idx) => {
    if (idx + 1 === labIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const titleEl = document.getElementById('activeLabTitle');
  if (titleEl) titleEl.textContent = labName;

  const descEl = document.getElementById('activeLabDesc');
  if (descEl) descEl.textContent = labDesc;
}

function toggleBatchAction(checkbox) {
  const batchBar = document.getElementById('batchActionsBar');
  const countText = document.getElementById('batchCountText');
  if (!batchBar) return;

  const checkboxes = document.querySelectorAll('#ws-tab-experiments input[type="checkbox"]');
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

  if (checkedCount > 0) {
    batchBar.style.display = 'flex';
    if (countText) {
      countText.textContent = `Batch Actions (${checkedCount} selecionado${checkedCount > 1 ? 's' : ''})`;
    }
  } else {
    batchBar.style.display = 'none';
  }
}

function showNotification(msg) {
  let toast = document.getElementById('showcaseToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'showcaseToast';
    toast.className = 'showcase-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-symbols-outlined" style="font-size:18px; color:#38bdf8;">info</span> <span>${msg}</span>`;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

