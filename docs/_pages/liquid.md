---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
project_link:
  links:                
    - url: https://twitter.com/jack
      icon: "fab fa-twitter"
      label: label1
    - url: https://twitter.com/jack
      icon: "fab fa-twitter"
      label: AA
---

{% if page.project_link.links %}

{{ page.project_link.label | default: "Source code"  }}

{% for project in page.project_link.links  %}

- {{ project.icon }} {{ project.url }}  {{ project.icon }}

{% endfor %}

{% endif %}

