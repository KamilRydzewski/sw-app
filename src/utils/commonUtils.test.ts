import { parseToNumber, getRandomObj } from "./commonUtils";

describe("commonUtils test functions", () => {
  it("parseToNumber with wrong params", () => {
    const uncorrectValues = ["unknown", "Unknown", null, undefined];
    uncorrectValues.map((value) => {
      expect(parseToNumber(value)).toBeGreaterThan(0);
    });
  });
  it("parseToNumber with param number as a string", () => {
    expect(parseToNumber("474")).toBe(474);
  });
  it("getRandomObj", () => {
    const arrayOfObjects = [
      {
        cardType: "people",
        name: "Bob",
        url: "http://sw-app.com"
      },
    ];
    expect(getRandomObj(arrayOfObjects)).toMatchObject({
      cardType: "people",
      name: "Bob",
      url: "http://sw-app.com"
    });
  });
  it("getRandomObj with undefined param", () => {
    expect(getRandomObj(undefined)).toBe(undefined);
  });
});
