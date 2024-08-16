import { assign, find, remove, set } from "lodash";

const initialState = {
    loading: false,
    bag: [],
    error: ''
};

const addProductToBag = (product, state) => {
    const newArr = state.bag;

    const productExist = find(newArr, { id: product.id })

    if (productExist) {
        assign(productExist, { quantity: productExist.quantity + 1 });

        return newArr;
    }

    newArr.push(product);

    return newArr;
}

const updateQuantityFromBag = (product, state) => {
    const newArr = state.bag;

    const productExist = find(newArr, { id: product.id });

    const newQuantityPreventZero = product.quantity >= 1 ? product.quantity : 1

    assign(productExist, { quantity: newQuantityPreventZero });

    return newArr;
}

const removeProductFromBag = (product, state) => {
    let newArr = [];
    
    newArr = remove(state.bag, (item) => (
        item.id === product.id
    ))


    return newArr;
}

export const bagReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ON_BAG_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'ON_BAG_FAILED': 
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case 'ADD_TO_BAG':
            return {
                ...state,
                loading: false,
                bag: addProductToBag(action.payload, state)
            }

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                loading: false,
                bag: updateQuantityFromBag(action.payload, state)
            }

        case 'REMOVE_FROM_BAG':
            return {
                ...state,
                loading: false,
                bag: removeProductFromBag(action.payload, state)
            }

        default: 
            return state;
    }

}