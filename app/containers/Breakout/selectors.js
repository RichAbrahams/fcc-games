import { createSelector } from 'reselect';


const selectBreakoutDomain = () => (state) => state.get('breakout');

const selectCanvasWidth = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('canvasWidth')
);

const selectCanvasHeight = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('canvasHeight')
);

const selectGameState = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('gameState')
);

const selectFramesPerSecond = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('framesPerSecond')
);

const selectBallX = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('ballX')
);

const selectBallY = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('ballY')
);

const selectBallSpeedX = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('ballSpeedX')
);

const selectBallSpeedY = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('ballSpeedY')
);

const selectPaddleX = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('paddleX')
);

const selectPaddleY = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('paddleY')
);

const selectPaddleWidth = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('paddleWidth')
);

const selectPaddleHeight = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('paddleHeight')
);

const selectPaddleDistanceFromBottom = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('paddleDistanceFromBottom')
);

const selectBricks = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('bricks')
);

const selectBrickGap = () => createSelector(
  selectBreakoutDomain(),
  (substate) => substate.get('brickGap')
);

const selectBrickWidth = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('brickWidth')
);

const selectBrickHeight = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('brickHeight')
);

const selectBricksRemaining = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('bricksRemaining')
);

const selectScore = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('score')
);

const selectLevel = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('level')
);

const selectLives = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('lives')
);

const selectBallStartPosition = () => createSelector(
selectBreakoutDomain(),
  (substate) => substate.get('ballStartPosition')
);

export {
  selectCanvasWidth,
  selectCanvasHeight,
  selectGameState,
  selectFramesPerSecond,
  selectBallX,
  selectBallY,
  selectBallSpeedX,
  selectBallSpeedY,
  selectPaddleX,
  selectPaddleY,
  selectPaddleWidth,
  selectPaddleHeight,
  selectPaddleDistanceFromBottom,
  selectBricks,
  selectBrickGap,
  selectBrickWidth,
  selectBrickHeight,
  selectBricksRemaining,
  selectScore,
  selectLevel,
  selectLives,
  selectBallStartPosition,
};
