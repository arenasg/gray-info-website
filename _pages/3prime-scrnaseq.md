---
permalink: /3prime-scrnaseq/
title: Single Cell RNA Sequencing 10x 3'

section_id: data
layout: secondary

instrument: "Orion data was collected on a [RareCyte Orion](https://rarecyte.com/orion/) microscope."
data_access: |
  Access the data through:
  - Level 1: FASTQ (By request with DUA)
  - Level 2: BAM (By request with DUA)
  - Level 3: H5 (AWS)

data_visualization: |
  Data visualization is currently accessible by members of the Gray BRCA Atlas Team on the Broad Single Cell Portal.

protocol: "The tissues were dissociated to single cells using the Nathanson lab protocol which robustly captures immune cells. Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following are planned to be sequenced:
  - 45-56 breast samples from reduction mammoplasties or prophylactic mastectomies
data_generators: "This data was generated and analyzed by teams in the labs of Kate Nathanson and Henry Long."
---
# Single Cell RNA Sequencing 10x 3'

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-visualization" class="button">Data Visualization</a>

About Single Cell RNA Sequencing 10x 3'...

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
| Raw sequences (Level 1)| Nucleotide sequence and quality scores | FASTQ | 16 GB | By request with DUA |
| Aligned sequences (Level 2) | Sequencing data aligned to a reference genome | BAM |  | By request with DUA |
| Aggregated data (Level 3) | QC, analysis, and exploration of ATAC sequencing data | H5 | 10-30 MB | AWS |


<br>

## Data Visualization
Below are private links to data visualizations accessible by members of the Gray BRCA Atlas Team.
{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'breast-atlas-unpublished'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'Overview'"
    | where_exp: "item", "item.tags contains '10x'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}
