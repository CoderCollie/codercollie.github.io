---
title: Jekyll - Add Current Date to the Beginning of the File Name on Linux
---

- When managing a Jekyll-based blog, you need to add the date in `YYYY-MM-DD` format at the beginning of each post’s file name. This task can feel tedious for most people.
- For example, if you create a file named "my-post.md", you need to rename it to something like "2025-07-13-my-post.md". Renaming files manually is tedious and prone to mistakes. Fortunately, you can automate this with a shell script.

```
YYYY-MM-DD-title.md
```

## 🛠️ rename_post.sh Script

- Save the following shell script as `rename_post.sh` in your root directory. You can use a different file name if you prefer.

```bash
#!/bin/bash

# Usage: ./rename_post.sh filename.md

original_file="$1"
if [ -z "$original_file" ]; then
  echo "Usage: $0 filename.md"
  exit 1
fi

# Get today’s date (YYYY-MM-DD format)
today=$(date +"%Y-%m-%d")

# Remove the extension from the file name
filename=$(basename "$original_file" .md)

# Create the new file name
new_filename="${today}-${filename}.md"

# Rename the file
mv "$original_file" "$new_filename"

echo "Renamed to: $new_filename"
```

### 📌 Next Steps

1. Grant execute permission in the terminal  
   - On Unix-based systems like macOS, you need to grant execute permission to run the shell script using `chmod +x`. This is always required on Unix systems. Some people think files are executable by default when created, but that’s not the case—Unix separates execute permission from read and write permissions.
   - `chmod` stands for “change mode.” It’s the command used to change file permissions. The `+` means “add permission,” and `x` means “execute.”

```bash
chmod +x rename_post.sh
```

2. Then run the script like this:

```bash
./rename_post.sh my-post.md
```

- And voilà! The file name will be changed:

```
my-post.md → 2025-07-13-my-post.md
```

