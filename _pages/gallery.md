---
layout: default
title: Gallery
subtitle: An example 
permalink: /gallery
gallery:
    - path: https://picsum.photos/450/325?image=100 
    - path: https://picsum.photos/450/450?image=200 
    - path: https://picsum.photos/450/280?image=300 
    - path: https://picsum.photos/450/540?image=400 
    - path: https://picsum.photos/450/380?image=500 
    - path: https://picsum.photos/450/300?image=600 
---


An example of gallery


{% assign internal_gallery = site.static_files | where: "image_col", "gallery" %}
{% include components/gallery bricks=internal_gallery %}


Now try with external on YAML header:

{% include components/gallery bricks=page.gallery %}