---
layout: null
---
/* global algoliasearch instantsearch */

const algoliaClient = algoliasearch(
  'KOIKA5PDQO',
  '7f1fe42bef3f03458cb3a911ebc7e0ac'
);

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

const search = instantsearch({
  indexName: 'chulapa',
  searchClient,
});
{% raw %}
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: `
        {{#query}}
          No results for <q>{{query}}</q>
        {{/query}}
      `,
      item: `
        <article class="card" itemscope itemtype="http://schema.org/CreativeWork">'
        <div class="card-body">
          <h5 class="card-title chulapa-links-hover-only" itemprop="headline">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h5>
          <p class="card-text small text-left" itemprop="description">{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}</p>
          </div>
        </article>
      `,
    },
  }),
]);
{% endraw %}
search.start();