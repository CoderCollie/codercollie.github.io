# CoderCollie's Blog 프로젝트 완전 가이드

이 문서는 CoderCollie의 Jekyll 기반 블로그 프로젝트에 대한 완전한 가이드입니다.

## 📁 프로젝트 구조 개요

이 프로젝트는 **Jekyll**을 사용한 정적 사이트 생성기 기반의 블로그입니다. GitHub Pages를 통해 호스팅되며, Ruby와 Liquid 템플릿 엔진을 사용합니다.

```
codercollie.github.io/
├── _config.yml           # Jekyll 메인 설정 파일
├── _layouts/             # 페이지 레이아웃 템플릿
│   ├── default.html      # 기본 레이아웃
│   ├── page.html         # 일반 페이지 레이아웃
│   └── post.html         # 블로그 포스트 레이아웃
├── _posts/               # 블로그 포스트 파일들
│   ├── 000_ComputerArchitecture/
│   ├── 001_ManagingBlog/
│   ├── 002_Git/
│   ├── 003_hammerspoon/
│   ├── 004_english/
│   ├── 2025-07-13-myFirstPost.md
│   └── welcome-to-jekyll.md
├── assets/               # 정적 파일들 (CSS, JS, 이미지)
│   ├── css/
│   │   ├── main.css      # 메인 스타일시트
│   │   └── syntax-highlighting.css  # 코드 하이라이팅 스타일
│   └── js/
│       └── copy-code.js  # 코드 복사 기능 스크립트
├── index.html            # 홈페이지
├── blog.html             # 블로그 목록 페이지
├── about.md              # 소개 페이지
├── Gemfile               # Ruby 의존성 정의
├── Gemfile.lock          # 의존성 버전 잠금 파일
├── robots.txt            # 검색엔진 크롤링 설정
└── .gitignore            # Git 무시 파일 설정
```

## 🔧 각 폴더와 파일의 역할

### 📋 설정 파일들
- **`_config.yml`**: Jekyll의 핵심 설정 파일
  - 사이트 제목, 설명, URL 등 기본 정보
  - 플러그인 설정 (jekyll-feed, jekyll-seo-tag)
  - 마크다운 처리기와 하이라이터 설정
  - 퍼머링크 구조 정의

- **`Gemfile`**: Ruby 젬(라이브러리) 의존성 관리
  - `github-pages` 젬을 사용하여 GitHub Pages 환경과 일치

### 🎨 레이아웃 폴더 (`_layouts/`)
- **`default.html`**: 모든 페이지의 기본 HTML 구조
- **`page.html`**: 일반 페이지용 레이아웃 (About 페이지 등)
- **`post.html`**: 블로그 포스트용 레이아웃 (제목, 날짜, 내용 등)

### 📝 포스트 폴더 (`_posts/`)
Jekyll의 핵심 폴더로, 블로그 포스트가 저장됩니다.
- **파일명 규칙**: `YYYY-MM-DD-제목.md`
- **카테고리별 서브폴더**:
  - `000_ComputerArchitecture/`: 컴퓨터 구조 관련 포스트
  - `001_ManagingBlog/`: 블로그 관리 관련 포스트
  - `002_Git/`: Git 관련 포스트
  - `003_hammerspoon/`: Hammerspoon 관련 포스트
  - `004_english/`: 영어 학습 관련 포스트

### 🎯 정적 자산 폴더 (`assets/`)
- **`css/`**: 스타일시트 파일들
  - `main.css`: 사이트의 메인 스타일
  - `syntax-highlighting.css`: 코드 블록 하이라이팅 스타일
- **`js/`**: JavaScript 파일들
  - `copy-code.js`: 코드 블록 복사 기능

### 📄 페이지 파일들
- **`index.html`**: 홈페이지 (최근 포스트 5개 표시)
- **`blog.html`**: 전체 블로그 포스트 목록 페이지
- **`about.md`**: 블로그/작성자 소개 페이지

## 🏠 로컬에서 사용하는 방법

### 1. 환경 설정

#### 필수 요구사항
- **Ruby** (2.6 이상)
- **RubyGems**
- **Bundler**

#### Ruby 설치 (Linux/macOS)
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# macOS (Homebrew)
brew install ruby
```

#### Bundler 설치
```bash
gem install bundler
```

### 2. 프로젝트 설정

```bash
# 1. 저장소 클론
git clone https://github.com/codercollie/codercollie.github.io.git
cd codercollie.github.io

# 2. 의존성 설치
bundle install

# 3. 로컬 서버 실행
bundle exec jekyll serve

