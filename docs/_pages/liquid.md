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
      icon: "fab fa-python"
      label: Open in Colab
---


{% assign img = "https://images.unsplash.com/photo-1545290614-5ceedf604139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" %}

{%- include headers2.html headertype="splash" projects=page.project_links -%}
{%- include headers2.html headertype="splash" projects=page.project_links imghero=img -%}
{%- include headers2.html headertype="hero"   projects=page.project_links -%}
{%- include headers2.html headertype="hero"   projects=page.project_links imghero=img -%}
{%- include headers2.html headertype="base"   projects=page.project_links -%}
{%- include headers2.html headertype="base"   projects=page.project_links imghero=img -%}
{%- include headers2.html headertype="post"   projects=page.project_links -%}
{%- include headers2.html headertype="post"   projects=page.project_links imghero=img -%}

{% if page.project_links %}
  {% for project in page.project_links  %}
- {{ project.label }} {{ project.url }}  {{ project.icon }}
  {% endfor %}
{% endif %}


            
