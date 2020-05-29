---
layout: null
---
/*
Copyright (c) 2013-2020 Michael Rose and contributors
MIT License
From minimal-mistakes: https://github.com/mmistakes/minimal-mistakes/
*/


var inputVal = document.getElementById("search").value;
var idx = lunr(function() {
    this.field('title')
    this.field('subtitle')
    this.field('excerpt')
    this.field('categories')
    this.field('date')
    this.field('tags')
    this.ref('id')

    this.pipeline.remove(lunr.trimmer)

    for (var item in store) {
        this.add({
            title: store[item].title,
            subtitle: store[item].subtitle,
            excerpt: store[item].excerpt,
            categories: store[item].categories,
            date: store[item].date,
            tags: store[item].tags,
            id: item
        })
    }
});

console.log(jQuery.type(idx));

$(document).ready(function() {
    $('input#search').on('keyup', function() {
        var resultdiv = $('#results');
        var resultcount = $('#resultscount');
        var query = $(this).val().toLowerCase();
        var result =
            idx.query(function(q) {
                query.split(lunr.tokenizer.separator).forEach(function(term) {
                    q.term(term, {
                        boost: 100
                    })
                    if (query.lastIndexOf(" ") != query.length - 1) {
                        q.term(term, {
                            usePipeline: false,
                            wildcard: lunr.Query.wildcard.TRAILING,
                            boost: 10
                        })
                    }
                    if (term != "") {
                        q.term(term, {
                            usePipeline: false,
                            editDistance: 1,
                            boost: 1
                        })
                    }
                })
            });
        resultdiv.empty();
        resultcount.empty()
        if (query.length > 0) {
            if (result.length < 1) {
                resultcount.prepend('<h6 class="text-center">No results found</h6><div class="card-columns">');
        }
        for (var item in result) {
            var ref = result[item].ref;
            if (store[ref].img) {
                var searchitem =
                    '<article class="card" itemscope itemtype="http://schema.org/CreativeWork">' +
                    '<img src="' + store[ref].img + '" class="card-img-top" alt="">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title chulapa-links-hover-only" itemprop="headline">' +
                    '<a href="' + store[ref].url + '" rel="permalink">' + store[ref].title + '</a>' +
                    '</h5>' +
                    '<p class="card-text small text-left" itemprop="description">' + store[ref].excerpt.split(" ").splice(0, 10).join(" ") +
                    '<a href="' + store[ref].url + '"> [more]</a></p>' +
                    '</div>' +
                    '</article>';
            } else {
                var searchitem =
                    '<article class="card" itemscope itemtype="http://schema.org/CreativeWork">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title chulapa-links-hover-only" itemprop="headline">' +
                    '<a href="' + store[ref].url + '" rel="permalink">' + store[ref].title + '</a>' +
                    '</h5>' +
                    '<p class="card-text small text-left" itemprop="description">' + store[ref].excerpt.split(" ").splice(0, 10).join(" ") +
                    '<a href="' + store[ref].url + '"> [more]</a></p>' +
                    '</div>' +
                    '</article>';
            }
            resultdiv.append(searchitem);
        }
    });
});