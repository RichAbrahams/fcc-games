export default function () {
  const ySpeed = 6;
  let xSpeed = Math.floor(Math.random() * (5 - 1)) + 1;
  const xmodifier = Math.random() * ((2 - 1) + 1);
  if (xmodifier > 1) {
    xSpeed *= -1;
  }
  return [xSpeed, ySpeed];
}
