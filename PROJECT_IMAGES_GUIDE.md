# 📸 Project Cover Photos Guide

## Where to Add Images

### Step 1: Create the Images Folder
Create a folder structure in the `public` directory:
```
public/
  └── images/
      └── projects/
          ├── smart-traffic-monitoring.jpg
          ├── ask-ai-mee.jpg
          ├── smart-walking-stick.jpg
          └── ... (other project images)
```

### Step 2: Add Your Images
1. Place your project cover photos in `public/images/projects/`
2. Use descriptive filenames (lowercase, hyphens):
   - `smart-traffic-monitoring.jpg`
   - `ask-ai-mee.jpg`
   - `smart-walking-stick.jpg`
   - `temperature-monitoring.jpg`
   - etc.

### Step 3: Update Project Data
Edit `src/data/portfolioData.js` and update the `image` field for each project:

```javascript
{
  id: 1,
  title: "Smart Traffic Monitoring System (V2I)",
  // ... other fields
  image: "/images/projects/smart-traffic-monitoring.jpg", // Update this
  // ...
}
```

## Image Specifications

### Recommended Settings:
- **Format**: JPG (for photos) or PNG (for screenshots)
- **Dimensions**: 800x600px or 1200x800px
- **Aspect Ratio**: 4:3 or 16:9
- **File Size**: Keep under 500KB for fast loading
- **Quality**: High quality but optimized

### Best Practices:
1. **Use WebP format** if possible (better compression)
2. **Optimize images** before adding (use tools like TinyPNG, ImageOptim)
3. **Consistent sizing** - all images should have similar dimensions
4. **High quality** - images represent your work, make them look good!

## Example Update

In `src/data/portfolioData.js`:

```javascript
export const projects = {
  featured: [
    {
      id: 1,
      title: "Smart Traffic Monitoring System (V2I)",
      category: "IoT & Embedded",
      description: "...",
      techStack: ["ESP32", "Embedded C", "V2I Communication"],
      results: "Published in IEEE ICSCSA 2025",
      github: "https://github.com/rupesh-3",
      demo: null,
      image: "/images/projects/smart-traffic-monitoring.jpg", // ✅ Add your image path here
      metrics: "Real-time monitoring with <100ms latency"
    },
    {
      id: 2,
      title: "AskAIMee – AI Chatbot",
      // ...
      image: "/images/projects/ask-ai-mee.jpg", // ✅ Add your image path here
      // ...
    }
    // ... more projects
  ]
}
```

## Image Sources

You can use:
- **Screenshots** of your projects
- **Photos** of physical projects (IoT devices, hardware)
- **Mockups** or designs
- **Diagrams** or architecture visuals
- **Demo videos** (convert to GIF or use first frame as image)

## Quick Start

1. Create folder: `public/images/projects/`
2. Add your images with descriptive names
3. Update `image` field in `portfolioData.js` for each project
4. The component will automatically display them!

## Notes

- Images in the `public` folder are served from the root URL
- Path should start with `/images/projects/...`
- If no image is provided, a gradient placeholder with the first letter will show
- Images are lazy-loaded for better performance

