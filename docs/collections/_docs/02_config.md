---
title: Global settings
subtitle: Learn how to set up your new site
excerpt: Setting up your new site
show_toc: true
h_min: 4
h_max: 6
---

Learn how to modify your `_config.yml` file. If you are using the remote method and you didn't fork the chulapa-remote-PENDING repo, you can use [this file](https://github.com/dieghernan/chulapa/blob/master/_config.yml) as a starting point. Don't forget to add also `remote_theme: dieghernan/chulapa@[version]` to your file.

All these options are accesible across anywhere of your site using `{% 
- raw -%}{{ site.VARIABLE }}{%endraw%}`.

### A. Site settings/SEO

- `locale`: Set the `lang` on the `<head>` of your site. Use the format `language_TERRITORY` , e.g fr, en-GB, es-MX, pt-BR. **Default value: es_US**.
- `title`, `title_separator` and `subtitle`: Set several `<meta>` tags and defines the text to be displayed on top of the browsers. **Default: repository_name \| project_tagline**.
- `url` and `baseurl`: If you are deploying on Github just ignored these pesky two. You may (or may not) want to read [Clearing Up Confusion Around baseurl -- Again](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) by Parker Moore (Jekyll).
- `words_per_minute`: Used for computing the reading time of the page. **200**.
- `timezone`: Used for setting the timezone of your dates and hours. See [https://jekyllrb.com/docs/configuration/options](https://jekyllrb.com/docs/configuration/options).

#### SEO

**Search Engine Optimization** is important (obviously) for any site. Some of the previous options would affect as well, however <span class="chulapa">Chulapa</span> has a great focus on that:

- `og_image`: The default image to be displayed  when a page of your site is shares on any of the major social networks (Facebook, Twitter, etc.). ** Author avatar (if set, see below) or your Github avatar.**
- `twitter_site`: The twitter username **withou @!** of the owner of the site. Useful when sharing on Twitter.
- `author` of the site:
  - `name` of the author, it will be injected on several parts of your site, as the footer or different `<meta>` tags.