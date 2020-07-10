---
title: Global settings
subtitle: Learn how to set up your new site
excerpt: Setting up your new site
show_toc: true
h_min: 2
h_max: 5
---

<p class="font-weight-light font-italic lead">TL;DR</p>

Learn how to modify your `_config.yml` file. If you are using the remote method and you didn't fork the chulapa-remote-PENDING repo, you can use [this file](https://github.com/dieghernan/chulapa/blob/master/_config.yml) as a starting point. Don't forget to add also `remote_theme: dieghernan/chulapa@[version]` to your file.

For some variables, a default value is provided. This value is shown at the end of the explanation **on bold**.


## A. Site settings/SEO

- `locale`: Set the `lang` on the `<head>` of your site. Use the format `language_TERRITORY` , e.g fr, en-GB, es-MX, pt-BR. **Default value: es-US**.
- `title`, `title_separator` and `subtitle`: Set several `<meta>` tags and defines the text to be displayed on top of the browsers. **repository_name \| project_tagline**.
- `url` and `baseurl`: If you are deploying on Github just ignored these pesky two. You may (or may not) want to read [Clearing Up Confusion Around baseurl -- Again](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) by Parker Moore (Jekyll).
- `words_per_minute`: Used for computing the reading time of the page. **200**.
- `timezone`: Used for setting the timezone of your dates and hours. See [Jekyll Docs](https://jekyllrb.com/docs/configuration/options).

### SEO

**Search Engine Optimization** is important (obviously) for any site. Some of the previous options would affect to SEO, however <span class="chulapa">Chulapa</span> has a specific focus on that:

- `og_image`: The default image to be displayed  when a page of your site is shared on any of the major social networks (Facebook, Twitter, etc.). If `header_img` or `og_image` are set on  the front matter of a page those images would be used instead. **Author avatar (if set, see below) or your Github avatar**.
- `twitter_site`: The twitter username **without @!** of the owner of the site. Useful when sharing on Twitter.
- `author` of the site:
  - `name` of the author, it will be injected on several parts of your site, as the footer or different `<meta>` tags. **github username** for metadata.
  - `avatar`:  The avatar of the author, note that your github avatar is available on https://github.com/[USERNAME].png. Square images preferred.
  - `location`: As a nice touch, this would link to Google Maps 😉.
  - `links`: A list of social links. You may set an url and a [Fontawesome 5](https://fontawesome.com/icons?d=gallery) code for each social link.

See below a full example for an `author`:
```yaml
author:
  name                  :      Name Surname Company
  avatar                :      https://github.com/devdhh.png
  location              :      New York, US
  links:                
    - url: https://twitter.com/jack
      icon: "fab fa-twitter"
    - url: https://www.facebook.com
      icon: "fab fa-facebook"
      ...
```
### Sharing your content nicely

You don't have to set anything, the theme already shipped this for you. Twitter Cards, LinkedIn Post Inspector, Facebook Validator, WhatsApp... even Google Structured Data! Every page shared would look awesome.

Learn more about Google Structured Data [here](https://developers.google.com/search/docs/guides/intro-structured-data?hl=en). You can check any page on [this testing tool](https://search.google.com/structured-data/testing-tool/u/0/).

### Fontawesome

<span class="chulapa">Chulapa</span> has its own installation of Fontawesome 5, so you don't need to set anything. However, if you want to use your own kit, jump to your Fontawesome account and grab the kitcode. Implement this kitcode after `fa5_kit_code:`.

### Google Analytics

- `gtag_id` and `analytics_id`: Use either your gtag (recommended) or your Google Analytics tracking code. [Learn more](https://developers.google.com/analytics/devguides/collection/gtagjs).

### Search engines

When enabled, this theme would install an internal search capability of your site. There are three free engines available, [Lunr.js](https://lunrjs.com/), [Algolia](https://www.algolia.com/) and [Google Custom Search](https://developers.google.com/custom-search).

While Lunr is fully integrated on the theme, for Algolia and Google CSE you may need to create an account and perform some additional steps.

- `search`:
  - `provider`: Select a provider for enable search: `lunr`, `algolia` or `google`.
  - `label`: Text to be displayed on the navbar when enabled. Useful for localization (i.e. you can set it as Búsqueda or Ricerca). **Search**.
  - `landing_page`:  url of your search page, useful for localization. **"/search"**.
  - `lunr_maxwords`: `lunr` only, number of word to be included in the index. **30**.
  - `algolia_logo`: Your must set it as `true` if your are on a Community (Free) Algolia plan.  

- `google_cse_id`: Your Google Custom Search id, available on *cse.google.com > Your search engine > Settings*.

Algolia is implemented via the `jekyll-algolia` plugin [(docs)](https://community.algolia.com/jekyll-algolia/getting-started.html), and needs a [specific configuration syntax](https://community.algolia.com/jekyll-algolia/options.html), the minimal requirement are:

- `algolia`:                                                                   
  - `application_id`: App id on Algolia.
  - `index_name`: Name of the index to search.
  - `search_only_api_key` : Your **public** key.

Recommended additional options are:

```yaml
algolia:
  application_id: your id
  index_name: your name
  search_only_api_key: your apikey
  extensions_to_index:
    - html
    - md
  searchableAttributes:
    - title
    - headings
    - unordered(content)
    - unordered(subtitle)
    - unordered(categories)
    - unordered(collection)
    - unordered(tags)
  customRanking:
    - desc(include_on_search)
    - desc(title)
    - desc(content) 
    - desc(subtitle)
```

If you are deploying your site with Github Pages, you need to create and update your Algolia index via [Travis CI](https://travis-ci.com/). Follow [this guide](https://community.algolia.com/jekyll-algolia/github-pages.html) and add a `.travis.yml` to your site, as [this one](https://github.com/dieghernan/chulapa/blob/master/.travis.yml).

### Comments

You can add a comment feature to a page. Currently only [Disqus](https://disqus.com/) is supported:

- `comments`:
  - `provider`: Use `disqus` to enable it.
  - `disqus_shortname`: Add your site id, on `https://DISQUS_SHORTNAME.disqus.com/admin/`.


## B. Navigation

### Navbar
Configure the navbar and footer of your site. This theme supports a two-level navigation structure, and features two different navbar styles: `modern`, as a floating button with animation or a **classic sticky-top navbar**. Check this [live demo]({{ "/classic-navbar" | absolute_url }}) of the classic navbar style.

- `navbar`:
  - `style`:  `modern` value would display your navbar as a floating animated button.  **classic**.
  - `brand`:
     - `title` :  Text to be displayed as the title of your navbar.
     - `img`: An icon (ideally 30px x 30 px) displayed together with the `title`.
     - `url`: The brand would link to this value. **your root url**.
  - `nav`: Links on your navbar. See the example to learn how to set one-level and two-level links:
  
```yaml
navbar:
  style :  modern 
  brand:
    title :  Home
    img: "./assets/img/site/brand-clear.png"
    url: /someurl
  nav:
  - title: One-level link #Label
    url: /url1/  #url
  - title: Two-level link #Label
    child:
    - title: Second level first item
      url: /url2-1
    - title: Second level second item
      url: /url2-2
  - title: One-level link #Label
    url: /url1/  #url
     ... more levels
```

### Footer

To set social links to be displayed on your footer, configure this section:

- `footer`:
  - `links`:
    - `label`: Label of your link.
    - `icon`: Fontawesome icon code.
    - `url`: url of the link
  - ...
    
```yaml
footer:
  links:
    - label: "RSS"
      icon: "fa fa-rss"
      url:  "./rss.xml"
    - label: "Twitter"
      icon: "fab fa-twitter"
      url: https://twitter.com/
    - label: "Facebook"
      icon: "fab fa-facebook"
      url: https://www.facebook.com
```

<h2 id="theming"> C. Theming <span class="chulapa">Chulapa</span></h2>

This is the core feature of <span class="chulapa">Chulapa</span>, please find the full reference [here](./03-theming), or just navigate to the next page.

