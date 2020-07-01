---
layout: default
title: LUX
subtitle: A touch of class
excerpt: Lux, a touch of class developed by Bootswatch.
permalink: skins/lux
date: 2015-03-05
last_modified_at: 2018-02-09
tags: [demo, bootstrap, bootswatch, splash]
categories: [skins]
skin: lux
---


Developed by [Bootswatch](https://bootswatch.com/), you can use it on your site. Just go to your `_config.yml` file and modify this lines

```yaml
chulapa-skin: 
  theme       :  lux
  autothemer  :  # Autotheming may not have any effect
  vars        :    
    ...
```


While `autothemer` does not override the skin, it may not be fully functional. You can modify the theme defaults via `vars`.


{%- include components/navbeforeafter.html -%}


{% include snippets/bootstrapdemo.html  %}
