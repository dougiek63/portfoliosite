# Deployment Guide - Doug Kim Portfolio

## GitHub Pages Deployment Instructions

### Prerequisites
1. GitHub account
2. Git installed on your system

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" or go to [github.com/new](https://github.com/new)
3. Repository name: `ai-design-portfolio` (or your preferred name)
4. Description: "Doug Kim - AI Design Leader Portfolio"
5. Set to **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Files to GitHub
**Option A: Using GitHub Web Interface**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files from your portfolio folder:
   - `index.html`
   - `login.html`
   - `copilot-in-azure.html`
   - `inclusive-design.html`
   - `styles.css`
   - `script.js`
   - `todo-list.html`
   - `README.md`
   - `.gitignore`
   - `images/` folder (with all images)
   - `videos/` folder (with all videos)
3. Commit message: "Initial portfolio deployment"
4. Click "Commit changes"

**Option B: Using Git Command Line** (if Git is installed)
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-design-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: "main"
6. Select folder: "/ (root)"
7. Click "Save"

### Step 4: Configure Custom Landing Page
Since we want the login page to be the first page visitors see:

1. In your repository, rename `index.html` to `portfolio.html`
2. Rename `login.html` to `index.html`
3. Update all links in the new `index.html` (formerly login.html):
   - Change `window.location.href = 'index.html';` to `window.location.href = 'portfolio.html';`
4. Update navigation links in other pages to point to `portfolio.html` instead of `index.html`

### Step 5: Access Your Site
- Your site will be available at: `https://YOUR_USERNAME.github.io/ai-design-portfolio/`
- It may take a few minutes for changes to appear
- The login page will be the first thing visitors see

## Password Configuration

The current password is set to: `DougKim2025`

To change the password:
1. Edit the `index.html` file (the login page)
2. Find the line: `const correctPassword = 'DougKim2025';`
3. Change `'DougKim2025'` to your desired password
4. Save and commit the changes

## Security Notes

⚠️ **Important Security Information:**
- This is a client-side password protection system
- The password is visible in the source code
- This provides basic access control but is not cryptographically secure
- For higher security needs, consider server-side authentication

## Troubleshooting

### Common Issues:
1. **404 Error**: Make sure all file names are correct and match the links
2. **Styles not loading**: Check that `styles.css` is in the root directory
3. **Videos not playing**: Ensure video files are uploaded to the `videos/` folder
4. **Images not showing**: Verify images are in the `images/` folder

### GitHub Pages Limitations:
- Free GitHub Pages requires public repositories
- Changes may take up to 10 minutes to appear
- File size limit: 100MB per file
- Repository size limit: 1GB

## Custom Domain (Optional)

To use a custom domain:
1. In repository settings, go to "Pages"
2. Under "Custom domain", enter your domain
3. Configure DNS with your domain provider
4. Enable "Enforce HTTPS"

## Support

For GitHub Pages support: [docs.github.com/pages](https://docs.github.com/en/pages)
