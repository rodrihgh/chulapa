---
layout: cols2
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---


{%- assign newDate = 'now' | date:'%A %B %d, %Y' -%}
This is the new date:

{% newdate  %}


Now it should show a norwegian date:

{%- include snippets/datetranslate.liquid  dateString=newDate language='Norwegian' -%}

End here

