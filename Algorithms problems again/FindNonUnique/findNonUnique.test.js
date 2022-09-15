import findNonUnique from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    expect(findNonUnique([2, 1, 2, 5])).toEqual([2]);
  });

  test("Example 2", () => {
    const output = findNonUnique([1, 2, 2, 3, 3, 3]);
    expect(output).toEqual(expect.arrayContaining([2, 3]));
    expect(output.length).toBe(2);
  });

  test("Example 3", () => {
    expect(findNonUnique([1, 2, 3, 4, 5])).toEqual([]);
  });
});

describe("Solution Tests", () => {
  test("Test 1", () => {
    expect(findNonUnique([])).toEqual([]);
  });

  test("Test 2", () => {
    expect(findNonUnique([1])).toEqual([]);
  });

  test("Test 3", () => {
    expect(findNonUnique([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toEqual([0]);
  });

  test("Test 4", () => {
    expect(
      findNonUnique([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ])
    ).toEqual([]);
  });

  test("Test 5", () => {
    const output = findNonUnique([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
    expect(output).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
    expect(output.length).toBe(6);
  });

  test("Test 6", () => {
    const output = findNonUnique([0, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10]);
    expect(output).toEqual(expect.arrayContaining([0, 2, 4, 6, 8, 10]));
    expect(output.length).toBe(6);
  });

  test("Test 7", () => {
    const output = findNonUnique([9, 8, 8, 9, 8, 8, 9, 9, 8, 8, 9, 9]);
    expect(output).toEqual(expect.arrayContaining([9, 8]));
    expect(output.length).toBe(2);
  });

  test("Test 8", () => {
    const output = findNonUnique([
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]);
    expect(output).toEqual(expect.arrayContaining([1]));
    expect(output.length).toBe(1);
  });

  test("Test 9", () => {
    const output = findNonUnique([
      -1, -2, -1, -2, -3, -4, -3, -4, -5, -6, -5, -6,
    ]);
    expect(output).toEqual(expect.arrayContaining([-1, -2, -3, -4, -5, -6]));
    expect(output.length).toBe(6);
  });

  test("Test 10", () => {
    const output = findNonUnique([0, 1, 1, -1, -1, 2, 2, -3, -3, 4, 5, -5]);
    expect(output).toEqual(expect.arrayContaining([1, -1, 2, -3]));
    expect(output.length).toBe(4);
  });
});
