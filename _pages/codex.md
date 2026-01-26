---
title: Codex
permalink: /codex/

section_id: data
layout: secondary

instrument: "CODEX data was collected on the following instrument."
data_generators: "This data was generated and analyzed by a team at the lab of Kate Nathanson."
data_access: |
  All image data will be accessible from Amazon Web Services (AWS):
  - Levels 2: QPTIFF
  - Level 3: TIFF, CSV
  - Level 4: CSV

  For a description of the files see the [table below](#data-levels).
data_visualization: |
  Full-resolution images can be viewed in a web browser using Minerva:
  - via the gallery (forthcoming)
  - in cBioPortal (forthcoming)

  Learn more about the Minerva software at [minerva.im](minerva.im).

protocol: |
  Learn about CODEX method by reading:

samples: |
  The following are planned to image with CODEX:
  - 5 TMAs
  - 50-100 breast samples

---

# CODEX

CODEX is an imaging method ...

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
| TMA image data (Levels 2)| Quality controlled images are assembled into a high-plex whole slide image | QPTIFF | 5-15 GB | AWS |
| Whole Slide image data (Levels 2)| Quality controlled images are assembled into a high-plex whole slide image | QPTIFF | 50 GB | AWS |
| Segmentation masks (Level 3) | Cell segmentation identifies and separates cell, nucleus, cytoplasm and other regions  | TIFF | 0.5 GB | AWS |
| Single-cell spatial feature tables (Level 4) | Summarize the expression of marker intensities and morphological features for each cell | csv | 1 GB | AWS |
