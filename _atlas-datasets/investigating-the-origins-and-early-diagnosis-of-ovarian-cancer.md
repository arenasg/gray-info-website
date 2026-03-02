---
layout: secondary
title: Atlas Dataset
section_id: projects

data:
  publication:
    title: Investigating the origins and early diagnosis of ovarian cancer  
    description: "Ovarian cancer presents a more formidable challenge per case than breast cancer, yet it has seen fewer advancements in treatment and diagnosis. In the United States, we observe approximately 20,000 new ovarian cancer diagnoses annually, which lead to 14,000 tragic deaths. This rate contrasts with breast cancer, which records around 240,000 new cases and 42,000 fatalities. Like breast cancer, ovarian cancer is more prevalent in individuals carrying mutations in the BRCA1 or BRCA2 genes (approximately 1.2% without vs. 40% with mutation). Consequently, people with a BRCA1/2 mutation face the agonizing decision of either living with an elevated ovarian cancer risk or undergoing surgery to remove their healthy ovaries and fallopian tubes, a procedure known as risk-reducing salpingo-oophorectomy.


    The decision to undergo risk reduction surgery is complicated by the fact that ovarian cancer is often diagnosed at late stages, and we have a limited understanding of its origins. However, recent insights have revealed that certain epithelial ovarian cancers may start in the fallopian tube from a pre-cancerous condition known as serous tubal intraepithelial carcinoma (STIC). Our project aims to characterize the biology of STICs, elucidate their clinical significance, and establish precise diagnostic criteria for identifying STICs in surgical samples."

---

{% assign urlParts = page.url | split: '/' %}
{% assign sectionId = urlParts[-1] %}

{% include atlas-dataset-info.html
    sectionId=sectionId
    pubData=page.data
    thumbnailDir=sectionId %}

### Contents
* [Project Overview](#project-overview)
* [Publications](#publications)
* [Data Stories](#data-stories)
* [Explore Tissue Images](#explore-tissue-images)

## Project Overview
<div class="row mb-4">
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="866120650" title="Ovarian Cancer Atlas with Dr. Ronny Drapkin and Dr. Tanjina Kader" description="In this interview, Drs. Ronny Drapkin and Tanjina Kader introduce the goals of the Ovarian Cancer Atlas." %}
    </div>
  <div class="col-md-6 mb-4">
      {% include vimeo-card.html id="1145398476" title="Immune Suppression in the Fallopian Tube: Insights from Pre-Cancer Atlas" description="Tanjina Kader, PhD presents findings from her 2025 Cancer Discovery Paper 'Multimodal Spatial Profiling Reveals Immune Suppression and Microenvironment Remodeling in Fallopian Tube Precursors to High-Grade Serous Ovarian Carcinoma' to the Ovarian Cancer Syndicate. For a demonstration of exploring the data in cBioPortal see the next video." %}
      </div>
  <div class="col-md-6 mb-4">
      {% include vimeo-card.html id="1151701868" title="Exploring Ovarian Cancer Study in cBioPortal" description="Tanjina Kader, PhD demonstrates using cBioPortal to explore CyCIF image and GeoMx data from her 2025 Cancer Discovery paper, 'Multimodal Spatial Profiling Reveals Immune Suppression and Microenvironment Remodeling in Fallopian Tube Precursors to High-Grade Serous Ovarian Carcinoma'." %}
      </div>
  <div class="col-md-6 mb-4">
    {% include vimeo-card.html id="1040092371" title="Complex Interplay between Genetic Mutations, DNA Damage Responses, and Immune System Interactions in Fallopian Tube Precursors" description="Serous Tubal Intraepithelial Carcinoma (STIC) with BRCA2 Mutation (LSP18251) from 'Multimodal Spatial Profiling Reveals Immune Suppression and Microenvironment Remodeling in Fallopian Tube Precursors to High-Grade Serous Ovarian Carcinoma'." %}
    </div>
  </div>

---
## Publications
{% comment %}
  'publicationList' should be a comma-delineated string of publication file names
{% endcomment %}
{% assign publicationList = 'multimodal-spatial-profiling-reveals-immune-suppression-and-microenvironment-remodeling-fallopian-tube-precursors-high-grade-serous-ovarian-carcinoma.md' %}

{% include pub-list.html list=publicationList %}
---

## Data Stories
Data Stories are narrated Minerva stories that guide readers through the complexities of a large image dataset via a series of progressive narrated waypoints.

{%
    assign stories = site.data-cards
    | where_exp: "item", "item.tags contains 'ovarian'"
    | where_exp: "item", "item.hide != true"
%}

{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'narrated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}

## Explore Tissue Images
Access the minimally processed, unannotated Minerva stores of additional tissue images associated with this project. Click any of the following thumbnail images for an interactive view of the full-resolution images.

{% assign dataCardArray = '' | split: '' %}
{% for c in stories %}
  {% if c.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: c %}
  {% endif %}
{% endfor %}

{% assign dataCardArraySort = dataCardArray | sort: 'date' | reverse %}
{% if dataCardArraySort.size > 0 %}
  {% include cards.html cards=dataCardArraySort %}
{% endif %}
