---
title: Global settings
subtitle: Learn how to set up your new site
excerpt: Setting up your new site
show_toc: true
h_min: 4
h_max: 6
---

<p class="font-weight-light font-italic lead">TL;DR</p>

Learn how to modify your `_config.yml` file. If you are using the remote method and you didn't fork the chulapa-remote-PENDING repo, you can use [this file](https://github.com/dieghernan/chulapa/blob/master/_config.yml) as a starting point. Don't forget to add also `remote_theme: dieghernan/chulapa@[version]` to your file.

For some variables, a default value is provided. This value is shown at the end of the explanation **on bold**.


### A. Site settings/SEO

- `locale`: Set the `lang` on the `<head>` of your site. Use the format `language_TERRITORY` , e.g fr, en-GB, es-MX, pt-BR. **Default value: es_US**.
- `title`, `title_separator` and `subtitle`: Set several `<meta>` tags and defines the text to be displayed on top of the browsers. **repository_name \| project_tagline**.
- `url` and `baseurl`: If you are deploying on Github just ignored these pesky two. You may (or may not) want to read [Clearing Up Confusion Around baseurl -- Again](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) by Parker Moore (Jekyll).
- `words_per_minute`: Used for computing the reading time of the page. **200**.
- `timezone`: Used for setting the timezone of your dates and hours. See [Jekyll Docs](https://jekyllrb.com/docs/configuration/options).

#### SEO

**Search Engine Optimization** is important (obviously) for any site. Some of the previous options would affect to SEO, however <span class="chulapa">Chulapa</span> has a specific focus on that:

- `og_image`: The default image to be displayed  when a page of your site is shared on any of the major social networks (Facebook, Twitter, etc.). **Author avatar (if set, see below) or your Github avatar**.
- `twitter_site`: The twitter username **without @!** of the owner of the site. Useful when sharing on Twitter.
- `author` of the site:
  - `name` of the author, it will be injected on several parts of your site, as the footer or different `<meta>` tags.
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
#### Google Structured-data

You don't have to set anything, the theme already shipped this for you. Structured data can help Google to display results on nicer ways! Learn more [here](https://developers.google.com/search/docs/guides/intro-structured-data?hl=en). You can check any page on [this testing tool](https://search.google.com/structured-data/testing-tool/u/0/).

#### Fontawesome

<span class="chulapa">Chulapa</span> has its own installation of Fontawesome 5, so you don't need to set anything. However, if you want to use your own kit, jump to your Fontawesome account and grab the kitcode. This would speed up the loading time of the site. Implement this kitcode after `fa5_kit_code:`.

#### Google Analytics

- `gtag_id` and `analytics_id`: Use either your gtag (recommended) or your Google Analytics tracking code. [Learn more](https://developers.google.com/analytics/devguides/collection/gtagjs).

#### Search engines

When enabled, this theme would install an internal search capability of your site. There are three free engines available, [Lunr.js](https://lunrjs.com/), [Algolia](https://www.algolia.com/) and [Google Custom Search](https://developers.google.com/custom-search).

Algolia is implemented via the `jekyll-algolia` plugin [(docs)](https://community.algolia.com/jekyll-algolia/getting-started.html), and needs further instructions, so a dedicated explanation can be found PENDING.

- `search`:
  - `provider`: Select a provider for enable search: `lunr`, `algolia` or `google`.
  - `label`: Text to be displayed on the navbar when enabled. Useful for localization (i.e. you can set it as Búsqueda or Ricerca). **Search**.
  - `landing_page`:  url of your search page, useful for localization. **"/search"**.
  - `lunr_maxwords`: `lunr` only, number of word to be included in the index. **30**.
  - `algolia_logo`: Your must set it as `true` if your are on a Community (Free) Algolia plan.  

- `google_cse_id`: Your Google Custom Search id, available on *cse.google.com > Your search engine > Settings*.

Algolia has a [specific configuration syntax](https://community.algolia.com/jekyll-algolia/getting-started.html), the minimal requirement are:

- `algolia`:                                                                   
  - `application_id`: App id on Algolia.
  - `index_name`: Name of the index to search.
  - `search_only_api_key` : Your **public** key.

Recommended additional options are:

```yaml
algolia:                                                                   
  application_id        : your id
  index_name            : your name
  search_only_api_key   : your apikey
  extensions_to_index:      #Optional
    - html
    - md
  searchableAttributes:     #Optional                                                    
      - title                                                                    
      - headings                                                                 
      - unordered(content)                                                       
      - unordered(subtitle)                                                      
      - unordered(categories)                                                    
      - unordered(collection)                                                    
      - unordered(tags) 
  customRanking:            #Optional
    - desc(include_on_search)
    - desc(title)
    - desc(content) 
    - desc(subtitle)
```
