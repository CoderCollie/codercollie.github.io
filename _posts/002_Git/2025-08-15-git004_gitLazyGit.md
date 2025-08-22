---
title: Install LazyGit - Better squash via Terminal
date: 2025-08-15
tags: []
---

I used to use Git exclusively through the terminal. I’m a big fan of Vim and terminal workflows because GUI environments often slow me down and reduce my productivity—I prefer not to rely on a mouse or scroll wheel.

That said, I still want to manage Git from the terminal. However, the native Git commands in the terminal aren’t ideal for checking differences or performing squash operations. In my workflow, I often make frequent commits even for small changes. While this isn’t necessarily a bad habit, it does create a messy commit history. To clean it up, I usually need to squash these small commits.

In GUI environments like IntelliJ, it’s easy to view the cumulative differences across multiple commits. In the terminal, this process is not as straightforward.

To solve this, I looked for a better way to manage commits and discovered **[LazyGit](https://github.com/jesseduffield/lazygit)**.

For macOS users like me, installation is simple:

```sh
brew install lazygit
```

After installation, run it with:

```sh
lazygit
```

LazyGit makes it much easier to review changes, squash commits, and navigate your Git history—all from the terminal.

