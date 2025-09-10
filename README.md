# FlowBoard

A lightweight Kanban board application built with React + TypeScript, inspired by Trello's design and functionality.

## 🚀 Features

- **Three-Column Layout**: To Do, In Progress, and Done columns (33% each)
- **Drag & Drop**: Move tasks between columns using HTML5 drag-and-drop API
- **Task Management**: Add, move, and delete tasks with intuitive controls
- **Duplicate Prevention**: Prevents adding tasks with duplicate names
- **Toast Notifications**: User-friendly feedback for all actions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Local Storage**: Persistent data storage using browser's localStorage
- **Trello-Inspired UI**: Clean, modern interface following Trello's design patterns

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **CSS Modules** for component styling
- **HTML5 Drag & Drop API** for task movement
- **localStorage** for data persistence
- **Custom Hooks** for state management

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FlowBoard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Usage

### Adding Tasks
1. Type your task title in the "Add a card..." input field
2. Click "Add Card" or press Enter
3. Tasks are automatically added to the "To Do" column

### Moving Tasks
- **Drag & Drop**: Click and drag any task card to move it between columns
- **Arrow Buttons**: Use the ← and → buttons on each task card
- **Hover**: Action buttons appear when you hover over a task card

### Deleting Tasks
- Click the 🗑️ button on any task card to delete it
- A confirmation toast will appear

### Duplicate Prevention
- The app prevents adding tasks with the same name (case-insensitive)
- An error toast will appear if you try to add a duplicate task

## 🎨 Design

FlowBoard follows Trello's design principles:
- **Trello Blue Background** (#0079bf)
- **Clean White Cards** with subtle shadows
- **Color-coded Columns** with visual indicators
- **Minimalist Interface** focused on functionality
- **Responsive Layout** that works on all devices

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Board.tsx       # Main board container
│   ├── Column.tsx      # Individual column component
│   ├── TaskCard.tsx    # Task card component
│   ├── AddTaskForm.tsx # Add task form
│   ├── Button.tsx      # Reusable button component
│   ├── Toast.tsx       # Toast notification component
│   └── ToastContainer.tsx # Toast container
├── contexts/           # React contexts
│   └── ToastContext.tsx # Toast state management
├── hooks/              # Custom hooks
│   └── useBoardState.ts # Board state management
├── types.ts            # TypeScript type definitions
├── storage.ts          # localStorage utilities
└── index.css           # Global styles
```

## 🔧 Development

### Code Quality
- **TypeScript**: Strict typing throughout the application
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **CSS Modules**: Scoped component styles

### Best Practices
- **Component Separation**: Presentational vs Container components
- **Custom Hooks**: Reusable logic extraction
- **Memoization**: Performance optimization with React.memo and useCallback
- **Accessibility**: ARIA labels and keyboard navigation
- **Responsive Design**: Mobile-first approach

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository.