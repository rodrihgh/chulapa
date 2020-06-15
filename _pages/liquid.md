---
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
---

```
Example feed



{%- assign ogimage = page.header_img | default: site.og_image | default: site.author.avatar | default: site.github.owner_gravatar_url | absolute_url -%}
{%- assign wpm = words_per_minute | default: 200 -%}
		{% assign alldocs = site.posts | sort: 'date' | reverse %}
		{%- for document in alldocs limit:15 -%}
		{%- assign words = document.content | strip_html | number_of_words -%}   		{%- assign minutes = words | divided_by: wpm | ceil | at_least: 1 -%}

		<item>
			<title>{{ document.title | xml_escape }}</title>
			<description>
				<![CDATA[	
 				{% if document.subtitle %}<p><b>{{ document.subtitle | xml_escape }}</b></p>{% endif %}
    				<p>{{ minutes }} min.</p>
				<p>{{ document.content | markdownify | strip_html | xml_escape | truncatewords: 60 }}
				<a href="{{ document.url | absolute_url }}">[Link]</a></p>
				]]>
			</description>
			<link>{{ document.url | absolute_url }}</link>
			<category> {{ document.collection }} </category>
			{% if document.tags.size > 0 %}
			{% assign tagrss = document.tags | join: ','  | split: ',' | sort | where_exp: "tag","tag != document.layout " %}
			{% for tag in tagrss  %}
			<category>{{ tag }}</category>
			{% endfor %}
			{% endif %}
  		<media:title type="html"><![CDATA[{{ document.title }} ]]></media:title>
      <media:content url="{{- ogimage -}}" medium="image" width="485" height="321"/>
      <media:thumbnail url="{{- ogimage -}}"  width="150" height="99"/>
      <guid isPermaLink="true">{{ document.url | absolute_url }}</guid>
      <pubDate>{{ document.date | date_to_xmlschema }}</pubDate>
		</item>



		{%- endfor -%}
		
```		