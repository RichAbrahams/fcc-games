import generateColor from './generateColor';

export default function generateBrickArray(totalRows, totalColumns, brickWidth, brickHeight) {
  const arr = [];
  for (let row = 0; row < totalRows; row += 1) {
    for (let col = 0; col < totalColumns; col += 1) {
      const color = generateColor();
      const x = col * brickWidth;
      const y = row * brickHeight;
      const active = row < 2 ? false : true;
      const brick = {
        x,
        y,
        color,
        active,
      };
      arr.push(brick);
    }
  }
  return arr;
}
