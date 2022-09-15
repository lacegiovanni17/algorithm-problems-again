import groupLetters from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    expect(groupLetters("david")).toBe("aidvd");
  });

  test("Example 2", () => {
    expect(groupLetters("")).toBe("");
  });

  test("Example 3", () => {
    expect(groupLetters("mvp")).toEqual("mvp");
  });
});

describe("Solution tests", () => {
  test("Test 1", () => {
    expect(groupLetters("iou")).toBe("iou");
  });

  test("Test 2", () => {
    expect(groupLetters("")).toBe("");
  });

  test("Test 3", () => {
    expect(groupLetters("abc")).toEqual("abc");
  });

  test("Test 4", () => {
    expect(groupLetters("zxycbnplkjhuioa")).toEqual("uioazxycbnplkjh");
  });

  test("Test 5", () => {
    expect(groupLetters("aqewiyonum")).toEqual("aeiouqwynm");
  });

  test("Test 6", () => {
    expect(groupLetters("AqEwIyOnUm")).toEqual("AEIOUqwynm");
  });

  test("Test 7", () => {
    expect(groupLetters("aQeWiYoNum")).toEqual("aeiouQWYNm");
  });

  test("Test 8", () => {
    expect(groupLetters("QWRTZOA")).toEqual("OAQWRTZ");
  });

  test("Test 9", () => {
    expect(
      groupLetters(
        "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiAAAAAiiiiiiiiiiiiiiiiiiiiiiiiiiii"
      )
    ).toEqual(
      "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiAAAAAiiiiiiiiiiiiiiiiiiiiiiiiiiii"
    );
  });

  test("Test 10", () => {
    expect(
      groupLetters(
        "qqqqqqqqqqqqppppppppppppppmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnyyyyyyyyyyyYYYYYYYYYYYnnnnnnnnnnnn"
      )
    ).toEqual(
      "qqqqqqqqqqqqppppppppppppppmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnyyyyyyyyyyyYYYYYYYYYYYnnnnnnnnnnnn"
    );
  });
});
