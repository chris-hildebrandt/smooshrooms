# smooshrooms

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run deploy

git add dist && git commit -m "Initial dist subtree commit"

git subtree push --prefix dist origin gh-pages
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# just to get us all at the same starting point
git checkout master

# delete your build folder
rm -rf build/

# create a 'build' directory checked out to the gh-pages branch
git worktree add -B gh-pages build origin/gh-pages

# build the project
bundle exec rake build

# cd into 'build' folder, which is now on the gh-pages branch
cd build

# fail if for some reason this isn't the gh-pages branch
current_branch=$(git symbolic-ref --short -q HEAD)
if [ "$current_branch" != "gh-pages" ]; then
  echo "Expected build folder to be on gh-pages branch."
  exit 1
fi

# commit and push to gh-pages
git add . && git commit -m "Update gh-pages"
git push