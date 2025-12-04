export const lobby = (input: string[], requiredNumbers: number): number => {
  const largestPossible: number[] = []

  for (var line of input) {
    const largestValues = getLargestValues(line, requiredNumbers)

    largestPossible.push(+largestValues.map((l) => l.toString()).join(""))
  }

  return largestPossible.reduce((prev, curr) => (prev += curr), 0)
}

const getLargestValues = (input: string, required: number): number[] => {
  const values: number[] = []
  let availableNumbers = input.split("").map((n) => +n)

  while (values.length < required) {
    const sortedArray = structuredClone(availableNumbers).sort((a, b) => a - b)

    while (true) {
      const largest = sortedArray.pop()
      if (!largest) {
        throw new Error("No numbers left!")
      }

      const index = availableNumbers.indexOf(largest)
      const expectedRemainder = structuredClone(availableNumbers)
      expectedRemainder.splice(0, index + 1)

      if (expectedRemainder.length >= required - (values.length + 1)) {
        values.push(largest)
        availableNumbers.splice(0, index + 1)
        break
      }
    }
  }

  return values
}
