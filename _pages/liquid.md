---
layout: default
title: Playground
subtitle: Liquid 
permalink: /liquid
gallery:
    - path: https://picsum.photos/450/325?image=100 
    - path: https://picsum.photos/450/450?image=200 
    - path: https://picsum.photos/450/280?image=300 
    - path: https://picsum.photos/450/540?image=400 
    - path: https://picsum.photos/450/380?image=500 
    - path: https://picsum.photos/450/300?image=600 
    - path: https://picsum.photos/450/400?image=700 
    - path: https://picsum.photos/450/300?image=800 
    - path: https://picsum.photos/450/280?image=900 
    - path: https://picsum.photos/450/480?image=925 
    - path: https://picsum.photos/450/550?image=950 
    - path: https://picsum.photos/450/600?image=1000 
    - path: https://picsum.photos/450/325?image=25 
    - path: https://picsum.photos/450/450?image=50 
    - path: https://picsum.photos/450/280?image=75 
    - path: https://picsum.photos/450/540?image=100 
    - path: https://picsum.photos/450/380?image=125 
    - path: https://picsum.photos/450/300?image=161 
    - path: https://picsum.photos/450/400?image=175 
    - path: https://picsum.photos/450/300?image=200 
    - path: https://picsum.photos/450/280?image=225 
    - path: https://picsum.photos/450/480?image=250 
    - path: https://picsum.photos/450/550?image=275 
    - path: https://picsum.photos/450/600?image=300 
    - path: https://picsum.photos/450/325?image=13 
    - path: https://picsum.photos/450/450?image=26 
    - path: https://picsum.photos/450/280?image=39 
    - path: https://picsum.photos/450/540?image=52 
    - path: https://picsum.photos/450/380?image=65 
    - path: https://picsum.photos/450/300?image=78 
---




This is just a text.

It should work.




{{ page.content | markdownify |  newline_to_br | replace:"<br />", ",.," | 
split: ",.," | first | strip_html | inspect }}

