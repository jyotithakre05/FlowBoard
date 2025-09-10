import { useCallback, useEffect, useMemo, useState } from 'react';
import type { BoardState, ColumnId, Task } from '../types';
import { loadBoardState, saveBoardState } from '../storage';
import { useToast } from '../contexts/ToastContext';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useBoardState() {
  const [state, setState] = useState<BoardState>(() => loadBoardState());
  const { addToast } = useToast();

  useEffect(() => {
    saveBoardState(state);
  }, [state]);

  const addTask = useCallback((title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    
    // Check for duplicate task names across all columns before updating state
    const allTasks = [...state.todo, ...state.inprogress, ...state.done];
    const isDuplicate = allTasks.some(task => 
      task.title.toLowerCase() === trimmed.toLowerCase()
    );
    
    if (isDuplicate) {
      addToast(`Task "${trimmed}" already exists. Please choose a different name.`, 'error');
      return; // Don't add the task
    }
    
    // Add the task and show success toast
    const newTask: Task = { id: generateId(), title: trimmed, columnId: 'todo' };
    setState(prev => ({ ...prev, todo: [newTask, ...prev.todo] }));
    addToast(`Task "${trimmed}" added successfully!`, 'success');
  }, [addToast, state.todo, state.inprogress, state.done]);

  const deleteTask = useCallback((taskId: string) => {
    let deletedTask: Task | null = null;
    
    setState(prev => {
      const next: BoardState = { todo: [], inprogress: [], done: [] };
      (Object.keys(prev) as ColumnId[]).forEach(col => {
        const [found, rest] = ((tasks: Task[]) => {
          const idx = tasks.findIndex(t => t.id === taskId);
          if (idx === -1) return [null, tasks] as const;
          return [tasks[idx], [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]] as const;
        })(prev[col]);
        if (found) deletedTask = found;
        next[col] = rest;
      });
      
      return next;
    });
    
    if (deletedTask) {
      addToast(`Task "${deletedTask.title}" deleted successfully`, 'success');
    }
  }, [addToast]);

  const moveTask = useCallback((taskId: string, toColumn: ColumnId) => {
    setState(prev => {
      let movedTask: Task | null = null;
      const withoutTask: BoardState = { todo: [], inprogress: [], done: [] };
      (Object.keys(prev) as ColumnId[]).forEach(col => {
        const [found, rest] = ((tasks: Task[]) => {
          const idx = tasks.findIndex(t => t.id === taskId);
          if (idx === -1) return [null, tasks] as const;
          return [tasks[idx], [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]] as const;
        })(prev[col]);
        if (found) movedTask = found;
        withoutTask[col] = rest;
      });
      if (!movedTask) return prev;
      const updated: Task = { ...movedTask, columnId: toColumn };
      return { ...withoutTask, [toColumn]: [updated, ...withoutTask[toColumn]] };
    });
  }, []);

  const value = useMemo(() => ({ state, addTask, deleteTask, moveTask }), [state, addTask, deleteTask, moveTask]);
  return value;
}

export type UseBoardStateReturn = ReturnType<typeof useBoardState>;


