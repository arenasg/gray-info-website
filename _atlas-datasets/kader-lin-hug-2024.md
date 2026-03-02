---
layout: secondary
title: Atlas Dataset
section_id: publications

data:
  publication:
    title: 'Multimodal Spatial Profiling Reveals Immune Suppression and Microenvironment Remodeling in Fallopian Tube Precursors to High-Grade Serous Ovarian Carcinoma'
    authors: 'Tanjina Kader, Jia-Ren Lin, Clemens Hug, Shannon Coy, Yu-An Chen, Ino de Bruijn, Natalie Shih, Euihye Jung, Roxanne J. Pelletier, Mariana Lopez Leon, Gabriel Mingo, Dalia Khaled Omran, Jong Suk Lee, Clarence Yapp, Baby Anusha Satravada, Ritika Kundra, Yilin Xu, Sabrina Chan, Juliann B. Tefft, Jeremy Muhlich, Sarah Kim, Stefan M. Gysler, Judith Agudo, James R. Heath, Nikolaus Schultz, Charles Drescher, Peter K Sorger, Ronny Drapkin, Sandro Santagata'
    journal: 'Cancer Discovery. 2024 December 20.'
---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

<a href="https://doi.org/10.1158/2159-8290.CD-24-1366" class="button">Publication</a>
<a href="https://www.cbioportal.org/study/summary?id=ovary_geomx_gray_foundation_2024" class="button">cBioPortal</a>

## Contents
  * [Abstract](#abstract)
  * [Data Stories](#data-stories)
  * [Curated Stories](#curated-stories)
  * [Data Access](#data-access)

### Abstract
  High-Grade Serous Ovarian Cancer (HGSOC) originates from fallopian tube (FT) precursors. However, the molecular changes that occur as precancerous lesions progress to HGSOC are not well understood. To address this, we integrated high-plex imaging and spatial transcriptomics to analyze human tissue samples at different stages of HGSOC development, including p53 signatures, serous tubal intraepithelial carcinomas (STIC), and invasive HGSOC. Our findings reveal immune modulating mechanisms within precursor epithelium, characterized by chromosomal instability, persistent interferon (IFN) signaling, and dysregulated innate and adaptive immunity. FT precursors display elevated expression of MHC-class I, including HLA-E, and IFN-stimulated genes, typically linked to later-stage tumorigenesis. These molecular alterations coincide with progressive shifts in the tumor microenvironment, transitioning from immune surveillance in early STICs to immune suppression in advanced STICs and cancer. These insights identify potential biomarkers and therapeutic targets for HGSOC interception and clarify the molecular transitions from precancer to cancer.

<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="1145398476" title="Immune Suppression in the Fallopian Tube: Insights from Pre-Cancer Atlas" description="Tanjina Kader, PhD presents findings from her 2025 Cancer Discovery Paper to the Ovarian Cancer Syndicate. For a demonstration of exploring the data in cBioPortal see the next video." %}
    </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="1151701868" title="Exploring Ovarian Cancer Study in cBioPortal" description="Tanjina Kader, PhD demonstrates using cBioPortal to explore CyCIF image and GeoMx data from her 2025 Cancer Discovery paper." %}
    </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="1040092371" title="Complex Interplay between Genetic Mutations, DNA Damage Responses, and Immune System Interactions in Fallopian Tube Precursors" description="Serous Tubal Intraepithelial Carcinoma (STIC) with BRCA2 Mutation (LSP18251)." %}
    </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="1040095436" title="Micronuclei Rupture in High-Grade Serous Ovarian Carcinoma (HGSOC)" %}
    </div>
  </div>

## Data Access

Data for this paper is available to explore in [cBioPortal](https://www.cbioportal.org/study/summary?id=ovary_geomx_gray_foundation_2024), including access to associated GeoMx microregional transcriptomic data, ROI annotations, clinical data, and  Minerva stories.

  {%
      assign stories = site.data-cards
      | where_exp: "item", "item.tags contains 'ovarian'"
      | where_exp: "item", "item.hide != true"
  %}

{% include atlas-card-sorting.md %}
