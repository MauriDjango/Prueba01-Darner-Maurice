const msg = "Please enter your mark to see your grade"
const invalidMsg = "The number you entered was invalid"

function validNum(num) {
  if (!isNaN(Number(num)) && !isNaN(parseInt(num))) {
    return Number(num)
  } else {
    return null
  }
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

function validMarkNum(num) {
  const mark = validNum(num)
  return (0 <= mark && mark <= 100) ? mark : null
}

function calculateMark(mark) {
  let grade = null

  if (mark >= 90) {
    grade = "A"
  } else if (mark >= 80) {
    grade = "B"
  } else if (mark >= 70) {
    grade = "C"
  } else if (mark >= 60) {
    grade = "D"
  } else if (mark >= 0) {
    grade = "F"
  } else {
    throw new Error("Invalid input into func")
  }
  return grade
}