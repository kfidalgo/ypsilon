# Ypsilon — Plataforma Bioinformática para Descoberta de Anticorpos

**Demonstração Interativa & Portfólio Tecnológico**  
*Desenvolvido por Cátia Fidalgo — Faculdade de Medicina Veterinária (Universidade de Lisboa)*

---

## 📌 Sobre a Plataforma
A **Ypsilon** é uma plataforma bioinformática integral concebida para automatizar e acelerar a descoberta, caracterização e engenharia *in silico* de anticorpos a partir de dados de sequenciação de nova geração (**NGS** / *Phage Display*).

A plataforma elimina a necessidade de interação via terminal de comandos, oferecendo uma interface web intuitiva e unificada sob contentores Docker que orquestra 9 ferramentas analíticas avançadas:

1. **NGS Analysis:** Filtragem de qualidade Phred, anotação heurística e extração automatizada de regiões CDR1, CDR2 e CDR3 com mecanismo *Promote to Success*.
2. **Sequence Analysis:** Avaliação termodinâmica rápida, determinação de ponto isoelétrico (pI), peso molecular, índice de instabilidade e deteção de cisteínas livres não emparelhadas.
3. **Translation:** Tradução de DNA nos 3 quadros de leitura (*Reading Frames*) com realce de resíduos canónicos e núcleos conservados.
4. **Alignment:** Alinhamento múltiplo via **Clustal Omega** com visualizador interativo colorido por classes físico-químicas de aminoácidos e cálculo de P-Value de mutações.
5. **Phylogenetic Trees:** Reconstrução de linhagens clonais e cálculo de distâncias evolutivas pelo método hierárquico **UPGMA**.
6. **Comparative Analysis:** Análise de sobreposição e enriquecimento clonal (*Fold-Change*) entre diferentes bibliotecas e rondas de seleção.
7. **Antibody Structural Profiler:** Modelação tridimensional via **ColabFold / AlphaFold2**, mapa residual de confiança **pLDDT** e cálculo de área acessível ao solvente (**SASA**).
8. **Interaction (Docking):** Modelação da interface de ligação anticorpo-antigénio e estimativa de energias livres de afinidade.
9. **Affinity Maturation Lab:** Maturação de afinidade *in silico* baseada no modelo de linguagem biológico **ESM-2** (Meta AI) para sugerir mutações favoráveis.

---

## 🔒 Nota de Confidencialidade
Esta demonstração pública utiliza exclusivamente sequências sintéticas e dados neutros para preservar o segredo dos alvos e amostras laboratoriais proprietárias do projeto de investigação.

---

## 🚀 Como Executar Localmente
Para explorar a demonstração no seu computador:
1. Abra a pasta `ypsilon-showcase`.
2. Dê duplo clique no ficheiro `index.html`.
3. A aplicação abre instantaneamente em qualquer navegador web moderno.
