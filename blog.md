---
layout: default
title: Blog Posts
---

## Categories

{% for category in site.categories %}
{% assign name = category[0] | downcase %}
* ### [{{- category[0] -}}]({{- "/categories/" | append: name | append: ".html" | relative_url -}})
{% endfor %}

## Posts

{% for post in site.posts %}
* ### [{{- post.title -}}]({{- post.url -}})
  Posted by {% if post.author %} {{ post.author }} {% else %} Anonymous {% endif %} {% if post.date %} on {{ post.date | date: "%B %e, %Y" }} {% endif %} in {{ post.categories | join: ", " | prepend: " " }}
{% endfor %}
