//1. Для перевірки чи порожній об’єкт
const isEmpty = (obj) => {
    for (let i in obj) {
        return false
    }
    return true
}
const myObg = {}
// console.log(isEmpty(myObg));

//2. Порівнює два об'єкти.
const isEqual = (obj0, obj1) => {
    return JSON.stringify(obj0) === JSON.stringify(obj1)
}
const myObg1 = {
    id: 0,
    name: "Pavlo"
}
const myObg2 = {
    id: 0,
    name: "Pavlo"
}
// console.log(isEqual(myObg1, myObg2));

//3. Знаходить перетин об'єктів і повертає об'єкт перетинів.

const similarObj = (obj0, obj1) => {
    let simObj = {}
    for (const [key0, value0] of Object.entries(obj0)) {
        for (const [key1, value1] of Object.entries(obj1)) {
            if (key0 === key1 && value0 === value1) {
                simObj[key0] = value0
            }
        }
    }
    return simObj
}
const myObg3 = {
    v1: 6,
    v2: 5,
    v3: 2,
    v4: 4
}
const myObg4 = {
    v1: 5,
    v2: 4,
    v3: 2,
    v4: 1
}
// console.log(similarObj(myObg3, myObg4));

//4. чЗнаходить значення за заданим ключем
const objData = (obj, myKey) => {
    let data = 'No key in object'
    for (const [key, value] of Object.entries(obj)) {
        if (key == myKey) {
            data = value
        }
    }
    return data
}
const myObg5 = {
    v1: "First value",
    v2: "Second value",
}
// console.log(objData(myObg5, "v2"));
