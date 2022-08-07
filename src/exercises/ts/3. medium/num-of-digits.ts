function numOfDigits(num: number): number {
  //
}

if (import.meta.vitest) {
  test("3. medium - num of digits", () => {
    expect(numOfDigits(13124)).toBe(5);
    expect(numOfDigits(0)).toBe(1);
    expect(numOfDigits(-12381428)).toBe(8);
    expect(numOfDigits(12)).toBe(2);
    expect(numOfDigits(42)).toBe(2);
    expect(numOfDigits(1000)).toBe(4);
    expect(numOfDigits(136)).toBe(3);
    expect(numOfDigits(1000000000)).toBe(10);
    expect(numOfDigits(2147483647)).toBe(10);
    expect(numOfDigits(-2147483647)).toBe(10);
  });
}
