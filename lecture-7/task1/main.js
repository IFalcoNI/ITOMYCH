class Rectangle {
    constructor (x, y, x1, y1) {
        this.x = x
        this.y = y
        this.x1 = x1
        this.y1 = y1
        this.a = x1 - x
        this.b = y1 - y
    }
    getArea() {
        return this.a * this.b
    }
}
class Square extends Rectangle {
    constructor (x, y, x1, y1) {
        super(x, x1, y, y1)
        this.a = x1 - x
        this.b = y1 - y
    }
    getArea() {
        if (this.a !== this.b) {
            return "It`s not a square"
        }
        return super.getArea()
    }
}
class Circle {
    constructor (x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }
    getArea() {
        return (Math.pow(this.r, 2) * Math.PI)
    }
}
//Rectangle
const rectangle = new Rectangle(0, 0, 2, 4)
// console.log("Area of rectangle:", rectangle.getArea());
//Square that extends Rectangle
const square = new Square(0, 0, 4, 4)
// console.log("Area of square:", square.getArea());
//Circle Rectangle
const circle = new Circle(0, 0, 10)
// console.log("Area of circle:", circle.getArea());
//
// Proto
const shape = {
    x: 10,
    y: 10,
    x1: 22,
    y1: 10
}
const line = {
    lineWidth() {
        return Math.sqrt(Math.pow(this.__proto__.x1 - this.__proto__.x, 2) + Math.pow(this.__proto__.y1 - this.__proto__.y, 2))
    },
    __proto__: shape,
}
const myRectangle = {
    area() {
        return Math.pow(this.__proto__.x1 - this.__proto__.x, 2)
    },
    __proto__: shape,
}
// console.log("myRectangle Area using proto:", myRectangle.area());
// console.log(`Line with coordinates: ${line.x}:${line.y} and ${line.x1}:${line.y1}`);
// console.log("Line width:", line.lineWidth());