function langtonsAnt(
  grid: number[][],
  col: number,
  row: number,
  n: number,
  direction = 0
) {
  //
}

if (import.meta.vitest) {
  test("6. expert - langtons ant", () => {
    expect(langtonsAnt([[1]], 0, 0, 1, 0)).toEqual([[0, 0]]);

    expect(langtonsAnt([[0]], 0, 0, 1, 0)).toEqual([[0, 1]]);

    expect(langtonsAnt([[1]], 0, 0, 3, 0)).toEqual([
      [0, 1],
      [0, 1],
    ]);

    expect(langtonsAnt([[1]], 0, 0, 1)).toEqual([[0, 0]]);

    expect(
      langtonsAnt(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        2,
        2,
        10,
        1
      )
    ).toEqual([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 1],
    ]);

    expect(
      langtonsAnt(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        1,
        1,
        20,
        2
      )
    ).toEqual([
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ]);

    expect(
      langtonsAnt(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        30,
        0
      )
    ).toEqual([
      [0, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
    ]);
  });
}
