class Circle {
    constructor (x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }
}
class Square {
    constructor (x1, y1, x2, y2) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }
}
const findIntersectionOfCircles = (circle1, circle2) => {
    let distance = Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y));
    let f1, f2;
    let s1, s2;
    if (distance >= circle1.r + circle2.r) {
        console.log("Too far from each other");
        return 0;
    } else if (distance <= Math.abs(circle1.r - circle2.r)) {
        return "One circle fully contains another";
    }
    else {
        f1 = 2 * Math.acos((circle1.r * circle1.r + circle2.r * circle2.r - distance * distance) / (2 * circle1.r * distance));
        f2 = 2 * Math.acos((circle2.r * circle2.r + circle1.r * circle1.r - distance * distance) / (2 * circle2.r * distance));
        s1 = (circle1.r * circle1.r * (f1 - Math.sin(f1))) / 2;
        s2 = (circle2.r * circle2.r * (f2 - Math.sin(f2))) / 2;

        return parseFloat((s1 + s2).toFixed(2));
    }
}
const findIntersectionOfSquares = (square, square1) => {
    let left = Math.max(square.x1, square1.x1);
    let top = Math.min(square.y2, square1.y2);
    let right = Math.min(square.x2, square1.x2);
    let bottom = Math.max(square.y1, square1.y1);

    let width = right - left;
    let height = top - bottom;

    if (width < 0 || height < 0)
        return 0;

    return width * height;
}

//
const circle = new Circle(10, 10, 10)
const circle1 = new Circle(10, 20, 10)
//
const square = new Square(0, 0, 5, 5)
const square1 = new Square(1, 1, 2, 3)
//
const rectangle = new Square(0, 0, 2, 5)
const rectangle1 = new Square(0, 0, 1, 8)
//
console.log("Intersection of circles: ", findIntersectionOfCircles(circle, circle1));
//
console.log("Intersection of rectangle: ", findIntersectionOfSquares(rectangle, rectangle1));
//
console.log("Intersection of squares or rectangles: ", findIntersectionOfSquares(square, square1));