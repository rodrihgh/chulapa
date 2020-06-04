---
layout: default
title: Gallery
subtitle: An example 
permalink: /gallery2
---


An example of gallery with masonry

{% assign gallery = site.static_files | where: "image_col", "gallery" %}
<div class="masonry">
  {%- for item in gallery -%}
  <div class="masonry-item">
  <img class="masonry-content" src="{{- item.path | absolute_url -}}">
  </div>
  {%- endfor -%}
</div>

<script src="{{ '/assets/js/masonry.js' | absolute_url }}"></script>

