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

// will find the first item with that matches the search
const foundItem = shoppingItems.find((item) => {
    return item.name === 'Monitor'
})

const foundItems = shoppingItems.filter((item) => {
    return item.name === 'Monitor'
})

console.log('FIND -- > found the first matching Item', foundItem)
console.log('FILTER --> found all the Items', foundItems)
