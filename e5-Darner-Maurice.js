

function validNum(num) {
  if (!isNaN(Number(num)) && !isNaN(parseInt(num))) {
    return Number(num)
  } else {
    return null
  }
}

function isNotNeg(num) {
  const posNum = validNum(num)
  return posNum !== null && posNum >= 0?
    posNum.toFixed(2):
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

class Product {
  #minStock = 0
  #minPrice = 0

  #name
  #price
  #stock

  constructor (name, price, stock) {
    this.#name = name;
    this.#price = price;
    this.#stock = stock;
  }

  setStock(quantity) {
    quantity < this.#minStock?
      alert("There is insufficient stock to complete this transaction"):
      this.#stock = quantity
      alert("The stock was correctly updated.")
  }

  sell(quantity) {
    quantity <= this.#stock?
      this.setStock(this.#stock - quantity):
      alert("There is insufficient stock to complete this transaction")
  }

  restock(quantity) {
    this.setStock(this.#stock + quantity)
  }

  showInfo() {
    return `Product: ${this.#name}
    Price: ${this.#price}
    Stock: ${this.#stock}`
  }
}

const myProduct = new Product("Beer", 7.80, 36)

console.log(`Original info ${myProduct.showInfo()}`)
console.log(`Sell 30`)
isNotNeg(30)
myProduct.sell(30)
console.log(`After sell ${myProduct.showInfo()}`)
console.log(`Restock 24`)
isNotNeg(24)
myProduct.restock(24)
console.log(`After Restock ${myProduct.showInfo()}`)
console.log(`Attempt to sell 40`)
isNotNeg(40)
myProduct.sell(40)
console.log(`After sell attempt ${myProduct.showInfo()}
It will not sell and will throw an alert`)
