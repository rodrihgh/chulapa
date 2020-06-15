---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{% assign: keyword = site.github.public_repositories | where_exp:"item",
"item.name == site.github.repository_name " | map: "topics" %}

{% if keyword %}
- keyword= {{- keyword -}}
{% endif %}


{% for repository in site.github.public_repositories %}
  * {{ repository.name }} ({{ repository.html_url }}) {{ repository.topics }}
{% endfor %}


{% assign alldocs = site.documents %}		
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  %}
{{ grouptag | group_by: key }}

{%- assign newdate = 'now' | date_to_string -%}
This is the new date:

{{ newdate }}


Now it should show a norwegian date:


{% include snippets/datetranslate.html  date=newdate %}



{% include snippets/datetranslate.html  date="December Monday" %}

End here

{% for col in site.collections %}
{% assign docs = col.docs %}
{% for item in docs %}
- {{ item.title }} {{ item.date }}{{ item.collection }}

```
{{ item.tags }}
```
{% endfor %}
{% endfor %}

{{ site.tags }}
