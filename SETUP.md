# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Resume PDF**
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf`
   - The download button in the Hero section will automatically link to it

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:3000`

4. **Customize Content**
   - Edit `src/data/portfolioData.js` to update:
     - Personal information
     - Projects
     - Publications
     - Experience
     - Skills
     - Certifications
     - Achievements

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Add your resume here
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── TechStack.jsx
│   │   ├── ProjectsShowcase.jsx
│   │   ├── ActivityDashboard.jsx
│   │   ├── Publications.jsx
│   │   ├── Timeline.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── TypingEffect.jsx
│   │   └── AnimatedCounter.jsx
│   ├── data/
│   │   └── portfolioData.js  # All content data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization Tips

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  'neon-blue': '#00D9FF',
  'neon-green': '#39FF14',
  'neon-purple': '#B429FF',
  // ... add more colors
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### Modifying Animations
- Animation timing: Edit `transition` props in components
- Animation types: Modify `initial`, `animate`, `whileHover` props
- Global animations: Update `src/index.css`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images: Use WebP format and optimize sizes
- Lazy loading: Already implemented for components
- Code splitting: Vite handles this automatically
- Bundle size: Check with `npm run build`

## Troubleshooting

### Port Already in Use
Change port in `vite.config.js`:
```js
server: {
  port: 3001, // Change to available port
}
```

### Build Errors
1. Clear cache: `rm -rf node_modules .vite`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

### Styling Issues
1. Check Tailwind classes are correct
2. Verify `tailwind.config.js` content paths
3. Restart dev server

## Next Steps

1. ✅ Add your resume PDF
2. ✅ Update personal information
3. ✅ Add project images/screenshots
4. ✅ Customize colors if needed
5. ✅ Test on multiple devices
6. ✅ Deploy to hosting platform

---

Happy coding! 🚀

