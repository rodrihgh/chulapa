---
layout: minimal
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
header_img: "https://images.unsplash.com/photo-1545290614-5ceedf604139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
project_links:
    - url: https://github.com/rodrihgh/music-scales-playground
      icon: "fab fa-github"
      label: View on Github
    - url: https://colab.research.google.com/github/rodrihgh/music-scales-playground/blob/master/music-scales.ipynb
      icon: "fab fa-python"
      label: Open in Colab
---

{%- include headers2.html headertype="splash" imghero=page.header_img projects=page.project_links -%}

{%- include headers2.html headertype="splash" projects=page.project_links imghero=false  -%}


{% if page.project_links %}
  {% for project in page.project_links  %}
- {{ project.label }} {{ project.url }}  {{ project.icon }}
  {% endfor %}
{% endif %}


            
