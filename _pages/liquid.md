---
layout: default
title: Playground
subtitle: Liquid 
permalink: /liquid
gallery:
    - https://picsum.photos/450/325?image=100 
    - https://picsum.photos/450/450?image=200 
    - https://picsum.photos/450/280?image=300 
    - https://picsum.photos/450/540?image=400 
    - https://picsum.photos/450/380?image=500 
    - https://picsum.photos/450/300?image=600 
    - https://picsum.photos/450/400?image=700 
    - https://picsum.photos/450/300?image=800 
    - https://picsum.photos/450/280?image=900 
    - https://picsum.photos/450/480?image=925 
    - https://picsum.photos/450/550?image=950 
    - https://picsum.photos/450/600?image=1000 
    - https://picsum.photos/450/325?image=25 
    - https://picsum.photos/450/450?image=50 
    - https://picsum.photos/450/280?image=75 
    - https://picsum.photos/450/540?image=100 
    - https://picsum.photos/450/380?image=125 
    - https://picsum.photos/450/300?image=161 
    - https://picsum.photos/450/400?image=175 
    - https://picsum.photos/450/300?image=200 
    - https://picsum.photos/450/280?image=225 
    - https://picsum.photos/450/480?image=250 
    - https://picsum.photos/450/550?image=275 
    - https://picsum.photos/450/600?image=300 
    - https://picsum.photos/450/325?image=13 
    - https://picsum.photos/450/450?image=26 
    - https://picsum.photos/450/280?image=39 
    - https://picsum.photos/450/540?image=52 
    - https://picsum.photos/450/380?image=65 
    - https://picsum.photos/450/300?image=78 
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



{% assign gallery = page.gallery %}


<div class="chulapa-masonry">
  {%- for item in gallery -%}
  <img class="chulapa-masonry-item" src="{{- item.path | absolute_url -}}">
  {%- endfor -%}
</div>
	