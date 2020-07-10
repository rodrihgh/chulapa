---
layout: minimal
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
project_links:
    - url: https://github.com/rodrihgh/music-scales-playground
      icon: "fab fa-github"
      label: View on Github
    - url: https://colab.research.google.com/github/rodrihgh/music-scales-playground/blob/master/music-scales.ipynb
      icon: "fas fa-code"
      label: Open in Colab
---

{%- include headers2.html headertype="splash" imghero=page.header_img projects=page.project_links -%}


{% if page.project_links %}
  {% for project in page.project_links  %}
- {{ project.label }} {{ project.url }}  {{ project.icon }}
  {% endfor %}
{% endif %}


            
