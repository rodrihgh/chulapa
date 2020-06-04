---
layout: default
title: Archive
subtitle: Post by year 
permalink: /archive/year
---


This is an example of how to create an archive page. In this case the posts are grouped by years.

{% assign postsInYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
<div class="row pt-5" id="years">
  {% for year in postsInYear %}
  <div class="col-md-6 chulapa-links-hover-only py-2 px-5 px-md-3">
        <a href="#{{ year.name }}" class="d-flex justify-content-between align-items-center border-bottom ">
        {{ year.name }} <span class="badge badge-chulapa badge-pill">{{ year.items | size }}</span>
      </a>
  </div>
  {% endfor %}
</div>  

{% for year in postsInYear %}
<section id="{{ year.name }}" class="pt-5">
  <h3 class=" border-bottom border-chulapa">{{ year.name }}</h3>
  {% for post in year.items %}
  <article class="mb-3">
  <h4>{{ post.title }}</h4>
  <h5>{{ post.subtitle }}</h5>
  <p>{{ post.content | strip_html|  truncatewords: 20 }} <a href="{{ post.url | absolute_url }}" > [more]</a></p>
  </article>
  {% endfor %}
  <div class="text-right">
      <button type="button" class="btn btn-outline-chulapa btn-sm">
      <a href="#years"><i class="fa fa-chevron-up"></i> Back to Top</a>
      </button>
  </div>
</section>
{% endfor %}