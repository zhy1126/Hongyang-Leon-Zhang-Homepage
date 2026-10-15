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

修改这个文件后提交到 `main`，GitHub Actions 会自动更新公开网站。当前网站设为 `open`。

## 搜索收录

部署成功只表示网站已发布，不代表搜索引擎已经收录。

1. 在 Bing Webmaster Tools 和 Google Search Console 中添加并验证主页地址：`https://zhy1126.github.io/Hongyang-Leon-Zhang-Homepage/`。
2. 提交站点地图：`https://zhy1126.github.io/Hongyang-Leon-Zhang-Homepage/sitemap.xml`。
3. 使用网址检查功能确认发现、抓取和收录状态，再根据具体报告处理问题。

这是部署在子目录中的 GitHub Pages 项目站点。搜索爬虫读取的是域名根目录的 `https://zhy1126.github.io/robots.txt`，不会把本项目子目录里的同名文件用作抓取规则。根目录暂未建站时，应在站长工具中直接提交站点地图。

IndexNow 验证文件保存在项目目录中，提交时必须提供指向该文件的 `keyLocation`。HTTP 200 表示收到提交，HTTP 202 表示收到提交但仍在验证密钥；两者都不等于已收录。

## 以后更新

修改主页文件并推送到 `main` 后，GitHub Actions 会自动重新发布网站，无需手动构建。
