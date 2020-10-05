let users = [
    {
        id: 1,
        name: 'nguyen van a',
        age: 12
    },
    {
        id: 2,
        name: 'nguyen van b',
        age: 14
    },
    {
        id: 3,
        name: 'nguyen van c',
        age: 19
    },
    {'status': ''},
];

const userReducers = (state = users, action) => {
    let actionType = action.type;
    action = action.payload;
    switch(actionType) {
        case 'add':
            state.status = actionType;
            state.push({
                id: action.id,
                name: action.name,
                age: action.age
            });
            break;
        case 'update':
            state.status = actionType;
            // TODO
            break;
        case 'delete':
            let flagRemoved = false;
            state.status = actionType;
            state.map((user, index) => {
                if (user.id === action.id) {
                    state.splice(index, index + 1);
                    flagRemoved = true;
                } 
            })
            if (!flagRemoved) {
                console.log("Don't object in array");
            }
            break;
        case 'add with api': 
            console.log(` handle data - ${JSON.stringify(action)}`);
            break;
        default: 
            break;
    }
    return state;
}

export default userReducers;