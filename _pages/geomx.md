---
title: GeoMx
permalink: /geomx/

section_id: data
layout: secondary

instrument: "GeoMx data was collected on a [Nanostring GeoMx](https://nanostring.com/products/geomx-digital-spatial-profiler/geomx-dsp-overview/) Digital Spatial Profiler (DSP)."
data_generators: "This data was generated and analyzed by the Laboratory of Systems Pharmacology at Harvard Medical School."
data_access: |
  All image data will be accessible from Amazon Web Services (AWS):
  - Levels 1: FASTQ
  - Level 3: DCC
  - Level 4: csv

  For a description of the files see the [table below](#data-levels).
data_visualization: |
  Full-resolution images can be viewed in a web browser using Minerva:
  - via the gallery, [below](#explore-data)
  - in [cBioPortal](https://www.cbioportal.org/study/summary?id=ovary_geomx_gray_foundation_2024)

  Learn more about the Minerva software at [minerva.im](minerva.im).

protocol: |
  Learn about the GeoMx method by reading:
  - Zollinger, Lingle, Sorg, Beechem, Merritt. (2020). Methods in Molecular Biology. DOI: [10.1007/978-1-0716-0623-0_21](https://doi.org/10.1007/978-1-0716-0623-0_21)

samples: |
  The following are planned to image with GeoMx:
  - 65 ovarian samples
---
{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

# GeoMx Microregional Spatial Transcriptomics

GeoMx microregional spatial transcriptomics detects high-plex protein and RNA expression within FFPE-embedded tissues to measure gene expression across the entire transcriptome. We combine this method with H&E and CyCIF images to select region of interests (ROIs) for GeoMX analysis.

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#explore-data" class="button">Explore Data</a>

## About the Data

<br>

{% include data-grid.html
   instrument=page.instrument
   samples=page.samples
   data_visualization=page.data_visualization
   data_access=page.data_access
   protocol=page.protocol
   data_generators=page.data_generators
%}
<br>
---
### Data Levels

| Data Type  | Description | File Format | Average size (per slide)| Data Location |
| ----- | -----------| --------- |--------- |--------- |
| Level 1-2 | Raw sequencing files | FASTQ | | GEO |
| Level 3 | Count data for each collection plate  | DCC |  | GEO |
| Level 4 | Log normalized gene expression data | csv | 150 MB | AWS |

---

## Explore Data
{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'GeoMx'"
    | where_exp: "item", "item.hide != true"
%}

{% include atlas-card-sorting.md %}
