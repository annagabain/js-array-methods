const shoppingItems = [
    {name: 'Mousepad', price: 25},
    {name: 'Book', price: 39},
    {name: 'Mouse', price: 55},
    {name: 'Keyboard', price: 130},
    {name: 'Monitor', price: 325},
    {name: 'Phone', price: 1020},
    {name: 'Monitor', price: 400},
    {name: 'Keyboard', price: 150},
    {name: 'Computer', price: 1400}
]

const showExpensiveItems = shoppingItems.some((shoppingItem) => {
    return shoppingItem.price >=1000
})
const showLuxuryItems = shoppingItems.some((shoppingItem) => {
    return shoppingItem.price >=5000
})

console.log(showExpensiveItems)
console.log(showLuxuryItems)
