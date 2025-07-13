---
layout: post
title: Add Comment Feature to My Blog with Utterances
categories: [jekyll, blog, comments]
tags: [utterances, github, comments, jekyll, blog]
author: CoderCollie
---

I added a comment feature to my Jekyll blog using Utterances, a GitHub issue-based comment system. In my old Jekyll blog, I used Disqus about six years ago. Back then, it was free, but now it seems it’s no longer free. So, I asked ChatGPT if there were any free alternatives, and it suggested Utterances, which is popular for GitHub Pages and Jekyll-based blogs. After reading about it and checking out the service, I thought it was cool—any GitHub user can leave a comment.

## Utterances

The English word “utter” means “to speak,” and its noun form, “utterance,” means “a spoken word” or “remark.” It’s a fitting name for a service that lets users leave comments. Utterances uses the GitHub Issues system to store comments. When someone leaves a comment on a post, a new issue is immediately created in your GitHub repository.

---

## How to Add Utterances to Your Blog

### 1. Set the Repository for Your Comments

I set my blog repository as the comments repository. You can also use a separate repository, but since my blog isn’t big or popular yet, I don’t see the need to split them. Maybe if my blog goes viral in the future, I’ll consider it—but that’s probably unlikely, haha.
To use Utterances, your repository must be public and have the Issues feature enabled. You can change these settings in your GitHub repository settings.

### 2. Install Utterances on GitHub

Install Utterances on your GitHub account by visiting [github - utterances](https://github.com/apps/utterances) and following the installation instructions.
You can check which apps are installed on your repository and what permissions they have at [GitHub - Settings - Installations](https://github.com/settings/installations).

### 3. Add the Utterances Script to Your Post

Next, add the JavaScript snippet to your blog’s post layout. For Jekyll, add the following code to `_layouts/post.html` just above the footer content:
- Set the `repo` attribute to your GitHub repository.
- The `issue-term` attribute determines how posts and issues are matched. I chose `pathname`.
  - Think of `issue-term` as a primary key. All comments are saved under this term. If you change your site’s path structure, the mapping between comments and posts could break. To avoid this, you can add a `comment_id` to your post’s front matter, but that can be a hassle.

```html
<!-- Utterances comments -->
<section id="comments" style="margin-top:3rem;">
  <script src="https://utteranc.es/client.js"
    repo="codercollie/codercollie.github.io"
    issue-term="pathname"
    label="💬 blog-comment"
    theme="github-light"
    crossorigin="anonymous"
    async>
  </script>
</section>
```

### 4. Try It Out

Add a comment to a post and check if a new issue appears in your repository’s Issues tab. It works great!

---

## Related Links

- [Utterances Official Site](https://utteranc.es/)
- [Utterances GitHub Repository](https://github.com/utterance/utterances)

