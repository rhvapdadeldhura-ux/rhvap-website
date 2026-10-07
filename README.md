# R-HVAP GitHub Pages Website

## Upload to GitHub Pages

Upload the complete folder contents to your GitHub repository.

Required structure:

- index.html
- notice.html
- form.html
- apply.html
- css/style.css
- js/script.js
- js/apply.js
- assets/gov-logo.png
- assets/notice.pdf
- assets/application-form.pdf

## Before publishing

1. Replace `assets/gov-logo.png` with the official logo.
2. Replace `assets/notice.pdf` with the actual notice PDF.
3. Replace `assets/application-form.pdf` with the actual application form PDF.
4. Edit text/contact details if needed.
5. Enable GitHub Pages from repository Settings > Pages.

## Online application backend

`apply.html` is currently a frontend/test form. It validates file type and 2 MB file size and supports adding multiple activities/cost rows.

The submit button does NOT send data anywhere yet. Connect the Google Apps Script Web App endpoint when the backend is ready.

## Language switch

The English/नेपाली switch is stored in browser localStorage and works across all pages of this website.
