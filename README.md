# Transparent Nav React

A modern web application built with **TanStack Start**, **React**, **TypeScript**, and **Tailwind CSS**. This project provides a fully-featured UI component library with routing capabilities.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- **UI Library**: React with [shadcn/ui](https://ui.shadcn.com/) components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd transparent-nav-react
```

2. Install dependencies:
```bash
bun install
# or with npm/yarn
npm install
# yarn install
```

### Development

Start the development server:
```bash
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
bun run build
# or
npm run build
```

Preview the production build:
```bash
bun run preview
```

### Other Commands

- **Lint**: `bun run lint` - Run ESLint
- **Format**: `bun run format` - Format code with Prettier

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable shadcn/ui components
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── routes/             # File-based routing (TanStack Router)
│   ├── __root.tsx      # Root layout wrapping all pages
│   ├── index.tsx       # Home page
│   └── ...
├── assets/             # Static assets
├── styles.css          # Global styles
├── router.tsx          # Router configuration
├── server.ts           # Server configuration
└── start.ts            # Application entry point
```

## Routing

This project uses **file-based routing** with TanStack Router. Every `.tsx` file in `src/routes/` is automatically a route.

### Routing Conventions

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional) |
| `files/$.tsx` | `/files/*` (splat/catch-all) |
| `__root.tsx` | App shell (wraps all pages) |

For more information, see [src/routes/README.md](src/routes/README.md).

## Components

The project includes a comprehensive set of UI components from shadcn/ui:

- **Layout**: Sidebar, Card, Separator, ScrollArea
- **Navigation**: NavigationMenu, Breadcrumb, Pagination, Menubar
- **Buttons**: Button, ToggleGroup, Toggle
- **Forms**: Input, Textarea, Select, Checkbox, RadioGroup, Switch, Label
- **Data Display**: Table, Badge, Avatar, Progress, Skeleton
- **Modals**: Dialog, Drawer, AlertDialog, Popover, HoverCard, ContextMenu, Sheet
- **Other**: Accordion, Tabs, Collapsible, Carousel, Calendar, CommandPalette, Tooltip

## Environment Variables

Create a `.env.local` file in the root directory with any required environment variables:

```env
# Example
VITE_API_URL=http://localhost:3000
```

## Scripts Details

- `dev` - Start development server with hot module replacement
- `build` - Create optimized production build
- `build:dev` - Build for development mode
- `preview` - Preview production build locally
- `lint` - Check code quality with ESLint
- `format` - Format code with Prettier

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

This project is private. All rights reserved.

## Support

For issues or questions, please open an issue in the repository.
