const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Case without sorting", () => {
    expect(
      sorting.sortByName([
        "451 градус по Фаренгейту",
        "451 градус по Фаренгейту",
      ])
    ).toEqual([
      "451 градус по Фаренгейту",
      "451 градус по Фаренгейту",
      ]);
  });

});


