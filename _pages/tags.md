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
	<a href="#{{- tag.name -}}" class="btn btn-chulapa m-1" role="button" style="font-size: calc(1rem + {{tag.size}}px/3 - 1px);"><i class="fa fa-tag mr-2" aria-hidden="true"></i>{{- tag.name -}}<span class="badge badge-pill badge-info ml-2">{{tag.size}}</span></a>
	{%- endfor -%}
	</div>
</div>

{% assign words_per_minute = site.words_per_minute | default: 200 %}
{% for tag in grouptag %}
<section id="{{- tag.name -}}" class="pt-5">
<div class="d-flex  align-items-center border-bottom border-chulapa mb-2">
  <h3 class="my-0"><i class="fa fa-tag mr-1" aria-hidden="true"></i>{{- tag.name -}} </h3>
  <div class="badge badge-pill badge-info ml-2">{{tag.size}}</div>
</div>
  {% for document in alldocs %}
  {% assign words = document.content | strip_html | number_of_words %}
  {% assign readtime = "< 1’" %}
  {% if words > words_per_minute %}
  {% assign readtime = words | divided_by:words_per_minute | append: "’" %}
  {% endif %}
	{% if document.tags contains tag.name %}
  <article class="chulapa-links-hover-only mb-3">
  <a href="{{ document.url | absolute_url }}"><h5>{{ document.title }}</h5></a>
  <div class="small">
  {% if document.date %}
  <i class="far fa-calendar"></i> <time datetime="{{- document.date | date_to_xmlschema -}}">{{- document.date | date: "%B %d, %Y" -}}</time> | 
  {% endif %}
  <i class="far fa-clock"></i> {{ readtime }} | 
  <a href="{{ document.url | absolute_url }}" class="text-primary"><i class="fas fa-external-link-alt mx-2"></i><span class="sr-only">Link</span></a>
  </div>
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
