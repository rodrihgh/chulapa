---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{% for cont in site.github.contributors %}

- {{ cont.login }} {{cont.avatar_url}} {{ cont.html_url }}

{% endfor %}

{% for var in site.chulapa-skin.vars %}
  {% if var[1] %}
   ${{ var[0] }}: {{ var[1] }};
  {% endif %}
{% endfor%}
