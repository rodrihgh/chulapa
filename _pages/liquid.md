---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

  {% assign alldocs = site.documents | where_exp: "item", "item.include_on_feed == true" | sort: 'date' | reverse %}

	{% for doc in alldocs %}
	
- {{ doc.url | absolute_url }} - category {{ doc.categories }} - {{ doc.date | date: "%a, %b %d, %y" }}

```
{{ doc.date }} {{ doc.url }} {{ doc.title }}
```
	
	{% endfor %}