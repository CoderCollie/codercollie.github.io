---
title: CoderCollie's Blog
category: blog
tags: [jekyll, github-pages, blog]
---

# CoderCollie's Blog

A Jekyll-based blog for sharing development experiences, tutorials, and insights.

## Features

- 🎨 Modern, responsive design
- 📝 Markdown-based content
- 🏷️ Tag and category support
- 🔍 SEO optimized
- 📱 Mobile-friendly
- ⚡ Fast loading static site

## Local Development

### Prerequisites

- Ruby (2.6 or higher)
- RubyGems
- Bundler

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/codercollie/codercollie.github.io.git
   cd codercollie.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

### Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Adding New Posts

Create new posts in the `_posts` directory with the following naming convention:

```
YYYY-MM-DD-title.md
```

Example:
```markdown
---
layout: post
title: "My New Post"
date: 2024-01-15 10:00:00 +0000
categories: [development, tutorial]
tags: [javascript, web-development]
author: CoderCollie
---

Your content here...
```

## Customization

- Edit `_config.yml` to change site settings
- Modify `assets/css/main.css` for styling
- Update layouts in `_layouts/` directory
- Add new pages in the root directory

## Deployment

This site is configured for GitHub Pages. Simply push your changes to the main branch and GitHub will automatically build and deploy your site.

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with Jekyll and ❤️*
