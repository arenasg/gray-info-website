---
permalink: /scrnaseq/
title: Single Cell RNA Sequencing 10x
section_id: data
layout: secondary

instrument: |
  Here are some details about the assay, instruments on which the samples were run, etc.
data_access: |
  Access the data through:
  - Level 1: FASTQ (by request with DUA)
  - Level 2: BAM (GEO)
  - Level 3: H5 and RDS (AWS)

data_visualization:
protocol: "Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following are planned to be sequenced:
  - 135 breast samples
data_generators: "This data was generated and analyzed by teams in the labs of Joan Brugge and Henry Long."
---
# Single Cell RNA Sequencing 10x

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-visualization" class="button">Data Visualization</a>

Single Cell RNA Sequencing 10x is ...

## About the Data
{% include data-grid.html
   assay_instrument=page.assay_instrument
   samples=page.samples
   data_access=page.data_access
   data_visualization=page.data_visualization
   protocol=page.protocol
   data_generators=page.data_generators
%}
<br>

### Data Levels:


| Data Level  | Description | File Format | File Size (per patient)| Data Access |
| ----- | -----------| --------- | --------- | --------- |
| Raw sequences (Level 1)| Nucleotide sequence and quality scores | FASTQ | | by Request with DUA|
| Aligned sequences (Level 2) | sequencing data aligned to a reference genome | BAM | | GEO |
| Aggregated data (Level 3) | QC, analysis, and exploration of single-cell RNA-seq data | H5 and RDS | 30 GB | AWS |
| All files | Total per sample | | 50 GB |  |


<br>
