/*
 *
 * Breakout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BreakoutStatusBar from 'components/BreakoutStatusBar';
import BreakoutStart from 'components/BreakoutStart';
import BreakoutPause from 'components/BreakoutPause';
import BreakoutLevel from 'components/BreakoutLevel';
import BreakoutGameOver from 'components/BreakoutGameOver';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import fillRect from 'canvasMethods/fillRect';
import fillCircle from 'canvasMethods/fillCircle';
import * as selectors from './selectors';
import * as actions from './actions';
import { INTRO, LEVEL_INTRO, PLAY, PAUSED, GAME_OVER, GAME_WON } from './constants';

export class Breakout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateMouse = this.updateMouse.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mainLoop = this.mainLoop.bind(this);
    this.drawCanvas = this.drawCanvas.bind(this);
    this.handleTouch = this.handleTouch.bind(this)
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.props.resetGame();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gameState !== PLAY && this.props.gameState === PLAY) {
      this.mainLoop();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  mainLoop() {
    const {
      framesPerSecond,
      updateGame,
      canvasWidth,
      canvasHeight,
      paddleDistanceFromBottom,
      paddleWidth,
      paddleHeight,
      brickGap,
      brickWidth,
      brickHeight,
      showLevelIntro,
      showGameOver,
      showGameWon,
    } = this.props;
    const canvas = this.canvas;
    const canvasContext = canvas.getContext('2d');
    const timer = setInterval(() => {
      if (this.props.gameState !== PLAY) {
        clearInterval(timer);
        return;
      }
      if (!this.props.bricksRemaining && this.props.level <= 5) {
        showLevelIntro();
        return;
      }
      if (!this.props.bricksRemaining && this.props.level > 5) {
        showGameWon();
        return;
      }
      if (!this.props.lives) {
        showGameOver();
        return;
      }
      this.drawCanvas(canvasContext, canvasWidth, canvasHeight, paddleDistanceFromBottom, paddleWidth, paddleHeight, brickGap, brickWidth, brickHeight);
      updateGame();
    }, framesPerSecond);
  }

  drawCanvas(canvasContext, canvasWidth, canvasHeight, paddleDistanceFromBottom, paddleWidth, paddleHeight, brickGap, brickWidth, brickHeight) {
    const {
      paddleX,
      ballX,
      ballY,
      bricks,
    } = this.props;
    fillRect(canvasContext, 0, 0, canvasWidth, canvasHeight, '#222');
    fillRect(canvasContext, paddleX, canvasHeight - paddleDistanceFromBottom, paddleWidth, paddleHeight, 'DodgerBlue');
    fillCircle(canvasContext, ballX, ballY, 6, 'GreenYellow');
    for (let i = 0; i < bricks.size; i += 1) {
      const brick = bricks.get(i);
      if (brick.get('active')) {
        fillRect(
          canvasContext,
          brick.get('x') + brickGap,
          brick.get('y') + brickGap,
          brickWidth - brickGap,
          brickHeight - brickGap,
          brick.get('color')
          );
      }
    }
  }

  handleKeyPress(e) {
    const gameState = this.props.gameState;
    if (e.keyCode === 32 && (gameState === PLAY || gameState === PAUSED)) {
      this.props.togglePause();
    }
    if (e.keyCode === 84 && gameState) {
      this.props.toggleTestMode();
    }
  }

  updateMouse(e) {
    const gameState = this.props.gameState;
    if (gameState === PLAY) {
      const bounding = this.canvas.getBoundingClientRect();
      this.props.updatePaddle([e.screenX - bounding.left, e.screenY - (bounding.top + 75)]);
    }
  }

  mouseDown(e) {
    const { ballStartPosition, releaseBall, gameState } = this.props;
    if (ballStartPosition && gameState === PLAY) {
      releaseBall();
    }
  }

  handleTouch(e) {
    const bounding = this.canvas.getBoundingClientRect();
    const newPosition = e.touches[0].clientX - bounding.left;
    this.props.updatePaddleTouch(newPosition);
  }


  render() {
    const { gameState, canvasWidth, canvasHeight, togglePause } = this.props;
    return (
      <PageWrapper>
        <PageHeader>BREAKOUT</PageHeader>
        <BreakoutStatusBar width={canvasWidth} {...this.props} />
        {gameState === INTRO && <BreakoutStart {...this.props} />}
        {gameState === LEVEL_INTRO && <BreakoutLevel {...this.props} />}
        {gameState === PLAY && <canvas
          width={canvasWidth} height={canvasHeight}
          ref={(c) => { this.canvas = c; }}
          onMouseMove={this.updateMouse}
          onMouseDown={this.mouseDown}
          onTouchMove={this.handleTouch}
        />}
        {gameState === PAUSED && <BreakoutPause {...this.props} />}
        {gameState === GAME_OVER && <BreakoutGameOver {...this.props} />}
      </PageWrapper>
    );
  }
}

Breakout.propTypes = {
  canvasWidth: PropTypes.number.isRequired,
  canvasHeight: PropTypes.number.isRequired,
  ballX: PropTypes.number.isRequired,
  ballY: PropTypes.number.isRequired,
  paddleX: PropTypes.number.isRequired,
  paddleWidth: PropTypes.number.isRequired,
  paddleHeight: PropTypes.number.isRequired,
  paddleDistanceFromBottom: PropTypes.number.isRequired,
  updateGame: PropTypes.func.isRequired,
  updatePaddle: PropTypes.func.isRequired,
  gameState: PropTypes.string.isRequired,
  framesPerSecond: PropTypes.number.isRequired,
  showLevelIntro: PropTypes.func.isRequired,
  togglePause: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  bricks: PropTypes.object.isRequired,
  brickGap: PropTypes.number.isRequired,
  brickWidth: PropTypes.number.isRequired,
  brickHeight: PropTypes.number.isRequired,
  bricksRemaining: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  showGameOver: PropTypes.func.isRequired,
  showGameWon: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  canvasWidth: selectors.selectCanvasWidth(),
  canvasHeight: selectors.selectCanvasHeight(),
  framesPerSecond: selectors.selectFramesPerSecond(),
  gameState: selectors.selectGameState(),
  ballX: selectors.selectBallX(),
  ballY: selectors.selectBallY(),
  ballSpeedX: selectors.selectBallSpeedX(),
  ballSpeedY: selectors.selectBallSpeedY(),
  paddleX: selectors.selectPaddleX(),
  paddleY: selectors.selectPaddleY(),
  paddleWidth: selectors.selectPaddleWidth(),
  paddleHeight: selectors.selectPaddleHeight(),
  paddleDistanceFromBottom: selectors.selectPaddleDistanceFromBottom(),
  bricks: selectors.selectBricks(),
  brickGap: selectors.selectBrickGap(),
  brickWidth: selectors.selectBrickWidth(),
  brickHeight: selectors.selectBrickHeight(),
  bricksRemaining: selectors.selectBricksRemaining(),
  score: selectors.selectScore(),
  level: selectors.selectLevel(),
  lives: selectors.selectLives(),
  ballStartPosition: selectors.selectBallStartPosition(),
});

function mapDispatchToProps(dispatch) {
  return {
    resetGame: () => dispatch(actions.resetGame()),
    startLevel: () => dispatch(actions.startLevel()),
    togglePause: () => dispatch(actions.togglePause()),
    updateGame: () => dispatch(actions.updateGame()),
    updatePaddle: (payload) => dispatch(actions.updatePaddle(payload)),
    updatePaddleTouch: (payload) => dispatch(actions.updatePaddleTouch(payload)),
    showLevelIntro: () => dispatch(actions.showLevelIntro()),
    showGameOver: () => dispatch(actions.showGameOver()),
    showGameWon: () => dispatch(actions.showGameWon()),
    toggleTestMode: () => dispatch(actions.toggleTestMode()),
    releaseBall: () => dispatch(actions.releaseBall()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Breakout);
