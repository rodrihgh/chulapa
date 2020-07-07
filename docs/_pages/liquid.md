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

