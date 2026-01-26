---
permalink: /tapestri-dnaseq/
title: Tapestri DNA Sequencing
section_id: data
layout: secondary

instrument: |
  Here are some details about the assay, instruments on which the samples were run, etc.
data_access: |
  Access the data through:
  - Level 1: FASTQ, TSV, TXT (By request with DUA)
  - Level 2: BAM, BAI (By request with DUA)
  - Level 3: VCF, H5, CSV (AWS)

data_visualization:

protocol: "Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following are planned to be sequenced:
  - 100 breast samples
data_generators: "This data was generated and analyzed by teams in the labs of Joan Brugge."
---
# Tapestri DNA Sequencing

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-visualization" class="button">Data Visualization</a>

About Tapestri DNA Sequencing...

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


| Data Level  | Description | File Format | File Size (per file)| Data Access |
| ----- | -----------| --------- | --------- | --------- |
| Raw sequences (Level 1)| Nucleotide sequence and quality scores; 2 FASTQ files per sample | FASTQ, TSV, TXT | 10-20 GB | By request with DUA |
| Aligned sequences (Level 2) | Raw sequencing data aligned to a reference genome | BAM | 8 GB | By request with DUA |
| Aligned sequences (Level 2) | Quality Controlled sequencing data aligned to a reference genome | BAM | 1.4 GB | By request with DUA |
| Aggregated data (Level 3) | QC, analysis, and exploration of ATAC sequencing data | VCF, H5, CSV | 700 MB | AWS |


<br>
