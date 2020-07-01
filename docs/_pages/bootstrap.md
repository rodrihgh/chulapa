---
layout: landingpage
title: Bootstrap showcase
subtitle: Super long description of this page to check it. Enough
excerpt: A demo page showing how the theme looks
permalink: /bootstrap
header_type: hero
header_img: "./assets/img/site/chulapa-madrid.jpg"
date: 2015-03-03
last_modified_at: 2018-02-07
include_on_search : true
show_date         : true
show_sociallinks  : true
show_comments     : true
show_tags         : true
show_categories   : true
show_bottomnavs   : true
show_author       : true
show_toc          : true
tags: [demo, bootstrap, layout]
categories: [demo]
author:
  name: Another name
  location: Santiago de Compostela
  avatar: http://github.com/devdieghernan.png
  links:
    - url: https://twitter.com/jack2
      icon: "fab fa-twitter"
    - url: https://github.com
      icon: "fab fa-github"
---


This is a demo page showing the different components of Bootstrap and how they look on your site. Check the [Chulapa Themer sandbox](https://www.codeply.com/p/qhEml875ge) for define your settings and don't forget to update your `_config.yml`.




{% include snippets/bootstrapdemo.html  %}


<nav aria-label="Page navigation example" class="mt-4 chulapa-pagination text-center">
                <ul class="col-md-8 offset-md-2 pagination justify-content-around ">
                    <li class="page-item invisible ">
                        <a class="page-link border-0 px-3 px-sm-4" href="/jt/blog" tabindex="-1">
                            <i class="fa fa-step-backward" aria-hidden="true"></i><span class="sr-only">First</span>
                        </a>
                    </li>
                    <li class="page-item ">
                        <a class="page-link border-0 px-3 px-sm-4" href="/jt/blog/">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i><span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <span class="d-flex flex-grow-1 justify-content-center chulapa-pagination-inner">
                      <li class="page-item ">
                          <a class="page-link border-0 rounded-0" href="/jt/blog">1</a></li><li class="page-item  active">
                          <a class="page-link border-0 rounded-0" href="/jt/blog/page2/">2</a></li><li class="page-item ">
                          <a class="page-link border-0 rounded-0" href="/jt/blog/page3/">3</a></li>
                    </span>
                    <li class="page-item ">
                        <a class="page-link border-0 px-3 px-sm-4" href="/jt/blog/page3/">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i><span class="sr-only">Next</span></a>
                    </li>
                    <li class="page-item ">
                        <a class="page-link border-0 px-3 px-sm-4" href="/jt/blog/page5/">
                            <i class="fa fa-step-forward" aria-hidden="true"></i><span class="sr-only">Last</span></a>
                    </li>
                </ul>
            </nav>

