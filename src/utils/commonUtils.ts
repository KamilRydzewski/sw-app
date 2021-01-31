export function parseToNumber(
  value: string | number | undefined | null
): number {
  if (
    value === "unknown" ||
    value === "Unknown" ||
    value === null ||
    value === undefined
  ) {
    return 0;
  } else {
    return parseFloat(value.toString().replace(/[-,]/g, ""));
  }
}

export function getRandomObj(array: any) {
  return array[Math.floor(Math.random() * array.length)];
}
