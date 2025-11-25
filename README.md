# React Dropdown — Figma Dropdown Assignment

This small React app contains an implementation of a pages selector designed to match a Figma mock.

## Project structure
- `src/components/PagesDropdown/PagesDropdown.jsx` — main component (card-style panel with checkboxes and Done button).
- `src/components/PagesDropdown/PagesDropdown.css` — styles for the component (layout, typography, colors).

## Quick start
From the project root (`react-dropdown`) run (Windows PowerShell):

```powershell
npm install
npm start
```

Open the app at `[http://localhost:3000](https://shrutiag14.github.io/figma-dropdown-assignment/)`.

## Component behavior
- The component renders as an always-visible card (no dropdown trigger).
- Top item "All pages" toggles all page checkboxes and shows an indeterminate state when only some are selected.
- The `Done` button logs the selected pages to the browser console.

## Fonts and typography
- The component loads Montserrat (via Google Fonts) for typography. To improve performance or load globally for the whole app, add the Google Fonts `<link>` to `public/index.html` instead of using `@import` in the component CSS.

Example (recommended):
```html
<!-- public/index.html inside <head> -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
```

## Customization
- To change file contents or styling, edit:
  - `src/components/PagesDropdown/PagesDropdown.jsx`
  - `src/components/PagesDropdown/PagesDropdown.css`

- The code is intentionally small and un-opinionated; you can lift the selection state up to a parent component or persist selections to localStorage if desired.

## Notes
- The component currently logs selections to the console when you click `Done`. If you want a different behavior (persist, send to API, close card), tell me and I can wire it.
- If you want the card to behave as a popover/modal instead of always-visible, I can convert it and add overlay/keyboard closing.

If you'd like, I can also:
- Move the font import to `public/index.html` (recommended).
- Add unit tests or a small visual test harness.
- Tweak any pixel-level styling to more closely match your Figma file.

---
