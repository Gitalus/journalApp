import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

// añade más de un middleWare
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
});


// el middleware thunk se disparará cuando se encuentre una acción async
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);