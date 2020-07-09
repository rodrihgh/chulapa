---
layout: default
title: Twitter
subtitle: Fly high with a light skin
excerpt: Twitter, fly high with a light skin developed by dieghernan.
date: 2020-03-27
last_modified_at: 2020-07-04
tags: [demo, bootstrap, dieghernan, splash]
categories: [skins]
skin: twitter
---


Developed by [dieghernan](https://github.com/dieghernan/), you can use it on your site. Just go to your `_config.yml` file and modify this lines

```yaml
chulapa-skin: 
  theme       :  twitter
  autothemer  :  # Autotheming may not have any effect
  vars        :    
    ...
```



{% if page.show_bottomnavs -%}
{% include components/navbeforeafter.html -%}
{% endif -%}
{% if page.show_categories -%}
{% include components/categories.html-%}
{% endif -%}
{% if page.show_tags -%}
{% include components/tags.html-%}
{% endif -%}


{% include snippets/bootstrapdemo.html  %}


