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
          <h6 class="text-center">No results found</h6>
        {{/query}}
      `,
      item: `
        <article>
          <h4 class="chulapa-links-hover-only"><a href="{{url}}">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</a></h4>
          <h6>{{subtitle}}</h5>
          <p>{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}<a href="{{url}}"> [+]</a></p>
        </article>
      `,
    },
  }),
]);
search.start();