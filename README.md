# Portfolio Website

A clean and modern portfolio website built with HTML, CSS, and JavaScript. This website is designed to be easily customizable and deployable to GitHub Pages.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Typing effect animation
- Skills section with tags
- Project showcase grid
- Experience timeline
- Contact section with social links
- Modern and clean UI

## How to Deploy

1. Create a new repository on GitHub named `yourusername.github.io`
2. Clone this repository to your local machine
3. Push these files to your new repository
4. Go to repository settings > Pages
5. Select the main branch as the source
6. Your site will be published at `https://yourusername.github.io`

## How to Customize

### Basic Information
1. Open `index.html` and update:
   - Your name
   - Your title/role
   - About section text
   - Skills
   - Social media links
   - Contact information

### Styling
1. Open `styles.css` to customize:
   - Colors (modify the variables in `:root`)
   - Fonts
   - Spacing
   - Layout

### Projects
1. In the `index.html` file, add your projects to the project grid section:
```html
<div class="project-grid">
    <div class="project-card">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-links">
            <a href="project-link">View Project</a>
            <a href="github-link">GitHub</a>
        </div>
    </div>
</div>
```

### Experience
1. Add your experience entries to the timeline section in `index.html`:
```html
<div class="timeline">
    <div class="timeline-item">
        <h3>Company Name</h3>
        <p class="timeline-date">Date Range</p>
        <p>Description of your role and achievements</p>
    </div>
</div>
```

## Maintenance

To update your portfolio:
1. Make changes to the files locally
2. Commit and push to GitHub
3. Changes will automatically be deployed to your site

## Need Help?

If you need any help with customization or deployment, feel free to:
1. Open an issue in the repository
2. Contact me through the provided contact information
3. Check the GitHub Pages documentation 