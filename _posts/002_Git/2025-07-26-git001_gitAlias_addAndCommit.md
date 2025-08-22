---
title: Git Aliases - Streamlining Add and Commit Workflow
category: git
tags: [git, productivity, aliases, workflow]
---

I often use git commits as save points during my development process, especially blogging process. Of course, I don't do this in company-related repositories because messy commit histories can cause problems. I typically maintain commits as small save points when working on personal projects like blogging or side projects. Even though I organize these commits this way, I sometimes need to clean them up by squashing when I have more time to refactor. But as you know, in real life, we don't have much time to do those things.

The main issue I face is the repetitive nature of the add and commit workflow. Every time I want to save my changes, I have to type these two sequential commands:

```shell
git add .
git commit -m "commit message"
```

- This pattern becomes tedious when you're making frequent commits throughout the day.

## Solution: Git Aliases

- While you could register shortcuts in your bash config file (like `.bashrc`), I decided to use **git aliases** instead. I hadn't used git aliases before, so this was a great opportunity to expand my knowledge and use a more git-specific approach.

### Creating the Add-Commit Alias

- To create a shortcut for the add and commit workflow, run this command in your shell:
- Before explaining further, there's something important to note: git aliases always run from the root directory of your git repository. This means that when you use an alias like this, it will add all changes in your repository, regardless of your current working directory. I tried many approaches to make the alias respect the current directory (`pwd`), but found it's not possible using only git alias. While you could achieve this with a bashrc function, that's not the solution I wanted.

```shell
git config --global alias.ac '!git add . && git commit -m'
```

- Therefore, I created a new alias tailored for my workflow. In my blog, I often add and commit changes specifically in the `_posts/` folder. Since changes here don't pose any risk, I prefer to commit frequently for convenience.

```shell
git config --global alias.acp '!git add _posts/ && git commit -m "Posting for savePoint"'
```

#### Usage Examples

- **Commit all changes with a message:**
  ```shell
  git ac "Update documentation and fix typos"
  ```
  This will add all changes and commit them with the provided message.

- **Commit only specific files:**
  ```shell
  git add myfile.txt
  git ac "Fix bug in myfile.txt"
  ```
  This will only commit `myfile.txt` (and any other files you staged manually).

### Verifying the Alias

- You can verify that the alias was registered correctly using:

```shell
git config --global --get alias.ac
```

- This should return: `!git add . && git commit -m`

### Using the Alias

- Now instead of typing two commands, you can simply use:

```shell
git ac "your commit message"
```

## Additional Useful Aliases

- After creating this alias, I realized how convenient it was and wanted to create more shortcuts for other common git commands:

### Status Alias

```shell
git config --global alias.st '!git status'
```

- Now you can check status with: `git st`

### Other Useful Aliases You Might Want

```shell
# Checkout
git config --global alias.co '!git checkout'

# Branch
git config --global alias.br '!git branch'

# Log with graph
git config --global alias.lg '!git log --oneline --graph --decorate'

# Pull
git config --global alias.pl '!git pull'

# Push
git config --global alias.ps '!git push'
```

## Benefits of Git Aliases

1. **Faster workflow**: Reduce typing time for common commands
1. **Consistency**: Standardize command usage across projects
1. **Git-specific**: Unlike shell aliases, these work in any git repository
1. **Portable**: Aliases are stored in git config and can be shared across machines

## Best Practices

- Use short, memorable alias names
- Document your aliases for team members
- Consider creating a `.gitconfig` file to share aliases across projects
- Test aliases thoroughly before using them in production code

- By using git aliases, you can significantly speed up your daily git workflow and focus more on actual development rather than typing repetitive commands.







