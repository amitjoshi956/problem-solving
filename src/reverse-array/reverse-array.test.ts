import { expect, describe, it } from "bun:test";
import { reverseArray } from "./reverse-array";

describe("reverseArray", () => {
  it("should reverse an array with 5 elements", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it("should return the same array if the array has 1 or 0 elements", () => {
    expect(reverseArray([1])).toEqual([1]);
    expect(reverseArray([])).toEqual([]);
  });
});
