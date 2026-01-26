---
permalink: /atac-seq/
title: ATAC Sequencing
section_id: data
layout: secondary

instrument: |
  Here are some details about the assay, instruments on which the samples were run, etc.
data_access: |
  Access the data through:
  - Level 1: FASTQ (By request with DUA)
  - Level 2: BAM (By request with DUA)
  - Level 3: H5 and RDS (AWS)

data_visualization:

protocol: "Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following are planned to be sequenced:
  - 50 breast samples
data_generators: "This data was generated and analyzed by teams in the labs of Joan Brugge and Henry Long."
---
# ATAC Sequencing

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-visualization" class="button">Data Visualization</a>

About ATAC sequencing...

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
| Raw sequences (Level 1)| Nucleotide sequence and quality scores | FASTQ | | By request with DUA |
| Aligned sequences (Level 2) | Sequencing data aligned to a reference genome | BAM |  | By request with DUA |
| Aggregated data (Level 3) | Seurat object with QC, analysis, and exploration of ATAC sequencing data | H5 and RDS | 30 GB | AWS |
| All files | Total per sample | | 80 GB |  |


<br>
