---
title: Installation
subtitle: How to use Chulapa
excerpt: Install Chulapa on your Github repo
---

<span class="chulapa">Chulapa</span> was developed in and for Github. There are two tested possible ways to use <span class="chulapa">Chulapa</span>:

## Remote theme method (Recommended)

### Fork it
You can use the `jekyll-remote-theme` method with this theme. Fork (this repo - pending)[] and read the docs.

### From scratch / migrating an existing repo
If you prefer not to fork the example repo, follow these steps:

  - Create a new GitHub repository or go to an existing repository
  - Add  this line to your `_config.yml` and make sure to remove any previous theme or remote theme parameter:
  
```yaml
remote_theme: dieghernan/chulapa@[version]
```
    
Be sure that you replace `@[version]` with the desired version, or remove it completely if you want to use the `master` branch version (development).

  - On your Github repo, go to *Setting > Github Pages* and publish your site.
  - Starting creating your site.
  
## Fork this repository

You can fork (the current repo)[https://github.com/dieghernan/chulapa/] and modify it. 

<div class="bg-warning p-3 rounded">
<i class="fas fa-exclamation-triangle"></i> The main repo is published under the `docs` folder, please be aware of that when setting your `_config.yml`.
</div>


## Gem-based

This theme has not been developed as a gem-based theme, however this option has been not explored.

<div class="bg-info p-3 rounded">
<span class="font-weight-bold">Help wanted:</span> You can contribute to this theme on this topic.
</div>
