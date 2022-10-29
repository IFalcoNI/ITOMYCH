const square = (n) => {
    if (n >= 1 && n <= 1000) {
        console.log("Площа: ", n * n,"cm^2");
        console.log("Периметр: ", 4 * n, "cm");
    }
}
square(632)