---
layout: post
title: Jekyll 블로그에 Utterances로 댓글 기능을 달았습니다.
date: 2024-12-19 12:00:00 +0000
categories: [jekyll, blog, comments]
tags: [utterances, github, comments, jekyll, 블로그]
author: CoderCollie
---

- Jekyll 블로그에 **Utterances**라는 깃허브 기반 댓글 시스템을 붙였습니다. 예전 블로그에는 disqus 를 사용했었는데요, disqus의 경우 외부 서비스를 사용하기 때문에 comment data가 외부에 저장되고, 또 지금 보니 뭔가 유료 서비스로 바뀐 느낌이 있더군요. chatgpt에게 다른 서비스가 없냐고 물어보니, 요즘은 utterance 를 사용한다고 하더군요. github 기반의 코멘트 서비스이고, github 계정만 있으면 바로 코멘트를 달 수 있는 것도 마음에 들어서 바로 신청했습니다.

## Utterances

- 영어단어 'utter'는 '말하다'라는 의미를 가지고, 명사형인 'utterance'는 '말' 혹은 '발언'이라는 의미를 가집니다. 코멘트를 다는 서비스에 적절합 이름이네요.
- utternaces 는 github issues를 댓글 시스템으로 그대로 사용하는 오픈소스 서비스라고 합니다. 댓글이 달리면, 이 저장소의 이슈로 comment가 자동 등록되고, 댓글을 관리하는 것도 github에서 바로 가능하다고 합니다.

---

## Utterances 세팅 방식

### 1. 댓글 저장소 준비하기

- 저는 블로그 저장소(`codercollie/codercollie.github.io`) 자체를 댓글 저장소로 사용했습니다. 별도의 저장소를 만들어도 상관없지만, 아직 충분히 큰 블로그가 아니라서 분리할 필요성을 느끼지 못했습니다. 일단 세팅해보고, 나중에 좀 번거로워지면 그때 옮기도록 할게요. 그러려면 블로그가 아주 인기가 많아져야 하는데요 하하하. 그럴리가요.
- utterances를 사용하기 위해서는 repo 가 public이어야 하고, issues에 comment를 저장하기 때문에, issues 기능도 활성화되어 있어야 합니다. 이는 github setting 에서 변경하면 됩니다.

### 2. install utterances in github

- github에서 utterances 를 설치합니다. [github - utterances](https://github.com/apps/utterances) 에 접속해서, 내 댓글 저장소에서 utterances를 사용할 수 있도록 해줍니다.
- Utterances 는 댓글을 달기 위해 github issues를 사용합니다. 즉, github issues를 DB로 사용하면서, 댓글을 달고 읽는 작업을 해야 하죠. 이를 위해, utterances 가 해당 repo에 설치되어 있어야 합니다.
- 복잡해 보이지만, 그냥 [github - apps - utternaces](https://github.com/apps/utterances) 에 접속해서, utternaces를 설치할 app을 선택해주면 됩니다.
- 현재 어떤 app 들이 설치되어 있는지, 즉 어떤 권한들이 어떤 app에 부여되어 있는지 확인하려면 [github - settings - installation](https://github.com/settings/installations)을 확인하면 됩니다. 각 app 별로 어떤 permissino이 허용되는지 도 확인할 수 있습니다.

### 3. Utterances 스크립트 추가하기

- 그다음, utterances 의 java script source를 blog post하단에 삽입하면 끝납니다. jekyll의 경우 `_layouts/post.html` file 끝에 footer위에 아래 코드를 넣어주면 됩니다.
  - `repo`에는 댓글을 저장할 깃허브 저장소를 적어줍니다.
  - `issue-term`은 댓글을 어떤 기준으로 매핑할지 정하는데, 저는 `pathname`(포스트의 경로)로 했습니다.
    - utterances의 `issue-term`은 일종의 primary key라고 이해하시면 됩니다. 여기서 정해지는 key에 따라 issue가 저장되기에, 만약 이후에 pathname 등이 변경된다면, 즉 post의 상대적 위치가 변경된다면, 기존 댓글과의 연결이 끊어질 수 있습니다. 이러한 경우를 회피하려면, 각 post의 front matter에 고정된 comment_id 등을 추가하는 방법도 있지만, 이것은 상당히 번거로우므로, 일단은 그냥 넘어가도록 합니다 하하하.
  - `label`은 이슈에 자동으로 붙는 라벨입니다.
  - `theme`는 댓글창의 테마(밝은 테마로 설정).

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

### 3. 실제로 적용해보기

- Test 로 comment를 달아보면, github issues 에 생성되는 것을 확인할 수 있습니다. 아주 마음에 듭니다.

---

## 참고 링크

- [Utterances 공식 사이트](https://utteranc.es/)
- [Utterances GitHub 저장소](https://github.com/utterance/utterances)

