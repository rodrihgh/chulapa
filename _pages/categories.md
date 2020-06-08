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


{% for category in groupcategories %}
<section id="{{- category.name -}}" class="pt-5">
<div class="d-flex  align-items-center border-bottom border-chulapa mb-2">
  <h3 class="my-0"><i class="far fa-folder-open mr-1" aria-hidden="true"></i>{{- category.name -}} </h3>
  <div class="badge badge-pill badge-chulapa ml-2">{{category.size}}</div>
</div>
  {% for document in alldocs %}
	{% if document.categories contains category.name %}
  <article class="chulapa-links-hover-only mb-3">
  <a href="{{ document.url | absolute_url }}"><h5>{{ document.title }}</h5></a>
  {% if document.date %}
  <time class="small font-italic" datetime="{{- document.date | date_to_xmlschema -}}">{{- document.date | date: "%B %d, %Y" -}}</time>
  {% endif %} |   <a href="{{ document.url | absolute_url }}" class="text-primary"><i class="fas fa-external-link-alt mx-2"></i><span class="sr-only">Link</span></a>
  </article>
  {% endif %}
  {% endfor %}
  <div class="text-right">
      <button type="button" class="btn btn-outline-chulapa btn-sm">
      <a href="#categories"><i class="fa fa-chevron-up"></i> Back to Top</a>
      </button>
  </div>
</section>
{% endfor %}