---
title: Remove or Change Author in the git and github Repository
categories: [github, git, blog]
tags: [github, git, author, contributor, repository]
author: CoderCollie
---

When I decided to create this blog, I planned to create it with my completely new GitHub account. However, I unintentionally pushed lots of commits with my existing account to this repository. I wanted to hide my old account from this repository, so I tried to find how to remove the old account from the git and GitHub history.

Sadly, even though you've already changed the git author in your local git history, you might still see your old existing account in the contributor tab on GitHub. You must remove the repository from your remote, then push your local repository to remote.

Anyway, you can do this using the procedure below.

## Change author information in your local Git history

### Solution 1: git filter-branch

ChatGPT told me to use this solution, but when I tried to run this command in my shell, a warning appeared saying "this command might make the git history dirty, is it okay?" So, I decided not to use this command.

```bash
# Change committer and author in the whole git history
git filter-branch --env-filter '
OLD_EMAIL="old-email@example.com"
NEW_NAME="New Author Name"
NEW_EMAIL="new-email@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

While running the command, the following warning message appeared:

```text
WARNING: git-filter-branch has a glut of gotchas generating mangled history
	 rewrites.  Hit Ctrl-C before proceeding to abort, then use an
	 alternative filtering tool such as 'git filter-repo'
	 (https://github.com/newren/git-filter-repo/) instead.  See the
	 filter-branch manual page for more details; to squelch this warning,
	 set FILTER_BRANCH_SQUELCH_WARNING=1.
```

### Solution 2: git filter-repo

First of all, install git-filter-repo using the command below:

```bash
pip install git-filter-repo
```

Then run the command below:

```bash
# change old email to new email
git filter-repo --email-callback '
if email == b"old-email@example.com":
    return b"new-email@example.com", b"New Author Name"
return email, name
'
```

### Solution 3: change author of specific commits

It is also possible to change the author by using `git commit --amend`. However, changing the author commit by commit is so time-consuming that I couldn't recommend this to you. But this solution seems very basic for git.

```bash
# just change the author of the commit
git commit --amend --author="New Author <new-email@example.com>"

# If you want to change author for several commits
git rebase -i HEAD~10  # recent 10 commits
# change word to 'edit'
git commit --amend --author="New Author <new-email@example.com>"
git rebase --continue
```

## Remove repository from remote

### Step 1: backup local repository

Actually, this step is not mandatory.

```bash
# Check if local repository is clean
git log --oneline -5

# backup
cp -r your-repo-folder your-repo-backup
```

### Step 2: delete repository on GitHub

1. Go to your GitHub repository page
2. Click **Settings** (top right)
3. Scroll down to **Danger Zone**
4. Click **"Delete this repository"**
5. Type the repository name to confirm
6. Click **"I understand the consequences, delete this repository"**

### Step 3: create new repository with the same name

1. Go to GitHub and click **"New repository"**
2. Use the **exact same repository name**
3. **Don't initialize** with README, .gitignore, or license (since you have existing code)
4. Click **"Create repository"**

### Step 4: push your cleaned history

```bash
# Check if your local remote still points to the same URL
git remote -v  # Should show the same URL

# Push your cleaned history
git push -u origin main --force
```

## Important notes

- **GitHub immediately releases the repository name** when you delete it
- **No waiting period** - you can recreate it immediately
- **All issues, PRs, stars, forks are permanently lost**
- **Contributor list will be completely fresh** based only on your new commits
- **Repository URL stays the same** so any existing clones will still work

---

## Related links

- [GitHub repository deletion](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)
- [Git author information changes](https://git-scm.com/book/ko/v2/Git-도구-Reset-명확히-하기)
- [git filter-branch documentation](https://git-scm.com/docs/git-filter-branch)
- [git filter-repo documentation](https://github.com/newren/git-filter-repo)

