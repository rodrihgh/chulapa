---
layout: cols2
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---


{%- assign ogdesc = page.excerpt | default: page.content | 
                markdownify |  newline_to_br | 
                replace:"<br />", ",.," | 
                replace:"{{", ",.," | 
                replace:"{%", ",.," | 
                split: ",.," | first | strip_html | 
                escape_once -%}
                
{{ ogdesc }}

# test2 


{%- assign ogdesc = ogdesc | default: page.title -%}

{{ ogdesc}}

# test3



{%- assign links = page.author.links | default: site.author.links -%}
{% for item in links %}
  {% if item contains "twitter.com/" %}
  
  {% assign twitterauthor = item | split: "/" | last %}
  {% break %}
  {% endif %}

{% endfor %}

{{ twitterauthor }}

