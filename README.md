# Shreya Goyal - Professional CV Webpage

A modern, dynamic, and responsive CV webpage with pastel colors, smooth animations, and interactive elements.

## Features

### Design
- ✨ Beautiful pastel color scheme
- 🎨 Darker, more readable headings
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🖼️ Card-based layout for content organization
- 🌄 Background image support for hero section

### Dynamic Components
- 🔄 Smooth scroll navigation
- 📍 Active section highlighting in navigation
- 👁️ Intersection Observer for fade-in animations
- 🎯 Hover effects on cards and links
- 🌊 Parallax effect on hero section
- ⚡ Staggered animations for tags
- 🎬 Page load animations

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Modern CSS with pastel colors and animations
- `script.js` - JavaScript for dynamic interactions
- `profile.jpg` - Your profile photo (needs to be added)
- `hero-background.jpg` - Optional background image for hero section
- `README.md` - This file

## Setup Instructions

### 1. Add Your Profile Photo
```bash
# Copy your profile photo to the cv-webpage directory
cp /path/to/your/photo.jpg ~/cv-webpage/profile.jpg
```

### 2. Add Background Image (Optional)
To add a background image to the hero section:

1. Copy your background image to the cv-webpage directory:
```bash
cp /path/to/your/background.jpg ~/cv-webpage/hero-background.jpg
```

2. Edit `index.html` and add the `with-background` class to the hero section:
```html
<!-- Change this line: -->
<section id="home" class="hero">

<!-- To this: -->
<section id="home" class="hero with-background">
```

The background image will be overlaid with a semi-transparent pastel gradient to maintain readability.

### 3. View the Webpage
Simply open `index.html` in any modern web browser:
```bash
open ~/cv-webpage/index.html
```

Or use a local server for the best experience:
```bash
cd ~/cv-webpage
python3 -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

## Customization

### Colors
The pastel color palette is defined in `styles.css`:
```css
:root {
    --pastel-pink: #FFB5C2;
    --pastel-peach: #FFDAB9;
    --pastel-lavender: #E6E6FA;
    --pastel-mint: #B5EAD7;
    --pastel-blue: #C7CEEA;
    --pastel-yellow: #FFF4B8;
    --pastel-coral: #FFB4A2;
    
    --heading-dark: #2D2D2D;  /* Darker headings */
    --text-dark: #3A3A3A;
    --text-light: #6B6B6B;
}
```

### Background Image
To change the background image, either:
1. Replace `hero-background.jpg` with your image (keep the same filename)
2. Or update the CSS in `styles.css`:
```css
.hero.with-background {
    background-image: url('your-image-name.jpg');
}
```

### Content
Edit the HTML in `index.html` to update:
- Personal information
- Work experience
- Publications
- Awards
- Contact details

## Color Scheme

### Pastel Colors Used
- **Pink** (#FFB5C2) - Timeline markers, publication borders
- **Peach** (#FFDAB9) - Date badges
- **Lavender** (#E6E6FA) - Hero background, section accents
- **Mint** (#B5EAD7) - Hero background, gradients
- **Blue** (#C7CEEA) - Skill tags, accents
- **Yellow** (#FFF4B8) - Date badges
- **Coral** (#FFB4A2) - Publication year badges

### Text Colors
- **Headings**: Dark gray (#2D2D2D) for excellent readability
- **Body Text**: Medium gray (#3A3A3A)
- **Light Text**: Light gray (#6B6B6B)

## Browser Compatibility

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Deploy Online

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the `cv-webpage` folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the cv-webpage directory
3. Follow the prompts to deploy

## Tips

- Use high-quality images (at least 1920x1080) for the hero background
- Keep the profile photo square and at least 400x400px for best results
- The background image should have good contrast with text
- Test on mobile devices to ensure readability

## License

© 2026 Shreya Goyal. All rights reserved.

---

**Need help?** Check the browser console for any errors or issues.
