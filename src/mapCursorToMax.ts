export const mapCursorToMax = (counter: number, max: number) => {
  if (max === 0) return 0;
  if (counter >= 0) return counter % max;
  const modulo = counter % max;
  if (modulo === 0) return Math.abs(modulo); // -0
  return modulo + max;
};
