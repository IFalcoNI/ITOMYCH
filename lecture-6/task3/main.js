const array = [5, 1, 3, 4]
const array1 = ["Hello", " ", "ITOMYCH", " ", "!"]
const array2 = []
const myReduce = (arr, reduceCallback, initialValue) => {
    let acc = initialValue
    arr.forEach(element => {
        acc = reduceCallback(acc, element)
    });
    return acc

}
console.log(myReduce(array, function (a, b) { return a + b }, 0));
// console.log(array.reduce(function (a, b) { return a + b }));
console.log(myReduce(array1, function (a, b) { return a + b }, ''));
// console.log(array1.reduce(function (a, b) { return a + b }));
console.log(myReduce(array2, function (a, b) { return a + b }, 0));
// console.log(array2.reduce(function (a, b) { return a + b }, 0));
