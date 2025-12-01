import { describe, it, expect } from "vitest"
import { secretEntrance, secretEntrancePart2 } from "../src/day1/day1"
import { getTextFileLines } from "../src/utils/inputReader"

describe("secretEntrance part 1", () => {
  it("should get the password for the example", () => {
    const input = getTextFileLines("./src/day1/sample_input.txt")

    const result = secretEntrance(input)

    expect(result).toEqual(3)
  })

  it("should get the password for the puzzle input", () => {
    const input = getTextFileLines("./src/day1/puzzle_input.txt")

    const result = secretEntrance(input)

    console.log(result)
  })
})

describe("secretEntrance part 2", () => {
  it("should get the password for the example", () => {
    const input = getTextFileLines("./src/day1/sample_input.txt")

    const result = secretEntrancePart2(input)

    expect(result).toEqual(6)
  })

  it("should get the password for the puzzle input", () => {
    const input = getTextFileLines("./src/day1/puzzle_input.txt")

    const result = secretEntrancePart2(input)

    console.log(result)
  })
})
