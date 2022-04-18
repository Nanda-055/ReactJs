import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import carReducer from './reducers/carReducers'

//menggabungkan reducer sehingga mudah untuk dipanggil
const rootReducer = combineReducers ({
    carReducer
})

//thunk bisa jalan async nya
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
