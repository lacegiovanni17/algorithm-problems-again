import vowelsVsConsonants from "./solution";

describe("Example tests", () => {
  it("should handle basic tests", () => {
    expect(vowelsVsConsonants("cheese")).toBe("draw");
  });

  it("should handle basic tests", () => {
    expect(vowelsVsConsonants("twist")).toBe("consonants win");
  });

  it("should handle basic tests", () => {
    expect(vowelsVsConsonants("alive")).toBe("vowels win");
  });
});

describe("Solution tests", () => {
  it("should handle test #1", () => {
    expect(vowelsVsConsonants("employee")).toBe("draw");
  });

  it("should handle test #2", () => {
    expect(vowelsVsConsonants("sesquipedalian")).toBe("draw");
  });

  it("should handle test #3", () => {
    expect(vowelsVsConsonants("o")).toBe("vowels win");
  });

  it("should handle test #4", () => {
    expect(vowelsVsConsonants("w")).toBe("consonants win");
  });

  it("should handle test #5", () => {
    expect(vowelsVsConsonants("tea")).toBe("vowels win");
  });

  it("should handle test #6", () => {
    expect(
      vowelsVsConsonants("pneumonoultramicroscopicsilicovolcanoconiosis")
    ).toBe("consonants win");
  });

  it("should handle test #7", () => {
    expect(vowelsVsConsonants("hippopotamus")).toBe("consonants win");
  });

  it("should handle test #8", () => {
    expect(vowelsVsConsonants("A")).toBe("vowels win");
  });

  it("should handle test #9", () => {
    expect(vowelsVsConsonants("Z")).toBe("consonants win");
  });

  it("should handle test #10", () => {
    expect(vowelsVsConsonants("ABCaaEEzzZ")).toBe("draw");
  });
});
