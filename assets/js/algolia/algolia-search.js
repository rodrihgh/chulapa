---
layout: null
---

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
    showReset: false,
    showSubmit: false,
    showLoadingIndicator: false,
    cssClasses: {
      root: 'MyCustomSearchBox',
      form: ['input-group'],
      input: ['form-control', 'rounded'],
    },
  }),
  instantsearch.widgets.poweredBy({
    container: '#powered-by',
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
        <article>
          <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
          <p>{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}</p>
        </article>
      `,
    },
  }),
]);
{% endraw %}
search.start();

