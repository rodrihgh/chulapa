---
layout: default
title: Tag cloud
subtitle: All the tags of this site
permalink: /tags
---

This is an example of how to create a tag cloud. This tag includes posts only


{% assign alldocs = site.posts %}		
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag | sort: 'size' | reverse %}

<div class="row pt-5" id="tags">
<div class="col">
	{%- for tag in grouptag -%}
	<a href="#{{- tag.name -}}" class="btn btn-chulapa m-1" role="button" style="font-size: calc(1rem + {{tag.size}}px/3 - 1px);"><i class="fa fa-tag mr-2"></i>{{- tag.name -}}<span class="badge badge-pill badge-info ml-2">{{tag.size}}</span></a>
	{%- endfor -%}
	</div>
</div>


{% for for tag in grouptag %}
<section id="{{- tag.name -}}" class="pt-5">
  <h3 class=" border-bottom border-chulapa"><i class="fa fa-tag mr-1" aria-hidden="true"></i>
	{{- tag.name -}} <span class="badge badge-pill badge-info ml-2">{{tag.size}}</span></h3>
  {% for document in alldocs %}
	{% if document.tags contains tag.name %}
  <article class="mb-3">
  <h4>{{ document.title }}</h4>
  <h5>{{ document.subtitle }}</h5>
  {% if document.date %}
  <time datetime="{{- document.date | date_to_xmlschema -}}">{{- document.date | date: "%B %d, %Y" -}}</time>
  {% endif %}
  </article>
  {% endif %}
  {% endfor %}
  <div class="text-right">
      <button type="button" class="btn btn-outline-chulapa btn-sm">
      <a href="#tags"><i class="fa fa-chevron-up"></i> Back to Top</a>
      </button>
  </div>
</section>
{% endfor %}