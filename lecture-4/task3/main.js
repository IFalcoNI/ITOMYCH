function createBase(base, num) {
    console.log(base + num);
}
const addSix = createBase.bind(null, 6)
const addTen = createBase.bind(null, 10)
addSix(10) //16
addSix(21) //27
addTen(10) //20
addTen(21) //31