let users = [{
    id: 0, name: "User0", cart: [], total: 0
}, {
    id: 1, name: "User1", cart: [], total: 0
}, {
    id: 2, name: "User2", cart: [], total: 0
}]
let storeItems = [
    { itemName: "Pineapple", price: 20 },
    { itemName: "Apple", price: 23 },
    { itemName: "Watermelon", price: 300 },
    { itemName: "Winegar", price: 42 },
    { itemName: "Candy", price: 23 },
]
async function store(value) {
    return value
}
async function getUserInfo(userID) {
    console.log("User info", users[userID]);
    return users[userID]
}
async function addToCard(obj) {
    let { userID, item } = obj
    users[userID].cart.push(item)
    users[userID].total += item.price
    return users[userID]
}
async function getCart(userID) {
    console.log(users[userID].name, "cart is\n", users[userID].cart, "\nTotal is", users[userID].total);
    return users[userID]
}
async function buyItems(userID) {
    users[userID].cart = []
    users[userID].total = 0
    return users[userID]
}
store(users)
    .then(user => getUserInfo(user[0].id))//1.
    .then(user => addToCard({ userID: user.id, item: storeItems[0] }))//2.
    .then(user => addToCard({ userID: user.id, item: storeItems[1] }))
    .then(user => addToCard({ userID: user.id, item: storeItems[4] }))
    .then(user => addToCard({ userID: user.id, item: storeItems[3] }))
    .then(user => getUserInfo(user.id))
    .then(user => getCart(user.id))//3.
    .then(user => buyItems(user.id))//4.
    .then(user => getUserInfo(user.id))


