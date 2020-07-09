---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
project_link:
    - url: https://github.com/rodrihgh/music-scales-playground
      icon: "fab fa-github"
      label: View on Github
    - url: https://colab.research.google.com/github/rodrihgh/music-scales-playground/blob/master/music-scales.ipynb
      icon: "fas fa-code"
      label: Open in Colab
---
{% if page.project_link %}
  {% for project in page.project_link  %}
- {{ project.icon }} {{ project.url }}  {{ project.icon }}
  {% endfor %}
{% endif %}

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeEb_9jdWpNaY7t3rt7HjJx8buyzgjtC4olWEKU5vvFIH_Ww/viewform?embedded=true" width="100%" height="20vh" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
