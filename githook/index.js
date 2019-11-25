const fs = require('fs');
let flag = fs.existsSync('.git')

// 复制到hooks里去
if (flag) {
  try {
    fs.copyFileSync('githook/pre-commit', '.git/hooks/pre-commit')
    fs.copyFileSync('githook/commit-msg', '.git/hooks/commit-msg')
    console.log('githook成功生成')
  } catch (err) {
    console.log('githook复制失败', err)
  }
}
