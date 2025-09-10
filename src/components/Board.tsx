import type { ColumnId } from '../types';
import { useBoardState } from '../hooks/useBoardState';
import Column from './Column';
import AddTaskForm from './AddTaskForm';

export function Board() {
  const { state, addTask, deleteTask, moveTask } = useBoardState();

  function moveLeft(taskId: string, current: ColumnId) {
    const order: ColumnId[] = ['todo', 'inprogress', 'done'];
    const idx = order.indexOf(current);
    if (idx > 0) moveTask(taskId, order[idx - 1]);
  }

  function moveRight(taskId: string, current: ColumnId) {
    const order: ColumnId[] = ['todo', 'inprogress', 'done'];
    const idx = order.indexOf(current);
    if (idx < order.length - 1) moveTask(taskId, order[idx + 1]);
  }

  return (
    <div style={{ 
      padding: '1.6rem 1.6rem 0 1.6rem',
      minHeight: '100vh',
      background: 'var(--trello-blue)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2rem',
        gap: '1.6rem'
      }}>
        <h1 style={{ 
          fontSize: '2.4rem', 
          fontWeight: '700',
          margin: 0,
          color: 'var(--trello-white)',
          letterSpacing: '-0.01em'
        }}>
          FlowBoard
        </h1>
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-md)',
          padding: '0.8rem 1.6rem',
          color: 'var(--trello-white)',
          fontSize: '1.4rem',
          fontWeight: '500'
        }}>
          Kanban Board
        </div>
      </div>
      <div style={{
        background: 'var(--trello-white)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <AddTaskForm onAdd={addTask} />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.6rem',
          alignItems: 'flex-start'
        }}
        className="board-grid"
      >
        <Column
          columnId="todo"
          tasks={state.todo}
          onDropTask={moveTask}
          onDelete={deleteTask}
          onMoveLeft={(id) => moveLeft(id, 'todo')}
          onMoveRight={(id) => moveRight(id, 'todo')}
        />
        <Column
          columnId="inprogress"
          tasks={state.inprogress}
          onDropTask={moveTask}
          onDelete={deleteTask}
          onMoveLeft={(id) => moveLeft(id, 'inprogress')}
          onMoveRight={(id) => moveRight(id, 'inprogress')}
        />
        <Column
          columnId="done"
          tasks={state.done}
          onDropTask={moveTask}
          onDelete={deleteTask}
          onMoveLeft={(id) => moveLeft(id, 'done')}
          onMoveRight={(id) => moveRight(id, 'done')}
        />
      </div>
    </div>
  );
}

export default Board;