# 4. 브라우저에서 확인
# http://localhost:4000 접속
```

### 3. 개발 명령어들

```bash
# 개발 서버 실행 (파일 변경 시 자동 새로고침)
bundle exec jekyll serve --livereload

# 드래프트 포함하여 실행
bundle exec jekyll serve --drafts

# 프로덕션 빌드
bundle exec jekyll build

# 의존성 업데이트
bundle update
```

## 📝 새 블로그 포스트 작성하기

### 1. 포스트 파일 생성
`_posts/` 폴더에 새 파일을 생성합니다.

**파일명 형식**: `YYYY-MM-DD-제목.md`

예시: `2024-01-15-my-new-post.md`

### 2. Front Matter 설정
포스트 파일 상단에 YAML Front Matter를 추가합니다:

```markdown
---
layout: post
title: "포스트 제목"
date: 2024-01-15 10:00:00 +0900
categories: [development, tutorial]
tags: [javascript, web-development, jekyll]
author: CoderCollie
excerpt: "포스트의 간단한 요약..."
---

여기에 포스트 내용을 작성합니다.

## 소제목

내용...

```코드 블록
code here
```
```

### 3. 카테고리별 정리
포스트를 카테고리별로 정리하려면 해당 서브폴더에 저장:
- 컴퓨터 구조: `_posts/000_ComputerArchitecture/`
- 블로그 관리: `_posts/001_ManagingBlog/`
- Git: `_posts/002_Git/`
- Hammerspoon: `_posts/003_hammerspoon/`
- 영어: `_posts/004_english/`

## 🚀 GitHub Pages로 블로그 배포하기

### 1. GitHub Pages 설정

1. **저장소 설정**
   - 저장소명이 `username.github.io` 형식이어야 함
   - 현재: `codercollie.github.io`

2. **Pages 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` (또는 `master`)
   - Folder: `/ (root)`

### 2. 자동 배포 프로세스

```bash
# 1. 변경사항 커밋
git add .
git commit -m "새 포스트: 포스트 제목"

# 2. GitHub에 푸시
git push origin main

# 3. GitHub Actions가 자동으로 빌드 및 배포
# 2-3분 후 https://codercollie.github.io에서 확인 가능
```

### 3. 커스텀 도메인 설정 (선택사항)

1. **CNAME 파일 생성**
   ```
   yourdomain.com
   ```

2. **DNS 설정**
   - A 레코드를 GitHub Pages IP로 설정
   - 또는 CNAME 레코드를 `username.github.io`로 설정

## 🎨 블로그 커스터마이징

### 1. 사이트 설정 변경
`_config.yml` 파일 수정:
```yaml
title: "새로운 블로그 제목"
description: "블로그 설명"
email: "your.email@example.com"
url: "https://username.github.io"
```

### 2. 스타일 커스터마이징
- `assets/css/main.css`: 메인 스타일시트
- 색상, 폰트, 레이아웃 등 수정 가능

### 3. 레이아웃 수정
- `_layouts/` 폴더의 HTML 파일들 수정
- Liquid 템플릿 문법 사용

### 4. 새 페이지 추가
루트 디렉토리에 `.md` 파일 생성:
```markdown
---
layout: page
title: "새 페이지"
permalink: /new-page/
---

페이지 내용...
```

## 🔧 고급 기능들

### 1. 플러그인 추가
`_config.yml`의 `plugins` 섹션에 추가:
```yaml
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

### 2. 코멘트 시스템
- Disqus
- Utterances (GitHub Issues 기반)
- Giscus (GitHub Discussions 기반)

### 3. 분석 도구
- Google Analytics
- Plausible Analytics

### 4. 검색 기능
- Algolia
- Lunr.js

## 🛠️ 문제 해결

### 일반적인 문제들

1. **의존성 오류**
   ```bash
   bundle install
   bundle update
   ```

2. **Ruby 버전 문제**
   - rbenv 또는 rvm으로 Ruby 버전 관리

3. **로컬 서버 실행 오류**
   ```bash
   bundle exec jekyll clean
   bundle exec jekyll serve
   ```

4. **GitHub Pages 빌드 실패**
   - GitHub 저장소의 Actions 탭에서 오류 로그 확인
   - `_config.yml` 문법 오류 확인

### 유용한 리소스

- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [Liquid 템플릿 문법](https://shopify.github.io/liquid/)
- [Jekyll 테마들](http://jekyllthemes.org/)

---

💡 **팁**: 변경사항을 푸시하기 전에 항상 로컬에서 테스트해보세요!

이 가이드를 통해 Jekyll 블로그를 효과적으로 관리하고 운영할 수 있습니다.