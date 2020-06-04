---
layout: default
title: Playground
subtitle: Liquid 
permalink: /liquid
---

```yaml
# Your _config.yml
search:
  provider:       # google, lunr, algolia
  maxwords: 10    # lunr only - Max words to index, may be slow
  
google_cse_id:    # google only - Your cse id 

algolia:                                                       
  application_id:       # app id
  index_name:           # index name
  search_only_api_key:  # search only key
  #...more options
```



	{% assign gallery = site.static_files | where: "image_col", "gallery" %}
	
	{% for item in gallery %}
	
	-{{ item.path | absolute_url }} - {{ item }}
	
	{% endfor %}
	