---
title: Projects
layout: default
---

# {{ page.title }}

{% for project in site.data.projects %}

- ## [{{project.name}}]({{project.url}})
{{project.description}}

{% endfor %}
