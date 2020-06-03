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
	<a href="#{{- tag.name -}}" class="btn btn-chulapa m-1" role="button" style="font-size: calc(1rem + {{tag.size}}rem/10);"><i class="fa fa-tag pr-2"></i>{{- tag.name -}}<span class="badge badge-pill badge-info pl-2">{{tag.size}}</span></a>
	{%- endfor -%}
	</div>
</div>