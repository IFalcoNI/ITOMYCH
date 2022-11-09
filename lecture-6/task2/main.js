const uniqueArray = (array) => {
    return [...new Set(array)]
}
console.log(uniqueArray([1, 2, 2, 3, 3, 3]));
