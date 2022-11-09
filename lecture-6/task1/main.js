let a = [
    [1, 2],
    [3, 4],
    [5, 6]];
let b = [
    // [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]];
let c = [];

let rowsA = a.length, colsA = a[0].length,
    rowsB = b.length, colsB = b[0].length

if (colsA != rowsB) {
    console.log("Columns of 1st Array must equal rows of 2nd array");
    return
}
for (let i = 0; i < rowsA; i++) {
    c[i] = [];
}
for (let k = 0; k < colsB; k++) {
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < rowsB; j++) {
            let mulArrValue = 0
            mulArrValue += a[i][j] * b[j][k];
            c[i][k] = mulArrValue
        }
    }
}
for (let i = 0; i < c.length; i++) {
    console.log(c[i]);
}