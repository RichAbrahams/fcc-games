/*
 *
 * Breakout reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INTRO,
  LEVEL_INTRO,
  PLAY,
  PAUSED,
  GAME_OVER,
  GAME_WON,
  RESET_GAME,
  SHOW_LEVEL_INTRO,
  SHOW_GAME_WON,
  SHOW_GAME_OVER,
  START_LEVEL,
  TOGGLE_PAUSE,
  UPDATE_GAME,
  UPDATE_PADDLE,
  TOGGLE_TEST_MODE,
  RELEASE_BALL,
  UPDATE_PADDLE_TOUCH,
} from './constants';

import Oscillator from '../../canvasMethods/Oscillator';
import getRandomSpeedBreakout from '../../canvasMethods/getRandomSpeedBreakout';
import checkBallOffEdge from '../../canvasMethods/checkBallOffEdge';
import checkBallOffBottom from '../../canvasMethods/checkBallOffBottom';
import checkBallOffTop from '../../canvasMethods/checkBallOffTop';
import checkBallOnPaddle from '../../canvasMethods/checkBallOnPaddle';
import checkBallOnBrick from '../../canvasMethods/checkBallOnBrick';
import generateLevelMap from '../../canvasMethods/generateLevelMap';
import preventOutOfBounds from '../../canvasMethods/preventOutOfBounds';

const initialState = fromJS({
  gameState: INTRO,
  canvasWidth: 600,
  canvasHeight: 600,
  rows: 6,
  columns: 10,
  ballX: 300,
  ballY: 350,
  ballStartPosition: true,
  paddleWidth: 100,
  paddleHeight: 15,
  ballSpeedX: 6,
  ballSpeedY: 0,
  paddleX: 400,
  paddleY: 570,
  paddleDistanceFromBottom: 60,
  framesPerSecond: 30,
  bricks: [],
  brickGap: 2,
  brickWidth: 0,
  brickHeight: 0,
  score: 0,
  level: 0,
  lives: 3,
  bricksRemaining: 0,
  testMode: false,
});

const bounceSound = new Oscillator(60, 'triangle', 0.075, 0.03);
const pointSound = new Oscillator(200, 'sine', 0.02, 0.1);
const brickSound = new Oscillator(50, 'sawtooth', 0.02, 0.03);

function breakoutReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_GAME: {
      return state.merge(initialState);
    }
    case SHOW_LEVEL_INTRO: {
      let level = state.get('level');
      level += 1;
      return state.merge({ gameState: LEVEL_INTRO, level });
    }
    case SHOW_GAME_WON: {
      return state.set('gameState', GAME_WON);
    }
    case SHOW_GAME_OVER: {
      return state.set('gameState', GAME_OVER);
    }
    case START_LEVEL: {
      const rows = state.get('rows');
      const columns = state.get('columns');
      const canvasWidth = state.get('canvasWidth');
      const canvasHeight = state.get('canvasHeight');
      const brickWidth = canvasWidth / columns;
      const brickHeight = Math.floor((canvasHeight * 0.33) / rows);
      const level = state.get('level');
      const bricks = generateLevelMap(rows, columns, brickWidth, brickHeight, level);
      const bricksRemaining = bricks.filter((item) => item.active).length;

      return state.merge({
        gameState: PLAY,
        bricks,
        brickWidth,
        brickHeight,
        bricksRemaining,
        ballStartPosition: true,
        ballSpeedX: 0,
        ballSpeedY: 0,
      });
    }
    case TOGGLE_PAUSE: {
      const currentGameState = state.get('gameState');
      const newGameState = currentGameState === PLAY ? PAUSED : PLAY;
      return state.set('gameState', newGameState);
    }
    case UPDATE_PADDLE:
      {
        const paddleWidth = state.get('paddleWidth');
        const mouseX = action.payload[0];
        const mouseY = action.payload[1];
        const paddlePosition = mouseX - (paddleWidth / 2);
        return state.merge({ paddleX: paddlePosition, mouseX, mouseY });
      }
    case UPDATE_GAME: {
      const canvasWidth = state.get('canvasWidth');
      const canvasHeight = state.get('canvasHeight');
      const columns = state.get('columns');
      const paddleX = state.get('paddleX');
      const paddleY = state.get('paddleY');
      const paddleWidth = state.get('paddleWidth');
      const paddleDistanceFromBottom = state.get('paddleDistanceFromBottom');
      const paddleHeight = state.get('paddleHeight');
      const ballStartPosition = state.get('ballStartPosition');
      let ballX = state.get('ballX');
      let ballY = state.get('ballY');
      let ballSpeedX = state.get('ballSpeedX');
      let ballSpeedY = state.get('ballSpeedY');
      const brickWidth = state.get('brickWidth');
      const brickHeight = state.get('brickHeight');
      const bricks = state.get('bricks');
      let lives = state.get('lives');
      let score = state.get('score');
      const mouseX = state.get('mouseX');
      const mouseY = state.get('mouseY');
      const testMode = state.get('testMode');

      if (ballStartPosition) {
        ballX = paddleX + (paddleWidth / 2);
        ballY = (canvasHeight - paddleDistanceFromBottom) - 5;
        const finalPositions = preventOutOfBounds(ballX, ballY, canvasWidth, canvasHeight);
        return state.merge({ ballX: finalPositions[0], ballY: finalPositions[1] });
      }

      if (checkBallOffEdge(ballX, canvasWidth)) {
        bounceSound.start();
        ballSpeedX *= -1;
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        const finalPositions = preventOutOfBounds(ballX, ballY, canvasWidth, canvasHeight);
        return state.merge({ ballX: finalPositions[0], ballY: finalPositions[1], ballSpeedX });
      }

      if (checkBallOffTop(ballY)) {
        bounceSound.start();
        ballSpeedY *= -1;
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        const finalPositions = preventOutOfBounds(ballX, ballY, canvasWidth, canvasHeight);
        return state.merge({ ballX: finalPositions[0], ballY: finalPositions[1], ballSpeedY });
      }

      if (checkBallOffBottom(ballY, canvasHeight)) {
        pointSound.start();
        lives -= 1;
        return state.merge({ ballSpeedY: 0, ballStartPosition: true, lives });
      }

      if (checkBallOnPaddle(canvasHeight, paddleDistanceFromBottom, paddleX, paddleWidth, paddleHeight, ballX, ballY)) {
        const centerOfPaddle = paddleX + (paddleWidth / 2);
        const ballDistanceFromCenter = ballX - centerOfPaddle;
        ballSpeedX = ballDistanceFromCenter * 0.35;
        ballSpeedY *= -1;
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        bounceSound.start();
        return state.merge({ ballX, ballY, ballSpeedX, ballSpeedY });
      }

      const brickCollision = checkBallOnBrick(brickWidth, brickHeight, ballX, ballY, ballSpeedX, ballSpeedY, bricks, columns);
      if (brickCollision !== false) {
        brickSound.start();
        let bricksRemaining = state.get('bricksRemaining');
        bricksRemaining -= 1;
        score += 10;
        return state.setIn(['bricks', brickCollision[0], 'active'], false).merge({
          ballX,
          ballY,
          ballSpeedX: brickCollision[1],
          ballSpeedY: brickCollision[2],
          bricksRemaining,
          score,
        });
      }
      if (testMode) {
        return state.merge({ ballX: mouseX, ballY: mouseY });
      }
      ballX += ballSpeedX;
      ballY += ballSpeedY;
      return state.merge({ ballX, ballY });
    }
    case TOGGLE_TEST_MODE: {
      const current = state.get('testMode');
      return state.set('testMode', !current);
    }

    case RELEASE_BALL: {
      return state.merge({ ballSpeedY: -10, ballStartPosition: false });
    }
    case UPDATE_PADDLE_TOUCH : {
      const paddleWidth = state.get('paddleWidth');
      const mouseX = action.payload;
      const paddlePosition = mouseX - (paddleWidth / 2);
      return state.merge({ paddleX: paddlePosition });
    }
    default:
      return state;
  }
}

export default breakoutReducer;
