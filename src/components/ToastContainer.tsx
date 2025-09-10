import { useToast } from '../contexts/ToastContext';
import Toast from './Toast';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          style={{ pointerEvents: 'auto' }}
        >
          <Toast
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={removeToast}
          />
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
