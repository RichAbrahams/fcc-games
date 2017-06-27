/*
 *
 * Breakout actions
 *
 */

import {
  RESET_GAME,
  SHOW_LEVEL_INTRO,
  SHOW_GAME_OVER,
  SHOW_GAME_WON,
  START_LEVEL,
  TOGGLE_PAUSE,
  UPDATE_GAME,
  UPDATE_PADDLE,
  TOGGLE_TEST_MODE,
  RELEASE_BALL,
  UPDATE_PADDLE_TOUCH,
} from './constants';

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function showLevelIntro() {
  return {
    type: SHOW_LEVEL_INTRO,
  };
}

export function showGameOver() {
  return {
    type: SHOW_GAME_OVER,
  };
}

export function showGameWon() {
  return {
    type: SHOW_GAME_WON,
  };
}

export function startLevel() {
  return {
    type: START_LEVEL,
  };
}

export function togglePause() {
  return {
    type: TOGGLE_PAUSE,
  };
}

export function updateGame() {
  return {
    type: UPDATE_GAME,
  };
}

export function updatePaddle(payload) {
  return {
    type: UPDATE_PADDLE,
    payload,
  };
}

export function toggleTestMode() {
  return {
    type: TOGGLE_TEST_MODE,
  };
}

export function releaseBall() {
  return {
    type: RELEASE_BALL,
  };
}

export function updatePaddleTouch(payload) {
  return {
    type: UPDATE_PADDLE_TOUCH,
    payload,
  };
}
