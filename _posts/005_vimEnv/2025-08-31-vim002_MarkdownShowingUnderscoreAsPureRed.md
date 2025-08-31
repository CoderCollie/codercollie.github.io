---
title: Vim Markdown Underscore Showing in Red (and How to Fix It)
date: 2025-08-31
tags: [vim]
--- 

If you’re writing Markdown format in your Vim environment, you might have noticed a strange problem: typing an underscore `_` between English letters makes it show up in **pure red**. 
In my case, the underscore turned bright red, but when I typed it between Korean characters it didn’t turned bright red. That made me confused at first — why does Vim only highlight underscores inside English words?

---

## Why It Happens

The reason is that Vim’s Markdown syntax rules treat `_` as a special character.
In Markdown, underscores are used for *italic emphasis*, like `_word_`, in shows like this _word_ in italic.

So when you type something like `foo_bar`, Vim’s Markdown plugin sometimes thinks you’ve started an emphasis block but it didn’t be closed properly. It marks this as a **`markdownError`** group, and your color scheme highlights errors in pure red.

That’s why underscores between English letters look “wrong,” but underscores with Korean text are ignored — the Markdown plugin doesn’t apply the same emphasis rules to non-ASCII characters.

---

## The Solution

Luckily, this isn’t a real error. It’s just syntax highlighting being too strict. You can fix it by remapping the `markdownError` group to something more sensible.

Add this line to your `~/.vimrc`:

```vim
" Make Markdown 'errors' (like underscores in words) show as normal text
hi link markdownError Normal
```

This tells Vim to render anything marked as `markdownError` with the same color as normal text.

If you’d rather still see it but in a softer way, you can link it to `Comment` or another group:

```vim
hi link markdownError Comment
```

---

## What Does `hi link` Mean in Vim?

When I was fixing the red underscore issue in Vim’s Markdown highlighting, the solution turned out to be just one line:

```vim
hi link markdownError Normal
```

At first glance, it looks mysterious. What does `hi link` even do? Let’s unpack it.

---

## Highlight Groups in Vim

Vim uses something called **highlight groups** to decide how text is displayed.
For example:

* `Normal` → normal text
* `Comment` → comments in code
* `Error` → errors or invalid syntax
* `String` → string literals

Plugins can add their own groups too. The Markdown syntax plugin, for example, defines `markdownError`, which is why underscores sometimes show up in red.

---

## Linking One Group to Another

Instead of giving every group its own color settings, Vim lets you **link** groups together. That’s where `hi link` comes in.

The syntax looks like this:

```vim
hi link {from-group} {to-group}
```

It means:

> “Whenever Vim tries to use `{from-group}`, show it using the style of `{to-group}` instead.”

So in my case:

```vim
hi link markdownError Normal
```

says:
“Don’t highlight `markdownError` in red. Just display it like normal text.”

---

## Checking Your Links

You can check how a group is defined with:

```vim
:highlight markdownError
```

If it’s linked, Vim will tell you:

```
markdownError xxx links to Error
```

After running `hi link markdownError Normal`, it will instead say:

```
markdownError xxx links to Normal
```

---

## Why It’s Useful

`hi link` is a clean way to fix overly strict syntax rules without disabling syntax highlighting completely.

For example:

* Hate that `TODO` comments are bright yellow? → `hi link Todo Comment`
* Don’t want Python decorators in neon colors? → `hi link pythonDecorator Normal`

Instead of redefining colors manually, you can just point one group at another.

Now underscores in Markdown look perfectly normal again — no more angry red.

---

## Quick Recap

* Underscores in Markdown get parsed as emphasis markers.
* Vim’s Markdown syntax sometimes misinterprets snake\_case words as errors.
* The red highlight comes from the `markdownError` group.
* You can fix it by linking that group to `Normal` (or any other highlight group you prefer).

