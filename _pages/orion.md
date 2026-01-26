---
title: Orion
permalink: /orion/

section_id: data
layout: secondary

instrument: "Orion data was collected on a [RareCyte Orion](https://rarecyte.com/orion/) microscope."
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
  Learn about the Orion method by reading:
  - Lin, JR., Chen, YA., Campton, D. et al. Nature Cancer (2023). [DOI:10.1038/s43018-023-00576-1](https://doi.org/10.1038/s43018-023-00576-1)

samples: |
  The following are planned to image with Orion:
  - 50-100 breast samples
  - 75 ovarian samples
---

# Orion Whole Slide Multiplexed Imaging

Orion is a method for collecting one-shot and multi-cycle 18-plex immunofluorescence images and diagnostic-grade H&E images from the same samples. The Orion method was developed in collaboration with RareCyte Inc. and uses a specialized microscope and fluorescent antibodies, which can be imaged simultaneously and spectrally unmixed. Same-slide H&E and IF images provide complementary information that can be used to train ML models to predict cancer progression.

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

Orion uses OME-TIFF and other [BioFormats](https://www.openmicroscopy.org/bio-formats/) file formats and follows [MITI standards](https://www.miti-consortium.org/).

| Data Type  | Description | File Format | Average size (per sample)| Data Location |
| ----- | -----------| --------- |--------- |--------- |
| High-plex image data (Levels 1-2)| Quality controlled images are assembled into a high-plex whole slide image | OME-TIFF | 100 GB | AWS |
| Segmentation masks (Level 3) | Cell segmentation identifies and separates cell, nucleus, cytoplasm and other regions  | OME-TIFF | 0.5 GB | AWS |
| Single-cell spatial feature tables (Level 4) | Summarize the expression of marker intensities and morphological features for each cell | csv | 1 GB | AWS |
