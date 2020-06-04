---
layout: default
title: Gallery
subtitle: An example 
permalink: /gallery
---


An example of gallery

{%- assign gallery = site.static_files | where: "image_col", "gallery" -%}
<div class="chulapa-masonry">
{% for item in gallery -%}
<img class="chulapa-masonry-item" src="{{- item.path | absolute_url -}}">
{%- endfor %}
</div>

