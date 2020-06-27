---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{% assign internal_gallery = site.static_files | 
where: "image_col", "gallery" | map: "path"  %}

{% for item in internal_gallery %}
 - {{ item }}
{% endfor %}

