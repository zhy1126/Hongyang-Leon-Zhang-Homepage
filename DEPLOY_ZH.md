# 发布到 GitHub Pages

目标仓库：`zhy1126/Hongyang-Leon-Zhang-Homepage`

## 第一次发布

1. 将本项目中的全部文件提交到目标仓库的 `main` 分支，包括隐藏的 `.github` 文件夹。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 打开仓库的 **Actions** 页面，等待 `Deploy static site to GitHub Pages` 工作流完成。

完成后，网站地址应为：

`https://zhy1126.github.io/Hongyang-Leon-Zhang-Homepage/`

## 开启 / 关闭网站

根目录中的 `site-status.txt` 是网站开关：

- 写入 `open`：发布完整学术主页。
- 写入 `closed`：只发布双语维护页面，主页源码仍完整保留在仓库中。

修改这个文件后提交到 `main`，GitHub Actions 会自动更新公开网站。首次发布默认设为 `closed`。

## 社区互动功能

网站的 Research Commons 会链接到仓库的 GitHub Issues，并自动打开 `Share a research question` 表单。请在仓库 **Settings → General → Features** 中确保 **Issues** 已启用。

## 以后更新

修改主页文件并推送到 `main` 后，GitHub Actions 会自动重新发布网站，无需手动构建。
