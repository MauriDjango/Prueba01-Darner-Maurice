const wordRegex = /^[a-zA-Z\s]+$/
const addMsg = "Please type the item you would like to add to your cart"
const invalidMsg = "The item you typed was invalid"
const deleteMsg = "Please type the item you would like to delete"


function validWord(word) {
  return wordRegex.test(word) ? word : null
}

function getWordInput(validFunc, msg, invalidMsg) {
  let word = null

  while (word === null) {
    word = validFunc(prompt(msg))
    if (word === null) {
      alert(invalidMsg)
    }
  }

  return word
}

class ShoppingCart {
  #cart = []
  #itemQuantity = {}

  addElement(element) {
    this.#cart.push(element)
    alert("This item was successfully added to your cart")
    this.setItemQuantity()
    this.checkDuplicate(element)
  }

  deleteElement(element) {
    const newCart = []

    if (this.#itemQuantity[element] !== undefined) {
      this.#itemQuantity[element]--

      for (const item in this.#itemQuantity) {
        for (let i = this.#itemQuantity[item]; i > 0; i--) {
          newCart.push(item)
        }
      }
      this.#cart = newCart
      this.setItemQuantity()
      alert("The item was successfully deleted")
    } else {
      alert("This item was not found")
    }
  }

  setItemQuantity() {
    const newItemQuantity = this.#cart.reduce((acc, cum) => {
      acc[cum] = (acc[cum] || 0) + 1;
      return acc
    }, {})

    this.cleanCart()
    console.log(newItemQuantity)
    this.#itemQuantity = newItemQuantity
  }

  checkDuplicate(item) {
    this.#itemQuantity[item] > 1?
      alert("You have more than one of this item in your cart"):
      null
  }

  cleanCart() {
    for (let item in this.#itemQuantity) {
      if (this.#itemQuantity[item] === 0) {
        delete this.#itemQuantity[item]
      }
    }
  }
}

const myCart = new ShoppingCart()

myCart.addElement(getWordInput(validWord, addMsg, invalidMsg))
console.log(myCart)
myCart.addElement(getWordInput(validWord, addMsg, invalidMsg))
console.log(myCart)
myCart.addElement(getWordInput(validWord, addMsg, invalidMsg))
console.log(myCart)
myCart.deleteElement(getWordInput(validWord, deleteMsg, invalidMsg))
console.log(myCart)
