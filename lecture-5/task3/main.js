const dotOnCircle = (circleObj, dotObj) => {
    let { x, y, r } = circleObj
    let { xDot, yDot } = dotObj
    xDot -= x
    yDot -= y
    return (((Math.pow(xDot, 2) + Math.pow(yDot, 2)) <= Math.pow(r, 2)))
}
const circle = {
    x: 4,
    y: 4,
    r: 2
}
const dot = {
    xDot: 3.5,
    yDot: 3.4
}
console.log("dotOnCircle: ", dotOnCircle(circle, dot));