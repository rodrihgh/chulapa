---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{% assign externalgallery =   "https://picsum.photos/450/325?image=100,
                                 https://picsum.photos/450/450?image=200,
                                 https://picsum.photos/450/280?image=300,
                                 https://picsum.photos/450/540?image=400,
                                 https://picsum.photos/450/380?image=500,
                                 https://picsum.photos/450/300?image=600" %}
                                 
{% assign bricks = externalgallery | split: ", " %}

{{ bricks }}

{% for item in bricks %}
- {{ item }}

{% endfor %}

