function multiply(num1 = num2, num2 = num1) {
  console.log(num1 * num2);
}
const double = multiply.bind(null, 2);
const square = multiply.bind();
double(5); // 10
square(5); // 25