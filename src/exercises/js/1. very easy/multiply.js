function multiply(a, b) {
  //
}

if (import.meta.vitest) {
  test("1. very easy - multiply", () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(7, 8)).toBe(56);
    expect(multiply(-3, 9)).toBe(-27);
    expect(multiply(2.04, 3.56)).toBe(7.2624);
  });
}
