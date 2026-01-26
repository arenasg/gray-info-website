---
permalink: /dlp-scwgs/
title: DLP+ Single Cell Whole Genome Sequencing
section_id: data
layout: secondary

instrument: |
  Here are some details about the assay, instruments on which the samples were run, etc.
data_access: |
  Access the data through:
  - Level 1: FASTQ (By request with DUA)
  - Level 2: BAM (EGA)
  - Level 3: CSV, HTML (AWS)

  For a description of the files see the [table below](#data-levels).
data_visualization:

protocol: "Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following are planned to be sequenced:
  - 100 breast samples
data_generators: "This data was generated and analyzed by teams in the lab of Sam Aparicio."
---
# DLP+ Single Cell Whole Genome Sequencing

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-access" class="button">Data Access</a>

About DLP+ Single Cell Whole Genome Sequencing ...

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

| Data Level  | Description | File Format | File Size (per sample)| Data Access |
| ----- | -----------| --------- | --------- | --------- |
| Raw sequences (Level 1)| Nucleotide sequence and quality scores | FASTQ | | By request with DUA |
| Aligned sequences (Level 2) | Sequencing data aligned to a reference genome | BAM |  | EGA |
| Aggregated data (Level 3) | QC, analysis, and exploration of sequencing data | CSV, HTML | | AWS |
| All files | Total per sample | | 130 GB |  |


<br>

### Data Access

Several levels of primary and processed data are available via the data cards below:

1. A **summary report** showing basic quality control and a preliminary analysis of the data.
2. **Processed CNA data** including all single-cell copy number calls.
3. **Primary sequencing data** available from the European Genome-Phenome Archive (EGA). A Data Access Agreement between your institution and EGA will be required.

{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'williams-oliphant-2024/'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'Overview'"
    | sort: 'order'
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}
