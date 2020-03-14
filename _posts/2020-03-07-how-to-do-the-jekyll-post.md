---
layout: post
title: "How to do the Jekyll Post"
author: "Henry"
categories: [Programming]
---

Jekyll is a website building tool to turn Markdown files (like this one.) into websites.

## Markdown

Posts are written in markdown, which is basically plain text.
You can read through [this](https://kramdown.gettalong.org/syntax.html) or [that](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), but here are some basic examples.

### Headers

There are six levels of headers:

```markdown
# Header

## Sub-Header

### Sub-Sub-Header

#### You Get the Point

##### There Are 6 of These

###### Yes, This is the Last One
```

Basically, the more `#`'s there are, the bigger the header is.
Remember to put a space after headers.

### Styling

    *italics* or _italics_
    **bold** or __bold__
    ***italic and bold*** or ___italic and bold___

    `this is an inline code block`

    ```
    This is a code block without any syntax highlighting.
    ```

    ```javascript
    // This is a code block with JavaScript syntax highlighting.
    // Many programming languages are supported.
    // Write its name or sometimes its file extensions after the first set of backticks as seen here.
    // For example, you could write `js` instead of `javascript`.
    // For Ruby syntax highlighting, you could use `rb` or `ruby`.
    ```


### Lists

```markdown
1. This is an ordered list.
2. You write them like this.
3. Three.

* This is an unordered list.
* Foo.
* Bar.

- This is also an unordered list.
- You get the idea.
- Right?
```

Remember to surround lists in spaces.

### Links

```markdown
[This is a link to a URL (this text is shown instead of the URL).](https://example.com)

![This is the alternate text for this image (this text is shown when the image cannot be loaded, or it is used for accessibility).](https://placehold.it/400/400.png)
```

## Metadata

Each post has [YAML](https://yaml.org/) metadata at the very top of the file called front matter.
Here are some examples.

```yaml
---
layout: post
title: "Building the Cool Wheelz Deluxe: Guide, Tutorial, and How-To"
author: "Robotics Guy"
categories: [Programming, Engineering]
---
```

```yaml
---
layout: post
title: "How to Find the Village Witch: The Ultimate Guide"
author: "Greta, the Village Elder"
categories: [Outreach]
---
```

Remembers to surround the front matter in `---`'s!

## Putting it All Together

```
---
layout: post
title: "How to do the Jekyll Post"
author: "Henry"
categories: [Programming, Outreach]
---

Jekyll is a website building tool to turn Markdown files (like this one.) into websites.

## Inception

* Wow!
* Look at this!
* A post inside of a post.
* How incredible!

## Steps to do the Jekyll

1. Read this post.
2. Put on your big brain cap.
3. Write a post in Markdown.
4. ???
5. Profit!

[Check out our website!](http://arcturusrobotics.com)
```

You don't have to put a top-level header in there,because Jekyll does it for you! The `title` in the front matter is used to generate a header.

## Making the Post

1. Create a file in `_posts` in the website's repository.
2. Name it in the format of `yyyy-mm-dd-your-title-here.md`. Remember to write `2020-03-07` and not `2020-3-7` (this is probably important).
3. Write your post!
