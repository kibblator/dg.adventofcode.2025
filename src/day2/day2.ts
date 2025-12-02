export const giftShop = (input: string, part2: boolean = false): number => {
  const ranges = input.split(",")

  let duplicates: number[] = []
  for (var range of ranges) {
    if (part2) {
      duplicates.push(...getDuplicatesMoreThanTwo(range))
    } else {
      duplicates.push(...getDuplicatesInRange(range))
    }
  }

  const sum = duplicates.reduce((prev, curr) => prev + curr, 0)
  return sum
}

const getDuplicatesInRange = (range: string): number[] => {
  const [minString, maxString] = range.split("-")
  const min = +minString
  const max = +maxString

  const rangeArray = Array.from({ length: max - min + 1 }, (_, i) => min + i)

  let duplicates: number[] = []
  for (var num of rangeArray) {
    const numString = num.toString()
    if (numString.length % 2 !== 0) continue

    const mid = Math.floor(numString.length / 2)
    if (numString.substring(0, mid) === numString.substring(mid))
      duplicates.push(+numString)
  }

  return duplicates
}

const getDuplicatesMoreThanTwo = (range: string): number[] => {
  const [minString, maxString] = range.split("-")
  const min = +minString
  const max = +maxString

  const rangeArray = Array.from({ length: max - min + 1 }, (_, i) => min + i)

  let duplicates: number[] = []
  for (var num of rangeArray) {
    const numString = num.toString()

    let window = 1
    while (window < numString.length) {
      let initial = numString.substring(0, window)

      if (getRepeatsInWindow(window, numString, initial)) {
        duplicates.push(num)
        break
      }

      window++
    }
  }

  return duplicates
}

const getRepeatsInWindow = (
  window: number,
  numString: string,
  initial: string
): boolean => {
  let repeats = true

  if (numString.length % window !== 0) return false

  for (var i = 0; i + window <= numString.length; i += window) {
    const sub = numString.substring(i, i + window)
    if (sub !== initial) {
      repeats = false
      break
    }
  }

  return repeats
}
