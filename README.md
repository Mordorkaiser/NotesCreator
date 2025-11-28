```code
# NotesCreator — Website and GitHub Pages

This repository now includes a simple static website scaffold you can use as a project homepage.

What I added
- docs/index.html — landing page with hero, features, install and usage placeholders.
- docs/css/style.css — styles for the landing page.
- docs/js/main.js — small script for navigation toggle.
- A short README section (this file) with deployment instructions.

Quick start — preview locally
1. Copy the `docs/` folder into your repository (already shown above).
2. Serve it locally to preview:

   Using Python 3:
   ```bash
   cd docs
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

Deploy via GitHub Pages (recommended, easiest)
- Option A (serve from docs/ on main branch):
  1. Commit the `docs/` folder to the main branch of the repository.
  2. In GitHub, go to Settings → Pages.
  3. Under "Source", pick "main" branch and folder "/docs".
  4. Save — your site will be available at: https://Mordorkaiser.github.io/NotesCreator/

- Option B (publish to gh-pages branch):
  Use your preferred deployment tool (GitHub Actions, gh-pages npm package, or a simple script). Example using gh-pages package (Node/npm):
  ```bash
  npm install --global gh-pages
  # build/publish the docs directory:
  gh-pages -d docs
  ```

How to customize
- Replace the copy in docs/index.html with your project's real description, screenshots, usage, and commands.
- Update badges (they already point at your repo).
- Replace the hero mockup with an image or GIF (put assets in docs/assets/ and update paths).
- Adjust colors in docs/css/style.css to fit your branding.

If you want, I can:
- Convert this into a Jekyll or Hugo theme so it's easier to edit with templates.
- Add a GitHub Actions workflow to automatically publish to gh-pages on push.
- Add screenshots, badges, and actual usage instructions pulled from your repo (I can scan the repo if you'd like).

Tell me which of the above you'd like next and I will prepare it.
```
