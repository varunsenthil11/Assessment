
let a = 5;
var b = 10;
const c = 20;


let sum = a + b + c;
var product = a * b * c;
const difference = c - a - b;


console.log('Sum:', sum); 
console.log('Product:', product); 
console.log('Difference:', difference); 



function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}


function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}


function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function customFlatMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mappedValue = callback(arr[i], i, arr);
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}


const numbers = [1, 2, 3, 4];


console.log('Mapped:', customMap(numbers, x => x * 2)); 


console.log('Reduced:', customReduce(numbers, (sum, x) => sum + x, 0)); 

console.log('Filtered:', customFilter(numbers, x => x % 2 === 0)); 


console.log('FlatMapped:', customFlatMap(numbers, x => [x, x * 2])); 
