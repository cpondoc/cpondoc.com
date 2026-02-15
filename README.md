# cpondoc.com

A personal website built with Next.js, featuring a blog and modern UI components.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Markdown Processing:** [remark](https://github.com/remarkjs/remark) and [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Icons:** [Lucide React](https://lucide.dev/)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cpondoc.com
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you make changes to the code.

## Available Scripts

- `npm run dev` - Starts the development server on `http://localhost:3000`
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server (requires `npm run build` first)
- `npm run lint` - Runs ESLint to check for code quality issues

## Project Structure

```
cpondoc.com/
├── app/                  # Next.js App Router pages
│   ├── api/             # API routes
│   ├── writing/         # Blog/writing section
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── posts/               # Markdown blog posts
├── public/              # Static assets
├── styles/              # Global styles
└── package.json         # Project dependencies
```

## Adding Blog Posts

Blog posts are stored as Markdown files in the `posts/` directory. To add a new post:

1. Create a new `.md` file in the `posts/` directory
2. Add front matter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2026-02-14"
---

Your post content here...
```

3. The post will automatically appear in the writing section

## Building for Production

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Deployment

This Next.js application can be deployed on various platforms:

- **[Vercel](https://vercel.com/)** (recommended) - Zero configuration deployment
- **[Netlify](https://www.netlify.com/)**
- **[AWS](https://aws.amazon.com/)**
- **[Google Cloud](https://cloud.google.com/)**
- Any platform that supports Node.js

For Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

Private project.
