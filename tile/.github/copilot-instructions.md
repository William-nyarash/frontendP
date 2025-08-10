# Copilot Instructions for frontendP/tile

## Project Overview
This is a minimal static frontend project for a card-style UI component. The main files are:
- `index.html`: Contains a single card layout with thumbnail, avatar, details, and stats.
- `style.css`: Defines the visual style using CSS variables and modern layout techniques.
- `images/`: Contains static image assets referenced in the card.

## Architecture & Patterns
- **Single Card Component**: The UI is structured around a `.card` container, with nested elements for thumbnail, avatar, details, and stats. All styling is handled in `style.css`.
- **CSS Variables**: Colors and fonts are managed via `:root` variables for easy theme changes.
- **Flexbox Layout**: The card uses flexbox for vertical stacking and spacing.
- **Image Handling**: Images are set to cover their containers using `object-fit: cover`.

## Developer Workflow
- No build tools, frameworks, or package managers are present. All development is direct HTML/CSS editing.
- To preview changes, open `index.html` in a browser. No local server or build step is required.
- Add new images to the `images/` folder and reference them in HTML as needed.

## Project-Specific Conventions
- **Class Naming**: Use BEM-like class names (e.g., `card-thumbnail`, `card-avatar`, `card-details`, `card-stats`).
- **Styling**: All styles are in a single CSS file. Use CSS variables for colors and fonts.
- **Responsiveness**: The card is constrained to a max width and uses percentage-based sizing for images.

## Integration Points
- **Fonts**: Uses Google Fonts (`Noto Sans`) via `<link>` in the HTML head.
- **No JavaScript**: The project is currently static and does not use JS or external APIs.

## Example Pattern
```html
<div class="card">
  <div class="card-thumbnail">
    <img src="images/pic-img.png" />
  </div>
  <div class="card-body">
    <div class="card-avatar">
      <img src="images/dp-img.png" />
    </div>
    <div class="card-details">
      <h3>Project Title</h3>
      <p>Username</p>
    </div>
  </div>
  <ul class="card-stats">
    <li>🤍 8</li>
    <li>💬 32</li>
  </ul>
</div>
```

## Key Files
- `index.html`: Main markup
- `style.css`: All styles
- `images/`: Static assets

---
For new features, follow the existing card/component structure and update `style.css` for all visual changes. Ask for clarification if you encounter ambiguous patterns or missing conventions.
