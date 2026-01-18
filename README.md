# Bhor Blog - Stripe.dev Inspired Design

A minimalist blog website inspired by Stripe.dev's beautiful design, built with vanilla HTML, CSS, and JavaScript.

## 🎨 Design System

Based on a detailed analysis of Stripe.dev, this blog replicates:
- Clean, minimal aesthetic
- Responsive typography with fluid scaling
- List-based feed (not card-based)
- Inline expansion of posts
- Backdrop blur navigation
- Teal selection accents

## 📁 Project Structure

```
blog/
├── index.html              # Main homepage
├── styles.css              # Complete styling with Stripe.dev exact values
├── script.js               # Interactive functionality
├── stripe-dev-analysis.md  # Detailed UI/UX analysis
├── stripe-dev-design-tokens.md  # Complete design tokens
└── fonts/                  # Place Sohne font files here
    ├── Sohne.woff2
    ├── Sohne-BuchKursiv.woff2
    ├── SohneMono-Buch.woff2
    └── SohneMono-Extraleicht.woff2
```

## 🔤 Typography

### Fonts Used
- **sohne-var** - Primary font for headings, body text, UI
- **sohne-mono** - Navigation, labels, dates (uppercase)

### Font Weights
- **100** - Extraleicht (Extra Light)
- **300** - Buch (Book/Light)
- **400** - Regular
- **500** - Medium (for buttons)

### Responsive Text Sizes
All text scales fluidly using Stripe.dev's exact `calc()` formulas:

- **Hero**: 80px → 170px (mobile to desktop)
- **Section Headings**: 20px → 43px
- **Feed Item Titles**: 20px → 28px
- **Body Text**: 14px → 21px
- **Labels/Nav**: 12px (fixed)

## 🎨 Color Palette

