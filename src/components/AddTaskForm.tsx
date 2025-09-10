import { useState, useCallback } from 'react';
import { Button } from './Button';

export interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onAdd(trimmedTitle);
      setTitle('');
    }
  }, [title, onAdd]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: 'flex', 
      gap: '1.2rem', 
      marginBottom: '0',
      alignItems: 'stretch',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <input
          value={title}
          onChange={handleInputChange}
          placeholder="Add a card..."
          style={{ 
            width: '100%',
            padding: '1.2rem 1.6rem',
            borderRadius: 'var(--radius-md)',
            border: '0.1rem solid var(--trello-gray-darker)',
            fontSize: '1.4rem',
            fontWeight: '400',
            background: 'var(--trello-white)',
            color: 'var(--trello-text)',
            boxShadow: 'none',
            transition: 'all 0.2s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--trello-blue)';
            e.target.style.boxShadow = '0 0 0 0.2rem rgba(0, 121, 191, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--trello-gray-darker)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>
      <Button 
        type="submit" 
        variant="primary"
        size="md"
        style={{ 
          minWidth: '8rem',
          background: 'var(--trello-green)',
          color: 'var(--trello-white)',
          border: 'none'
        }}
      >
        Add Card
      </Button>
    </form>
  );
}

export default AddTaskForm;


