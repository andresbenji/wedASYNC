const removeSpaces = (string) => string.replace(/\s/g, "");

//this function replaces all spaces in the inputted string by nothing.

console.log(removeSpaces("Andres    Cuellar")); // Output: AndresCuellar

console.log(removeSpaces("H      E     L     L    O")); //Output: HELLO
