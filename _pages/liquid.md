---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

	{% for doc in site.pages %}
	
	- {{ doc.url | absolute_url }}
	
	{% endfor %}