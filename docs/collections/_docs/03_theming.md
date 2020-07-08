---
title: Theming <span class="chulapa">Chulapa</span>
subtitle: A powerful interface to pimp your site
show_toc: true
h_min: 5
h_max: 6
---

<span class="chulapa">Chulapa</span> has a powerful theming interface, meaning that you could use this template for several sites and the look-and-feel of each one could be completely different. We have already introduced the dual navbar system, but you can customize colors and fonts, and even more characteristics as spacing, border, buttons...

This is not new, the advantage is that you don't need to know how to code, all you need to do is update your `_config` file!

Learn how to do it!

##### A. Load Google Fonts

You can easily load new fonts via [Google Fonts](https://fonts.google.com/) like this:

```yaml
googlefonts:
 - url: https://fonts.googleapis.com/css2?family=Raleway&family=Rubik&display=swap
 - url: #Another url
```

If you use another provider, or you prefer another method, there are two features you may want to explore:
  1. Create a blank file on your repo (or modify) under this path: `_includes/custom/custom_head.html`. The content of this file is injected on the `<head>` of your site. Note that you can include other pieces of code, as favicons or files loaded via cdn.
  2. Create a blank file on your repo (or modify) under this path: `assets/css/custom.css` (or `custom.scss`). You can import your fonts via css there. Note that you can include new css styles or override existing ones there.


**Note that** ehile this option would load the fonts, you still need to tell the theme to use them via `vars`, please read the next sections of this page.
{: .alert .alert-warning .p-3 .mx-2 mb-3}

##### B. Theming 

This is the true hearth of the theme. You have full access to several formatting options under `chulapa-skin`:

###### Code highlighting

Several highlighting styles available thanks to [@jwarby](http://jwarby.github.io/jekyll-pygments-themes). Just follow the link and choose the one you want. **default**

```yaml
chulapa-skin: 
  highlight   : "ZENBURN" #or any other name, default is 'DEFAULT' style
```

###### Skins

This theme includes 14 skins from [Tophat Themes](https://themesguide.github.io/top-hat/dist/), [Bootswatch](https://bootswatch.com/) and others. You can have a look [on this page]({{'./skins' | absolute_url }}).



...