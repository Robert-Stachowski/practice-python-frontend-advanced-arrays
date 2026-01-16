const numbers = [1, 2, 3, 4, 5, 6, 7];

const czyParzysta = numbers.filter(checkNumbers);

function checkNumbers(element){
    return (element % 2 === 0 );
}

console.log(czyParzysta);

const sumaParzystych = czyParzysta.reduce(sumFunction,0);

function sumFunction(accumulator,element){
    return accumulator+element;
    
}

console.log(sumaParzystych)