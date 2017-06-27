export default function () {
  const colors = ['#DA70D6', '#4169E1', '#3CB371', '#FFD700', '#DC143C', '#8A2BE2', '#FF8C00', '#00BFFF', '#808000'];
  const index = Math.floor(Math.random() * ((9 - 0) + 0));
  return colors[index];
}
