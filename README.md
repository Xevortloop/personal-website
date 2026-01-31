# Portfolio Website

Modern dark-themed portfolio website built with SvelteKit, showcasing FiveM development work at Noctis.id.

## 🚀 Features

- ✨ Modern dark theme with premium aesthetics
- 🎮 FiveM developer portfolio
- 🏢 Noctis.id affiliation section
- 💼 Skills showcase
- 📧 Contact section with Discord & Email
- 📱 Fully responsive design
- 🎨 Smooth animations and micro-interactions
- 🌐 Deployed on GitHub Pages with custom domain

## 🛠️ Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Vanilla CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Easy Configuration

All content can be easily customized by editing `src/lib/config.js`:

```javascript
export const config = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline",
    bio: "Your bio..."
  },
  contact: {
    discord: { username: "@username", tag: "user#1234" },
    email: { address: "your@email.com" }
  },
  skills: [...],
  projects: [...]
}
```

## 🎨 Theme Customization

Customize colors and styles in `src/lib/theme.js`:

```javascript
export const theme = {
  colors: {
    accent: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      // ...
    }
  }
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `personal-website`
3. Visibility: **Private** (requires GitHub Pro)
4. Don't initialize with README
5. Click "Create repository"

### 2. Push Code to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: **GitHub Actions**
3. The workflow will automatically deploy on every push to main

### 4. Configure Custom Domain

#### Update DNS Settings

Add these DNS records at your domain provider:

**Option A: A Records (recommended)**
```
Type: A
Name: @ (or your subdomain)
Value: 185.199.108.153
```
Add 3 more A records with:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Option B: CNAME Record**
```
Type: CNAME
Name: xev (or your subdomain)
Value: YOUR_USERNAME.github.io
```

#### Verify Domain in GitHub

1. Go to repository Settings → Pages
2. Custom domain: `xev.my.id`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)
5. Enable "Enforce HTTPS" once DNS is verified

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Hero.svelte       # Hero section with logo
│   │   ├── About.svelte      # About & Noctis.id affiliation
│   │   ├── Skills.svelte     # Skills showcase
│   │   ├── Projects.svelte   # Projects (commented out)
│   │   ├── Contact.svelte    # Contact with Discord & Email
│   │   └── Footer.svelte     # Footer
│   ├── config.js             # ⚙️ Main configuration file
│   └── theme.js              # 🎨 Theme configuration
├── routes/
│   ├── +layout.svelte        # Root layout with SEO
│   └── +page.svelte          # Main page
└── app.css                   # Global styles

static/
├── logo.png                  # Your logo
├── CNAME                     # Custom domain config
└── .nojekyll                 # Disable Jekyll

.github/
└── workflows/
    └── deploy.yml            # Auto-deployment workflow
```

## 🎯 Adding Content

### Add a New Skill

Edit `src/lib/config.js`:

```javascript
skills: [
  {
    name: "Skill Name",
    description: "Skill description",
    icon: "🎮"
  }
]
```

### Add a Project

Edit `src/lib/config.js`:

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    image: "/projects/image.jpg",
    tags: ["Lua", "FiveM"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: false
  }
]
```

## 🔧 Troubleshooting

### GitHub Pages not deploying?

1. Check Actions tab for workflow errors
2. Ensure GitHub Pages is enabled in Settings
3. Verify repository is public or you have GitHub Pro

### Custom domain not working?

1. Wait 24-48 hours for DNS propagation
2. Verify DNS records are correct
3. Check GitHub Pages settings for DNS errors

### Build errors?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, contact:
- Discord: @xevort_ / xev#7141
- Email: xevortloop@gmail.com

---

Built with ❤️ using SvelteKit
