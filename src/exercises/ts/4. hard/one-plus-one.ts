function onePlusOne(expression: string): string {
  //
}

if (import.meta.vitest) {
  test("4. hard - one-plus-one", () => {
    expect(onePlusOne("One plus one")).toBe("Two");
    expect(onePlusOne("zero Plus one")).toBe("One");
    expect(onePlusOne("one minus one")).toBe("Zero");
  });
}
