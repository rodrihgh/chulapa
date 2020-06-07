---
layout: default
title: Playground
subtitle: Liquid 
permalink: /liquid
excerpt: Custom excerpt here
---




This is just a text. Just a text. Now trying

It should work.




{{ page.content | markdownify |  newline_to_br | replace:"<br />", ",.," | 
split: ",.," | first | strip_html | escape_once | inspect }}

