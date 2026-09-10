const stores = [];

export function register(store){
    stores.push(store);
}

export function dispatch(action){
    stores.forEach(store => store(action))
}