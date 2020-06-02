---
layout: default
title: Archive
subtitle: Post by year 
permalink: /archive/year
---

<ul>
  {% assign postsInYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    <li>
      <a href="#{{ year.name }}">
        {{ year.name }} <span>{{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>

{% assign postsByYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
<section id="{{ year.name }}">
  <h2>{{ year.name }}</h2>
  {% for post in year.items %}
  <h3>{{ post.title }}</h3>
  {% endfor %}
  <a href="#page-title">Back to Top</a>
</section>
{% endfor %}