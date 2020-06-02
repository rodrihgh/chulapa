---
layout: null
---

const algoliaClient = algoliasearch(
  '{{ site.algolia.application_id }}',
  '{{ site.algolia.search_only_api_key }}'
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
  indexName: '{{ site.algolia.index_name }}',
  searchClient,
});


function imgurl(p1) {
  if (p1 === undefined){
    return " "
  } else if (p1.indexOf("./") === 0) {
    return p1.replace("./", "{{ site.baseurl }}/");
  } else {
    return p1
  }
}

const hitTemplate = function(hit) {
  const url = hit.url;
  const title = hit._highlightResult.title.value;
  const content = hit._highlightResult.html.value;
  const img = hit.header_img;
  const imglink = imgurl(img);
  if (img === undefined){
  return `
          <article class="my-2 text-left">
          <div class="row">
          <div class="col">
          <h5 class="chulapa-links-hover-only"><a href="{{ site.baseurl }}${url}">${title}</a></h6>
          </div>
          </div>
          <div class="row mt-2">
          <div class="col">
          <p>${content}</p>
          </div>
          </div>
          <hr>
          </article>
          `;
    } else {
    return `
    <article class="my-2 text-left">
    <div class="row">
    <div class="col">
    <h5 class="chulapa-links-hover-only"><a href="{{ site.baseurl }}${url}">${title}</a></h6>
    </div>
    <div class="col-4 col-md-3">
    <div class="rounded-lg chulapa-overlay-img" style="background-image: url('${imglink}')" ></div>
    </div>
    </div>
    <div class="row mt-2">
    <div class="col">
    <p>${content}</p>
    </div>
    </div>
    <hr>
    </article>
    `;
    }
}


{% raw %}
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search...',
    showReset: false,
    showSubmit: false,
    showLoadingIndicator: false,
    cssClasses: {
      root: ['input-group'],
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