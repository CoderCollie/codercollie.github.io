---
title: Git - Create an Alias for `git commit -m`
date: 2025-08-22
tags: [git, productivity, alias]
---

As you know, sometimes typing `git commit -m "message"` feels a bit too long, especially when you’re committing frequently. Git allows you to define **aliases** to shorten commonly used commands. I just want to make a git alias to do `git commit -m` as a shorcut.

```bash
git config --global alias.cm 'commit -m'
```

## Usage

Then, you could type just `git cm` to make a commit.

```bash
git cm "initial commit"
```

is running exactly same with below command:

```bash
git commit -m "initial commit"
```

## More knowledge:

Git aliases are stored in your git global configuration file:  `~/.gitconfig`. you could see all of your aliases with below command.

```bash
git config --get-regexp '^alias\.'
```
