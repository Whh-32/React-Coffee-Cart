const Compare = (products, id) => {
    const index = products.findIndex((product) => product.id === id)
    if (index === -1) {
        return false
    } else {
        return products[index].amount
    }
}

export default Compare;