#!/usr/bin/env bash
set -euo pipefail

branch_name="temp-kvcsqx-$(date +%s)"
mkdir -p /tmp/save_to_disk
cd /tmp/save_to_disk
rm -rf repo
mkdir repo
cd repo
cp -R /Users/admin2/OAH/my-garden/. .
rm -rf .git
rm -rf node_modules
rm -rf dist

cat <<SCRIPT > push.sh
#!/usr/bin/env bash
set -euo pipefail

if ! command -v git >/dev/null; then
  echo "git is required" >&2
  exit 1
fi

GIT_URL="https://github.com/ldaly4/curiosity-os.git"
if [ -z "${GIT_URL}" ]; then
  echo "Set GIT_URL" >&2
  exit 1
fi

if [ -d .git ]; then
  rm -rf .git
fi

git init
...
SCRIPT
chmod +x push.sh
