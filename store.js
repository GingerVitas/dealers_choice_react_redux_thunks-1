import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers } from 'redux';

const ADD_INVENTORY = 'ADD_INVENTORY'

const _addItems = (items) => {
    return {
        type: ADD_INVENTORY,
        items
    }
}

const addItems = () => {
    return async (dispatch) => {
        const items = (await axios.get('/api/products')).data;
        dispatch(_addItems(items))
    }
}

const inventoryReducer = (state = [], action)=> {
    if(action.type === ADD_INVENTORY) {
        return action.items;
    }
    return state;
};


const reducer = combineReducers({
    items: inventoryReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export{
    addItems
}