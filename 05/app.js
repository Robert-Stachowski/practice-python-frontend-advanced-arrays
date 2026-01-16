const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven);

function isEven(element){
    return (element % 2 === 0 );
}

console.log(evenNumbers);

const sumOfEvenNumbers = evenNumbers.reduce(sumFunction,0);

function sumFunction(accumulator,element){
    return accumulator+element;
    
}

console.log(sumOfEvenNumbers);