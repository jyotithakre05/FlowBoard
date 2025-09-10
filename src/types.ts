export type ColumnId = 'todo' | 'inprogress' | 'done';

export interface Task {
  id: string;
  title: string;
  columnId: ColumnId;
}

export type BoardState = Record<ColumnId, Task[]>;

export const COLUMN_TITLES: Record<ColumnId, string> = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
};

export const INITIAL_BOARD_STATE: BoardState = {
  todo: [],
  inprogress: [],
  done: [],
};



