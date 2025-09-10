import { memo, useCallback } from 'react';
import type { Task } from '../types';
import { Button } from './Button';
import styles from './TaskCard.module.css';

export interface TaskCardProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onMoveLeft: (taskId: string) => void;
  onMoveRight: (taskId: string) => void;
}

export const TaskCard = memo<TaskCardProps>(({ task, onDelete, onMoveLeft, onMoveRight }) => {
  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
  }, [task.id]);

  const handleMoveLeft = useCallback(() => {
    onMoveLeft(task.id);
  }, [onMoveLeft, task.id]);

  const handleMoveRight = useCallback(() => {
    onMoveRight(task.id);
  }, [onMoveRight, task.id]);

  const handleDelete = useCallback(() => {
    onDelete(task.id);
  }, [onDelete, task.id]);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={styles.taskCard}
    >
      <div className={styles.taskTitle}>
        {task.title}
      </div>
      <div className={styles.actionButtons}>
        <Button
          variant="secondary"
          onClick={handleMoveLeft}
          aria-label="Move left"
        >
          ←
        </Button>
        <Button
          variant="secondary"
          onClick={handleMoveRight}
          aria-label="Move right"
        >
          →
        </Button>
        <Button
          variant="danger"
          onClick={handleDelete}
          aria-label="Delete task"
        >
          🗑️
        </Button>
      </div>
    </div>
  );
});

export default TaskCard;


