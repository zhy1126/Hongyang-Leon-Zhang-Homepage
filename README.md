# Hongyang Zhang — Academic Homepage

A lightweight bilingual academic homepage for Hongyang Zhang, built with plain HTML, CSS, and JavaScript. There is no package manager or build step.

## Highlights

- English / Simplified Chinese switching with a shareable `?lang=zh` view
- Responsive layout and accessible mobile navigation
- Centered editorial-style introduction with prominent About, News, Research, Publications, Honors, and CV navigation
- Compact bilingual news and updates section
- Interactive **Research Commons** embedded in the opening homepage section, connecting criminology, empirical legal studies, decision-making, and human–AI interaction
- A community contribution link backed by a structured GitHub Issue form
- Downloadable CV and responsive portrait
- Automatic GitHub Pages deployment through GitHub Actions

## Live repository

Repository: `zhy1126/Hongyang-Leon-Zhang-Homepage`

Expected Pages URL:

`https://zhy1126.github.io/Hongyang-Leon-Zhang-Homepage/`

## Preview locally

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

The repository includes `.github/workflows/pages.yml`. Each push to `main` uploads and deploys the static site automatically.

For the first deployment:

1. Commit all project files to the repository root, including the hidden `.github` folder.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions** and wait for `Deploy static site to GitHub Pages` to finish.
5. Ensure **Settings → General → Features → Issues** is enabled for the Research Commons contribution form.

See `DEPLOY_ZH.md` for the Chinese publishing guide.

## Open / close switch

The file `site-status.txt` controls what GitHub Pages publishes:

- `open` publishes the complete academic homepage.
- `closed` publishes only the bilingual maintenance page while keeping all homepage source files in the repository.

After changing the value, commit and push the file to `main`. GitHub Actions will update the public site automatically. The initial public deployment is intentionally set to `closed`.

## Update the content

- Main content and project structure: `index.html`
- Simplified Chinese copy and interactive Research Commons data: `script.js`
- Colors, typography, layout, and responsive behavior: `styles.css`
- Portrait: replace `assets/Hongyang_Zhang.jpg`, keeping the filename
- CV: replace `assets/Hongyang_Zhang_CV.pdf`, keeping the filename
- Community question form: `.github/ISSUE_TEMPLATE/research-question.yml`
- Public-site visibility switch: `site-status.txt`
- Closed-site message: `maintenance.html`

## Before publishing

- Confirm the email address and all dates.
- Add links or DOIs to publications when available.
- Check both language versions after editing shared content.
- Confirm that GitHub Issues is enabled in the repository.
