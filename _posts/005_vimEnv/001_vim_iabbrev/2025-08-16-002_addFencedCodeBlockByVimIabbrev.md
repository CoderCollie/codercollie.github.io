---
title: Add shortcut to add codeblock in markdown
date: 2025-08-16
tags: []
---

If you are a blogger who uses Markdown as your default post format, you probably spend a lot of time typing backticks to display your code with syntax highlighting. We all know that wrapping text with backticks marks it as a code block, but repeatedly typing them can be tedious. To save time, I decided to create a shortcut that inserts a code block automatically. It’s actually quite simple:

````vim
iabbrev __code ```<CR>```<C-o>k<C-o>A
````

* `iabbrev`: creates an abbreviation in Vim’s insert mode
* `<CR>`: inserts a carriage return (newline)
* `<C-o>`: allows you to run a Normal mode command while staying in Insert mode

