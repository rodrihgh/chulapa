---
layout: default
header_type: "hero"
title: <span class="chulapa">Chulapa</span> theming tool
subtitle: Test the look of your site
date: 2015-03-03
last_modified_at: 2018-02-07
tags: [tool, codeply]
categories: [theming]
include_on_search : false
include_on_feed   : false
show_date         : true
show_sociallinks  : true
show_comments     : true
show_tags         : true
show_categories   : true
show_bottomnavs   : true
show_author       : true
show_toc          : true
permalink: ./tool
---


This sandbox allows you to have a quick look of how your theme would look like. Note that this sandbox uses `scss/sass`, however <span class="chulapa">Chulapa</span> provides a quick way to translate this to your `_config` file.

<div class="text-center">
  <a class="btn btn-dark mx-1 text-primary" href="https://www.codeply.com/p/qhEml875ge" role="button">Go to the Codeply sandbox</a>
</div>

# Step by step
See [Graymor](https://dieghernan.github.io/chulapa/skins/graymor) source code on SCSS:

```scss
/*! Tophat `Graymor` Bootstrap 4.3.1 theme */
@import url(https://fonts.googleapis.com/css?family=Muli:200,300,400,700);
$font-family-base:Muli;
@import url(https://fonts.googleapis.com/css?family=Oswald:200,300,400,700);
$headings-font-family:Oswald;


$primary:#2f3c48;
$secondary:#6f7f8c;
$success:#3e4d59;
$danger:#cc330d;
$info:#5c8f94;
$warning:#6e9fa5;
$light:#eceeec;
$dark:#1e2b37;
$enable-rounded:false;

...
```


## Step 1: On Codeply

On the tool, paste the previous code on top of the **CSS** window.

## Step 2: Save and run the Codeply

Use the buttons on Codeply. You will have a live preview of the theme

### (Optional) Enable Autotheme.

If you want to try the Autothemer, please uncomment the lines between `/* Start autothemer */` and `/* End autothemer */`.

## Step 3: Move to your `_config.yml`

The final code can be translated to your `_config` file as:

```yaml

googlefonts:
 - url: https://fonts.googleapis.com/css?family=Muli:200,300,400,700
 - url: https://fonts.googleapis.com/css?family=Oswald:200,300,400,700

chulapa-skin: 
  autothemer  :  false # Assuming you don't use it
  vars        :
    font-family-base: Muli
    headings-font-family: Oswald
    primary: #2f3c48
    secondary: #6f7f8c
    success: #3e4d59
    danger: #cc330d
    info: #5c8f94
    warning: #6e9fa5
    light: #eceeec
    dark: #1e2b37
    enable-rounded: false
```

As easy as place your variables under `vars` and removes `$` and `;` (mind the space after `:`).

**Alternatively**, you can create your own skin and install it under `_sass/skins/THEMENAME.scss`. Then just call `THEMENAME` as skin on your `_config`. If you want to make your awesome skin available on <span class="chulapa">Chulapa</span> just PR!
{: .alert .alert-info .p-3 .mx-2}









{% include components/navbeforeafter.html -%}
{% include components/categories.html-%}
{% include components/tags.html-%}


# Demo Markdown

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.



This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.



> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

## Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```r
# R code syntax highlighter
library("example")
foo <- bar(x = 1, c= "ss", add=TRUE)
```

### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

#### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

##### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```





# Demo Bootstrap

{% include snippets/bootstrapdemo.html  %}
