git checkout gh-pages
git rebase origin/master
npm start
git commit -am 'rebuild'
git push -f
git checkout master
npm start

git checkout gh-pages && git rebase origin/master && npm start && git commit -am 'rebuild' && git push -f && git checkout master && npm start
