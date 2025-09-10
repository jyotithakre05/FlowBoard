import { COLUMN_TITLES } from '../types';
import type { ColumnId, Task } from '../types';
import TaskCard from './TaskCard';

export interface ColumnProps {
  columnId: ColumnId;
  tasks: Task[];
  onDropTask: (taskId: string, toColumn: ColumnId) => void;
  onDelete: (taskId: string) => void;
  onMoveLeft: (taskId: string) => void;
  onMoveRight: (taskId: string) => void;
}

export function Column({ columnId, tasks, onDropTask, onDelete, onMoveLeft, onMoveRight }: ColumnProps) {
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    if (taskId) onDropTask(taskId, columnId);
  }

  const getColumnColor = (columnId: ColumnId) => {
    switch (columnId) {
      case 'todo': return { bg: 'var(--trello-gray)', accent: 'var(--trello-blue)' };
      case 'inprogress': return { bg: 'var(--trello-gray)', accent: 'var(--trello-yellow)' };
      case 'done': return { bg: 'var(--trello-gray)', accent: 'var(--trello-green)' };
      default: return { bg: 'var(--trello-gray)', accent: 'var(--trello-text-light)' };
    }
  };

  const colors = getColumnColor(columnId);

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      aria-label={COLUMN_TITLES[columnId]}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: colors.bg,
        borderRadius: 'var(--radius-lg)',
        padding: '1.2rem',
        minHeight: '40rem',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.2s ease',
        position: 'relative'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        marginBottom: '1.2rem',
        paddingBottom: '1.2rem',
        borderBottom: '0.1rem solid var(--trello-gray-darker)'
      }}>
        <div style={{
          width: '0.8rem',
          height: '0.8rem',
          borderRadius: '50%',
          background: colors.accent
        }} />
        <h2 style={{ 
          fontSize: '1.4rem', 
          fontWeight: '600',
          margin: 0,
          color: 'var(--trello-text)',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase'
        }}>
          {COLUMN_TITLES[columnId]}
        </h2>
        <div style={{
          background: 'var(--trello-gray-darker)',
          color: 'var(--trello-text-light)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.2rem 0.6rem',
          fontSize: '1.2rem',
          fontWeight: '600',
          marginLeft: 'auto',
          minWidth: '2rem',
          textAlign: 'center'
        }}>
          {tasks.length}
        </div>
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        flex: 1
      }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onMoveLeft={onMoveLeft}
            onMoveRight={onMoveRight}
          />
        ))}
      </div>
    </section>
  );
}

export default Column;


