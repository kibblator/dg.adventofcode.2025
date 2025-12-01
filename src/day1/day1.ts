type Instruction = {
  direction: string
  amount: number
  divAmount: number
}

type ClickResult = {
  endPos: number
  clicked: boolean
}

export const secretEntrance = (input: string[]): number => {
  let combinationPos = 50
  let numberOfZeros = 0

  for (var combination of input) {
    const instruction = parseInstruction(combination)

    combinationPos = performInstruction(combinationPos, instruction)
    if (combinationPos === 0) {
      numberOfZeros++
    }
  }

  return numberOfZeros
}

export const secretEntrancePart2 = (input: string[]): number => {
  let combinationPos = 50
  let numberZeros = 0

  for (var combination of input) {
    const instruction = parseInstruction(combination)

    numberZeros += Math.floor(instruction.divAmount)

    const { endPos, clicked } = performInstructionV2(
      combinationPos,
      instruction
    )

    if (endPos === 0 || clicked) {
      numberZeros++
    }

    combinationPos = endPos
  }

  return numberZeros
}

const parseInstruction = (instruction: string): Instruction => {
  const direction = instruction.slice(0, 1)
  let amount = +instruction.slice(1, instruction.length)
  let divAmount = 0

  if (amount > 99) {
    divAmount = amount / 100
    amount = amount % 100
  }

  return {
    direction,
    amount,
    divAmount,
  }
}

const performInstruction = (
  start: number,
  instruction: Instruction
): number => {
  switch (instruction.direction) {
    case "L":
      const safeCodeLeft = start - instruction.amount
      return safeCodeLeft < 0 ? 100 + safeCodeLeft : safeCodeLeft
    default:
      const safeCodeRight = start + instruction.amount
      return safeCodeRight > 99 ? safeCodeRight - 100 : safeCodeRight
  }
}

const performInstructionV2 = (
  start: number,
  instruction: Instruction
): ClickResult => {
  switch (instruction.direction) {
    case "L":
      const safeCodeLeft = start - instruction.amount
      const clickedLeft = safeCodeLeft < 0
      const leftRes = clickedLeft ? 100 + safeCodeLeft : safeCodeLeft
      return {
        endPos: leftRes,
        clicked: start !== 0 && leftRes !== 0 && clickedLeft,
      }
    default:
      const safeCodeRight = start + instruction.amount
      const clickedRight = safeCodeRight > 99
      const rightRes = clickedRight ? safeCodeRight - 100 : safeCodeRight
      return {
        endPos: rightRes,
        clicked: start !== 0 && rightRes !== 0 && clickedRight,
      }
  }
}
