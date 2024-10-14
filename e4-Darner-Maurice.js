const msg = "Guess a number between 1 and 100"
const invalidMsg = "The guess you entered was invalid"
const answerNumber = Math.ceil(Math.random() * 100)
let guessCount = 0

function validNum(num) {
  if (!isNaN(Number(num)) && !isNaN(parseInt(num))) {
    return Number(num)
  } else {
    return null
  }
}

function validGuess(num) {
  const guess = validNum(num)
  return 0 < guess && guess <= 100?
    guess:
    null
}

function getNumInput(validFunc, msg, alertMsg) {
  let num = null

  while (num === null) {
    num = validFunc(prompt(msg))
    if (num === null) {
      alert(alertMsg);
    }
  }
  console.log(num)
  return num
}

function guessNumber(number) {
  let guessedNumber = null

  while (guessedNumber !== number) {
    guessedNumber = getNumInput(validGuess, msg, invalidMsg)
    if (guessedNumber === number) {
      alert(`You have guessed correctly!
      The number was ${number} and it took you ${guessCount} guesses`)
    } else if (guessedNumber > number) {
      alert("Your guess was too high")
      guessCount++
    } else if (guessedNumber < number) {
      alert("Your guess was too low")
      guessCount++
    }
  }
}