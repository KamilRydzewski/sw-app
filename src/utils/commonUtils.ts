import { CardType } from "src/types/mainTypes";

export function parseToNumber(
  value: string | number | undefined | null
): number {
  if (
    value === "unknown" ||
    value === "Unknown" ||
    value === null ||
    value === undefined
  ) {
    return Math.floor(Math.random() * 100);
  } else {
    return parseFloat(value.toString().replace(/[-,]/g, ""));
  }
}

export function getRandomObj<T extends CardType>(
  array: T[] | undefined
): T | undefined {
  if (array !== undefined) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
