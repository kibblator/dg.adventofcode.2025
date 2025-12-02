import { describe, it, expect } from "vitest"
import { giftShop } from "../src/day2/day2"
import { getEntireTextFile } from "../src/utils/inputReader"

describe("giftShop part 1", () => {
  it("should get the invalid ids for the example", () => {
    const input = getEntireTextFile("./src/day2/sample_input.txt")

    const result = giftShop(input)

    expect(result).toEqual(1227775554)
  })

  it("should get the invalid ids for the puzzle input", () => {
    const input = getEntireTextFile("./src/day2/puzzle_input.txt")

    const result = giftShop(input)

    console.log(result)
  })
})

describe("giftShop part 2", () => {
  it("should get the invalid ids for the example", () => {
    const input = getEntireTextFile("./src/day2/sample_input.txt")

    const result = giftShop(input, true)

    expect(result).toEqual(4174379265)
  })

  it("should get the invalid ids for the puzzle input", () => {
    const input = getEntireTextFile("./src/day2/puzzle_input.txt")

    const result = giftShop(input, true)

    console.log(result)
  })
})
