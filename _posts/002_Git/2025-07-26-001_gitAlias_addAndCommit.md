---
title: 001 git - add and commit in shortcut
category: git
tags:
---

- I used to use git commit as a save point. Of coursely, I don't do this in the company related repository because it could be a problem if the commit history was saved like messay. I usually do those thing, I mean maintaining commit as a tiny save point when I do my own thing like blogging or something. Even though I already did like that, I have to rearrange those messy commits by squashing sometimes, when I have more time to do something.
- Anyway, back to the main point, when I save those thing, I always type two below sequential command, those are `add .` and `commit`. Today I feel these sequential command feels tedious, I should automate this task by just one shortcut.

```shell
git add .
git commit -m "commit message"
```

- As you already know, it is also possible to register a shortcut in your bash config file like `.bashrc`.
- There is also the way to register the shortcur in your bashrc which means bach config, but, I've decided to use `git alias`. I haven't known `git alias` before, so, using it is much better for extending my knowledge in this time.
- Simply, run below command in your shell.
  - 대략, git config alias 에 'ac'를 등록하는 command 입니다.
  - `!` is something like flag which means to tell git this text is the whole shell command, which is not just be substituted.

```shell
git config --global alias.ac '!git add . && git commit -m'
```

- you could check if the command was regishtered well by using below command. I think, in my computer config, it worked well.

```shell
> git config --global --get alias.ac
!git add . && git commit -m
```

- and then add one more shorcut, after doing this, I couldn't stand all git command, I'd like to set all long command as shortcut

```git
git config --global alias.st '!git status'
```
