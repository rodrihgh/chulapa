---
layout: minimal
title: Playground
subtitle: Liquid 
permalink: /liquid
show_author : true
project_links:
    - url: https://github.com/rodrihgh/music-scales-playground
      icon: "fab fa-github"
      label: View on Github
    - url: https://colab.research.google.com/github/rodrihgh/music-scales-playground/blob/master/music-scales.ipynb
      icon: "fas fa-code"
      label: Open in Colab
---

{%- include headers2.html headertype="splash" imghero=page.header_img projects=page.project_links -%}


{% if page.project_link %}
  {% for project in page.project_link  %}
- {{ project.icon }} {{ project.url }}  {{ project.icon }}
  {% endfor %}
{% endif %}

                
<script>
EMBED_PARAMS = {};
EMBED_PARAMS.surveyID =7503581;
EMBED_PARAMS.domain ="//www.questionpro.com";
EMBED_PARAMS.src ="//www.questionpro.com/a/TakeSurvey?tt=5kP6wcDWLn0%3D";
EMBED_PARAMS.width ="100%";
EMBED_PARAMS.height = null;
EMBED_PARAMS.border = "hidden";
</script>
<div id="div_7503581" style="height: 20vh;">
</div>
<script src="//www.questionpro.com/javascript/embedsurvey.js?version=1">
</script>
            
