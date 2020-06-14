---
layout: default
title: Bootstrap showcase
subtitle: Super long description of this page to check it. Enough
excerpt: A demo page showing how the theme looks
permalink: /bootstrap
header_type: hero
header_img: "https://i.imgur.com/TveA612.jpg"
date: 2015-07-28
include_on_search : true
show_date         : true
show_sociallinks  : true
show_comments     : true
show_tags         : true
show_categories   : true
show_author       : true
tags: [demo, bootstrap, layout]
categories: [demo]
author:
  name: Another name
  location: Santiago de Compostela
  avatar: http://github.com/devdieghernan.png
  links:
    - url: https://twitter.com/jack2
      icon: "fab fa-twitter"
---


This is a demo page showing the different components of Bootstrap and how they look on your site. Check the [Chulapa Themer sandbox](https://www.codeply.com/p/qhEml875ge) for define your settings and don't forget to update your `_config.yml`.




{% include snippets/bootstrapdemo.html  %}


<nav aria-label="Page navigation example" class="mt-4 chulapa-pagination">
  <ul class="pagination justify-content-center ">
  <li class="page-item  text-left">
  <a class="page-link border-0" href="#" tabindex="-1">
  <i class="fa fa-caret-left fa-lg" aria-hidden="true"></i><span class="sr-only">Previous</span>
  </a>
  </li>
  <li class="page-item  mr-auto text-left">
  <a class="page-link border-0" href="#" tabindex="-1">
  <i class="fa fa-chevron-left" aria-hidden="true"></i><span class="sr-only">Previous</span>
  </a>
  </li>
  <div class="d-flex chulapa-pagination-round">
  <li class="page-item mx-3"><a class="page-link" href="#">1</a></li>
  <li class="page-item mx-3 active"><a class="page-link" href="#">2</a></li>
  <li class="page-item mx-3"><a class="page-link" href="#">3</a></li>
  </div>
  <li class="page-item ml-auto text-right disabled">
  <a class="page-link border-0" href="#">
  <i class="fa fa-chevron-right" aria-hidden="true"></i><span class="sr-only">Next</span></a>
  </li>
  <li class="page-item text-right">
  <a class="page-link border-0" href="#">
  <i class="fa fa-caret-right fa-lg" aria-hidden="true"></i><span class="sr-only">Next</span></a>
  </li>
  </ul>
</nav>