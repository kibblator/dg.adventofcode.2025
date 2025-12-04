import { describe, it, expect } from "vitest"
import { lobby } from "../src/day3/day3"
import { getTextFileLines } from "../src/utils/inputReader"

describe("lobby part 1", () => {
  it("should get the invalid ids for the example", () => {
    const input = getTextFileLines("./src/day3/sample_input.txt")

    const result = lobby(input, 2)

    expect(result).toEqual(357)
  })

  it("should get the invalid ids for the puzzle input", () => {
    const input = getTextFileLines("./src/day3/puzzle_input.txt")

    const result = lobby(input, 2)

    console.log(result)
  })
})

describe("lobby part 2", () => {
  it("should get the invalid ids for the example", () => {
    const input = getTextFileLines("./src/day3/sample_input.txt")

    const result = lobby(input, 12)

    expect(result).toEqual(3121910778619)
  })

  it("should get the invalid ids for the puzzle input", () => {
    const input = getTextFileLines("./src/day3/puzzle_input.txt")

    const result = lobby(input, 12)

    console.log(result)
  })
})
