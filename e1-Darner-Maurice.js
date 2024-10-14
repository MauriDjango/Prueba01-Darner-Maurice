const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
const rotLetters = "klmnopqrstuvwxyzabcdefghijKLMNOPQRSTUVWXYZABCDEFGHIJ "
const msg = "Enter a string to have it decrypted"
const alertMsg = "The string you entered was invalid"


function isNotEmpty(str) {
  return str.trim() !== "" ? str : null
}

function getStrInput() {
  let str = null

  while (str === null) {
    str = isNotEmpty(prompt(msg))
    if (str === null) {
      alert(alertMsg)
    }
  }

  return str
}

function rot10(str) {
  const originalStr = str
  const decryptedStr = []

  for (let letter of originalStr) {
      decryptedStr.push(letters.charAt(rotLetters.indexOf(letter)))
  }
  return [originalStr, decryptedStr.join('')]
}