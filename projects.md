---
title: Projects
layout: default
---

{% for project in site.data.projects %}
{% if project.url %}
- ## [{{- project.name -}}]({{- project.url -}})
{% else %}
- ## {{ project.name }}
{% endif %}
{{- project.description -}}
{% endfor %}
