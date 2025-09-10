import './App.css'
import Board from './components/Board'
import { ToastProvider } from './contexts/ToastContext'
import ToastContainer from './components/ToastContainer'

function App() {
  return (
    <ToastProvider>
      <Board />
      <ToastContainer />
    </ToastProvider>
  )
}

export default App
