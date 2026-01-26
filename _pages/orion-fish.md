---
title: Orion + FISH
permalink: /orion-fish/

section_id: data
layout: secondary

instrument: |
  Here are some details about the instruments on which the samples were run, etc.
data_generators: "This data was generated and analyzed by the Laboratory of Systems Pharmacology at Harvard Medical School."
data_access: |
  All image data will be accessible from Amazon Web Services (AWS):
  - Levels 1-2: OME-TIFF
  - Level 3: OME-TIFF
  - Level 4: csv

  For a description of the files see the [table below](#data-levels).

data_visualization: |
    Full-resolution images can be viewed in a web browser using Minerva:
    - via the gallery (forthcoming)
    - in cBioPortal (forthcoming)

    Learn more about the Minerva software at [minerva.im](minerva.im).

protocol: |
  Learn about the Orion + FISH method by reading:

samples: |
  The following are planned to image with Orion + FISH:
---

# Orion + FISH

Orion + FISH is ...

<a href="#about-the-data" class="button">About the Data</a>
<a href="#data-levels" class="button">Data Levels</a>

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
### Data Levels:

| Data Type  | Description | File Format | Average size (per sample)| Data Location |
| ----- | -----------| --------- |--------- |--------- |
| High-plex image data (Levels 1-2)| Quality controlled images are assembled into a high-plex whole slide image | OME-TIFF | 100 GB | AWS |
| Segmentation masks (Level 3) | Cell segmentation identifies and separates cell, nucleus, cytoplasm and other regions  | OME-TIFF | 0.5 GB | AWS |
| Single-cell spatial feature tables (Level 4) | Summarize the expression of marker intensities and morphological features for each cell | csv | 1 GB | AWS |
