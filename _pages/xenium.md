---
title: Xenium
permalink: /xenium/

section_id: data
layout: secondary

instrument: |
  Information forthcoming
data_generators: "This data was generated and analyzed by the Laboratory of Systems Pharmacology at Harvard Medical School."
data_access: |
  Data will be accessible from the following:
  - Levels 1: h5 (TBD)
  - Level 4: csv (AWS)

  For a description of the files see the [table below](#data-levels).

data_visualization: |
    Full-resolution images can be viewed in a web browser using Minerva:
    - via the gallery (forthcoming)
    - in cBioPortal (forthcoming)

    Learn more about the Minerva software at [minerva.im](minerva.im).

protocol: |
  Learn about the Xenium in situ method by reading:
  - forthcoming

samples: |
  The following have been imaged with Xenium:
  - 6 ovarian STIC samples
---

# Xenium in Situ

Xenium in situ is a targeted spatial transcriptomics platform that enables single-cell, spatially resolved RNA profiling directly in intact FFPE tissue sections.

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
| Raw images (Level 1) | Collected using ORION | h5 | | TBD |
| Single-cell spatial feature tables (Level 4) | Summarize the expression of marker intensities and morphological features for each cell | csv |  | AWS |
