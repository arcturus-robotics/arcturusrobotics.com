---
title: About
layout: default
---

# {{ page.title }}

## Us

Arcturus is a student-led team competing in the First Tech Challenge. We strive to improve and gain skills in Engineering, Programming, Business, and Outreach.

### Outreach Efforts

[We have a podcast! You can check it out on our YouTube channel.](https://www.youtube.com/channel/{{- site.author.social.youtube.id | cgi_escape | escape -}})

We also mentor FLL teams.

### Sponsors

We're very grateful for our sponsors. Thank you!

{% for sponsor in site.data.sponsors %}

#### [{{- sponsor.name -}}]({{- sponsor.url -}})

{% endfor %}

## First Tech Challenge

The First Tech Challenge (FTC) is a yearly challenge that encourages students to build and program robots to compete in that year's First Tech Challenge.

We have been competing in FTC since 2017, and we use, learn, and gain skills to design and build robots.

During the competitive season we focus on the robot, but during the entire year we focus on gaining skills and spreading STREM.
We also spend time helping several First Lego League (FLL) teams, and love to help these teams do well in their Project and Robot Competition.
