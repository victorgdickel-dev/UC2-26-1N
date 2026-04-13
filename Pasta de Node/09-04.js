/*
function process(numbers){
    let result = 0;
    for (let i = 0; i <= numbers.lenght; i++){
        if(numbers[i] % 2 ==0){
            result =+ numbers[i];
        }
    }
    return result /2; 
}
console.log(result);


function multiplyArray(arr) {
    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }

    return result;
}

function countGreaterThanTen(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            count++;
        }
    }

    return count;
}

console.log(countGreaterThanTen([5, 12, 8, 20, 3]));


function average(numbers) {
    let total = 0;

    numbers.forEach(n => {
        total += n;
    });

    return total / numbers.length;
}

console.log(average([10, 10, 10]));


function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([10, 20, 5, 30]));


function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));


function average(numbers) {
    let total = 0;

    numbers.forEach(n => {
        total += n;
    });

    return total / numbers.length;
}

console.log(average([10, 10, 10]));
*/

function process(numbers) {
    let result = 0;


    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 == 0); {
            result =+ numbers[i];
        }
    }


    return result / 2;
}


console.log(process([2, 4, 6]));