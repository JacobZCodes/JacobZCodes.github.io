function cleanMathInput(input) {
    let inputCopy = input;
    let carotsReplaced = inputCopy.replace(/\^/g, "**");
    let asteriskInsertedBetweenNumAndVar = carotsReplaced.replace(/(-?\d+(?:\.\d+)?)n/g, "$1*n");
    let asteriskInsertedBetweenNumAndParen = asteriskInsertedBetweenNumAndVar.replace(/(\d+(?:\.\d+)?)\(/g, "$1*(");
    let factorialFunctionInserted = asteriskInsertedBetweenNumAndParen.replace(/(\w|\d|\))!/g, "factorial($1)");
    let output = factorialFunctionInserted;
    return output
}