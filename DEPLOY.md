# 部署到 GitHub Pages 步骤

## 1. 在 GitHub 创建仓库
打开 https://github.com/ → 右上角 "+" → "New repository"
- Repository name: `portfolio`（或任意名称）
- 选择 **Public**（必须公开才能免费使用 Pages）
- **不要**勾选 "Add a README file"
- 点击 "Create repository"

## 2. 推送代码
创建后会显示推送命令，在终端执行：

```bash
cd d:/Projects/resume-website
git remote add origin https://github.com/你的用户名/portfolio.git
git branch -M main
git push -u origin main
```

## 3. 开启 GitHub Pages
仓库页 → Settings → Pages →
- Source: **Deploy from a branch**
- Branch: `main` → `/ (root)` → Save

等待 1-2 分钟，网站地址：
**https://你的用户名.github.io/portfolio**

---

## 如果 GitHub 连不上
可用 Gitee（码云）替代，步骤完全相同，国内访问更快：
https://gitee.com/
