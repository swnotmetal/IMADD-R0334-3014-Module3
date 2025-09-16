# Ionic React App

A cross-platform mobile practice application built with Ionic React, featuring responsive design and native-like user experience.

## Features

- Cross-platform compatibility (iOS, Android, Web)
- Responsive side menu navigation
- Modern React components with TypeScript
- Built-in theming and styling
- Routing with React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:8100`

### Build

Build for production:
```bash
npm run build
```

### Testing

Run unit tests:
```bash
npm test
```

Run E2E tests:
```bash
npm run cypress:open
```

## Tech Stack

- **Ionic Framework** - UI components and native functionality
- **React** - Frontend library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Capacitor** - Native runtime
- **Cypress** - E2E testing

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages/screens
└── theme/         # Global styling and themes
```

## License

This project is licensed under the MIT License.