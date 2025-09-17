
# SuperValu Branding (Frappe v15)

Minimal custom app to hide the HR icon and replace the first breadcrumb label ("Frappe HR") with "SuperValu HR".
Works on Frappe v15 (ERPNext/HRMS).

## What it does
- Hides the small square icon in the Desk header.
- Option A (default): hides the "Frappe HR" crumb entirely.
- Option B: replace the text with "SuperValu HR" (uncomment the 'replace' block in `public/desk.css`).

## Change the text
- Edit `public/desk.css` and change the string `SuperValu HR` if you want a different label.
- Optional: also change it in `public/desk.js` (keeps it stable across route changes).

## Install on Frappe Cloud
1. Upload this repo to GitHub (public) as `supervalu_branding`.
2. Frappe Cloud → Project → **Apps** → **Install from GitHub** → paste the repo URL (branch main, framework version-15).
3. After it appears under Apps, click **Install** on your site.
4. Open the site and **Clear Cache** / hard refresh (Ctrl+Shift+R).

## Uninstall
- Site → Apps → Uninstall `supervalu_branding`.
