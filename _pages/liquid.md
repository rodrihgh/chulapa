---
layout: cols2
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---


{%- assign newdate = 'now' | date_to_string -%}
This is the new date:

{{ newdate }}


Now it should show a norwegian date:


{% include snippets/datetranslate.html  date=newdate %}



{% include snippets/datetranslate.html  date="December Monday" %}

End here

{% for item in site.collections %}
- {{ item.title }} {{ item.date }}{{ item.collection }}

```
{{ item }}
```
{% endfor %}
