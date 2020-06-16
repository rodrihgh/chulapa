---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

{% assign allsite = site.pages | where_exp: "item", "item.categories != nil" | concat: site.documents %}

	{% for doc in allsite %}
	
	- {{ doc.url | absolute_url }} - category {{ doc.categories }}
	
	{% endfor %}