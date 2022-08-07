function evenOrOdd(number) {
  //
}

if (import.meta.vitest) {
  test("1. very easy - even or odd", () => {
    expect(evenOrOdd(1)).toBe("odd");
    expect(evenOrOdd(2)).toBe("even");
    expect(evenOrOdd(-3)).toBe("odd");
    expect(evenOrOdd(5920295712029)).toBe("odd");
  });
}
