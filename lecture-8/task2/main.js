let users = [{
    name: "User0", cart: [], total: 0
}, {
    name: "User1", cart: [], total: 0
}, {
    name: "User2", cart: [], total: 0
}]
let storeItems = [
    { itemName: "Pineapple", price: 20 },
    { itemName: "Apple", price: 23 },
    { itemName: "Watermelon", price: 300 },
    { itemName: "Winegar", price: 42 },
    { itemName: "Candy", price: 23 },
]
function store(toDO, callback) {
    callback(toDO)
}
function getUserInfo(userID) {
    console.log("User info", users[userID]);
}
function addToCard(obj) {
    let { userID, item } = obj
    users[userID].cart.push(item)
    users[userID].total += item.price
}
function getCart(obj) {
    let { userID } = obj
    console.log(users[userID].name, "cart is\n", users[userID].cart, "\nTotal is", users[userID].total);
}
function buyItems(obj) {
    let { userID } = obj
    users[userID].cart = []
    users[userID].total = 0
}
store(0, getUserInfo) //1.
store({ userID: 0, item: storeItems[0] }, addToCard) //2.
store({ userID: 0, item: storeItems[1] }, addToCard)
store(0, getUserInfo)
store({ userID: 0}, getCart) //3.
store({ userID: 0 }, buyItems) //4.
store(0, getUserInfo)

