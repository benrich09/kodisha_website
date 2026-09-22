# Kodisha Landing — with hero + all category images

## Install into your project

1. Copy `src/App.jsx` over your existing `src/App.jsx`
2. Copy `src/index.css` and `src/main.jsx` if needed
3. Copy the entire `public/` folder into your project root `public/`:
   - public/logo.png
   - public/hero-bg.jpg
   - public/categories/*.jpg  (all 12 images)

## Required public files

```
public/
  logo.png
  hero-bg.jpg
  categories/
    real-estate.jpg
    vehicles.jpg
    electronics.jpg
    tools.jpg
    home-lifestyle.jpg
    sports.jpg
    fashion.jpg
    events.jpg
    hero-collage.jpg
    overview.jpg
    agreement.jpg
    rent-sign.jpg
```

## Tailwind

If build fails on `@import "tailwindcss"`:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Ensure `tailwind.config.js` has:
```js
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]
```

Or for Tailwind v4:
```bash
npm install tailwindcss @tailwindcss/vite
```
and add `tailwindcss()` to vite plugins, then change index.css first line to `@import "tailwindcss";`
