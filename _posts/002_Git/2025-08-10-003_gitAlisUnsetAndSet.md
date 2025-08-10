---
title: Git - Cleaning Up and Adding Git Aliases
---

First, remove any Git aliases that I don’t use often, and then add new ones that are more useful to me.
`--get-regexp` means to "Search config keys using a regular expression".

```sh
# List all Git aliases
git config --global --get-regexp ^alias\.
```

To remove an alias:

```sh
git config --global --unset alias.ac
```

To add a new alias:

```sh
git config --global alias.ctemp '!git commit -m "temp"'
```
