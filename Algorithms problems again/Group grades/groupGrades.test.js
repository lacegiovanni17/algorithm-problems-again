import groupGrades from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    expect(groupGrades([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])).toEqual({
      failed: 4,
      passed: 6,
      exceptional: 2,
    });
  });

  test("Example 2", () => {
    expect(groupGrades([70, 85, 90, 95, 96, 97, 98, 99])).toEqual({
      failed: 0,
      passed: 8,
      exceptional: 6,
    });
  });

  test("Example 3", () => {
    expect(groupGrades([33, 80, 78, 89, 70, 49, 40, 43, 40, 33])).toEqual({
      failed: 6,
      passed: 4,
      exceptional: 0,
    });
  });
});

describe("Solution Tests", () => {
  test("Test 1", () => {
    expect(groupGrades([50])).toEqual({
      failed: 0,
      passed: 1,
      exceptional: 0,
    });
  });

  test("Test 2", () => {
    expect(groupGrades([90])).toEqual({
      failed: 0,
      passed: 1,
      exceptional: 1,
    });
  });

  test("Test 3", () => {
    expect(groupGrades([49, 30, 10, 11, -1, 15, 49])).toEqual({
      failed: 7,
      passed: 0,
      exceptional: 0,
    });
  });

  test("Test 4", () => {
    expect(groupGrades([80, 80, 70, 60, 89, 59, 63, 44, 22])).toEqual({
      failed: 2,
      passed: 7,
      exceptional: 0,
    });
  });

  test("Test 5", () => {
    expect(groupGrades([49.5, 89.5, 99.9, 89.9, 49.9, 0, 50.5])).toEqual({
      failed: 3,
      passed: 4,
      exceptional: 1,
    });
  });
});
