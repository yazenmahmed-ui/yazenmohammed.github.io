# Yazen's site — setup guide

This is a plain HTML/CSS/JS site. No build step, no framework, nothing to install.
Hosted for free forever on GitHub Pages — no domain fee, ever.

## 1. Put it on GitHub

1. Go to github.com and create a **new public repository** — for example `yazen.github.io`
   (if you name it exactly `<your-username>.github.io`, your site's URL becomes just
   `https://<your-username>.github.io/`, no extra path).
   Any other repo name also works, just with the repo name added to the URL:
   `https://<your-username>.github.io/<repo-name>/`.
2. Upload every file in this folder to that repo (drag-and-drop on the GitHub web
   interface works fine — you don't need to use git from the command line).

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` (or `master`) and folder to `/ (root)`. Save.
4. Wait a minute, then refresh — GitHub will show your live URL at the top of that page.

## 3. Add a research file

1. Drop the PDF (or other file) into the `files/` folder in the repo.
2. Open `data.json` and add an entry to the `"research"` array:

```json
{
  "title": "Your title",
  "date": "2026-10",
  "summary": "One or two sentences on what it covers.",
  "file": "files/your-file-name.pdf"
}
```

3. Commit the change. The site updates automatically — no rebuild needed.

## 4. Add a post

Open `data.json` and add an entry to the `"posts"` array:

```json
{
  "title": "Your post title",
  "date": "2026-10-01",
  "content": "The text of the post."
}
```

## 5. Personalize

- Replace the placeholder email in `index.html` (search for `you@example.com`).
- Edit the "About" paragraph in `index.html` if you want to change how it reads.
- Delete the example entries in `data.json` once you've added your own.

That's the whole workflow: edit `data.json`, drop files into `files/`, commit.
No server, no monthly cost, no domain to renew.
