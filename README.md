# Web Awesome 3x Boilerplate

A React application demonstrating [Web Awesome 3x](https://webawesome.com/) components. This project integrates Web Awesome's component library in a React application.

## Features

- Animations (bounce, jello, heartbeat, flip)
- Components (buttons, callouts, cards)
- Font Awesome icons with different variants and styling
- Interactive elements with React state
- Responsive layouts

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Web Awesome Components Used

- `WaIcon` - Font Awesome icons with variants
- `WaButton`
- `WaCallout` - Alert-style callouts
- `WaCard` - Content cards with media slots
- `WaAnimation`

## 🛠️ Built With

- **[Web Awesome 3](https://webawesome.com/)** - Component library and icons
- **[React 19](https://react.dev/)** - UI framework
- **[Vite](https://vite.dev/)** - Build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React Router](https://reactrouter.com/)** - Client-side routing

## Learning More

- [Web Awesome Documentation](https://webawesome.com/docs) - Component documentation
- [Icon Library](https://webawesome.com/icons) - Browse available icons
- [React Integration Guide](https://webawesome.com/docs/frameworks/react) - React usage
- [Component Examples](https://webawesome.com/components) - Component demos

## Project Structure

```text
src/
├── components/          # Reusable React components
│   └── Navigation.tsx   # App navigation with Web Awesome icons
├── pages/              # Route-based pages
│   ├── Home.tsx        # Main demo page with Web Awesome showcase
│   └── About.tsx       # About page
└── App.tsx             # Main app component with routing
```

## Customization

Web Awesome components can be customized with:

- CSS Custom Properties for theming
- Variant props for different styles
- Slot content for custom content areas
- Font Awesome icon variants (solid, regular, light, brand)

Visit [webawesome.com](https://webawesome.com/) for more information.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Server Configuration (Recommended for React Router)
Configure your server to serve index.html for all routes. This is called "client-side routing":

Check your server configuration
```
curl -I https://yoursite.com 2>/dev/null | grep -i server
```

For Apache (.htaccess):
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

For Nginx:
```
try_files $uri $uri/ /index.html;
```

For Netlify (_redirects file):
```
/*    /index.html   200
```
