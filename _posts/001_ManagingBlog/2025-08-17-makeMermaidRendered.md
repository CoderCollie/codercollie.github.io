---
title: Make Mermaid Rendered in your github page
date: 2025-08-17
tags: []
---

I’m someone who believes that everything can be explained with words alone. However, sometimes a diagram can help readers understand concepts or knowledge more clearly. I don’t like creating diagrams using a GUI; I prefer a “What You Mean Is What You Get” approach. As you probably know, with Mermaid, you can create diagrams simply by typing text.

I’m not going to explain how to use Mermaid in this text. Instead, I’ll show you how to insert a Mermaid diagram in your Markdown file. In your Markdown, all Mermaid code should be wrapped in a `div` like this:

```html
<div class="mermaid">
</div>
```

Using this `<div class="Mermaid">`, your Mermaid diagram will be rendered in your github pages like this:

<div class="mermaid">
graph TD
  A-->B
</div>

The raw test is like this:

```html
<div class="mermaid">
graph TD
  A-->B
</div>
```

With just a few lines of code, you can make your documentation clearer, more visual, and easier to understand—without leaving your keyboard.

