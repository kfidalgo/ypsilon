// ==========================================================================
// YPSILON BIOINFORMATICS PLATFORM - INTERACTIVE CONTROLLER (SHOWCASE)
// Specialized in Antibody Variable Light Chain (VL) Discovery & Engineering
// 100% English Edition
// ==========================================================================

const toolsDatabase = {
  ngs: {
    title: "NGS Analysis",
    category: "High-Throughput Sequencing & Repertoire Mining",
    desc: "End-to-end processing pipeline for raw paired-end FASTQ reads (R1/R2) from antibody Variable Light chain (VL) libraries. Executes BBMerge paired-end assembly, in silico 3-frame translation, biological quality filtering (eliminating premature stop codons, verifying functional length >= 100 aa, and confirming canonical cysteines for disulfide stability), heuristic framework anchor detection (FR1/FR4), automated segmentation of CDR-L1, CDR-L2, and CDR-L3 loops, clonal abundance calculation with frequency ranking, thermodynamic property profiling, and the 'Promote to Success' curation engine for somatic variant rescue.",
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01", "Lambda_VL_Screening_Project"] },
      { label: "Analysis Title", type: "text", value: "NGS_VL_Screening_Run_01" },
      { label: "FASTQ Forward (R1)", type: "select", options: ["synthetic_vl_library_R1.fastq.gz (Secure Server Folder)", "vl_screen_round3_R1.fastq.gz"] },
      { label: "FASTQ Reverse (R2)", type: "select", options: ["synthetic_vl_library_R2.fastq.gz (Secure Server Folder)", "vl_screen_round3_R2.fastq.gz"] },
      { label: "Environmental pH (Charge Calculation)", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Paired-End Merging (BBMerge)",
        icon: "merge_type",
        body: "Forward (R1) and reverse (R2) FASTQ reads are assembled using BBMerge with a 12-base minimum overlap threshold (minoverlap=12) and ordered stream processing to reconstruct the complete antibody coding sequence."
      },
      {
        title: "Biological Quality & Structural Filters",
        icon: "verified",
        body: "Rather than applying an arbitrary Phred score cutoff, the pipeline enforces strict biological selection: (1) 3-frame translation resolving the functional open reading frame; (2) strict elimination of premature stop codons (*); (3) verification of at least 2 canonical cysteines (~C23 and terminal Cys) required for the intrachain disulfide bond; and (4) minimum length validation (>= 100 amino acids) to exclude truncated fragments."
      },

      {
        title: "VL Framework & CDR-L1/L2/L3 Extraction",
        icon: "rule",
        body: "The engine scans for conserved Variable Light chain framework anchors: FR1 kappa/lambda motifs (e.g. ELVXTQTP, ELVLTQSP) and FR4 joining motifs (e.g. GTNVEIK, GTELEIL). It uses canonical cysteines (~C23 and terminal Cys) and conserved anchors (WY in FR2, FG in FR4) to isolate CDR-L1, CDR-L2, and CDR-L3 loops with single-amino-acid precision."
      },
      {
        title: "Clonal Frequency & Top Clone Ranking",
        icon: "analytics",
        body: "Millions of raw sequences are dereplicated into unique VL clones. The pipeline computes copy counts, percentage frequencies, and repertoire diversity indices, ranking the top candidates for downstream characterization."
      },
      {
        title: "'Promote to Success' Curation Engine",
        icon: "check_circle",
        body: "Clones with non-canonical anchor mutations resulting from extreme somatic hypermutation are not discarded. Instead, they are routed to a 'Failed Sequences' inspection panel where researchers can review anomalies and promote promising candidates back into the verified pipeline."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">NGS Repertoire Mining Funnel (Synthetic VL Demonstration)</h4>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">RAW READS</div>
            <div style="font-size:20px; font-weight:800; color:#0f172a;">142,500</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">MERGED READS</div>
            <div style="font-size:20px; font-weight:800; color:#1e40af;">141,890 (99.5%)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">VALID VL READS</div>
            <div style="font-size:20px; font-weight:800; color:#15803d;">139,210 (98.1%)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b; font-weight:700;">UNIQUE VL CLONES</div>
            <div style="font-size:20px; font-weight:800; color:#2563eb;">24,180</div>
          </div>
        </div>
        <div style="background:#f1f5f9; padding:14px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:12px; color:#334155; line-height:1.6;">
          <strong>Top Ranked VL Candidate (Clone_VL_01 — 62x Frequency):</strong><br>
          ELVLTQSPSSLSASVGDRVTITC<span style="color:#2563eb; font-weight:700;">[CDR-L1: RASQSISSYLN]</span>WYQQKPGKAPKLLIY<span style="color:#d97706; font-weight:700;">[CDR-L2: AASSLQS]</span>GVPSRFSGSGSGTDFTLTISSLQPEDFATYYC<span style="color:#7c3aed; font-weight:700;">[CDR-L3: QQSYSTPLT]</span>FGGGTKVEIK
        </div>
      </div>
    `
  },

  seq: {
    title: "Sequence Analysis",
    category: "Biophysical Characterization & Developability",
    desc: "Rapid multi-parameter biophysical profiling of single or batch antibody Variable Light chain (VL) protein sequences to identify developability liabilities and predict in vitro formulation stability.",
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Analysis Title", type: "text", value: "Developability_Profile_VL_01" },
      { label: "Amino Acid Sequence (FASTA or Plain Text)", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" },
      { label: "Target pH for Charge Calculation", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Thermodynamic & Molar Properties",
        icon: "calculate",
        body: "Calculates monoisotopic Molecular Weight (MW), theoretical Isoelectric Point (pI) via Henderson-Hasselbalch equations, and net electrostatic charge at physiological pH (7.4)."
      },
      {
        title: "Critical Cysteine Liability Detection",
        icon: "warning",
        body: "Counts total cysteine residues. An odd count triggers an immediate alert for unpaired free surface thiols, essential for avoiding intermolecular dimerization, aggregation, or guiding site-specific maleimide bioconjugation in Antibody-Drug Conjugates (ADCs)."
      },
      {
        title: "Instability Index & GRAVY Hydropathy",
        icon: "thermostat",
        body: "Evaluates proteolytic and thermal stability using the Guruprasad instability index (values under 40 indicate stability) and Kyte-Doolittle GRAVY hydropathy score for solubility forecasting."
      },
      {
        title: "BioPython & Custom Backend Engine",
        icon: "code",
        body: "Powered by Bio.SeqUtils.ProtParam and Ypsilon's proprietary vectorized thermodynamic scoring algorithms."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Biophysical & Developability Diagnostics (VL Candidate)</h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">MOLECULAR WEIGHT</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">11.64 kDa</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">ISOELECTRIC POINT (pI)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">6.42</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">NET CHARGE (@ pH 7.4)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">-0.28</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">TOTAL CYSTEINES</div>
            <div style="font-size:18px; font-weight:800; color:#15803d;">2 (Intrachain S-S Bond)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">INSTABILITY INDEX</div>
            <div style="font-size:18px; font-weight:800; color:#15803d;">32.14 (Stable in solution)</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#64748b;">HYDROPATHY (GRAVY)</div>
            <div style="font-size:18px; font-weight:800; color:#0f172a;">-0.380 (Hydrophilic)</div>
          </div>
        </div>
      </div>
    `
  },

  trans: {
    title: "Translation",
    category: "In Silico Molecular Biology",
    desc: "In silico 3-frame translation of nucleotide sequencing reads into functional VL light chain protein sequences with open reading frame validation and stop codon detection.",
    formFields: [
      { label: "DNA Nucleotide Sequence", type: "textarea", value: "GAGCTCGTGCTGACCCAGTCTCCATCCTCCCTGTCTGCATCTGTAGGAGACAGAGTCACCATCACTTGCCGGGCAAGTCAGAGCATTAGCAGCTATTTAAATTGGTATCAGCAGAAACCAGGGAAAGCCCCTAAGCTCCTGATCTATGCTGCATCCAGTTTGCAAAGTGGGGTCCCATCAAGGTTCAGTGGCAGTGGATCTGGGACAGATTTCACTCTCACCATCAGCAGTCTGCAACCTGAAGATTTTGCAACTTACTACTGTCAACAGAGTTACAGTACCCCTCTCACTTTTGGCGGAGGGACCAAGGTAGAGATCAAA" },
      { label: "Genetic Code Table", type: "select", options: ["Standard Genetic Code (Bacterial / Eukaryotic Expression)"] }
    ],
    algoCards: [
      {
        title: "Reading Frame Resolution",
        icon: "view_carousel",
        body: "Analyzes forward reading frames (+1, +2, +3) to verify coding continuity, detect insertion/deletion frameshifts, and ensure absence of premature stop codons."
      },
      {
        title: "Expression Tag & Leader Detection",
        icon: "brush",
        body: "Automatically identifies pelB signal peptides, His6 purification tags, or antibody joining motifs used in phage display vectors."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Optimal Reading Frame Translation (+1 Frame)</h4>
        <div style="font-size:11px; color:#15803d; font-weight:700; margin-bottom:10px;">Continuous Functional Open Reading Frame (No Stop Codons)</div>
        <div style="background:#f1f5f9; padding:14px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:13px; color:#1e293b; line-height:1.6; word-break:break-all;">
          ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK
        </div>
      </div>
    `
  },

  align: {
    title: "Alignment",
    category: "Multiple Sequence Alignment (MSA)",
    desc: "Native Clustal Omega multiple sequence alignment of candidate VL repertoires with mutation highlighting and positional conservation scoring.",
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Sequence Dataset", type: "select", options: ["Top10_VL_Candidates (Ghost File Cache)"] },
      { label: "Highlight Mutations Against Consensus", type: "checkbox", value: "true" }
    ],
    algoCards: [
      {
        title: "Clustal Omega Engine",
        icon: "hub",
        body: "Executes progressive multiple alignments using mBed guide trees and Gonnet scoring matrices to compare homologous VL light chain variants."
      },
      {
        title: "Clustal-X Biochemical Color Coding",
        icon: "palette",
        body: "Residues are dynamically rendered by chemical class: Orange (Hydrophobic), Green (Polar), Red (Acidic), Purple (Basic), and Yellow (Cysteines)."
      },
      {
        title: "Mutation Significance (P-Value)",
        icon: "functions",
        body: "Calculates statistical significance for each somatic substitution against germline consensus to distinguish random mutations from functional selection."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Multiple Sequence Alignment (Clustal Omega)</h4>
        <div style="display:inline-block; padding:8px 14px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; font-size:13px; font-weight:700; color:#166534; margin-bottom:15px;">
          Overall Sequence Identity: 95.8% across 10 VL variants
        </div>
        <div style="overflow-x:auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; padding:12px; font-family:'JetBrains Mono', monospace; font-size:11px;">
          <div style="padding:4px 0; border-bottom:1px solid #e2e8f0; font-weight:700; color:#0f172a;">CONSENSUS: ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQS...</div>
          <div style="padding:4px 0; color:#334155;">Clone_VL_01: ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQS...</div>
          <div style="padding:4px 0; color:#334155;">Clone_VL_02: ELVLTQSPSSLSASVGDRVTITCRASQGISSYLNWYQQKPGKAPKLLIYAASNLQS...</div>
          <div style="padding:4px 0; color:#334155;">Clone_VL_03: ELVLTQSPSSLSASVGDRVTITCRASQSISNWLNWYQQKPGKAPKLLIYAASSLQS...</div>
        </div>
      </div>
    `
  },

  phylo: {
    title: "Phylogenetic Trees",
    category: "Evolutionary Lineage & Phylogenetics",
    desc: "Distance-based phylogenetic dendrogram generation for antibody VL repertoires using UPGMA and Neighbor-Joining algorithms to map clonal diversification.",
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Source Alignment Dataset", type: "select", options: ["Top10_VL_Candidates (Alignment)"] },
      { label: "Clustering Algorithm", type: "select", options: ["UPGMA (Average Distance)", "Neighbor-Joining (NJ)"] }
    ],
    algoCards: [
      {
        title: "UPGMA & Genetic Distance Matrices",
        icon: "account_tree",
        body: "Computes pairwise sequence identity distances and progressively groups related VL clones via hierarchical cluster analysis."
      },
      {
        title: "Interactive Dendrogram Topology",
        icon: "insights",
        body: "Renders branch lengths corresponding to substitutions per amino acid site, visualizing clonal expansions and divergence branches."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Phylogenetic Relationship Tree (UPGMA Topology)</h4>
        <div style="font-size:12px; color:#64748b; margin-bottom:15px;">Branch lengths indicate substitutions per site.</div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:15px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:12px; line-height:1.8;">
          +--- Clone_VL_01 [subst/site: 0.003]<br>
          |&nbsp;&nbsp;&nbsp;&nbsp;+--- Clone_VL_02 [subst/site: 0.005]<br>
          +--- Clone_VL_03 [subst/site: 0.012]<br>
          |<br>
          +-------------------------- Clone_VL_08 (Divergent Family) [subst/site: 0.184]
        </div>
      </div>
    `
  },

  comp: {
    title: "Comparative Analysis",
    category: "Repertoire Dynamics & Biopanning",
    desc: "Cross-dataset longitudinal tracking of clone frequencies across consecutive biopanning rounds (R0 to R3) to measure clonal enrichment and selection dynamics.",
    formFields: [
      { label: "Baseline Dataset (Round 1)", type: "select", options: ["Biopanning_Round_1_VL"] },
      { label: "Comparison Dataset (Round 3)", type: "select", options: ["Biopanning_Round_3_Enriched_VL"] },
      { label: "Minimum Fold-Change Threshold", type: "number", value: "5.0" }
    ],
    algoCards: [
      {
        title: "Clonal Enrichment Calculation",
        icon: "trending_up",
        body: "Quantifies the fold-change multiplication in clone frequency between successive rounds of phage/yeast display selection."
      },
      {
        title: "Venn & Repertoire Overlaps",
        icon: "pie_chart",
        body: "Computes Venn and Euler intersections to isolate surviving high-affinity VL binders against wash-out dropouts."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Biopanning Selection Dynamics (Round 1 vs Round 3)</h4>
        <p style="font-size:13px; color:#475569; margin-bottom:12px;">Identified <strong>14 significantly enriched VL clones</strong> with fold-change &gt; 10x.</p>
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; border-radius:6px; font-size:13px; color:#166534; font-weight:600;">
          Lead Candidate Clone_VL_01 enriched from 0.04% (R1) to 4.41% (R3) — 110.2x Fold-Change.
        </div>
      </div>
    `
  },

  "3d": {
    title: "Antibody Structural Profiler",
    category: "Structural Biology & 3D Modeling",
    desc: "Deep-learning 3D conformational modeling of antibody VL domains using ColabFold/AlphaFold2 with per-residue pLDDT confidence scoring and Solvent Accessible Surface Area (SASA) computation.",
    formFields: [
      { label: "VL Sequence to Model", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" },
      { label: "Modeling Engine", type: "select", options: ["ColabFold (AlphaFold2-ptm / Fast GPU)", "ESMFold (Single Sequence)"] },
      { label: "Amber Relaxation Cycles", type: "select", options: ["Standard (3 Cycles)", "Relaxation Off (Fast)"] }
    ],
    algoCards: [
      {
        title: "ColabFold / AlphaFold2 Integration",
        icon: "memory",
        body: "Asynchronous API communication with GPU-accelerated computing nodes (NVIDIA CUDA) to generate atomic 3D coordinates in PDB format."
      },
      {
        title: "Per-Residue Confidence (pLDDT)",
        icon: "speed",
        body: "Maps stereochemical confidence along the sequence. pLDDT values above 90 indicate exceptionally reliable backbone and side-chain conformations."
      },
      {
        title: "Solvent Accessible Surface Area (SASA)",
        icon: "water_drop",
        body: "Computes exposed surface area across CDR-L1, CDR-L2, and CDR-L3 loops to evaluate epitope-contact residues and hydrophobic patches."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">3D Structural Modeling Report (Simulated VL Fold)</h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:15px;">
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#166534; font-weight:700;">GLOBAL MEAN pLDDT</div>
            <div style="font-size:20px; font-weight:800; color:#15803d;">94.2 / 100</div>
          </div>
          <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#1e40af; font-weight:700;">CDR-L3 LOOP pLDDT</div>
            <div style="font-size:20px; font-weight:800; color:#2563eb;">91.5 / 100</div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:6px;">
            <div style="font-size:11px; color:#475569; font-weight:700;">TOTAL SASA AREA</div>
            <div style="font-size:20px; font-weight:800; color:#0f172a;">6,180 Å²</div>
          </div>
        </div>
        <div style="font-size:12px; color:#64748b;">PDB model generated conforming to canonical Chothia and Kabat VL light chain structural constraints.</div>
      </div>
    `
  },

  dock: {
    title: "Interaction (Docking)",
    category: "Computational Biophysics & Molecular Recognition",
    desc: "Macromolecular in silico docking simulating binding interfaces between the VL paratope (CDR-L1, L2, L3) and target antigen epitopes, evaluating binding free energy (ΔG).",
    formFields: [
      { label: "Antibody VL Model (PDB)", type: "select", options: ["ColabFold_VL_Clone01.pdb"] },
      { label: "Target Antigen Structure (PDB)", type: "select", options: ["Target_Antigen_Ectodomain.pdb"] },
      { label: "Docking Protocol", type: "select", options: ["Rigid Body + Flexible CDR-L3 Refinement", "Full Flexible Interface"] }
    ],
    algoCards: [
      {
        title: "Conformational Sampling",
        icon: "device_hub",
        body: "Explores rotational and translational degrees of freedom to identify favorable paratope-epitope complexes."
      },
      {
        title: "Binding Energy & Buried Surface",
        icon: "energy_program_saving",
        body: "Calculates binding free energy (ΔG in kcal/mol), buried surface area (BSA), and electrostatic complementarity."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Predicted Paratope-Epitope Interface</h4>
        <div style="display:inline-block; padding:8px 14px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; font-size:13px; font-weight:700; color:#166534; margin-bottom:12px;">
          Estimated Binding Energy: ΔG = -11.4 kcal/mol (High Affinity)
        </div>
        <p style="font-size:13px; color:#475569;">Key binding interactions identified at CDR-L1 (Tyr32) and CDR-L3 (Ser93, Thr95) forming a network of 4 hydrogen bonds.</p>
      </div>
    `
  },

  mat: {
    title: "Affinity Maturation Lab",
    category: "Protein Engineering & AI Mutagenesis",
    desc: "In silico rational affinity maturation using the ESM-2 protein language model to identify favorable somatic substitutions that increase binding affinity while preserving VL framework stability.",
    formFields: [
      { label: "Template VL Sequence", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" },
      { label: "Target Mutagenesis Region", type: "select", options: ["CDR Loops Only (Preserve Frameworks)", "CDR-L3 Strict Scanning", "Full Repertoire Scanning"] },
      { label: "Developability Liability Filters", type: "select", options: ["Exclude Deamidation (NG/NS) & Isomerization (DG)", "All Substitutions"] }
    ],
    algoCards: [
      {
        title: "ESM-2 Protein Language Model",
        icon: "psychology",
        body: "The 650M-parameter ESM-2 model (Meta AI) computes evolutionary fitness logits across all 19 possible amino acid substitutions per CDR position."
      },
      {
        title: "ΔLog-Likelihood Scoring",
        icon: "score",
        body: "Positive scores highlight mutations favored by natural antibody evolution with minimal risk of destabilizing the VL fold or causing aggregation."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Top In Silico Mutations Recommended by ESM-2</h4>
        <table class="neutral-table">
          <thead>
            <tr><th>Position</th><th>Original</th><th>Mutation</th><th>Region</th><th>ΔScore ESM-2</th></tr>
          </thead>
          <tbody>
            <tr><td>31</td><td>S</td><td><strong>Y (Tyrosine)</strong></td><td>CDR-L1</td><td><span style="color:#15803d; font-weight:700;">+2.41 (Favorable)</span></td></tr>
            <tr><td>53</td><td>S</td><td><strong>D (Aspartate)</strong></td><td>CDR-L2</td><td><span style="color:#15803d; font-weight:700;">+1.85 (Favorable)</span></td></tr>
            <tr><td>94</td><td>T</td><td><strong>W (Tryptophan)</strong></td><td>CDR-L3</td><td><span style="color:#15803d; font-weight:700;">+3.12 (High Affinity Gain)</span></td></tr>
          </tbody>
        </table>
      </div>
    `
  }
};

let currentActiveToolKey = 'ngs';

// ==========================================
// MODULE NAVIGATION
// ==========================================
function switchModule(modName) {
  // Hide all modules
  document.querySelectorAll('.module-view').forEach(view => {
    view.classList.remove('active');
  });

  // Activate targeted module
  const targetView = document.getElementById(`mod-${modName}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update sidebar buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-mod') === modName) {
      btn.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize sidebar button click listeners
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mod = btn.getAttribute('data-mod');
    switchModule(mod);
  });
});

// ==========================================
// OPEN TOOL RUNNER
// ==========================================
function openToolRunner(toolKey) {
  const tool = toolsDatabase[toolKey];
  if (!tool) return;

  currentActiveToolKey = toolKey;

  document.getElementById('runnerToolTitle').textContent = tool.title;
  document.getElementById('runnerToolDesc').textContent = tool.desc;
  document.getElementById('runnerToolCategory').textContent = tool.category;

  // Generate form fields
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

  // Generate algorithm cards (Tab 2)
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

  // Reset simulation view
  document.getElementById('runnerSimulationOutput').innerHTML = `
    <span class="material-symbols-outlined placeholder-icon">experiment</span>
    <h4>No Active Simulation</h4>
    <p>Click <strong>"Run Interactive Simulation"</strong> to execute this tool and inspect realistic, neutral synthetic VL outputs.</p>
  `;

  // Switch to Tool_Runner module and open Tab 1
  switchRunnerTab('overview');
  switchModule('Tool_Runner');
}

// ==========================================
// TOOL RUNNER TABS
// ==========================================
function switchRunnerTab(tabName) {
  document.querySelectorAll('.tab-pill').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const activeBtn = Array.from(document.querySelectorAll('.tab-pill')).find(btn => 
    btn.textContent.toLowerCase().includes(tabName.toLowerCase()) || 
    (tabName === 'overview' && btn.textContent.includes('Overview')) ||
    (tabName === 'architecture' && btn.textContent.includes('Algorithms')) ||
    (tabName === 'demo' && btn.textContent.includes('Simulation'))
  );

  if (activeBtn) activeBtn.classList.add('active');

  const activeContent = document.getElementById(`tab-${tabName}`);
  if (activeContent) activeContent.classList.add('active');
}

// Simulate tool execution
function simulateToolExecution() {
  const tool = toolsDatabase[currentActiveToolKey];
  if (!tool) return;

  switchRunnerTab('demo');
  const outputContainer = document.getElementById('runnerSimulationOutput');
  outputContainer.innerHTML = `
    <div style="padding: 10px 0;">
      <div style="display:inline-flex; align-items:center; gap:8px; background:#eff6ff; color:#1e40af; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:700; margin-bottom:15px;">
        <span class="material-symbols-outlined" style="font-size:16px;">verified</span>
        Pipeline Completed Successfully in Isolated Container
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
  document.getElementById('modalTitle').textContent = 'Create New Virtual Laboratory';
  document.getElementById('modalBody').innerHTML = `
    <p style="margin-bottom:14px; font-size:13.5px; color:#475569;">
      In the Ypsilon platform, <strong>Virtual Laboratories</strong> isolate sequence datasets, screening campaigns, and project targets, ensuring total project confidentiality and role-based access control.
    </p>
    <div class="form-field-group" style="margin-bottom:12px;">
      <label>Laboratory Name:</label>
      <input type="text" class="styled-input" placeholder="e.g. Synthetic_VL_Screening_02">
    </div>
    <div class="form-field-group">
      <label>Target Description:</label>
      <input type="text" class="styled-input" placeholder="Scientific objective or campaign target notes...">
    </div>
  `;
  modal.classList.add('active');
}

function showGhostInfo(assetName) {
  const modal = document.getElementById('genericModal');
  document.getElementById('modalTitle').textContent = `Record: ${assetName}`;
  document.getElementById('modalBody').innerHTML = `
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:15px; margin-bottom:12px;">
      <div style="font-size:12px; color:#64748b; font-weight:700;">RESOURCE TYPE</div>
      <div style="font-size:14px; color:#0f172a; font-weight:600;">Database Record (Lightweight Cache)</div>
    </div>
    <p style="font-size:13px; color:#475569; line-height:1.5;">
      This record is archived in the platform's PostgreSQL / SQLite database. In the full production environment, clicking "Open" loads the sequences and associated matrices directly into the corresponding analytical module.
    </p>
  `;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('genericModal').classList.remove('active');
}

// Close modal on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ==========================================
// GLOBAL SEARCH
// ==========================================
const mockArchive = [
  { id: "VL.01 (Clone_Alpha)", cdr3: "QQSYSTPLT", lab: "Synthetic_VL_Library_01", type: "Kappa Light Chain (VL)" },
  { id: "VL.02 (Clone_Beta)", cdr3: "QQYGSSPLT", lab: "Synthetic_VL_Library_01", type: "Kappa Light Chain (VL)" },
  { id: "VL.03 (Clone_Gamma)", cdr3: "QSYDSSLSGYV", lab: "Synthetic_VL_Library_01", type: "Lambda Light Chain (VL)" },
  { id: "VL.04 (Clone_Delta)", cdr3: "MQALQTPYT", lab: "Synthetic_VL_Library_01", type: "Kappa Light Chain (VL)" },
  { id: "VL.05 (Clone_Epsilon)", cdr3: "QQWNSNPPT", lab: "Synthetic_VL_Library_01", type: "Kappa Light Chain (VL)" }
];

function handleSearch(query) {
  const area = document.getElementById('searchResultsArea');
  if (!query.trim()) {
    area.innerHTML = '<div class="search-hint">Type a query above to filter demonstration records across all platform archives.</div>';
    return;
  }

  const matches = mockArchive.filter(item => 
    item.id.toLowerCase().includes(query.toLowerCase()) ||
    item.cdr3.toLowerCase().includes(query.toLowerCase()) ||
    item.lab.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    area.innerHTML = `<div class="search-hint">No demonstration records found matching "${query}".</div>`;
    return;
  }

  let html = `<div style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:12px;">Matching Records (${matches.length})</div>`;
  matches.forEach(item => {
    html += `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:12px 16px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; font-size:13px; color:#0f172a;">${item.id}</div>
          <div style="font-size:11.5px; color:#64748b;">CDR-L3: <code style="background:#e2e8f0; padding:1px 4px; border-radius:2px;">${item.cdr3}</code> | Lab: ${item.lab}</div>
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
      countText.textContent = `Batch Actions (${checkedCount} selected)`;
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
