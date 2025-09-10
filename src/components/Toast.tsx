import { useEffect, useState } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({ id, message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-close after duration
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  function handleClose() {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match transition duration
  }

  const getToastStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      padding: '1.6rem 2rem',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      background: 'white',
      border: '0.1rem solid var(--gray-200)',
      minWidth: '32rem',
      maxWidth: '48rem',
      transform: isVisible && !isLeaving ? 'translateX(0)' : 'translateX(100%)',
      opacity: isVisible && !isLeaving ? 1 : 0,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1000,
    };

    switch (type) {
      case 'success':
        return {
          ...baseStyles,
          borderLeft: '0.4rem solid var(--success-500)',
        };
      case 'error':
        return {
          ...baseStyles,
          borderLeft: '0.4rem solid var(--danger-500)',
        };
      case 'warning':
        return {
          ...baseStyles,
          borderLeft: '0.4rem solid var(--warning-500)',
        };
      default:
        return {
          ...baseStyles,
          borderLeft: '0.4rem solid var(--primary-500)',
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div style={getToastStyles()}>
      <div style={{
        fontSize: '2rem',
        flexShrink: 0
      }}>
        {getIcon()}
      </div>
      <div style={{
        flex: 1,
        fontSize: '1.4rem',
        fontWeight: '500',
        color: 'var(--gray-800)',
        lineHeight: '1.5'
      }}>
        {message}
      </div>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.8rem',
          color: 'var(--gray-400)',
          cursor: 'pointer',
          padding: '0.4rem',
          borderRadius: 'var(--radius-sm)',
          transition: 'all 0.2s ease',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--gray-100)';
          e.currentTarget.style.color = 'var(--gray-600)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'none';
          e.currentTarget.style.color = 'var(--gray-400)';
        }}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
