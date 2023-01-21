function digitsInNumber(number){
    if(number < 0){
        return number.toString().length -1;
    }
    return number.toString().length;   
}

function oddOrEven(number){
    return number % 2 === 0 ? "even" : "odd"; 
}

function positiveOrNegative (number){
    return number < 0 ? "negative": "positive"; //how to return 0 is its own ifElse
}

function getStats(number){
    return{
        digits: digitsInNumber(number),
        oddOrEven: oddOrEven(number),
        positiveOrNegative: positiveOrNegative(number)
    }
}

console.log(getStats(-12345));
console.log(getStats(12345));