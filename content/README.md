# Content Directory

This directory contains markdown files for static pages on the site.

## Files

### home.md

The content for the home page bio section. Edit this file to update your bio without touching React code.

**Format:**
```markdown
---
title: Your Name
description: Site description
---

Your bio content here with [markdown links](https://example.com).
```

**Features:**
- Supports standard markdown syntax
- Links are automatically styled to match the site theme
- Rendered using the same markdown processor as blog posts
- Changes are reflected after rebuilding the site

## Adding New Pages

To add content for a new page:

1. Create a new `.md` file (e.g., `about.md`)
2. Add frontmatter with metadata
3. Write your content in markdown
4. Use `getPageContent('about')` in your component to load it

Example:
```typescript
import { getPageContent } from "@/lib/mdUtils"

export default function About() {
  const content = getPageContent("about")
  return (
    <div dangerouslySetInnerHTML={{ __html: content.content }} />
  )
}
```
