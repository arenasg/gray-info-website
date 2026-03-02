{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'Overview' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  <h3> Data Access and Data Visualizations </h3>
  {% include data-access-cards-description.md %}
  {% include cards.html cards=dataCardArray %}
{% endif %}



{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'curated' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  <h3> Curated Minerva Stories</h3>
  {% include curated-minerva-description.md %}
  {% include cards.html cards=dataCardArray %}
{% endif %}



{% assign dataCardArray = '' | split: '' %}
{% for n in stories %}
  {% if n.tags contains 'auto' %}
    {% assign dataCardArray = dataCardArray | push: n %}
  {% endif %}
{% endfor %}

{% if dataCardArray.size > 0 %}
  <h2> Automated Minerva Stories</h2>
  {% include auto-minerva-description.md %}
  {% include cards.html cards=dataCardArray %}
{% endif %}
