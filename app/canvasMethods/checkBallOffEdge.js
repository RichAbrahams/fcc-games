export default function checkBallOffEdge(ballX, canvasWidth) {
  return ballX <= 0 || ballX > canvasWidth;
}
