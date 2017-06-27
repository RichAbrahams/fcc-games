/*  eslint no-param-reassign: ["error", { "props": false }]*/

export default function fillCircle(canvasContext, centerX, centerY, radius, color) {
  canvasContext.fillStyle = color;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}
