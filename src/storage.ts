import { INITIAL_BOARD_STATE } from './types';
import type { BoardState } from './types';

const STORAGE_KEY = 'flowboard_state_v1';

export function loadBoardState(): BoardState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_BOARD_STATE;
    const parsed = JSON.parse(raw) as BoardState;
    return {
      todo: parsed.todo ?? [],
      inprogress: parsed.inprogress ?? [],
      done: parsed.done ?? [],
    };
  } catch {
    return INITIAL_BOARD_STATE;
  }
}

export function saveBoardState(state: BoardState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore write errors
  }
}


