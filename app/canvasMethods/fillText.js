/*  eslint no-param-reassign: ["error", { "props": false }]*/

export default function fillText(canvasContext, showWords, textX, textY, color, align) {
  canvasContext.fillStyle = color;
  canvasContext.font = '20px Arial';
  canvasContext.textAlign = align;
  canvasContext.fillText(showWords, textX, textY);
}
