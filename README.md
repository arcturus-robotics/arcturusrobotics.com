# arcturus-robotics.github.io

Our (mostly) handmade website.

## Build

### Testing

Type the following in your console:

```bash
> bundle exec jekyll serve
```

It should tell you what to put in your browser.

### CodeKit

All needed configurations for CodeKit are in the `config.codekit3` file.

Click the little eye + window icon to open up the website in your default browser.

## Making Blog Posts

### File Name

Blog posts are put in the `_posts` folder, with a name formatted like so:

```text
{YEAR}-{MONTH}-{DAY}-{TITLE}.md
2021-11-25-effectively-cooking-boiled-zucchinis.md
2045-13-04-new-tesla-consumer-rocket-ship-review.md
```

### Metadata

Blog posts also have to follow a strict set of guidelines for meta information. A few examples can be show below. NOTE: Meta info is *always* the first few lines in a file. No exceptions.

```yaml
---
layout: post
title: "Building the new CoolWeelz Deluxe: Guide, Tutorial, and How-To"
author: "Robotics Guy"
publish_date: "Jan 31, 2054"
categories: [Programming, Engineering]
---
```

```yaml
---
layout: post
title: "How to Find The Village Witch: The Ultimate Guide"
author: "Greta, The Village Elder"
publish_date: "Sep 1, 415"
categories: [Outreach]
---
```

### Content

Finally, on to the juicy stuff. All blog posts use Markdown to format them from raw text into cool-looking websites. While this is just the surface here, it's still a nice start.

```md
# Header
## Sub-Header
### Sub-Sub-Header
#### You get the point
##### There are 6 of these
###### Yes, Six

*italics*, or _italics_
**bold**, or __bold__
`code`
- List
- List
- List-y list list
[URL (This is shown, that isn't)](https://example.com)
![Image!](https://placehold.it/400/400.png)
```

A full cheatsheet can be found [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### What a full page looks like

```md
---
layout: post
title: "Doing Robotics"
author: "???"
publishDate: "Feb 2, 2020"
categories: [Programming, Outreach]
---

## Robotics #1
We got a **motivate** award!

### Robotics #2
We are _cool_.
```
