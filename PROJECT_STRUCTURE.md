# Project Structure

This document outlines the complete file structure and organization of the FlowBoard project.

## 📁 Root Directory

```
FlowBoard/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── assets/            # Static assets
│   ├── App.tsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   ├── types.ts           # TypeScript definitions
│   └── storage.ts         # Storage utilities
├── dist/                  # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── index.html             # HTML template
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TS config
├── tsconfig.node.json     # Node-specific TS config
├── vite.config.ts         # Vite configuration
├── README.md              # Project documentation
├── PROJECT_STRUCTURE.md   # This file
├── ARCHITECTURE.md        # Architecture documentation
└── CHAT_HISTORY.md        # Development history
```

## 🧩 Components Directory

```
src/components/
├── Board.tsx              # Main board container component
├── Column.tsx             # Individual column component
├── TaskCard.tsx           # Task card component
├── TaskCard.module.css    # TaskCard-specific styles
├── AddTaskForm.tsx        # Add task form component
├── Button.tsx             # Reusable button component
├── Toast.tsx              # Toast notification component
└── ToastContainer.tsx     # Toast container component
```

### Component Descriptions

#### Board.tsx
- **Purpose**: Main container component that orchestrates the entire board
- **Responsibilities**: 
  - Manages board state through useBoardState hook
  - Renders the three-column layout
  - Handles task movement logic
- **Props**: None (uses context and hooks)
- **State**: Managed via useBoardState hook

#### Column.tsx
- **Purpose**: Renders individual columns (To Do, In Progress, Done)
- **Responsibilities**:
  - Displays column header with task count
  - Handles drag-and-drop events
  - Renders task cards
- **Props**: 
  - `columnId`: Column identifier
  - `tasks`: Array of tasks in the column
  - `onDropTask`: Callback for dropping tasks
  - `onDelete`: Callback for deleting tasks
  - `onMoveLeft/Right`: Callbacks for moving tasks

#### TaskCard.tsx
- **Purpose**: Individual task card component
- **Responsibilities**:
  - Displays task title
  - Provides action buttons (move left/right, delete)
  - Handles drag events
- **Props**:
  - `task`: Task object
  - `onDelete`: Delete callback
  - `onMoveLeft/Right`: Move callbacks
- **Styling**: Uses CSS Modules for scoped styles

#### AddTaskForm.tsx
- **Purpose**: Form for adding new tasks
- **Responsibilities**:
  - Input validation
  - Form submission
  - Clearing form after submission
- **Props**:
  - `onAdd`: Callback for adding tasks

#### Button.tsx
- **Purpose**: Reusable button component
- **Features**:
  - Multiple variants (primary, secondary, danger, ghost)
  - Multiple sizes (sm, md, lg)
  - Forward ref support
  - TypeScript generics

#### Toast.tsx
- **Purpose**: Individual toast notification
- **Features**:
  - Auto-dismiss functionality
  - Multiple types (success, error, info, warning)
  - Smooth animations
- **Props**:
  - `id`: Unique identifier
  - `message`: Toast message
  - `type`: Toast type
  - `duration`: Auto-dismiss duration
  - `onClose`: Close callback

#### ToastContainer.tsx
- **Purpose**: Container for managing multiple toasts
- **Features**:
  - Fixed positioning
  - Stack management
  - Z-index handling

## 🎣 Hooks Directory

```
src/hooks/
└── useBoardState.ts       # Board state management hook
```

### useBoardState.ts
- **Purpose**: Centralized state management for the board
- **Features**:
  - Task CRUD operations
  - Duplicate validation
  - Toast notifications
  - localStorage persistence
- **Returns**:
  - `state`: Current board state
  - `addTask`: Function to add tasks
  - `deleteTask`: Function to delete tasks
  - `moveTask`: Function to move tasks

## 🏗️ Contexts Directory

```
src/contexts/
└── ToastContext.tsx       # Toast state management
```

### ToastContext.tsx
- **Purpose**: Global state management for toast notifications
- **Features**:
  - Toast queue management
  - Add/remove toast functions
  - Context provider component
- **Exports**:
  - `ToastProvider`: Context provider
  - `useToast`: Hook for accessing toast functions

## 📝 Types and Utilities

### types.ts
- **Purpose**: TypeScript type definitions
- **Exports**:
  - `ColumnId`: Union type for column identifiers
  - `Task`: Task object interface
  - `BoardState`: Board state interface
  - `COLUMN_TITLES`: Column title mapping
  - `INITIAL_BOARD_STATE`: Default board state

### storage.ts
- **Purpose**: localStorage utilities
- **Functions**:
  - `loadBoardState()`: Load state from localStorage
  - `saveBoardState()`: Save state to localStorage
- **Features**:
  - Error handling
  - Default state fallback

## 🎨 Styling Architecture

### Global Styles (index.css)
- CSS custom properties for theming
- Trello-inspired color palette
- Responsive design utilities
- Button component styles
- Grid layout utilities

### Component Styles
- **CSS Modules**: Scoped component styles
- **Inline Styles**: Dynamic styling for complex layouts
- **CSS Custom Properties**: Consistent theming

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 48rem (768px)
- **Tablet**: 48.1rem - 76.8rem (769px - 1229px)
- **Desktop**: > 76.9rem (1230px+)

### Layout Behavior
- **Mobile**: Single column stack
- **Tablet**: Two-column grid
- **Desktop**: Three-column grid

## 🔧 Build Configuration

### Vite Configuration
- React plugin
- TypeScript support
- CSS Modules support
- Development server
- Production optimization

### TypeScript Configuration
- Strict mode enabled
- React JSX support
- Module resolution
- Path mapping

## 📦 Dependencies

### Production Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0

### Development Dependencies
- `@types/react`: ^18.2.0
- `@types/react-dom`: ^18.2.0
- `@vitejs/plugin-react`: ^4.0.0
- `typescript`: ^5.0.0
- `vite`: ^5.0.0

## 🚀 Scripts

- `npm run start`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
