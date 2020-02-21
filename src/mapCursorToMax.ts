export const mapCursorToMax = (cursor: number, max: number) => {
  if (max === 0) return 0;
  if (cursor >= 0) return cursor % max;
  const modulo = cursor % max;
  if (modulo === 0) return Math.abs(modulo); // -0
  return modulo + max;
};
