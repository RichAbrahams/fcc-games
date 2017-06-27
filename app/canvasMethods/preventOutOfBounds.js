export default function (ballX, ballY, canvasWidth, canvasHeight) {
  let checkedBallX = ballX < 0 ? 0 : ballX;
  checkedBallX = checkedBallX > canvasWidth ? canvasWidth : checkedBallX;
  let checkedBallY = ballY < 0 ? 0 : ballY;
  checkedBallY = checkedBallY > canvasHeight ? canvasWidth : checkedBallY;
  return [checkedBallX, checkedBallY];
}
