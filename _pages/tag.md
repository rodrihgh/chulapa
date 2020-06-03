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
	<a href="#{{- tag.name -}}" class="btn btn-chulapa m-1" role="button" style="font-size: calc(1rem + {{tag.size}}px/3 - 1px);"><i class="fa fa-tag mr-2"></i>{{- tag.name -}}<span class="badge badge-pill badge-info ml-2">{{tag.size}}</span></a>
	{%- endfor -%}
	</div>
</div>