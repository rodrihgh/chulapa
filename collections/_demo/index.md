---
title: "Demos"
subtitle: All demos in one place
permalink: /demo
show_bottomnavs: false
include_on_search: false
---

An index of the demo collections:

## Index of demos
{% for demo in  site.demo %}
{% unless demo.url == "/demo" %}
<article class="my-2">
  <div class="row">
    <div class="col">
      <h3 class="chulapa-links-hover-only"><a href="{{ demo.url | absolute_url | remove: ".html" }}">{{ demo.title }}</a></h3 >
      {%- if demo.subtitle -%}
      <h4>{{ demo.subtitle }}</h4>
      {%- endif -%}
    </div>
{% if demo.header_img %}
    <div class="col-4 col-md-3">
      <div class="rounded-lg chulapa-overlay-img" style="background-image: url('{{ demo.header_img | absolute_url }}')" ></div>
    </div>
{% endif %}
  </div>
  <div class="row mt-2">
    <div class="col">
      <p>{{ demo.content |markdownify | strip_html | strip_newlines | strip |  truncatewords: 30 }}
<a href="{{ demo.url | absolute_url | remove: ".html"  }}">[more]</a></p>
    </div>
  </div>
  <hr>
</article>
{% endunless %}
{% endfor %}

Defaults yaml:

```yaml
---
defaults:
  -
    scope:
      path: ""
    values:
      layout: "default"
      header_type: "base"
  -
    scope:
      path: ""
      type: "demo"
    values:
      layout: "default"
      header_type: "hero"
      show_bottomnavs: true
      show_sociallinks: true
---
```
