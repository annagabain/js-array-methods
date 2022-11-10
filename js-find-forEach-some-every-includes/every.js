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
//EVERY 
const showCheapItems = shoppingItems.every((shoppingItem) => {
    console.log(shoppingItem.name, shoppingItem.price, shoppingItem.price <=60)
    return shoppingItem.price <=60
})
console.log('Are all items Cheap?', showCheapItems)

console.log('................')

//vs. SOME

const showSomeCheapItems = shoppingItems.some((shoppingItem) => {
    console.log(shoppingItem.name, shoppingItem.price, shoppingItem.price <=60)
    return shoppingItem.price <=60
})
console.log('Are some items Cheap?', showSomeCheapItems)
