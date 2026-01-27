# Deploying to GitHub Pages

This project is configured to use **GitHub Actions** for automatic deployment to GitHub Pages. Follow these steps to set it up:

## 1. Prepare Your Repository
Ensure your project is pushed to a GitHub repository and the branch is named `main`.

## 2. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** (top tab).
3. On the left sidebar, click on **Pages**.
4. Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown menu.

## 3. Trigger the Deployment
The deployment will trigger automatically every time you push to the `main` branch. You can also trigger it manually:
1. Go to the **Actions** tab in your repository.
2. Select the **Deploy to GitHub Pages** workflow.
3. Click **Run workflow** > **Run workflow**.

## 4. View Your Site
Once the workflow finishes, your site will be available at:
`https://<your-username>.github.io/<your-repo-name>/`

---

## Technical Details
- **Configuration**: The `vite.config.ts` is set with `base: './'` to support relative paths.
- **Workflow**: The deployment logic is defined in `.github/workflows/deploy.yml`.
- **Environment**: GitHub will automatically create a `github-pages` environment under **Settings > Environments**.
