---
layout: default
title: Archive
subtitle: Post by year 
permalink: /archive/year
---

  {% assign postsInYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
<div class="row" id="years">
  {% for year in postsInYear %}
  <div class="col-md-6 chulapa-links-hover-only py-2 px-5 px-md-3">
        <a href="#{{ year.name }}" class="d-flex justify-content-between align-items-center border-bottom ">
        {{ year.name }} <span class="badge badge-primary badge-pill">{{ year.items | size }}</span>
      </a>
  </div>
  {% endfor %}
</div>  

{% assign postsByYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
<section id="{{ year.name }}" class="chulapa-links-hover-only">
  <h3>{{ year.name }}</h3>
  {% for post in year.items %}
  <h4>{{ post.title }}</h4>
  {% endfor %}
  <a href="#years">Back to Top</a>
</section>
{% endfor %}