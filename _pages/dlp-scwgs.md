---
permalink: /dlp-scwgs/
title: DLP+ Single Cell Whole Genome Sequencing
section_id: data
layout: secondary

instrument: |
  DLP+ uses a contactless piezoelectric dispensing platform, such as the sciFLEXARRAYER S3 or cellenONE

  Reactions are carried out on a high-density nanowell chip, in this case a WaferGen (SmartChip) array

  For more information, see [Instrument Information](#instrument-information) (below)
data_access: |
  Access the data through:
  - Level 1: FASTQ (By request with DUA)
  - Level 2: BAM (EGA)
  - Level 3: CSV, HTML (AWS)

  For a description of the files see the [table below](#data-levels).
data_visualization: An HTML report with preliminary analysis is available to explore. See Data Access and Visualization, [below](#data-access-and-visualization)

protocol: |
  Learn about this method and protocol in Laks, McPherson, et al. Cell (2019). [DOI:10.1016/j.cell.2019.10.026](https://doi.org/10.1016/j.cell.2019.10.026)
samples: |
  The following are planned to be sequenced:
  - 100 breast samples
data_generators: "This data was generated and analyzed in the lab of Sam Aparicio."
---
# DLP+ Single Cell Whole Genome Sequencing
DLP+ is a high-throughput direct transposition single-cell whole-genome sequencing approach, based on commodity high-density nanowell arrays and picoliter-volume piezo-dispensing technology available “off the shelf”. DLP+ permits cost-effective shallow sequencing of thousands of cells, rather than sequencing fewer cells at greater depth. DLP+ data can be used to identify clonal populations and their genomic features, properties of individual cells including replication state and chromosomal mis-segregation, and relationships between genomic and morphological properties.

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#data-access-and-visualization" class="button">Data Access</a>

## About the Data
{% include data-grid.html
   instrument=page.instrument
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

### Instrument Information
DLP+ uses a contactless piezoelectric dispensing platform to deposit single cells and reagents as picoliter-scale droplets into an open nanowell array, using commercially available instruments such as the sciFLEXARRAYER S3 or cellenONE. Reactions are carried out on a high-density nanowell chip, in this case a WaferGen (SmartChip) array, which serves as the physical substrate for parallelized single-cell library construction. The dispensing setup incorporates integrated imaging, including droplet and nozzle cameras, enabling image-based selection and quality control to avoid depositing doublets or debris. The spotter workstation also includes practical peripherals such as a chilled chip holder or target stage, a wash-solution reservoir, and an active wash station to support reliable dispensing and minimize carryover between deposits.

## Data Access and Visualization

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
