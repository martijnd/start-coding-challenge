function addition(a, b) {
  //
}

if (import.meta.vitest) {
  test("1. very-easy - sum", () => {
    expect(addition(2, 3)).toBe(5);
    expect(addition(-3, -6)).toBe(-9);
    expect(addition(7, 3)).toBe(10);
    expect(addition(88, 2)).toBe(90);
  });
}
