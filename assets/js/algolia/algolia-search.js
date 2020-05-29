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

const hitTemplate = function(hit) {
  const url = hit.url;
  const subtitle = hit.subtitle;
  const title = hit._highlightResult.title.value;
  const content = hit._highlightResult.html.value;
  return `
      <article>
        <h4 class="chulapa-links-hover-only"><a href="{{ site.baseurl }}${url}">${title}</a></h4>
        <h6>${subtitle}</h6>
        <p>${content}<a href="{{ site.baseurl }}${url}"> [more]</a></p>
      </article>
  `;
}


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
    escapeHTML: false,
    templates: {
      empty: `
        {{#query}}
          <h6 class="text-center">No results found</h6>
        {{/query}}
      `,
      item: hitTemplate
    },
  }),
]);
{% endraw %}
search.start();