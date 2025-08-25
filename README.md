# 🚀 Mohamed Gamal - Interactive Developer Portfolio

> **A Next-Generation Portfolio That Speaks for Itself**  
> Built with Next.js 15, TypeScript, and Tailwind CSS - showcasing modern web development at its finest.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

## 🌟 What Makes This Portfolio Special?

### 🎯 **The Problem It Solves**
Traditional portfolios are **boring, static, and forgettable**. They're like reading a resume on a website. This portfolio breaks that mold by creating an **immersive, interactive experience** that actually showcases your skills through the portfolio itself.

### ✨ **Core Features That Set It Apart**

#### 🎨 **Adaptive Design System**
- **Responsive Layout**: Desktop sidebar + mobile navigation dock
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Accessibility First**: WCAG 2.2 compliant with keyboard navigation and screen reader support

#### 🚀 **Interactive Project Showcase**
- **Infinite Carousel**: Smooth, touch-friendly project navigation
- **Case Study Modals**: Deep-dive into problem-solving approaches
- **Live GitHub Stats**: Real-time integration with your GitHub activity
- **Image Galleries**: High-quality project screenshots with lazy loading

#### 📊 **Dynamic Content Management**
- **Type-Safe Data**: Zod schemas ensure data integrity
- **Modular Architecture**: Easy to update projects, skills, and achievements
- **Real-time Updates**: No rebuilds needed for content changes

#### 🎭 **Advanced UI/UX Features**
- **Smooth Animations**: Framer Motion-inspired transitions
- **Scroll Spy Navigation**: Context-aware navigation highlighting
- **Intersection Observer**: Performance-optimized animations
- **Toast Notifications**: Elegant feedback system

## 🛠️ **Tech Stack Deep Dive**

### **Frontend Excellence**
```typescript
// Modern React with TypeScript
- Next.js 15 (App Router)
- React 19 (Latest features)
- TypeScript (Type safety)
- Tailwind CSS 4.1.9 (Utility-first styling)
```

### **UI Component System**
```typescript
// Radix UI + Custom Components
- 25+ Radix UI primitives
- shadcn/ui design system
- Custom animated components
- Responsive breakpoints
```

### **Performance & UX**
```typescript
// Optimized for Speed
- Image optimization with Next.js
- Lazy loading components
- Intersection Observer API
- CSS-in-JS with Tailwind
```

## 🎯 **Key Features Breakdown**

### **1. Smart Navigation System**
```typescript
// Adaptive navigation based on screen size
Desktop: Fixed sidebar with personal card
Tablet: Sticky header with profile info  
Mobile: Bottom navigation dock
```

### **2. Interactive Project Gallery**
```typescript
// Carousel with case study integration
- Infinite scroll navigation
- Modal-based case studies
- GitHub integration
- Live demo links
```

### **3. Dynamic Tech Stack**
```typescript
// Categorized skill display
- Programming Languages
- Frontend Technologies  
- Backend & APIs
- Databases
- Tools & Workflow
- Soft Skills
```

### **4. Achievement Timeline**
```typescript
// Multi-category milestones
- Certifications (with proof links)
- Awards & Recognition
- Education & Training
- Open Source Contributions
- Blog Posts
- YouTube Content
```

## 🚀 **Getting Started**

### **Prerequisites**
```bash
Node.js 18+ 
pnpm (recommended) or npm
```

### **Installation**
```bash
# Clone the repository
git clone https://github.com/mo0hamed-shoaib/loom-portfolio.git

# Navigate to project
cd loom-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### **Environment Setup**
```bash
# Create .env.local (if needed)
cp .env.example .env.local
```

## 📁 **Project Structure**

```
loom-portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── animated-section.tsx
│   ├── project-card.tsx
│   └── ...
├── data/                  # Content management
│   ├── profile.ts        # Personal info
│   ├── projects.ts       # Project showcase
│   ├── experience.ts     # Work history
│   └── milestones.ts     # Achievements
├── lib/                   # Utilities
│   ├── schemas.ts        # Zod schemas
│   ├── utils.ts          # Helper functions
│   └── github.ts         # GitHub API
└── public/               # Static assets
    ├── projects/         # Project images
    └── icons/           # Tech stack icons
```

## 🎨 **Customization Guide**

### **Update Personal Information**
```typescript
// data/profile.ts
export const profile: Profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
}
```

### **Add New Projects**
```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    slug: "project-slug",
    title: "Project Title",
    summary: "Project description...",
    stack: ["react", "typescript"],
    // ... other fields
  }
]
```

### **Modify Tech Stack**
```typescript
// data/profile.ts - techStack array
{
  name: "Technology Name",
  category: "Category",
  icon: "icon-name"
}
```

## 🌐 **Deployment**

### **Vercel (Recommended)**
```bash
# Connect your GitHub repo to Vercel
# Automatic deployments on push to main
```

### **Other Platforms**
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **shadcn/ui** for the beautiful component system
- **Radix UI** for accessible primitives
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework
- **Vercel** for seamless deployment

---

<div align="center">

**Built with ❤️ by [Mohamed Gamal](https://github.com/mo0hamed-shoaib)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mo0hamed-shoaib)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mohamed-g-shoaib/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/mo0hamed_gamal)

</div>
