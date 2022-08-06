export function sevenBoom(arr) {
  return arr.join().includes("7") ? "Boom!" : "there is no 7 in the array";
}

if (import.meta.vitest) {
  test("sevenBoom", () => {
    expect(sevenBoom([2, 6, 7, 9, 3])).toBe("Boom!");
    expect(sevenBoom([33, 68, 400, 5])).toBe("there is no 7 in the array");
    expect(sevenBoom([86, 48, 100, 66])).toBe("there is no 7 in the array");
    expect(sevenBoom([76, 55, 44, 32])).toBe("Boom!");
    expect(sevenBoom([35, 4, 9, 37])).toBe("Boom!");
  });
}
