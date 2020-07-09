---
layout: default
title: Deeply
subtitle: A dark background theme with bold contrasting colors
excerpt: Deeply, a dark background theme with bold contrasting colors developed by Tophat Themes.
date: 2015-03-04
last_modified_at: 2018-02-08
header_img: https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6c62b8e2662924c44c4725b8286ed60&auto=format&w=900&q=80
tags: [demo, bootstrap, tophat, splash]
categories: [skins]
skin: deeply
---


Developed by [Tophat Themes](https://themesguide.github.io/top-hat/dist/), you can use it on your site. Just go to your `_config.yml` file and modify this lines

```yaml
chulapa-skin: 
  theme       :  deeply
  autothemer  :  # Autotheming may not have any effect
  vars        :    
    ...
```


While `autothemer` does not override the skin, it may not be fully functional. You can modify the theme defaults via `vars`.




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
