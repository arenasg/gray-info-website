---
title: CyCIF
permalink: /cycif/

section_id: data
layout: secondary

instrument: "CyCIF data was collected on RareCyte CyteFinder and CyteFinder II microscopes."
data_generators: "This data was generated and analyzed by the Laboratory of Systems Pharmacology at Harvard Medical School."
data_access: |
  All image data will be accessible from Amazon Web Services (AWS):
  - Level 1: rcpnl
  - Level 2: OME-TIFF
  - Level 3: OME-TIFF
  - Level 4: csv

  For a description of the files see the [table below](#data-levels).
data_visualization: |
  Full-resolution images can be viewed in a web browser using Minerva:
  - via the gallery [below](#narrated-minerva-stories)
  - in cBioPortal (forthcoming)

  Learn more about the Minerva software at [minerva.im](minerva.im).

protocol: |
  Learn about the CyCIF method and selected publications at [https://www.tissue-atlas.org/cycif-method](https://www.tissue-atlas.org/cycif-method).

  Access the CyCIF protocol on [protocols.io](dx.doi.org/10.17504/protocols.io.5qpvorbndv4o/v2).
samples: |
  The following are planned to image with CyCIF:
  - 50-100 breast samples
  - 30-50 ovarian samples
---
{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}


# Cyclic Immunofluorescence Multiplexed Imaging

Cyclic Immunofluorescence ([CyCIF](https://www.tissue-atlas.org/cycif-method)) is a multiplexed imaging method that uses cycles of staining, bleaching, and imaging to generate high-plex images. A major advantage of our workflow is that it can be applied to many sample types and can generate and analyze whole slide images (WSI). WSIs enable deep spatial analyses and provide enough statistical power to make conclusions about spatial relationships that are impossible in small fields of view.

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>
<a href="#explore-data" class="button">Explore Data Online</a>

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

CyCIF uses OME-TIFF and other [BioFormats](https://www.openmicroscopy.org/bio-formats/) file formats and follows [MITI standards](https://www.miti-consortium.org/).

| Data Type  | Description | File Format | Average size (per sample)| Data Location |
| ----- | -----------| --------- |--------- |--------- |
| Raw images (Level 1) | Collected using cyclic immunofluorescence ([CyCIF](https://www.tissue-atlas.org/cycif-method)) | rcpnl  | 80 GB | AWS |
| High-plex image data (Level 2)| Quality controlled images are assembled into a high-plex whole slide image using the [MCMICRO](https://mcmicro.org/) analysis pipeline | OME-TIFF or other [BioFormats](https://www.openmicroscopy.org/bio-formats/) file type | 90 GB | AWS |
| Segmentation masks (Level 3) | Cell segmentation identifies and separates cell, nucleus, cytoplasm and other regions  | OME-TIFF | 35 GB | AWS |
| Single-cell spatial feature tables (Level 4) | Summarize the expression of marker intensities and morphological features for each cell | csv | 600 MB | AWS |

---
## Explore Data
### Viewing image data online using Minerva

[Minerva](https://www.minerva.im/) is a suite of software tools for visualizing, annotating, and sharing high-plex tissue images in a web browser with an accompanying [narration](https://www.nature.com/articles/s41551-021-00789-8). Minerva makes it possible to interact with large, whole-slide images without downloading any data or installing any software. In Minerva, viewers can annotate and share regions of interest, pan and zoom to explore different levels of detail, and view different subsets of markers.
<br>

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'CyCIF'"
    | where_exp: "item", "item.hide != true"
%}

{% include minerva-story-sorting-pubs.md %}
