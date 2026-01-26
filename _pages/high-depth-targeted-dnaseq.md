---
permalink: /high-depth-targeted-dnaseq/
title: High depth targeted DNA sequencing
section_id: data
layout: secondary

instrument: |
  Here are some details about the assay, instruments on which the samples were run, etc.
data_access: |
  Access the data through:
  - Level 1: FASTQ (by request with DUA)
  - Level 2: BAM (GEO)
  - Level 3: VCF (AWS)

data_visualization: "Level 3 data can be explored on the [Broad Single Cell Portal](https://urldefense.proofpoint.com/v2/url?u=https-3A__singlecell.broadinstitute.org_single-5Fcell_study_SCP2937_gray-2Dpre-2Dcancer-2Datlas-2D3prime-2Dnew-2Dcutoff2&d=DwMCAg&c=WO-RGvefibhHBZq3fL85hQ&r=cweh-od9e4IKbwBn0LquQ1bd_4ItG3qeJdojjNJCWn4&m=rzG9BjtvHyOFzPaeLT1pYfgqZDvVmCqEMVfvVOsE6NjO_GiX_wcfnaXPHPJRGzkN&s=ci83bBuiB7y6ZeSoVd2D_y-Nx99ERSjTQF-Ukhrj6_Y&e=)"
protocol: "The tissues were bulk sequenced by the Nathanson lab using a custom panel of 149 genes commonly altered in breast cancer. The list was curated from existing clinical panels and literature reviews. Link to protocol. Could also link to dissociation method protocol, etc."
samples: |
  The following have been sequenced:
  - 118 samples from 116 individuals
data_generators: "This data was generated and analyzed by teams in the lab of Kate Nathanson."
---
# High depth targeted DNA sequencing

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-visualization" class="button">Data Visualization</a>

High depth targeted DNA sequencing is...

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
| Raw sequences (Level 1)| Nucleotide sequence and quality scores | FASTQ | 400-700 MB| by Request with DUA|
| Aligned sequences (Level 2) | sequencing data aligned to a reference genome | BAM | 1.5 GB | GEO |
| Aggregated data (Level 3) | QC, analysis, and exploration of single-cell RNA-seq data | VCF | 50 KB | AWS |


<br>

## Data Visualization
Below are private links to data visualizations accessible by members of the Gray BRCA Atlas Team.
{%
    assign overviews = site.data-cards
    | where_exp: "item", "item.url contains 'breast-atlas-unpublished'"
    | where_exp: "item", "item.hide != true"
    | where_exp: "item", "item.tags contains 'Overview'"
    | where_exp: "item", "item.tags contains 'High-Depth DNAseq'"
%}

{% if overviews.size > 0 %}
  {% include cards.html cards=overviews %}
{% endif %}
