#  Clone - Setup Guide

A fully functional -style website built with HTML, CSS, and JavaScript.

## Features

✨ **Core Features:**
- Clean, responsive design matching 's style
- Animated confetti background
- Profile section with customizable image and name
- Social media icons (Facebook, Instagram, TikTok, WhatsApp)
- Multiple link buttons with icons
- QR code generator for mobile viewing
- Smooth animations and hover effects
- Click tracking and analytics support
- Mobile-responsive layout

🎨 **Visual Effects:**
- Fade-in animations on page load
- Hover effects on all interactive elements
- Ripple effect on link clicks
- Animated confetti particles
- Smooth transitions throughout

📱 **Mobile Optimized:**
- Fully responsive design
- Touch-friendly buttons
- Optimized for all screen sizes

## File Structure

```
-clone/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # All functionality and interactivity
├── profile.jpeg         # Your profile image (you need to add this)
├── -logo.svg   #  logo (optional)
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup

1. **Download all files** to a folder on your computer
2. **Add your profile image:**
   - Replace `profile.jpeg` with your own image
   - Or update the filename in `script.js` config section

### 2. Customize Your Links

Open `script.js` and edit the `config` object:

```javascript
const config = {
    profileName: "Your Name Here",
    profileImage: "your-profile-image.jpg",
    
    // Update your social media links
    socialLinks: {
        facebook: "https://facebook.com/yourpage",
        instagram: "https://instagram.com/yourprofile",
        tiktok: "https://tiktok.com/@yourprofile",
        whatsapp: "https://wa.me/1234567890"
    },
    
    // Update your main links
    links: [
        {
            id: "link-1",
            url: "https://your-first-link.com",
            text: "Your First Link",
            icon: "fas fa-link",
            iconColor: "#dc2626"
        },
        // Add more links...
    ]
};
```

### 3. Customize Colors

Edit `styles.css` to change colors:

```css
/* Background gradient */
body {
    background: linear-gradient(135deg, #a8e0ff 0%, #d4f1ff 100%);
}

/* Profile name color */
.profile-name {
    color: #1e3a8a;
}

/* Link button hover effects */
/* Edit any color values you want to change */
```

### 4. Add/Remove Links

**To add a new link:**

1. In `script.js`, add a new object to the `links` array:
```javascript
{
    id: "new-link",
    url: "https://your-url.com",
    text: "Link Text",
    icon: "fas fa-star",  // FontAwesome icon class
    iconColor: "#ff6b6b"
}
```

2. In `index.html`, add a new link button:
```html
<a href="#" class="link-button" data-link="new-link">
    <div class="link-icon" style="color: #ff6b6b;">
        <i class="fas fa-star"></i>
    </div>
    <span class="link-text">Link Text</span>
    <div class="link-arrow">
        <i class="fas fa-chevron-right"></i>
    </div>
</a>
```

**To remove a link:**
- Delete the corresponding section in both `index.html` and `script.js`

### 5. Icons

This project uses **Font Awesome** icons (loaded via CDN). 

Browse icons at: https://fontawesome.com/icons

Example icon classes:
- `fas fa-file-pdf` - PDF icon
- `fas fa-list` - List icon
- `fab fa-whatsapp` - WhatsApp icon
- `fas fa-envelope` - Email icon
- `fas fa-phone` - Phone icon

### 6. Testing Locally

1. **Simple method:** Just double-click `index.html` to open in your browser

2. **Better method** (for QR code and other features):
   - Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have npx)
   npx http-server
   ```
   - Then visit: `http://localhost:8000`

## Hosting Your Site

### Option 1: GitHub Pages (Free)

1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings > Pages
5. Select main branch as source
6. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant live URL

### Option 3: Vercel (Free)

1. Sign up at vercel.com
2. Import your project
3. Deploy with one click

### Option 4: Traditional Web Hosting

Upload all files to your web hosting via FTP.

## Advanced Customization

### Enable Analytics

In `script.js`, the `trackLinkClick()` and `trackPageView()` functions are ready for analytics integration.

**For Google Analytics:**

1. Add Google Analytics script to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Uncomment the gtag code in `script.js`

### Add Custom Domain

After hosting, you can add a custom domain through your hosting provider's settings.

### Add More Features

The code is well-commented and modular. You can easily add:
- Email capture forms
- Newsletter signup
- Video backgrounds
- Music player
- Dark mode toggle
- Language switcher

## Browser Compatibility

✅ Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## Troubleshooting

**Profile image not showing?**
- Check the filename matches in `script.js`
- Make sure the image is in the same folder
- Try using a different image format (JPG, PNG, WebP)

**QR code not working?**
- QR code requires the page to be served over HTTP/HTTPS
- Won't work when opening HTML file directly (file://)
- Use a local server or deploy online

**Links not clickable?**
- Make sure you updated the URLs in `script.js`
- Check that JavaScript is enabled in your browser

## Performance Tips

- Compress your images (use TinyPNG or similar)
- Use WebP format for images when possible
- Keep the confetti count reasonable (default is 50)
- Minify CSS and JS for production

## Credits

Built with:
- Font Awesome for icons
- QRCode.js for QR generation
- Pure HTML, CSS, and JavaScript (no frameworks!)

## License

Free to use for personal and commercial projects.

---

## Need Help?

Check that:
1. All files are in the same folder
2. File names match exactly (case-sensitive)
3. You're viewing via HTTP (not file://)
4. JavaScript is enabled in your browser

Enjoy your custom -style website! 🎉
