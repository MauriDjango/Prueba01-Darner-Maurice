const wordRegex = /([a-zA-Z\s])+/g
const msg = "Please type the item you would like to add to your cart"
const invalidMsg = "The item you typed was invalid"

function validWord(word) {
  return wordRegex.test(word)?
    word:
    null
}

function getWordInput(validFunc, msg, invalidMsg) {
  let word = null

  while (word === null) {
    word = validFunc(prompt(msg))
    if (word === null) {
      alert(invalidMsg)
    }
  }
}

class ShoppingCart {
  #cart = []
  #itemQuantity = {}

  addElement(element) {
    this.#cart.push(element)
    alert("This item was successfully added to your cart")
    this.checkDuplicate()
  }

  deleteElement(element) {
    const newCart = []
    this.setItemQuantity()
    this.#itemQuantity.forEach((item) => {
      for (const [item, count] in this.#itemQuantity) {
        for (let i = count; i > 0; i--) {
          newCart.push(item)
        }
      }
    })
    newCart.length === 0 ?
      alert("This item was not found"):
      this.#cart = newCart;
      alert("The item was successfully deleted")
  }

  setItemQuantity() {
    const newItemQuantity = {}
    this.#cart.reduce((item, nextItem) => {
      newItemQuantity[item] = +1 || 1
    })

    this.#itemQuantity = newItemQuantity
  }

  checkDuplicate(item) {
    this.setItemQuantity()
    this.#itemQuantity[item] > 1?
      alert("You have more than one of this item in your cart"):
      null
  }
}

const myCart = new ShoppingCart()