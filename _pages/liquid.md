---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{%- assign alldocs = site.posts | sort: 'date' | reverse -%}
{%- assign postsInYear = alldocs | group_by_exp: 'post', 'post.date | date: "%Y"' -%}

{%- for year in postsInYear -%}
{{ year.name }}
{%- assign postsInMonth = year.items | group_by_exp: 'post', 'post.date | date: "%Y %m"' -%}

{%- for month in postsInMonth -%}
 - {{ month.name }}
{% endfor %}

{% endfor %}
