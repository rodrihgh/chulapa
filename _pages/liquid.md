---
layout: cols2
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---


{%- assign newDate = 'now' | date_to_string -%}
This is the new date:

{{ newdate }}


Now it should show a norwegian date:


{% include snippets/datetranslate.html  date=newDate %}


End here

