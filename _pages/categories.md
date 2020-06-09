---
layout: default
title: Categories
subtitle: Posts by categories
permalink: /categories
---

This is an example of how to create a category page


{% assign alldocs = site.posts %}		
{% assign groupcategories =  alldocs | map: 'categories' | join: ','  | split: ','  | group_by: category | sort: 'size' | reverse %}

<div class="row pt-5" id="categories">
<div class="col">
	{%- for category in groupcategories -%}
	<a href="#{{- category.name -}}" class="btn btn-info m-1" role="button" style="font-size: calc(1rem + {{category.size}}px/3 - 1px);"><i class="far fa-folder-open mr-2" aria-hidden="true"></i>{{- category.name -}}<span class="badge badge-pill badge-chulapa ml-2">{{category.size}}</span></a>
	{%- endfor -%}
	</div>
</div>

{% assign words_per_minute = site.words_per_minute | default: 200 %}
{% for category in groupcategories %}
<section id="{{- category.name -}}" class="pt-5">
<div class="d-flex  align-items-center border-bottom border-chulapa mb-2">
  <h3 class="my-0"><i class="far fa-folder-open mr-1" aria-hidden="true"></i>{{- category.name -}} </h3>
  <div class="badge badge-pill badge-chulapa ml-2">{{category.size}}</div>
</div>
  {% for document in alldocs %}
  {% assign words = document.content | strip_html | number_of_words %}
  {% assign readtime = "< 1’" %}
  {% if words > words_per_minute %}
  {% assign readtime = words | divided_by:words_per_minute | append: "’" %}
  {% endif %}
	{% if document.categories contains category.name %}
  <article class="chulapa-links-hover-only mb-3">
  <a href="{{ document.url | absolute_url }}"><h5>{{ document.title }}</h5></a>
  {% if document.date %}
  {% assign dateformat = document.date | date: "%B %d, %Y" %}
  <i class="far fa-calendar" aria-hidden="true"></i> <time datetime="{{- document.date | date_to_xmlschema -}}">{% include_cached snippets/datetranslate.html  date=dateformat %}</time> | 
  {% endif %}
  <i class="far fa-clock" aria-hidden="true"></i> {{ readtime }} | 
  <a href="{{ document.url | absolute_url }}" class="text-primary"><i class="fas fa-external-link-alt mx-2" aria-hidden="true"></i><span class="sr-only">Link</span></a>
  </article>
  {% endif %}
  {% endfor %}
  <div class="text-right">
      <button type="button" class="btn btn-outline-chulapa btn-sm">
      <a href="#categories"><i class="fa fa-chevron-up fa-lg" aria-hidden="true"></i><span class="sr-only">Top</span></a>
      </button>
  </div>
</section>
{% endfor %}
