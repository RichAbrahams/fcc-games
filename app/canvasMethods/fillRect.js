/*  eslint no-param-reassign: ["error", { "props": false }]*/

export default function fillRect(canvasContext, topLeftX, topLeftY, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(topLeftX, topLeftY, width, height);
}
