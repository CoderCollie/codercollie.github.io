---
title: Jekyll - file 앞에 날짜 자동으로 붙이기 for linux
---

- Jekyll 기반 블로그를 운영할 때, 새 글을 작성하고 나면 파일 이름을 반드시 다음과 같은 형식으로 맞춰야 합니다. 다만, 날짜를 하나하나 입력하는 것이 상당히 번거로운 일이죠.

```
YYYY-MM-DD-title.md
```

- 예를 들어 `my-post.md`라는 파일을 작성했다면, `2025-07-13-my-post.md`처럼 날짜를 앞에 붙여야 Jekyll에서 포스트로 인식합니다. 이걸 매번 수동으로 바꾸는 건 귀찮기도 하고 실수도 생기기 쉬운데요, 이를 간단한 셸 스크립트로 자동화할 수 있습니다.

## 🛠️ rename\_post.sh 스크립트

- 아래 스크립트를 `rename_post.sh`라는 이름으로 저장하세요. 저는 home directory 내에 저장하였습니다. file name은 달라도 됩니다.

```bash
#!/bin/bash

# 사용법: ./rename_post.sh 파일이름.md

original_file="$1"
if [ -z "$original_file" ]; then
  echo "Usage: $0 filename.md"
  exit 1
fi

# 오늘 날짜 가져오기 (YYYY-MM-DD 형식)
today=$(date +"%Y-%m-%d")

# 파일 이름에서 확장자 제거
filename=$(basename "$original_file" .md)

# 새 파일 이름 생성
new_filename="${today}-${filename}.md"

# 파일 이름 변경
mv "$original_file" "$new_filename"

echo "Renamed to: $new_filename"
```

### 📌 사용 방법

1. 터미널에서 실행 권한을 부여합니다:
- macOS와 같은 유닉스 기반 시스템에서는 쉘스크립트를 실행하려면 `chmod +x` 로 실행 권한을 먼저 부여해야 합니다. 이는 유닉스 계열 시스템에서는 동일한데요, 파일을 읽고 쓰는 것과 실행 권한은 별개로 두기 때문입니다. 즉, 파일을 만들어도, 니가 이 파일을 실행시키고 싶다면 별도로 실행권한을 부여해야 한다, 라고 이해하시면 됩니다.
- `chmod`는 "change mode", 즉 파일의 권한(permission)을 변경하는 명령어 입니다. `+`는 권한을 추가한다는 것이고, `x`는 "execute", 실행 권한을 추가하는 명령어죠.

```bash
chmod +x rename_post.sh
```

2. 그리고 아래처럼 실행하면 됩니다:

```bash
./rename_post.sh my-post.md
```

그러면 현재 날짜를 앞에 붙인 새 파일명으로 변경됩니다:

```
my-post.md → 2025-07-13-my-post.md
```

