---
layout: default
title: Tag cloud
subtitle: All the tags of this site
permalink: /tags
---

This is an example of how to create a tag cloud. This tag includes posts only


{% assign alldocs = site.posts %}		
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag | sort: 'size' | reverse %}

<div class="row pt-5" id="years">
<div class="col">
	{%- for tag in grouptag -%}
	<a href="#{{- tag.name -}}" class="btn btn-primary">{{- tag.name -}} ({{tag.size}})</a>
	{%- endfor -%}
	</div>
</div>