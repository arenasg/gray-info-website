---
title: About the Data
permalink: /data-overview

section_id: data
layout: secondary
---

# About the Data

We are committed to making Gray BRCA Atlas data available to the scientific community. Here you will find information describing the various Gray BRCA Pre-Cancer Atlas data types and how they are collected, analyzed, and shared.

<a href="#data-types" class="button">Data Types</a>
<a href="#public-data-access" class="button">Public Data Access</a>

## Data Types

The Gray BRCA Precancer Atlas is currently comprised of the following data types:

| Assay  | Data Type | Atlas | Data Access | Visualization Tools |
| ----- | -----------| --------- |--------- |--------- |
| [High depth targeted DNA sequencing]({{"/dnaseq-high-depth-targeted" | relative_url}}) | DNA Sequencing | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | [EGA](https://ega-archive.org/studies/EGAS00001007716) and AWS<sup>[1](#aws-ref)</sup> | TBD |
| [Single Cell RNA Sequencing 10X 3']({{ "/scrnaseq-3prime" | relative_url }}) | Single Cell RNA Sequencing | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | GEO<sup>[2](#geo-ref)</sup> | TBD |
| [FLEX Single Cell RNA Sequencing 10X]({{ "/scrnaseq-flex" | relative_url }}) | Single Cell Sequencing | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | GEO | Broad Single Cell Portal<sup>[3](#broad-ref)</sup>|
| [ATAC Sequencing]({{ "/atac-seq/" | relative_url }}) | Single Cell Sequencing | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | GEO | Broad Single Cell Portal, UCSC Cell Browser<sup>[4](#ucsc-ref)</sup>|
| [DLP+ scWGS]({{ "/dlp-scwgs" | relative_url }}) | Sequencing | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | EGA, AWS | TBD |
| [GeoMx micro-region transcript profiling]({{ "/geomx" | relative_url }}) | Spatial RNA | [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | GEO | cBioPortal<sup>[6](#cbioportal-ref)</sup> |
| [CODEX]({{ "/codex" | relative_url}}) | Imaging | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}) | AWS | Minerva<sup>[7](#minerva-ref)</sup> |
| [Cyclic Immunofluorescence (CyCIF) imaging]({{ "/cycif/" | relative_url }})| Whole-Slide Multiplexed Imaging | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}), [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | AWS | Minerva, cBioPortal |
| [Hematoxylin and Eosin (H&E) images]({{ "/he/" | relative_url }}) | Whole-Slide Imaging | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}), [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | AWS | Minerva |
| [Orion]({{ "/orion" | relative_url }}) | Whole-Slide Multiplexed Imaging | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}), [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | AWS | Minerva |
| [Orion-FISH]({{ "/orion-fish" | relative_url}}) | Spatial DNA | [Breast]({{ "/atlas-datasets/devising-new-strategies-to-track-and-prevent-breast-cancer-development-in-brca-mutation-carriers/" | relative_url }}), [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | AWS | Minerva, cBioPortal |
| [Xenium]({{ "/xenium" | relative_url}}) | Image-based Spatial Transcriptomics | [Ovarian]({{ "/atlas-datasets/investigating-the-origins-and-early-diagnosis-of-ovarian-cancer/" | relative_url }}) | TBD | TBD |

<br>

---

## Public Data Access

A key goal of the Gray BRCA Precancer Atlas is to provide access to primary data consistent with [FAIR Principles](https://www.go-fair.org/fair-principles/). Data types with an available public repositories (i.e., transcriptomic data via GEO) are made available at the time of publication. Data without a clear subject repository are available in an AWS S3 bucket. AWS S3 access instructions will be shared when data is available to access. Email tissue-atlas(at)hms.harvard.edu if you have questions or experience issues.

### Data Access References
<sup>1</sup> <a id="aws-ref"></a>AWS: [http://aws.amazon.com/](http://aws.amazon.com/). Data access instructions available via [Zenodo](https://doi.org/10.5281/zenodo.10223574) <br>
<sup>2</sup> <a id="geo-ref"></a>GEO: [https://www.ncbi.nlm.nih.gov/geo/](https://www.ncbi.nlm.nih.gov/geo/) <br>
<sup>3</sup> <a id="broad-ref"></a>Broad Single Cell Portal: [https://singlecell.broadinstitute.org/single_cell](https://singlecell.broadinstitute.org/single_cell) <br>
<sup>4</sup> <a id="ucsc-ref"></a>UCSC Browser: [https://cells.ucsc.edu/](https://cells.ucsc.edu/) <br>
<sup>5</sup> <a id="ega-ref"></a>European Genome-Phenome Archive (EGA): [https://ega-archive.org/](https://ega-archive.org/) <br>
<sup>6</sup> <a id="cbioportal-ref"></a>cBioPortal: [cbioportal.org](cbioportal.org) <br>
<sup>7</sup> <a id="minerva-ref"></a>Minerva: Image data can be explored on this website at [graybrcaatlas.org/image-data-explorations](/image-data-explorations). Learn more about Minerva at [minerva.im](minerva.im)

---
