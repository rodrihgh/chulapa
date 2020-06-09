---
layout: cols2
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---


{%- assign newDate = 'now' | date:'%A %B %d, %Y' -%}
This is the new date:




Now it should show a norwegian date:

{%- include snippets/datetranslate.html  date=newDate -%}

End here

