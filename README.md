# Lab 3 Helper - Ionic React Movie App

This codebase is to help you understand and follow the Lab 3 task. During the Lab 3 tutorial video, the instructor doesn't provide the complete original code and there are several errors in his implementation. He also made major changes and add/remove properties from TypeScript interfaces without clear explanation. 

I built this codebase directly from the Lab 2 results, so you don't need to follow everything I've done here - things like the login page and additional navigation are just extras for a more complete app experience.
**I strongly suggest you read the comments and type in the codes with your own hands instead of copying and pasting**

## Some Learning notes

### Ionic React Basics
Ionic React combines the power of React with Ionic's mobile-optimized UI components. Think of it as getting native-looking mobile interfaces without writing native code. The components like `IonPage`, `IonHeader`, and `IonContent` are pre-built blocks that handle mobile UI patterns for you.

### TypeScript Integration
We're using TypeScript to catch errors before they happen. The interfaces like `SearchResult` and `SearchType` define the shape of our data, making it easier to work with API responses and preventing those annoying runtime errors when you misspell a property name.

### The Workflow
1. **API Hook** - `useAPI.tsx` handles all the movie database calls
2. **State Management** - React hooks manage loading states, search results, and errors
3. **Navigation** - React Router handles moving between pages
4. **UI Components** - Ionic components provide the mobile interface

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Basic understanding of React and TypeScript

### Quick Setup
```bash
# Clone and install
npm install

# Start development server
npm start
```

Your app runs at `http://localhost:8100`

## Key Files to Focus On

```
src/
├── hooks/
│   └── useAPI.tsx         # API logic and TypeScript interfaces
├── pages/
│   ├── Page1.tsx          # Main search functionality
│   ├── Details.tsx        # Movie detail view
│   └── Menu.tsx           # Navigation structure
└── App.tsx                # Route configuration
```

## Common Issues and Solutions

**Loading Never Stops**: Make sure you call `dismiss()` in both success and error cases
**Search Results Don't Show**: Check that you're accessing `result.Search` not just `result`
**TypeScript Errors**: Verify your interfaces match the actual API response structure
**Routing Problems**: Ensure all paths start with `/` for absolute routing

**Remember to always have your browser console open when coding/debugging**

## Notes for Lab 3

The main focus should be on understanding how the search functionality works, how TypeScript interfaces define data structures, and how Ionic components create mobile-friendly interfaces. The login and extra pages are just bonus features to make this feel like a real app.

Remember, the goal is learning the concepts, not copying code line by line. Use this as a reference to understand the patterns and build your own implementation.