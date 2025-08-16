---
title: Vim - Add frontmatter by shorcut
date: 2025-08-10
tags: []
---

Add below command in your `.vimrc` file to make the frontmatter while writing a markdown file using vim

```vim
iabbrev __fmt ---<CR>title: Untitled<CR>date: <C-R>=strftime("%Y-%m-%d")<CR><CR>tags: []<CR>---
```

## Breaking down the command:

- `iabbrev`: stands for *insert mode abbreviation*. It defines a shortcut that works *only in insert mode*. When you type the abbreviation (in this case, `__fmt`) followed by a non-keyword character (like space, Enter, punctuation), Vim automatically replaces that abbreviation with the given replacement text. It's a lightweight way to quickly type long or repetitive text snippets without installing extra plugins.
- `---`: Inserts three dashes, which starts the YAML frontmatter block.
- `<CR>`: Stands for **Carriage Return**, which is essentially the **Enter key** or **newline**. So `---<CR>` means: insert `---` then go to the next line.
- `title: Untitled`: This literal text is inserted on a new line: `title: Untitled`
- `<CR>`: New line after the title line.
- `date: <C-R>=strftime("%Y-%m-%d")`: This is the trickiest part — it inserts a date dynamically. Let's dissect it:
  - `<C-R>`: Means **press Control + R** in insert mode. IMPORTANT! This doesn't mean Carriage Return. In Vim insert mode, pressing `<C-R>` followed by certain keys inserts text from registers or evaluates expressions.
  - `=`: Immediately after `<C-R>`, an equal sign tells Vim to **evaluate the following expression** as Vimscript and insert the result.
  - `strftime("%Y-%m-%d")`: This is a Vimscript function that returns the current date formatted as a string. So this returns something like `"2025-08-10"`.
    - `%Y` → 4-digit year, e.g., `2025`
    - `%m` → 2-digit month, e.g., `08`
    - `%d` → 2-digit day, e.g., `10`
  - `<CR>`: Press Enter to end the expression and insert the evaluated date string.
- `<CR>` (after date line): Inserts an extra blank line between `date:` and the next line.
- `tags: []`: Literally inserts `tags: []` on a new line.
- `<CR>`: New line after the tags line.
- `---`: Inserts the closing `---` to end the frontmatter block.

---

### Recap:

| Component              | Meaning                          | Effect                               |
| ---------------------- | -------------------------------- | ------------------------------------ |
| `iabbrev`              | Insert mode abbreviation         | Define shortcut in insert mode       |
| `__fmt__`              | Abbreviation text                | When typed, triggers replacement     |
| `---`                  | YAML frontmatter delimiter       | Start of frontmatter block           |
| `<CR>`                 | Carriage Return (Enter/new line) | Moves to next line                   |
| `title: Untitled`      | Literal text                     | Default title line                   |
| `<C-R>=`               | Insert result of Vimscript eval  | Insert evaluated expression's output |
| `strftime("%Y-%m-%d")` | Vim function for formatted date  | Inserts current date in `YYYY-MM-DD` |
| `tags: []`             | Literal text                     | Empty tags array                     |
| `---`                  | YAML frontmatter delimiter       | End of frontmatter block             |

