---
title: Installation
subtitle: How to use Chulapa
excerpt: Install Chulapa on your Github repo
---

<span class="chulapa">Chulapa</span> was developed in and for Github. There are two tested possible ways to use <span class="chulapa">Chulapa</span>:



### 1. Remote theme method (Recommended)

You can use the `jekyll-remote-theme` method with this theme. A dedicated [repo - pending]() has been creating, just fork it and quickstart your site!

If you prefer not to fork the example repo, follow these steps:

  - Create a new GitHub repository or go to an existing repository
  - Add  this line to your `_config.yml` and make sure to remove any previous theme or remote theme parameter:
  
```yaml

remote_theme: dieghernan/chulapa@[version]

... more config options

```
    
Be sure that you replace `@[version]` with the desired version, or remove it completely if you want to use the `master` branch version of the theme (development version). Latest version os `dieghernan/chulapa@{{- site.github.releases | map: "tag_name" | first }}`

Don't forget to deploy your site:

  - On your Github repo, go to *Setting > Github Pages* and publish your site.
  - Starting creating your site.
  
Please read the rest of the docs for further adjustments.



### 2. Fork this repository

You can fork [the current repo](https://github.com/dieghernan/chulapa/) and modify it. 

<div class="alert alert-warning p-3 rounded mx-3 mb-3">
<i class="fas fa-exclamation-triangle"></i> The main repo is published under the <code>docs</code> folder, please be aware of that when setting your <code>_config.yml</code>.
</div>


####  Gem-based method

This theme has not been developed as a gem-based theme, so this option has been not explored.

<div class="alert alert-info p-3 mx-3 rounded">
<span class="font-weight-bold">Help wanted:</span> You can contribute to this theme on this topic.
</div>
