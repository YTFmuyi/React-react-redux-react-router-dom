import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index.js'


const middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState){
    console.log(initialState)
    return createStoreWithMiddleware(rootReducer,initialState)
}
