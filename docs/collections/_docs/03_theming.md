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

##### Load Google Fonts

You can easily load new fonts via [Google Fonts](https://fonts.google.com/) like this:

```yaml
googlefonts:
 - url: https://fonts.googleapis.com/css2?family=Raleway&family=Rubik&display=swap
 - url: #Another url
```

If you use another provider, or you prefer another method, there are two features you may want to explore:
  1. Create a blank file on your repo (or modify) under this path: `_includes/custom/custom_head.html`. The content of this file is injected on the `<head>` of your site. Note that you can include other pieces of code, as favicons or files loaded via cdn.
  2. Create a blank file on your repo (or modify) under this path: `assets/css/custom.css` (or `custom.scss`). You can import your fonts via css there. Note that you can include new css styles or override existing ones there.


**Note that** while this option would load the fonts, you still need to tell the theme to use them via `vars`, please read [this section](#variable) to know how.
{: .alert .alert-warning .p-3 .mx-2 mb-3}


##### Code highlighting

Several highlighting styles available thanks to [@jwarby](http://jwarby.github.io/jekyll-pygments-themes). Just follow the link and choose the one you want. **default**

```yaml
chulapa-skin: 
  highlight   : "ZENBURN" #or any other name, default is 'DEFAULT' style
```

##### Skins

This theme includes 14 skins from [Tophat Themes](https://themesguide.github.io/top-hat/dist/), [Bootswatch](https://bootswatch.com/) and others. You can have a look [on this page]({{'./skins' | absolute_url }}). If you want to use in your site:

```yaml
chulapa-skin: 
  theme   : #name of the skin
```

You can use `vars` to override some parts of the theme.

##### Autothemer

This is a cool feature to create a full theme based on a single color. Basically it propagates your `primary` color value to all the rest of colores used on your theme. This would produce that the full palette used for warnings, errors, etc. would be based on your theme primary color.

Note that autothemer can be combined also with the skin option, however the approach is non-destructive, meaning that if any specific color (as `warning`) is already specified on the skin or via `vars` it won’t be overridden (variable with `!default`, if you are familiar with SASS/SCSS).

To enable autothemer: 

```yaml
chulapa-skin: 
  autothemer  :  true #omit to disable this option

```

##### Variables

<span class="chulapa">Chulapa</span> allows you to adjust any visual feature of your `main.css` via the `_config.yml` file. Given that <span class="chulapa">Chulapa</span> has been developed as a implementation of Bootstrap, it is **strongly recommended** to have a look to its [theming documentation](https://getbootstrap.com/docs/4.5/getting-started/theming/#variable-defaults).

In short, you can override Bootstrap variables via `_config`. Here's an example on how to translate SASS/SCSS theming to your site. On this example the body background, color and the font are modified:

On SASS/SCSS:

```scss
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

$body-bg: #000;
$body-color: #111;
$font-family-base: Montserrat;

```

On your `_config.yml` use this:

```yaml
googlefonts: 
 - url: "https://fonts.googleapis.com/css?family=Montserrat&display=swap"

chulapa-skin: 
  vars        :
    body-bg: "#000"
    body-color: "#111"
    font-family-base: "Montserrat"
```

`chulapa-skin vars` usually overrides any other value provided by `autothemer` of `theme`, meaning that you can modify any parameter of a skin via this method, i.e, changing the default font or primary color of a specific skin.


On top of the default [Bootstrap variables](https://github.com/dieghernan/chulapa/blob/master/_sass/bootstrap/_variables.scss) (500+!) this theme has specific variables that makes the customisation of specific components easier.

The critical variable for `autothemer` is `primary`, so you can create a full theme just playing with those two options. By default, `primary` has the Bootstrap primary color (<span style="color:#007bff;">#007bff</span> in v4.x).
{: .alert .alert-info .p-3 .mx-2 mb-3}