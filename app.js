// ==========================================================================
// YPSILON BIOINFORMATICS PLATFORM - INTERACTIVE CONTROLLER (SHOWCASE)
// Specialized exclusively in Antibody Variable Light Chain (VL) Discovery & Engineering
// 100% Faithful to Original Codebase & Real Algorithms
// ==========================================================================

const toolsDatabase = {
  ngs: {
    title: "NGS Analysis",
    category: "High-Throughput Sequencing & Repertoire Mining",
    leadSummary: "End-to-end processing pipeline for raw paired-end FASTQ reads (R1/R2) from antibody Variable Light chain (VL) libraries. Merges overlapping amplicons, enforces biological structural filters, segments CDR loops, and ranks dominant clones with somatic variant curation.",
    highlights: [
      { icon: "merge_type", text: "BBMerge Overlap Assembly" },
      { icon: "verified", text: "Biological Quality Filtering" },
      { icon: "rule", text: "CDR-L1, L2, L3 Segmentation" },
      { icon: "leaderboard", text: "Clonal Abundance Ranking" },
      { icon: "published_with_changes", text: "Promote to Success Engine" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01", "Lambda_VL_Screening_Project"] },
      { label: "Analysis Title", type: "text", value: "NGS_VL_Screening_Run_01" },
      { label: "Forward (R1)", type: "select", options: ["synthetic_vl_library_R1.fastq.gz (Server Shared Folder)", "vl_screen_round3_R1.fastq.gz"] },
      { label: "Reverse (R2)", type: "select", options: ["synthetic_vl_library_R2.fastq.gz (Server Shared Folder)", "vl_screen_round3_R2.fastq.gz"] },
      { label: "Environment pH (Charge Calculation)", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Paired-End Merging (BBMerge)",
        icon: "merge_type",
        body: "Forward (R1) and reverse (R2) FASTQ reads are assembled using BBMerge with a 12-base minimum overlap threshold (minoverlap=12) and ordered streaming (ordered=t) to reconstruct the full-length antibody amplicon."
      },
      {
        title: "Biological Quality & Structural Filters",
        icon: "verified",
        body: "The pipeline translates reads in 3 frames and strictly rejects sequences with premature stop codons (*), sequences with fewer than 2 cysteines (essential for the canonical intrachain disulfide bond), and sequences under 100 amino acids."
      },
      {
        title: "Framework & CDR Segmentation",
        icon: "rule",
        body: "Heuristic pattern matching targets conserved kappa and lambda framework motifs (FAM_FR1 and FAM_FR4) and canonical anchors (WY in FR2, FG in FR4) to isolate CDR-L1, CDR-L2, and CDR-L3 loops with single-residue precision."
      },
      {
        title: "'Promote to Success' Curation Engine",
        icon: "published_with_changes",
        body: "Clones with non-canonical anchor mutations resulting from extreme somatic hypermutation are routed to an inspection table, where researchers can review anomalies and promote candidates back into the verified repertoire."
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
    category: "Biophysical Characterization",
    leadSummary: "Rapid multi-parameter biophysical profiling of single or batch antibody Variable Light chain (VL) sequences. Computes essential developability metrics, stability indices, and maps hypervariable regions.",
    highlights: [
      { icon: "calculate", text: "Molecular Weight & Theoretical pI" },
      { icon: "warning", text: "Cysteine Liability Detection" },
      { icon: "thermostat", text: "Guruprasad Instability Index" },
      { icon: "view_column", text: "Framework & CDR Mapping" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Analysis Title", type: "text", value: "Sequence_Analysis_VL_01" },
      { label: "Paste Sequences (One per line or FASTA)", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" },
      { label: "Environment pH (Charge Calculation)", type: "number", value: "7.40" }
    ],
    algoCards: [
      {
        title: "Thermodynamic & Molar Properties",
        icon: "calculate",
        body: "Computes monoisotopic Molecular Weight (Da), theoretical Isoelectric Point (pI) using Henderson-Hasselbalch equations, and net electrostatic charge at user-specified pH."
      },
      {
        title: "Cysteine Analysis & Disulfide Integrity",
        icon: "warning",
        body: "Scans total cysteines to confirm canonical pairing (even count of 2) or alert for free reactive surface thiols (odd count) that could lead to aggregation."
      },
      {
        title: "Instability Index & Hydropathy",
        icon: "thermostat",
        body: "Evaluates proteolytic stability using Guruprasad's instability index (< 40 indicates stable protein) and Kyte-Doolittle GRAVY hydropathy for formulation forecasting."
      },
      {
        title: "Framework & CDR Highlighting",
        icon: "view_column",
        body: "Deconstructs the sequence into FR1, CDR-L1, FR2, CDR-L2, FR3, CDR-L3, and FR4 using the platform's regex pattern matching engine."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:12px; font-size:15px;">Biophysical Diagnostics (VL Candidate)</h4>
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
    category: "DNA to Protein Translation",
    leadSummary: "Translates DNA sequences into functional antibody proteins using 3-frame evaluation. Selects the optimal reading frame with the AQAA leader or minimal stop codons, isolating the functional antibody core down to the His-tag.",
    highlights: [
      { icon: "view_carousel", text: "3-Frame Translation" },
      { icon: "error_outline", text: "Stop Codon Detection" },
      { icon: "brush", text: "AQAA & His-Tag Core Extraction" },
      { icon: "save", text: "Laboratory Report Integration" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Analysis Title", type: "text", value: "Translation_Run_01" },
      { label: "DNA Sequence (FASTA or Plain Text)", type: "textarea", value: "GAGCTCGTGCTGACCCAGTCTCCATCCTCCCTGTCTGCATCTGTAGGAGACAGAGTCACCATCACTTGCCGGGCAAGTCAGAGCATTAGCAGCTATTTAAATTGGTATCAGCAGAAACCAGGGAAAGCCCCTAAGCTCCTGATCTATGCTGCATCCAGTTTGCAAAGTGGGGTCCCATCAAGGTTCAGTGGCAGTGGATCTGGGACAGATTTCACTCTCACCATCAGCAGTCTGCAACCTGAAGATTTTGCAACTTACTACTGTCAACAGAGTTACAGTACCCCTCTCACTTTTGGCGGAGGGACCAAGGTAGAGATCAAA" }
    ],
    algoCards: [
      {
        title: "3-Frame Translation Resolution",
        icon: "view_carousel",
        body: "Evaluates reading frames (+1, +2, +3) and chooses the frame containing the AQAA motif or fewest stop codons to ensure open reading frame continuity."
      },
      {
        title: "Antibody Core Isolation",
        icon: "brush",
        body: "Extracts the functional VL domain from the N-terminal anchor (AQAA) to the C-terminal expression tag (HHHHHH) required for purification."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Optimal Reading Frame Translation (+1 Frame)</h4>
        <div style="font-size:11px; color:#15803d; font-weight:700; margin-bottom:10px;">Continuous Functional Open Reading Frame (No Premature Stop Codons)</div>
        <div style="background:#f1f5f9; padding:14px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:13px; color:#1e293b; line-height:1.6; word-break:break-all;">
          ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK
        </div>
      </div>
    `
  },

  align: {
    title: "Alignment",
    category: "Multiple Sequence Alignment",
    leadSummary: "Multiple sequence alignment for antibody VL repertoires using Clustal Omega. Computes consensus sequence, positional conservation identity bar, global identity score, and variation analysis with P-value significance, with Clustal-X coloring and Excel export.",
    highlights: [
      { icon: "hub", text: "Clustal Omega Engine" },
      { icon: "palette", text: "Clustal-X Biochemical Coloring" },
      { icon: "functions", text: "P-Value Variation Analysis" },
      { icon: "table_view", text: "Excel Spreadsheet Export" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Select File(s) (Ghost Files)", type: "select", options: ["Top10_VL_Candidates (Ghost File)"] },
      { label: "Find Variations Relative to Consensus", type: "checkbox", value: "true" }
    ],
    algoCards: [
      {
        title: "Clustal Omega Engine",
        icon: "hub",
        body: "Uses guide trees and Gonnet scoring matrices to produce global multiple alignments across homologous VL variants."
      },
      {
        title: "Conservation & Consensus Scoring",
        icon: "bar_chart",
        body: "Computes residue-by-residue conservation identity bars and consensus sequence representation."
      },
      {
        title: "Clustal-X Biochemical Palette",
        icon: "palette",
        body: "Highlights amino acids by chemical properties: Hydrophobic, Polar, Acidic, Basic, Cysteine, Glycine, and Aromatic."
      },
      {
        title: "Variation Analysis & P-Value",
        icon: "functions",
        body: "Identifies somatic mutations relative to consensus and calculates statistical significance (P-value) to separate real selection from noise."
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
    category: "Evolutionary Trees",
    leadSummary: "Reconstructs phylogenetic trees from aligned antibody VL repertoires using BioPython and the UPGMA distance method, visualizing clonal divergence and somatic mutations as substitutions per site.",
    highlights: [
      { icon: "linear_scale", text: "Identity Distance Matrix" },
      { icon: "account_tree", text: "UPGMA Tree Construction" },
      { icon: "insights", text: "Substitutions-per-Site Scaling" },
      { icon: "download", text: "Newick Format Export" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Source Alignment", type: "select", options: ["Top10_VL_Alignment"] }
    ],
    algoCards: [
      {
        title: "Pairwise Distance Matrix",
        icon: "linear_scale",
        body: "Calculates distance matrices based on sequence identity using BioPython's DistanceCalculator('identity')."
      },
      {
        title: "UPGMA Tree Construction",
        icon: "account_tree",
        body: "Reconstructs hierarchical cluster dendrograms using DistanceTreeConstructor().upgma(dm) with branch lengths representing substitutions per site."
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
    category: "Repertoire Comparison",
    leadSummary: "Compares antibody clone populations across different biopanning selection rounds or experiments. Trims sequences to the canonical antibody domain, tracks clone persistence, and calculates frequency shifts and overlaps.",
    highlights: [
      { icon: "content_cut", text: "Domain Slicing (FR1 to FR4)" },
      { icon: "trending_up", text: "Cross-Round Frequency Shifts" },
      { icon: "compare_arrows", text: "Enrichment Fold-Change" },
      { icon: "splitscreen", text: "Direct Alignment Export" }
    ],
    formFields: [
      { label: "Target Laboratory", type: "select", options: ["Synthetic_VL_Library_01"] },
      { label: "Primary Clone List (Round 1)", type: "select", options: ["Biopanning_Round_1_VL"] },
      { label: "Comparison Clone List (Round 3)", type: "select", options: ["Biopanning_Round_3_VL"] }
    ],
    algoCards: [
      {
        title: "Antibody Domain Slicing",
        icon: "content_cut",
        body: "Trims leader and tag sequences to the canonical antibody domain (from FR1 start to FR4/His-tag) before comparison."
      },
      {
        title: "Clonal Tracking & Overlap",
        icon: "compare_arrows",
        body: "Compares clone frequencies across selection rounds (R1, R2, R3) to measure enrichment dynamics and export selected candidates directly to Alignment."
      }
    ],
    demoOutput: `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:20px; text-align:left;">
        <h4 style="color:#0f172a; margin-bottom:8px; font-size:15px;">Biopanning Selection Dynamics (Round 1 vs Round 3)</h4>
        <p style="font-size:13px; color:#475569; margin-bottom:12px;">Identified <strong>14 significantly enriched VL clones</strong> across biopanning cycles.</p>
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; border-radius:6px; font-size:13px; color:#166534; font-weight:600;">
          Lead Candidate Clone_VL_01 enriched from 0.04% (R1) to 4.41% (R3) — 110.2x Fold-Change.
        </div>
      </div>
    `
  },

  "3d": {
    title: "Antibody Structural Profiler",
    category: "3D Structural Modeling",
    leadSummary: "Generates 3D structural models of antibody Variable Light chain (VL) monomers using ColabFold (local GPU) or ESMFold2 (cloud API). Displays interactive 3D structures via py3Dmol with per-residue pLDDT confidence and CDR loop mapping.",
    highlights: [
      { icon: "memory", text: "ColabFold GPU & ESMFold2 API" },
      { icon: "speed", text: "Per-Residue pLDDT Confidence" },
      { icon: "view_in_ar", text: "Interactive py3Dmol Viewer" },
      { icon: "water_drop", text: "Solvent Accessible Surface (SASA)" }
    ],
    formFields: [
      { label: "Antibody Input Source", type: "select", options: ["Database (Select Clone)", "Manual Sequence Input"] },
      { label: "Modelling Engine", type: "select", options: ["ColabFold (Local GPU)", "ESMFold2 (Cloud API)"] },
      { label: "Antibody Sequence (Amino Acids)", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" }
    ],
    algoCards: [
      {
        title: "Structural Prediction Engines",
        icon: "memory",
        body: "Supports ColabFold (AlphaFold2) for high-accuracy GPU prediction and ESMFold2 for rapid single-sequence cloud inference."
      },
      {
        title: "pLDDT Confidence Scoring",
        icon: "speed",
        body: "Maps stereochemical confidence per residue, with pLDDT > 90 indicating high-confidence backbone modeling."
      },
      {
        title: "py3Dmol Visualizer & CDR Highlights",
        icon: "view_in_ar",
        body: "Colors CDR-L1 (red), CDR-L2 (green), and CDR-L3 (blue) with stick/sphere rendering for disulfide cysteines."
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
    category: "Antibody-Antigen Complex Modeling",
    leadSummary: "Predicts the 3D complex structure between antibody VL monomers and target antigens using ColabFold Multimer. Renders the interactive complex in py3Dmol with Chain A (VL, beige) and Chain B (Antigen, cyan) and highlighted CDR loops.",
    highlights: [
      { icon: "device_hub", text: "ColabFold Multimer Pipeline" },
      { icon: "link", text: "Two-Chain Complex Modeling" },
      { icon: "palette", text: "CDR Paratope Mapping" },
      { icon: "biotech", text: "Binding Interface Diagnostics" }
    ],
    formFields: [
      { label: "Antibody (VL) Sequence", type: "textarea", value: "ELVLTQSPSSLSASVGDRVTITCRASQSISSYLNWYQQKPGKAPKLLIYAASSLQSGVPSRFSGSGSGTDFTLTISSLQPEDFATYYCQQSYSTPLTFGGGTKVEIK" },
      { label: "Antigen Target Sequence", type: "textarea", value: "MSDSEVNQEAKPEVKPEVKPETHINLKVSDGSSEIFFKIKKTTPLRRLMEAFAKRQGKEMDSLRFLYDGIRIQADQTPEDLDMEDNDIIEAHREQIGG" },
      { label: "Number of Models", type: "select", options: ["5 Complex Ranks (Standard)"] }
    ],
    algoCards: [
      {
        title: "ColabFold Multimer Queue",
        icon: "device_hub",
        body: "Submits {antibody_seq}:{antigen_seq} to the ColabFold Multimer prediction queue to sample complex conformations."
      },
      {
        title: "py3Dmol Complex Visualization",
        icon: "view_in_ar",
        body: "Colors Chain A (VL) in beige with CDR-L1 (red), CDR-L2 (green), and CDR-L3 (blue), and Chain B (Antigen) in cyan (#90e0ef)."
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
    category: "Virtual CDR Mutagenesis",
    leadSummary: "Performs in silico virtual scanning mutagenesis across CDR loops of lead antibody clones. Automatically maps CDR boundaries, allows excluding cysteines and prolines, and evaluates all single-point variants using the ESM-2 API (with BLOSUM62 fallback) to prioritize affinity-enhancing mutations.",
    highlights: [
      { icon: "map", text: "Automated CDR Boundary Mapping" },
      { icon: "biotech", text: "Virtual Single-Point Mutagenesis" },
      { icon: "shield", text: "Cysteine & Proline Liability Exclusion" },
      { icon: "psychology", text: "ESM-2 API & BLOSUM62 Scoring" }
    ],
    formFields: [
      { label: "Parent Clone", type: "select", options: ["Clone_VL_01 (Freq: 62)"] },
      { label: "CDRs to Scan", type: "select", options: ["CDR1, CDR2, CDR3", "CDR3 Only", "CDR1 Only"] },
      { label: "Exclude Cys (C)", type: "select", options: ["Yes (Recommended — Avoid spurious disulfides)", "No"] },
      { label: "Exclude Pro (P)", type: "select", options: ["Yes (Recommended — Avoid rigid loop kinks)", "No"] },
      { label: "Scoring Engine", type: "select", options: ["ESM-2 API Scoring (BLOSUM62 Fallback)"] }
    ],
    algoCards: [
      {
        title: "Automated CDR Mapping",
        icon: "map",
        body: "Maps CDR-L1, CDR-L2, and CDR-L3 coordinates with optional manual boundary adjustments."
      },
      {
        title: "Virtual Single-Point Mutagenesis",
        icon: "biotech",
        body: "Generates all variants across chosen CDR positions (excluding Cys to prevent spurious disulfides and Pro to avoid loop disruption)."
      },
      {
        title: "ESM-2 API & BLOSUM62 Scoring",
        icon: "psychology",
        body: "Scores each substitution against the wild-type sequence using ESM-2 language model logits or BLOSUM62 matrices."
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
function switchModule(modName, updateHash = true) {
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

  if (updateHash && modName !== 'Tool_Runner') {
    history.replaceState(null, '', '#' + modName);
  }

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
function openToolRunner(toolKey, updateHash = true) {
  const tool = toolsDatabase[toolKey];
  if (!tool) return;

  currentActiveToolKey = toolKey;

  document.getElementById('runnerToolTitle').textContent = tool.title;
  document.getElementById('runnerToolCategory').textContent = tool.category;

  const descContainer = document.getElementById('runnerToolDesc');
  let descHtml = `<p class="tool-lead-summary">${tool.leadSummary}</p>`;
  if (tool.highlights && tool.highlights.length > 0) {
    descHtml += '<div class="tool-key-features">';
    tool.highlights.forEach(h => {
      descHtml += `<span class="feature-pill"><span class="material-symbols-outlined">${h.icon}</span> ${h.text}</span>`;
    });
    descHtml += '</div>';
  }
  descContainer.innerHTML = descHtml;

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
  switchModule('Tool_Runner', false);
  if (updateHash) {
    history.replaceState(null, '', '#tool-' + toolKey);
  }
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

// ==========================================
// HASH ROUTING & DEEP LINKING
// ==========================================
function handleHashRoute() {
  const hash = window.location.hash.replace('#', '').trim();
  if (!hash) return;
  if (hash.startsWith('tool-')) {
    const toolKey = hash.replace('tool-', '');
    if (toolsDatabase[toolKey]) {
      openToolRunner(toolKey, false);
    }
  } else if (hash) {
    switchModule(hash, false);
  }
}

window.addEventListener('hashchange', handleHashRoute);
window.addEventListener('DOMContentLoaded', handleHashRoute);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  handleHashRoute();
}

