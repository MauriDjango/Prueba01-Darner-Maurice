/*This variable holds a global variable which is a string
and can be accesed throught this js file*/
const globalVariable = "I am a global variable"


function example() {
/*  This variable holds a local variable which is also a string
  and can only be accessed inside the scope of this function*/
  const localVariable = "I am a local variable"
  return `${globalVariable} and ${localVariable} and we have found each other`
}

console.log(`${globalVariable} and I cant find my partner "Uncaught ReferenceError: localVariable is not defined"`)
console.log(example())

/*
It is important to keep in mind the distinction of global and local variables
and their uses. Local variables are less volatile as they affect a small portion of
the code being encapsulated only in their blocks whereas global variable and can
have effects and be accessed, whether intentionally or not through the file.
 */