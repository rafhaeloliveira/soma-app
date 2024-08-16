import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/product.reducer';
import { bagReducer } from './reducers/bag.redurcer';

const store = configureStore({
    reducer: {
        products: productReducer,
        bag: bagReducer
    },
    middleware: () => [thunk]
});

export default store;