### Primary Colors
- **Background**: `#F6F4F9` (light purple-gray) / `#eaeaea` (Stripe's)
- **Text**: `#1e1e1e` (near black)
- **Accent**: `#00D4AA` (teal - for selection)
- **Highlight**: `#c4e817` (yellow-green - for text selection)

### UI Colors
- **Borders**: `#1e1e1e44` (semi-transparent black)
- **Inactive**: `#8d8d8d` (medium gray)
- **Button**: `#1e1e1e11` (very light gray)

### Badge Colors
- **ARTICLE**: White bg, black text, gray border
- **ESSAY**: Black bg, white text

## 🧩 Key Components

### 1. Navigation Bar
- **Position**: Fixed top
- **Height**: 60px
- **Effect**: Backdrop blur (10px)
- **Background**: `rgba(246, 244, 249, 0.8)`
- **Font**: Sohne Mono, 12px, uppercase

### 2. Hero Section
- **Title**: 80-170px (responsive)
- **Font Weight**: 300 (Light)
- **Line Height**: 80-84%
- **Letter Spacing**: -0.07em
- **Decorative Elements**: "+" symbols scattered
- **Min Height**: 60vh

### 3. Feed Section
- **Layout**: Two-column (280px sidebar + flexible content)
- **Display**: List format (not cards)
- **Expansion**: Inline with teal border
- **Active Border**: 2px solid `#00D4AA`
- **Border Radius**: 12px when active

### 4. Feed Items
- **Layout**: Horizontal (marker + date + title + badge + expand)
- **Padding**: 24px vertical
- **Border**: 1px solid bottom
- **Transition**: 80ms for active state
- **Active Background**: `rgba(0, 212, 170, 0.02)`

### 5. Buttons
- **Padding**: 10px 20px 12px
- **Border Radius**: 20px
- **Border**: 1px solid black
- **Font Size**: 18px
- **Font Weight**: 500
- **Letter Spacing**: -0.72px
- **Hover**: Inverts (bg becomes text color, text becomes bg)

### 6. Filters Sidebar
- **Width**: 280px
- **Position**: Sticky (top: 60px + space)
- **Collapsible**: Sections can expand/collapse
- **Icons**: Emoji-based (📁)

## 📐 Spacing System

Based on 8px grid:
- **space-4**: 16px
- **space-6**: 24px
- **space-8**: 32px
- **space-12**: 48px
- **space-16**: 64px
- **space-24**: 96px

## ⚡ Interactive Features

### Implemented
- ✅ Feed item expansion (click "+")
- ✅ Filter collapse/expand
- ✅ Clear all filters
- ✅ Sort buttons (visual state)
- ✅ Floating "+" decorations
- ✅ Smooth hover transitions
- ✅ Backdrop blur navigation
- ✅ Active state management

### To Implement
- ⏳ Actual filtering logic
- ⏳ Actual sorting logic
- ⏳ Article page
- ⏳ Search functionality
- ⏳ RSS feed
- ⏳ Content management

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop Small */
@media (min-width: 960px) { }

/* Desktop Large */
@media (min-width: 1728px) { }
```

### Key Responsive Changes
- **Hero font**: 48px on mobile
- **Section titles**: 32px on mobile
- **Layout**: Single column on < 1024px
- **Filters**: Collapsed panel on mobile
- **Navigation**: Simplified spacing on < 768px

## 🚀 Setup Instructions

### 1. Add Fonts
Place Sohne font files in `/fonts/` directory:
- `Sohne.woff2` (variable font)
- `Sohne-BuchKursiv.woff2` (italic)
- `SohneMono-Buch.woff2` (300 weight)
- `SohneMono-Extraleicht.woff2` (100 weight)

### 2. Open in Browser
```bash
# Simple HTTP server
python -m http.server 8000
# or
npx serve
```

Navigate to `http://localhost:8000`

### 3. Customize Content
Edit `index.html` to add your blog posts:
- Update feed items
- Change hero text
- Modify navigation links
- Update footer content

## 🎯 Design Principles from Stripe.dev

1. **Minimalism**: Remove everything unnecessary
2. **Typography-First**: Let text breathe with generous spacing
3. **Fluid Scaling**: Text sizes adapt smoothly to viewport
4. **Subtle Interactions**: Fast, smooth transitions (80-200ms)
5. **List > Cards**: Information density over decoration
6. **Monospace Labels**: Technical precision with mono font
7. **Light Font Weights**: 300 weight for most content
8. **Tight Line Heights**: 80-100% for headings
9. **Negative Letter Spacing**: -0.03em to -0.07em
10. **Inline Expansion**: No navigation, just expand in place

## 📊 Performance Optimizations

- **Font Display**: Swap/Block for optimal loading
- **Backdrop Filter**: Hardware accelerated
- **Transitions**: Only on transform/opacity when possible
- **Sticky Positioning**: For filters sidebar
- **CSS Custom Properties**: For easy theming
- **Minimal JavaScript**: Vanilla JS, no frameworks

## 🔧 Browser Support

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support (backdrop-filter requires -webkit prefix)
- **Mobile**: ✅ Responsive design

## 📝 Content Structure

### Feed Item Format
```html
<article class="feed-item">
  <div class="feed-item-header">
    <span class="feed-item-marker">■</span>
    <time class="feed-item-date">YYYY.MM.DD</time>
    <h3 class="feed-item-title">Title</h3>
    <span class="badge badge-article">ARTICLE</span>
    <button class="feed-item-expand">+</button>
  </div>
  <div class="feed-item-content">
    <!-- Expanded content -->
  </div>
</article>
```

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `:root`:
```css
:root {
  --background: #F6F4F9;
  --fontColor: #1e1e1e;
  --accent-teal: #00D4AA;
  --highlightColor: #c4e817;
}
```

### Add New Badge Types
```css
.badge-newtype {
  background: #color;
  color: #color;
  border: 1px solid #color;
}
```

### Adjust Spacing
Modify space values:
```css
:root {
  --space-custom: 40px;
}
```

## 📚 Documentation Files

1. **stripe-dev-analysis.md** - Complete UI/UX breakdown
2. **stripe-dev-design-tokens.md** - All design tokens and CSS
3. **README.md** - This file

## 🙏 Credits

- **Design Inspiration**: [Stripe.dev](https://stripe.dev)
- **Fonts**: Sohne by Klim Type Foundry
- **Built by**: Omkar Bhor for bhor.blog

## 📄 License

This is a personal project inspired by Stripe.dev's design. The design patterns are analyzed and recreated for educational purposes.

---

**Built with ❤️ and attention to detail**
