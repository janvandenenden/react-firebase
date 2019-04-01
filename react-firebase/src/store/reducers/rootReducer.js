import authReducer from './authReducer'
import projectReducer from './projectReducer'
// It is better to create different reducers for different functions. As our store can only accepts 
// 1 reducer we will need to combine them. We use the combineReducers component from 'redux'
import { combineReducers } from 'redux'


// Now we can use the function combineReducers to... well combine the reducers. 
// We pass an object with the values of our authReducer and projectReducer
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer