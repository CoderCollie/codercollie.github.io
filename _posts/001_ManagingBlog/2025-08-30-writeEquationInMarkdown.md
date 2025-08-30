---
title: Writing Math Formulas in Markdown with Jekyll
date: 2025-08-30
tags: [markdown, blog, jekyll, MathJax]
---

I use Markdown as my de facto file format. There are many file formats to log or write about your life or development work, like Word, but honestly, I haven’t used all of them since about several years ago. After creating my own blog supported by Jekyll, I write everything about my life in Markdown.

Recently, I needed to type something as a mathematical formula. I used to write math formulas in Word, but Word feels tedious now. I decided to write math formulas in Markdown instead.

There are two ways to do this:

## First One. Using Codecogs (Not Recommended)

Codecogs can render your formula as an image. You pass your math formula as an argument to the Codecogs URL, and it returns an image. You can choose the image format and formula syntax.

![equation](https://latex.codecogs.com/svg.latex?E=mc^2)

```html
![equation](https://latex.codecogs.com/svg.latex?E=mc^2)
```

It seems convenient at first, but in the long term, mixing URLs, LaTeX, and Markdown makes maintenance hard. Also, it always requires accessing the URL, which is not ideal. Therefore, I decided not to use Codecogs.

## Second One. Using MathJax

* **MathJax** is a JavaScript library that renders LaTeX into proper math equations in HTML pages. Browsers cannot understand raw LaTeX, but MathJax interprets it and renders nice-looking HTML math.
* If you include MathJax in your Markdown via Jekyll, it renders formulas beautifully in the browser.

### Inline Math

To express inline math $E = mc^2$ in a paragraph, surround the formula with `$`:

```markdown
$E = mc^2$
```

### Block Math

To express block math, surround the formula with `$$`:

$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$

```markdown
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```

### Adding MathJax to Jekyll

Add the following scripts inside the `<head>` of your `layout/default.html` file:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
```

* **Polyfill** is a piece of JavaScript that adds modern browser features to older browsers. MathJax may require some modern JS features; the polyfill ensures MathJax works even in older browsers.

After adding the code, restart your Jekyll server:

```bash
bundle exec jekyll serve
```

Now your Markdown files with `$...$` or `$$...$$` math formulas should render properly in your local Jekyll site.
