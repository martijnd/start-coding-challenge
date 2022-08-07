function clockHands(time) {
  //
}

if (import.meta.vitest) {
  test("5. very hard - clock-hands", () => {
    expect(clockHands("12:00:00")).toBe(0.0);
    expect(clockHands("12:15:00")).toBe(82.5);
    expect(clockHands("12:32:44")).toBe(179.967);
    expect(clockHands("03:33:33")).toBe(94.525);
    expect(clockHands("01:59:59")).toBe(60.092);
  });
}
