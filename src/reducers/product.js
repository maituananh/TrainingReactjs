
const productReducers = (state = products, action) => {
    switch(action.type) {
        case 'addP':
            console.log("case add");
            products.status = 'add';
            let index = products[products.length - 1].id + 1;
            products.push({
                id: index,
                name: Math.random().toString(36).substring(7) +index,
                quantity: Math.floor(Math.random()*(25-10+1))+10 });
            break;
        case 'updateP':
            products.status = 'update';
            break;
        case 'deleteP':
            products.status = 'delete';
            break;
        default: 
            break;
    }
    return state;
}

let products = [
    {'status': ''},
    {
        id: 1,
        name: 'sp1',
        quantity: 12
    },
    {
        id: 2,
        name: 'sp2',
        quantity: 14
    },
    {
        id: 3,
        name: 'sp3',
        quantity: 19
    },
];

export default productReducers;