
Option 1: Easiest (Using Node Version Manager - nvm) (Recommended)
nvm allows you to install & switch between multiple Node versions easily.

1. Install nvm
For macOS/Linux:

bash
복사
편집
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
Then restart your terminal or run:

bash
복사
편집
source ~/.bashrc    # or ~/.zshrc if you're using zsh
2. Install Latest Node.js with nvm
bash
복사
편집
nvm install node    # Installs latest LTS version
nvm install --lts   # Same as above
3. Switch Node Versions (Optional)
bash
복사
편집
nvm use node
4. Check versions
bash
복사
편집
node -v
npm -v
