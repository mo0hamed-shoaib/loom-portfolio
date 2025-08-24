# 🛠️ Tech Stack Guide

Simple guide to manage tech stack and icons in your portfolio.

## 📁 Files to Edit

| What to Change | File |
|---|---|
| **Project tech stack** | `data/projects.ts` |
| **Main skills section** | `data/profile.ts` |
| **Tech icons** | `components/project-card.tsx` |

## 🎯 Quick Actions

### 1. Change Project Tech Stack
**File:** `data/projects.ts`

```typescript
{
  title: "My Project",
  stack: ["react", "typescript", "nodejs"], // ← Edit this
}
```

### 2. Change Main Skills
**File:** `data/profile.ts`

```typescript
techStack: [
  { name: "React", category: "Frontend", icon: "react" },
  // Add new: { name: "Vue.js", category: "Frontend", icon: "vue" },
  // Remove: Comment out or delete the line
]
```

### 3. Add New Tech Icon
**File:** `components/project-card.tsx`

```typescript
const getTechIcon = (tech: string): string | null => {
  const iconMap: Record<string, string> = {
    // Add new mapping:
    vue: "/icons/frontend/vue.svg",
  }
  return iconMap[tech.toLowerCase()] || null
}
```

## 📋 Available Icons

| Tech | Icon Path |
|---|---|
| **Frontend** | |
| React | `/icons/frontend/react.svg` |
| TypeScript | `/icons/programming-languages/typescript.svg` |
| Tailwind | `/icons/frontend/tailwind.svg` |
| **Backend** | |
| Node.js | `/icons/backend/nodejs.svg` |
| Express | `/icons/backend/express.svg` |
| **Database** | |
| MongoDB | `/icons/database/mongodb.svg` |

## ⚡ Common Tasks

### Add New Technology
1. Add to `data/profile.ts` (main skills)
2. Add to `data/projects.ts` (project tech)
3. Add icon mapping in `components/project-card.tsx`

### Remove Technology
1. Remove from `data/profile.ts`
2. Remove from `data/projects.ts`

### Add New Icon
1. Put SVG file in `public/icons/`
2. Add mapping in `components/project-card.tsx`

---

**💡 Tip:** Use lowercase for tech names in projects, PascalCase for display names.
