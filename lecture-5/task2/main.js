const Circle = {
    x1: 2,
    y1: 2,
    r1: 2
}
const Circle1 = {
    x2: 4,
    y2: 4,
    r2: 1
}
const circleArea = (radius) => {
    return Math.PI * Math.pow(radius, 2)
}
const circleCircumference = (radius) => {
    return 2 * Math.PI * radius
}
const findArea = (circle1, circle2) => {
    let { x1, y1, r1 } = circle1
    let { x2, y2, r2 } = circle2
    let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let f1, f2;
    let s1, s2;
    if (distance >= r1 + r2) {
        console.log("Too far from each other");
        return 0;
    } else if (distance <= Math.abs(r1 - r2)) {
        return "One circle fully contains another";
    }
    else {
        f1 = 2 * Math.acos((r1 * r1 + r2 * r2 - distance * distance) / (2 * r1 * distance));
        f2 = 2 * Math.acos((r2 * r2 + r1 * r1 - distance * distance) / (2 * r2 * distance));
        s1 = (r1 * r1 * (f1 - Math.sin(f1))) / 2;
        s2 = (r2 * r2 * (f2 - Math.sin(f2))) / 2;

        return (s1 + s2).toFixed(2);
    }
}

// console.log("Area: ", circleArea(Circle.r).toFixed(3));
// console.log("Circumference: ", circleCircumference(Circle.r).toFixed(3));
// console.log("intersection of circles: ", findArea(Circle, Circle1));
